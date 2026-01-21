import { Item, ItemRarity, ItemType } from '../items.interface';

export const BACKPACKS: Item[] = [
  {
    id: 2000,
    slug: '8xs-base-pack',
    type: ItemType.Backpack,
    rarity: ItemRarity.Enhanced,
    name: '8XS Base Pack',
    description: `+8 slots `,
    images: {
      large: 'assets/items/backpacks/8xs-base-pack-128x128.png',
    },
    sources: {},
    credits: 100,
  },
  {
    id: 2001,
    slug: '16xs-base-pack',
    type: ItemType.Backpack,
    rarity: ItemRarity.Deluxe,
    name: '16XS Base Pack',
    description: `+16 slots `,
    images: {
      large: 'assets/items/backpacks/16xs-base-pack-128x128.png',
    },
    sources: {},
    credits: 550,
  },
  {
    id: 2002,
    slug: '24xs-base-pack',
    type: ItemType.Backpack,
    rarity: ItemRarity.Superior,
    name: '24XS Base Pack',
    description: `+24 slots `,
    images: {
      large: 'assets/items/backpacks/24xs-base-pack-128x128.png',
    },
    sources: {},
    credits: 1650,
  },
  {
    id: 2011,
    slug: '8xs-med-backpack',
    type: ItemType.Backpack,
    rarity: ItemRarity.Enhanced,
    name: '8XS Med Pack',
    description: `+8 slots to carry more items. 
    <br/><br/>
    + Health and shield consumable usage is slightly faster.`,
    images: {
      icon: 'assets/items/backpacks/8xs-med-pack-64x64.png',
    },
    sources: {},
    credits: null,
  },
  {
    id: 2014,
    slug: '24xs-med-backpack-plus',
    type: ItemType.Backpack,
    rarity: ItemRarity.Prestige,
    name: '24XS Med Pack+',
    description: `+24 slots. 
    <br/>
    + Significantly faster health and shield consumable usage.
    <br/>
    + Health consumables also recharge portion of shields.
    <br/>
    + Shield consumables also restore portion of health.`,
    images: {
      icon: 'assets/items/backpacks/24xs-med-pack-128x128.png',
    },
    sources: {},
    credits: 5000,
  },
];
