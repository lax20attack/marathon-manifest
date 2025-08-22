import { Item, ItemRarity, ItemType } from '../items.interface';

export const REPUTATIONS: Item[] = [
  {
    id: 6000,
    slug: 'nucal-rep',
    type: ItemType.Reputation,
    rarity: ItemRarity.Standard,
    name: 'Nucal Rep',
    description: `Earn reputation with NuCaloric to unlock their rewards and faction upgrades. NuCal rep can be earned by completing NuCaloric contracts. Additional rep can be earned in runs by accessing locked rooms, looting supply caches, and other actions.
    <br/><br/>
    All players in a crew earn rep when a NuCaloric contract objective is completed.`,
    images: {
      icon: 'assets/items/reputations/nucal-64x64.jpg',
    },
    sources: {},
    credits: null,
  },
  {
    id: 6001,
    slug: 'cyberacme-rep',
    type: ItemType.Reputation,
    rarity: ItemRarity.Standard,
    name: 'CyberAcme Rep',
    description: `Earn reputation with CyberAcme to unlock their rewards and faction upgrades. CyberAcme rep can be earned by completing CyberAcme contracts. Additional rep can be earned in runs by accessing locked rooms, looting supply caches, and other actions.
    <br/><br/>
    All players in a crew earn rep when a CyberAcme contract objective is completed.`,
    images: {
      icon: 'assets/items/reputations/cyberacme-64x64.jpg',
    },
    sources: {},
    credits: null,
  },
  {
    id: 6002,
    slug: 'traxus-rep',
    type: ItemType.Reputation,
    rarity: ItemRarity.Standard,
    name: 'Traxus Rep',
    description: `Earn reputation with Traxus to unlock their rewards and faction upgrades. Traxus rep can be earned by completing Traxus contracts. Additional rep can be earned in runs by accessing locked rooms, looting supply caches, and other actions.
    <br/><br/>
    All players in a crew earn rep when a Traxus contract objective is completed.`,
    images: {
      icon: 'assets/items/reputations/traxus-64x64.jpg',
    },
    sources: {},
    credits: null,
  },
];
