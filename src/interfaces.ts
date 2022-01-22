import type { StarshipRole } from "./enums";

export interface ICharacter {
  id: number;
  profile: IProfile;
  stats: IStats;
  attributes: IAttributes;
  weaponTraining: IWeaponTraining;
  inventory: IItem[];
  traits: ITrait[];
  units: number;
  starshipRole: StarshipRole;
}

export interface IStats {
  hp: number;
  sp: number;
  maxHp: number;
  maxSp: number;
}

export interface IProfile {
  name: string;
  appearance: string;
  prompt: string;
}

export interface IAttributes {
  prowess: number;
  technique: number;
  acuity: number;
  social: number;
}

export interface IWeaponTraining {
  lm: number;
  lr: number;
  hm: number;
  hr: number;
}

export interface IItem {
  id: number;
  name: string;
  description: string;
}

export interface ITrait {
  id: number;
  name: string;
  description: string;
  count?: number;
}
