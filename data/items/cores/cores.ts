import { ItemRarity, ItemType } from '../items.interface';
import { Core, CoreSlot } from './cores.interface';

export const CORE_SLOTS: CoreSlot[] = [
  {
    id: 0,
    images: {
      icon: 'assets/items/cores/core-slot-72x72.jpg',
    },
  },
  {
    id: 1,
    images: {
      icon: 'assets/items/cores/core-slot-72x72.jpg',
    },
  },
];

export const CORES: Core[] = [
  {
    id: 12000,
    slug: 'bedside-manner',
    type: ItemType.Core,
    rarity: ItemRarity.Enhanced,
    name: 'Bedside Manner',
    description:
      'When an ally is nearby, your Self-Repair Speed is increased and you use shield and healng consumables slightly more quickly.',
    images: {
      icon: 'assets/items/cores/core-72x72.png',
    },
    sources: null,
    credits: null,
  },
];
