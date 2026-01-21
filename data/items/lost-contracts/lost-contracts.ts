import { Item, ItemRarity, ItemType } from '../items.interface';

export const LOST_CONTRACTS: Item[] = [
  {
    id: 13000,
    slug: 'lost-contract-traxus',
    type: ItemType.LostContract,
    rarity: ItemRarity.Enhanced,
    name: 'Lost Contract: Traxus',
    description: `A contract for Traxus that was lost or abandoned by another Runner.
    <br/><br/>
    Upon exfil, adds a standard contract for Traxus to your dossier if you are Rank 1 or higher with that faction.`,
    images: {
      icon: 'assets/items/contracts/contract-64x64.png',
    },
    sources: {},
    credits: null,
  },
];
