<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import { useRoute } from 'vue-router';
import { usePokemonStore } from '../stores/pokemon.store';

const pokeStore = usePokemonStore();
const route = useRoute();

onMounted(async () => {
  const pokemon = route.params.pokemon;
  const { data } = await api.get(`pokemon/${pokemon}`);
  await pokeStore.addPokemon({
    name: data.name,
    baseExperience: data.base_experience,
    abilities: data.abilities,
    forms: data.forms,
    id: data.id,
    sprites: data.sprites,
    stats: data.stats,
    types: data.types,
  });
});
</script>

<template>
  <q-page padding>
    <div class="page">
      <div class="container shadow-5 rounded-borders">
        <div class="bg-red-1 shadow-4 img-container q-mb-xs rounded-borders">
          <img
            :src="pokeStore.getPokemon.sprites?.front_default"
            :alt="pokeStore.getPokemon.name"
          />
          <h4 class="q-mt-none q-mb-xs text-negative">
            {{ pokeStore.getPokemon.name }}
          </h4>
        </div>
        <div class="container-stats">
          <div class="container2">
            <div class="flex bg-blue rounded-borders q-px-sm text-white">
              <p class="q-ma-none">Base experience:</p>
              <p class="text-subtitle1 q-ma-none">
                {{ pokeStore.getPokemon.baseExperience }}
              </p>
            </div>
            <div class="flex bg-orange rounded-borders q-px-sm text-white">
              <p class="q-ma-none">Abilities:</p>
              <div>
                <span
                  v-for="(abilities, index) in pokeStore.getPokemon.abilities"
                  :key="index"
                  class="text-subtitle1"
                >
                  {{ abilities.ability.name }}
                </span>
              </div>
            </div>
            <div class="flex bg-pink rounded-borders q-px-sm text-white">
              <p class="q-ma-none">Forms:</p>
              <span
                v-for="(forms, index) in pokeStore.getPokemon.forms"
                :key="index"
                class="text-subtitle1"
              >
                {{ forms.name }}
              </span>
            </div>
            <div class="flex bg-purple rounded-borders q-px-sm text-white">
              <p class="q-ma-none">Types:</p>
              <span
                v-for="(types, index) in pokeStore.getPokemon.types"
                :key="index"
                class="text-subtitle1"
              >
                {{ types.type.name }}
              </span>
            </div>
            <p
              class="q-ma-none stats bg-green rounded-borders q-px-sm text-white"
              v-for="stat in pokeStore.getPokemon.stats"
              :key="stat.stat?.name"
            >
              {{ `${stat.stat.name}: ${stat.base_stat} ` }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.container {
  max-width: 500px;
  border: 1px solid $negative;

  margin: auto;
  display: flex;
  .img-container {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  img {
    object-fit: cover;
    object-position: center;
  }
}
.container-stats {
  display: flex;
  padding: 10px;

  .container2 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .stats {
      text-align: left;
      margin-bottom: 5px;
    }
  }
}

.page {
  height: calc(100vh - 185px);
  display: flex;
}

.flex {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
