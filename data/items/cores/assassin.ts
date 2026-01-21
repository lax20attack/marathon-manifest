import { RunnerType } from '../../runners/runners.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { Core } from './cores.interface';

export const ASSASSIN_CORES: Core[] = [
  {
    id: 12000,
    slug: 'breathing-space',
    type: ItemType.Core,
    runnerType: RunnerType.Assassin,
    rarity: ItemRarity.Enhanced,
    name: 'Breathing Space',
    description: `Your Shroud increases your weapons' reload speed while in any smoke field.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12001,
    slug: 'patience',
    type: ItemType.Core,
    runnerType: RunnerType.Assassin,
    rarity: ItemRarity.Deluxe,
    name: 'Patience',
    description: `While stationary, your invisibility timer is paused at the cost of generating heat.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 200,
  },
  {
    id: 12002,
    slug: 'guerrilla',
    type: ItemType.Core,
    runnerType: RunnerType.Assassin,
    rarity: ItemRarity.Superior,
    name: 'Guerrilla',
    description: `Your Active Camo and Shadow Dive recharge more quickly while in smoke.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 600,
  },
  {
    id: 12003,
    slug: 'shadow-strike',
    type: ItemType.Core,
    runnerType: RunnerType.Assassin,
    rarity: ItemRarity.Prestige,
    name: 'Shadow Strike',
    description: `Your Utility Knife deals greatly increased damage when attacking from invisibility.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
];
