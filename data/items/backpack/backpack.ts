import { Item, ItemRarity, ItemType } from '../items.interface';

export const BACKPACKS: Item[] = [
  {
    id: 2000,
    slug: '8xs-med-backpack',
    type: ItemType.Backpack,
    rarity: ItemRarity.Enhanced,
    name: '8XS Med Pack',
    description: `+8 slots to carry more items. 
    <br/><br/>
    + Health and shield consumable usage is slightly faster.`,
    imageUrl: 'assets/items/backpack/8xs-med-pack.jpg',
    usages: [],
    sources: [],
    containers: [],
    activities: [],
    credits: null,
  },
];
