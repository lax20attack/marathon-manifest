import { Item, ItemRarity, ItemType } from '../items.interface';

export const CONSUMABLES: Item[] = [
  {
    id: 3000,
    slug: 'advanced-mechanics-kit',
    type: ItemType.Consumable,
    rarity: ItemRarity.Enhanced,
    name: 'Advanced Mechanics Kit',
    description: `Removes hazardous mechanical (MCH) status effects (Immobilize, Overheat, Toxin). 
    <br/>
    Maximizes Hardware stat for extended duration.
    <br/>
    Adds buffer against hostile data corruption.`,
    imageUrl: 'assets/items/consumables/advanced-mechanics-kit.png',
    usages: [],
    sources: [],
    containers: [],
  },
];
