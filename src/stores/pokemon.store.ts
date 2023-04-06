import { defineStore } from 'pinia';

import { PokeTypes, PokeData } from '../models/pokemon.model';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemon: {} as PokeData,
    pokeTypes: [] as Array<PokeTypes>,
    pokeData: [] as Array<PokeData>,
    category: null as null | string,
  }),
  getters: {
    getPokemon(): PokeData {
      return this.pokemon;
    },
    getPokeTypes(): Array<PokeTypes> {
      return this.pokeTypes;
    },
    getPokeData(): Array<PokeData> {
      return this.pokeData;
    },
    getCategoryUrl(): string | null {
      return this.category;
    },
  },
  actions: {
    addPokemon(pokemon: PokeData) {
      this.pokemon = pokemon;
    },
    addPokeTypes(name: string, url: string) {
      this.pokeTypes.push({
        name: name,
        pokeUrl: url,
      });
    },
    addPokeData(pokeData: PokeData) {
      this.pokeData.push(pokeData);
    },
    cleanPokeData() {
      this.pokeData = [];
    },
    setCategory(url: string | null) {
      this.category = url;
    },
  },
});
