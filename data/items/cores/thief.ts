import { RunnerType } from '../../runners/runners.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { Core } from './cores.interface';

export const THIEF_CORES: Core[] = [
  {
    id: 12300,
    slug: 'greed-is-good',
    type: ItemType.Core,
    runnerType: RunnerType.Thief,
    rarity: ItemRarity.Enhanced,
    name: 'Greed is Good',
    description: `When your backpack is completely full, your sprint speed and slide distance are increased.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12301,
    slug: 'hit-and-run',
    type: ItemType.Core,
    runnerType: RunnerType.Thief,
    rarity: ItemRarity.Deluxe,
    name: 'Hit and Run',
    description: `Striking a target with a melee or knife attack immediately after grappling Hacks them and knocks random loot items from their backpack.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 200,
  },
  {
    id: 12302,
    slug: 'case-the-joint',
    type: ItemType.Core,
    runnerType: RunnerType.Thief,
    rarity: ItemRarity.Superior,
    name: 'Case the Joint',
    description: `Your X-Ray Visor has increased vision range.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 600,
  },
  {
    id: 12303,
    slug: 'partner-in-crime',
    type: ItemType.Core,
    runnerType: RunnerType.Thief,
    rarity: ItemRarity.Prestige,
    name: 'Partner in Crime',
    description: `While not being piloted, your Pickpocket Drone periodically releases a pulse that pings nearby hostiles.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
];
