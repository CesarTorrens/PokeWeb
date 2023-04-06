<script setup lang="ts">
import { usePokemonStore } from 'src/stores/pokemon.store';
import { useUserStore } from 'src/stores/user.store';

const userStore = useUserStore();
const pokeStore = usePokemonStore();
</script>

<template>
  <div class="container-grid">
    <q-card
      v-for="pokemon in pokeStore.getPokeData"
      :key="pokemon.id"
      class="my-card"
    >
      <router-link
        @click="userStore.changeNavbar(false)"
        :to="`/details/${pokemon.name}`"
      >
        <q-img :src="pokemon.sprites.front_default" :alt="pokemon.name">
          <div class="absolute-bottom text-h6" id="bg-title-card">
            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
            <p class="text-subtitle1 q-mb-none">
              {{
                pokemon.types[0].type.name.charAt(0).toUpperCase() +
                pokemon.types[0].type.name.slice(1)
              }}
            </p>
          </div>
        </q-img>
      </router-link>
    </q-card>
  </div>
</template>

<style lang="scss">
.container {
  height: fit-content;
  width: 100%;
  text-align: center;
  border: 1px solid $negative;
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
}

#bg-title-card {
  background: rgba(193, 0, 21, 0.47);
}
.container-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
