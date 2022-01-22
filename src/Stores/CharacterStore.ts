import { Writable, writable } from "svelte/store";
import { CHARACTER_TEMPLATE } from "../defaults";
import type { ICharacter } from "../interfaces";

export type CharacterStore = Record<number, ICharacter>;

const DEFAULT_PAGES: CharacterStore = {};

const { subscribe, update, set } = writable(DEFAULT_PAGES);

const localCharacterStore: CharacterStore =
  JSON.parse(localStorage.getItem("characterStore")) ?? DEFAULT_PAGES;

const getCharactersFromLocalStorage = () => {
  set(localCharacterStore);
};

const updateCharacter = (character: ICharacter) => {
  update((existingStore) => {
    console.log("EXISTING", existingStore);
    const updatedStore = {
      ...existingStore,
      [character.id]: character,
    };
    console.log("UPDATED", updatedStore);
    localStorage.setItem("characterStore", JSON.stringify(updatedStore));
    return updatedStore;
  });
};

const deleteCharacter = (id: number) => {
  update((characterStore) => {
    delete characterStore[id];
    localStorage.setItem("characterStore", JSON.stringify(characterStore));
    return characterStore;
  });
};
const addNewCharacter = updateCharacter;

export default {
  subscribe,
  updateCharacter,
  addNewCharacter,
  deleteCharacter,
  getCharactersFromLocalStorage,
};

export const selectedCharacterId = writable(undefined);

export const tempChar: Writable<ICharacter> = writable(CHARACTER_TEMPLATE);
