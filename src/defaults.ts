import { StarshipRole } from "./enums";
import type { ICharacter } from "./interfaces";

export const CHARACTER_TEMPLATE: ICharacter = {
  id: undefined,
  profile: {
    name: undefined,
    appearance: undefined,
    prompt: undefined,
  },
  attributes: {
    prowess: 2,
    technique: 2,
    acuity: 2,
    social: 2,
  },
  starshipRole: StarshipRole.CAPTAIN,
  weaponTraining: {
    lm: 1,
    lr: 1,
    hm: 1,
    hr: 1,
  },
  stats: {
    sp: 6,
    hp: 6,
    maxSp: 6,
    maxHp: 6,
  },
  units: 100,
  inventory: [],
  traits: [],
};
