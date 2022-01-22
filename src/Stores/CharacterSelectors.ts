import { derived, Readable } from "svelte/store";
import type { ICharacter } from "../interfaces";
import { CharacterStore, selectedCharacterId } from "./CharacterStore";
import characterStore from "./CharacterStore";

export const selectedCharacter: Readable<ICharacter> = derived(
  [characterStore, selectedCharacterId],
  ([$characterStore, $selectedCharacterId]) => {
    return $characterStore[$selectedCharacterId];
  }
);

export const allCharacters: Readable<ICharacter[]> = derived(
  [characterStore],
  ([$characterStore]) => {
    return getAllCharacters($characterStore);
  }
);

const getAllCharacters = (store: CharacterStore): ICharacter[] => {
  return Object.values(store).sort((a: ICharacter, b: ICharacter) =>
    a.profile.name.localeCompare(b.profile.name)
  );
};
