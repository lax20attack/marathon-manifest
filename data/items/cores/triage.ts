import { RunnerType } from '../../runners/runners.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { Core } from './cores.interface';

export const TRIAGE_CORES: Core[] = [
  {
    id: 12400,
    slug: 'high-voltage',
    type: ItemType.Core,
    runnerType: RunnerType.Triage,
    rarity: ItemRarity.Enhanced,
    name: 'High Voltage',
    description: `Defeating hostiles affected by EMP reduces the cooldown of your next Battery Overcharge.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12401,
    slug: 'electron-recapture-sinks',
    type: ItemType.Core,
    runnerType: RunnerType.Triage,
    rarity: ItemRarity.Deluxe,
    name: 'Electron Recapture Sinks',
    description: `While your Battery Overcharge is active, defeating a hostile or downing a Runner with a volt weapon instantly restores a portion of the weapon's charge.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 200,
  },
  {
    id: 12402,
    slug: 'no-good-deed',
    type: ItemType.Core,
    runnerType: RunnerType.Triage,
    rarity: ItemRarity.Superior,
    name: 'No Good Deed',
    description: `You receive a burst of healing when your Med-Drone attaches to a crew member.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 600,
  },
  {
    id: 12403,
    slug: 'samaritan',
    type: ItemType.Core,
    runnerType: RunnerType.Triage,
    rarity: ItemRarity.Prestige,
    name: 'Samaritan',
    description: `Sharing a consumable with your Shareware.exe reduces the cooldown of your next Med-Drone.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
];
