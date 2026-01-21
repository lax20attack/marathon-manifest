import { ItemImages } from '../items/items.interface';
import { RunnerAbilities } from './abilities/abilities.interface';

export enum RunnerType {
  Destroyer = 'destroyer',
  Vandal = 'vandal',
  Recon = 'recon',
  Assassin = 'assassin',
  Thief = 'thief',
  Triage = 'triage',
  Rook = 'rook',
}

export enum RunnerStatType {
  HeatCapacity = 'Heat Capacity',
  Agility = 'Agility',
  LootSpeed = 'Loot Speed',
  MeleeDamage = 'Melee Damage',
  PrimeRecovery = 'Prime Recovery',
  TacticalRecovery = 'Tactical Recovery',
  SelfRepairSpeed = 'Self-Repair Speed',
  FinisherSiphon = 'Finisher Siphon',
  ReviveSpeed = 'Revive Speed',
  Hardware = 'Hardware',
  Firewall = 'Firewall',
  FallResistance = 'Fall Resistance',
  PingDuration = 'Ping Duration',
}

export interface Runner {
  type: RunnerType;
  summary: RunnerSummary;
  abilities: RunnerAbilities;
  images: ItemImages;
  stats: RunnerStats;
}

export interface RunnerSummary {
  occupation: string;
  origin: string;
  role: string;
  tech: string;
  description: string;
}

// List of stat types for runners. e.g Self-repair speed, agility, etc
export interface RunnerStatSlot {
  type: RunnerStatType;
  key: keyof RunnerStats;
  description: string;
  images: ItemImages;
}

export interface RunnerStats {
  heatCapacity: number;
  agility: number;
  lootSpeed: number;
  meleeDamage: number;

  primeRecovery: number;
  tacticalRecovery: number;
  selfRepairSpeed: number;
  finisherSiphon: number;
  reviveSpeed: number;

  hardware: number;
  firewall: number;
  fallResistance: number;
  pingDuration: number;
}
