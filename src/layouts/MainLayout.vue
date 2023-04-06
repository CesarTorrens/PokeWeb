<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-negative text-white">
      <q-toolbar class="max-width q-mx-auto">
        <router-link to="/" @click="userStore.changeNavbar(true)">
          <q-avatar>
            <img
              src="https://w7.pngwing.com/pngs/272/921/png-transparent-pokemon-pokeball-pokemon-go-pokemon-pokeball.png"
            />
          </q-avatar>
        </router-link>
        <q-toolbar-title to="/"> <strong>Poke</strong>Web </q-toolbar-title>
        <p class="q-ma-none" v-if="userStore.getUserLog.name">
          Hello <strong>{{ userStore.getUserLog.name }}!</strong>
        </p>
      </q-toolbar>
      <q-tabs
        class="max-width q-mx-auto"
        v-if="userStore.getValueNavbar && userStore.getUserLog.name"
        align="left"
      >
        <q-tab
          label="Ver Todo"
          :value="null"
          @click="pokeStore.setCategory(null)"
        />
        <q-tab
          v-for="types in pokeStore.getPokeTypes"
          :key="types.name"
          :label="types.name"
          :value="types.pokeUrl"
          @click="pokeStore.setCategory(types.pokeUrl)"
        />
      </q-tabs>
      <q-tabs
        class="max-width q-mx-auto"
        v-if="!userStore.getValueNavbar && userStore.getUserLog.name"
        align="left"
      >
        <q-tab label="Home" :value="null" @click="goHome" />
      </q-tabs>
    </q-header>

    <q-page-container class="max-width q-mx-auto">
      <router-view />
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="negative" />
      </q-page-scroller>
    </q-page-container>

    <q-footer
      elevated
      class="bg-negative text-white q-pa-md text-center"
      style="height: 50px"
    >
      <div class="max-width q-mx-auto">
        <strong>Creado por Cesar Torrens.. y Si, me falta imaginación😥</strong>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { usePokemonStore } from 'src/stores/pokemon.store';
import { useUserStore } from 'src/stores/user.store';
import { useRouter } from 'vue-router';

const pokeStore = usePokemonStore();
const userStore = useUserStore();
const router = useRouter();

const goHome = () => {
  userStore.changeNavbar(true);
  router.push('/');
};
</script>

<style lang="scss">
.max-width {
  max-width: 1440px;
}
</style>
