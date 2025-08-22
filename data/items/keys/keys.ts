import { Item, ItemRarity, ItemType } from '../items.interface';

export const KEYS: Item[] = [
  {
    id: 5000,
    slug: 'north-relay-storage',
    type: ItemType.Key,
    rarity: ItemRarity.Deluxe,
    name: 'North Relay Storage',
    description: `REGION: North Relay (Perimeter) <br/>
    LOCATION: North Relay offices <br/>
    UNLOCKS: Storage <br/> <br/>
    ON USE: Removed from inventory Retain room access during run 
   
    + Health and shield consumable usage is slightly faster.`,
    images: {
      icon: 'assets/items/keys/north-relay-storage-64x64.jpg',
    },
    sources: {},
    credits: 600,
  },
];
