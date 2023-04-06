<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import PokeCard from 'src/components/PokeCard.vue';
import { api } from 'src/boot/axios';
import { useRouter } from 'vue-router';

import { usePokemonStore } from 'src/stores/pokemon.store';
import { useUserStore } from 'src/stores/user.store';
const router = useRouter();

const pokemonStore = usePokemonStore();
const { category } = storeToRefs(pokemonStore);
const userStore = useUserStore();
let offset = ref(0);
const limit = ref(20);
const isLoading = ref(false);
const disabled = ref(false);
let message = ref('');
const pokemonsByType = ref([]);

const searchAndSavePokemons = async (pokemons: Array<any>) => {
  for (let item of pokemons) {
    const pokemon = item.pokemon || item;
    const { data } = await api.get(`pokemon/${pokemon.name}`);
    pokemonStore.addPokeData({
      name: data.name,
      baseExperience: data.base_experience,
      abilities: data.abilities,
      forms: data.forms,
      id: data.id,
      sprites: data.sprites,
      stats: data.sprites,
      types: data.types,
    });
  }
};

const addPokemons = async () => {
  isLoading.value = true;
  offset.value += 20;
  await getPokemonsByCategory();
  isLoading.value = false;
};

const getPokemonsByCategory = async (cleanData?: boolean) => {
  disabled.value = false;
  message.value = '';
  if (cleanData) {
    pokemonStore.cleanPokeData();
  }
  const category = pokemonStore.getCategoryUrl;

  if (!category) {
    const { data } = await api.get(
      `pokemon?limit=${limit.value}&offset=${offset.value}`
    );
    searchAndSavePokemons(data.results);
    return;
  }
  const arr = category.split('/');
  const newArr = [arr[arr.length - 3], arr[arr.length - 2]].join('/');

  if (!pokemonsByType.value.length) {
    const { data } = await api.get(`${newArr}/`);
    pokemonsByType.value = data.pokemon;
  }

  const pokemons = [...pokemonsByType.value];

  const newArray = pokemons.slice(offset.value, limit.value + offset.value);
  if (newArray.length < 20) {
    disabled.value = true;
    message.value = 'No tenemos Pokemos para mostrar 😭';
  }
  searchAndSavePokemons(newArray);
};

watch(category, () => {
  pokemonsByType.value = [];
  offset.value = 0;
  getPokemonsByCategory(true);
});

onMounted(async () => {
  if (!userStore.getUserLog.name) {
    router.push('/login');
  }
  if (!pokemonStore.getPokeData.length) {
    const pokeType = await api.get('type');

    for (let type of pokeType.data.results) {
      pokemonStore.addPokeTypes(type.name, type.url);
    }
    getPokemonsByCategory(true);
  }
});
</script>

<template>
  <q-page padding>
    <h5 class="text-negative">
      Tenemos mas de 1000 pokemones con todas sus evoluciones!!
    </h5>
    <PokeCard />
    <div class="text-center">
      <h5 class="text-negative q-mt-md q-mb-none" v-if="message">
        {{ message }}
      </h5>
      <q-btn
        :disable="isLoading || disabled"
        :loading="isLoading"
        @click="addPokemons"
        class="q-mt-lg"
        color="negative"
        label="Ver mas"
      />
    </div>
  </q-page>
</template>

<style lang="scss"></style>
