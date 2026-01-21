import { Item, ItemRarity, ItemType } from '../items.interface';

export const CURRENCIES: Item[] = [
  {
    id: 4000,
    slug: 'credits',
    type: ItemType.Currency,
    rarity: ItemRarity.Standard,
    name: 'Credits',
    description: 'Currency used to purchase items from the Armory.',
    images: {
      icon: 'assets/items/currency/credits-128x128.png',
    },
    sources: {},
    credits: null,
  },
];
