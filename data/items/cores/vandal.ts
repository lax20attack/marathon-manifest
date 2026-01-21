import { RunnerType } from '../../runners/runners.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { Core } from './cores.interface';

export const VANDAL_CORES: Core[] = [
  {
    id: 12500,
    slug: 'tag',
    type: ItemType.Core,
    runnerType: RunnerType.Vandal,
    rarity: ItemRarity.Enhanced,
    name: 'Tag!',
    description: `Distrupt Cannon deals additional damage and pings targets caught in the blast.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 70,
  },
  {
    id: 12501,
    slug: 'mechanized-holsters',
    type: ItemType.Core,
    runnerType: RunnerType.Vandal,
    rarity: ItemRarity.Deluxe,
    name: 'Mechanized Holsters',
    description: `Your Power Slide reloads your ballistic weapons from reserves and recharges a portion of your volt weapons' current battery.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 200,
  },
  {
    id: 12502,
    slug: 'adrenal-core',
    type: ItemType.Core,
    runnerType: RunnerType.Vandal,
    rarity: ItemRarity.Superior,
    name: 'Adrenal Core',
    description: `While Amplified, your movement abilities generate even less heat. Using a Cardio Kick extends Amplify's duration.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 600,
  },
  {
    id: 12503,
    slug: 'microjet-efficiency-package',
    type: ItemType.Core,
    runnerType: RunnerType.Vandal,
    rarity: ItemRarity.Prestige,
    name: 'Microjet Efficiency Package',
    description: `Gain an additional charge for your Microjets that generates less heat.`,
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: 2500,
  },
];
