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
    images: {
      icon: 'assets/items/backpack/8xs-med-pack-64x64.png',
    },
    sources: {},
    credits: null,
  },
];
