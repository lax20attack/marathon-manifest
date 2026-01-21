import { Item, ItemRarity, ItemType } from '../items.interface';

export const VALUABLES: Item[] = [
  {
    id: 7000,
    slug: 'broken-alarm-system',
    type: ItemType.Valuable,
    rarity: ItemRarity.Deluxe,
    name: 'Broken Alarm System',
    description: 'Simple motion sensors used around agricultural production to disperse avian life.',
    images: {
      icon: 'assets/items/valuables/broken-alarm-system-64x64.jpg',
    },
    sources: {},
    credits: 550,
  },
];
