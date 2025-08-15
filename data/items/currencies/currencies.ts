import { Item, ItemRarity, ItemType } from '../items.interface';

export const CURRENCIES: Item[] = [
  {
    id: 4000,
    slug: 'credits',
    type: ItemType.Currency,
    rarity: ItemRarity.Standard,
    name: 'Credits',
    description: 'Money used for various transactions in the game.',
    images: {
      icon: 'assets/items/currency/credits-64x64.jpg',
    },
    usages: [],
    sources: [],
    containers: [],
    activities: [],
    credits: null,
  },
];
