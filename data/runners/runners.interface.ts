import { ItemImages } from '../items/items.interface';

export type RunnerType = 'locus' | 'glitch' | 'blackbird' | 'void';

export enum RunnerStatType {
  SelfRepairSpeed = 'Self-Repair Speed',
  Agility = 'Agility',
  HeatCapacity = 'Heat Capacity',
  Hardware = 'Hardware',
  Firewall = 'Firewall',
  FinisherSiphon = 'Finisher Siphon',
  LootSpeed = 'Loot Speed',
  ReviveSpeed = 'Revive Speed',
}

export interface Runner {
  type: RunnerType;
  summary: RunnerSummary;
  abilities: RunnerAbilities;
  imageUrl: string;
  stats: RunnerStats;
}

export interface RunnerSummary {
  kitType: string;
  occupation: string;
  origin: string;
  role: string;
  description: string;
}

export interface RunnerAbilities {
  prime: RunnerAbility;
  tactical: RunnerAbility;
  trait1: RunnerAbility;
  trait2: RunnerAbility;
}

export interface RunnerAbility {
  name: string;
  description: string;
}

// List of stat types for runners. e.g Self-repair speed, agility, etc
export interface RunnerStatSlot {
  type: RunnerStatType;
  key: keyof RunnerStats;
  description: string;
  image: ItemImages;
}

export interface RunnerStats {
  // Visible stats
  selfRepairSpeed: number;
  agility: number;
  heatCapacity: number;
  hardware: number;
  firewall: number;
  finisherSiphon: number;
  lootSpeed: number;
  reviveSpeed: number;

  // Hidden stats, not advertised per runner but implants can modify these stats
  pingDuration?: number;
  tacticalAbilityRecovery?: number;
}
