import { Item, ItemRarity, ItemType } from '../items.interface';

export const VALUABLES: Item[] = [
  {
    id: 7000,
    slug: 'broken-alarm-system',
    type: ItemType.Valuable,
    rarity: ItemRarity.Deluxe,
    name: 'Broken Alarm System',
    description: 'Simple motion sensors used around agricultural production to disperse avian life.',
    imageUrl: 'assets/items/valubles/broken-alarm-system.jpg',
    usages: [],
    sources: [],
    containers: [],
    credits: 550,
  },
];
