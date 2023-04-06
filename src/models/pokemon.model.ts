export interface PokeTypes {
  name: string;
  pokeUrl: string;
}

export interface PokeData {
  name: string;
  baseExperience: number | string;
  abilities: Array<object>;
  forms: Array<object>;
  id: number | string;
  sprites: object;
  stats: Array<object>;
  types: Array<object>;
}
