import { ItemRarity, ItemType } from '../items.interface';
import { Salvage } from '../salvage/salvage.interface';

export const SPONSORED_KITS: Salvage[] = [
  {
    id: 15000,
    slug: 'cyberacme-sponsored-kit',
    type: ItemType.SponsoredKit,
    rarity: ItemRarity.Enhanced,
    name: 'Enhanced CyberAcme Sponsored Kit',
    description: 'An emergency package from CyberAcme. Upon infil, unpacks into basic gear.',
    images: {
      xlarge: 'assets/items/sponsored-kits/cyberacme-192x192.png',
    },
    usages: [],
    sources: {},
    credits: 0,
  },
  {
    id: 15010,
    slug: 'nucaloric-sponsored-kit',
    type: ItemType.SponsoredKit,
    rarity: ItemRarity.Enhanced,
    name: 'Enhanced NuCaloric Sponsored Kit',
    description: 'An emergency package from NuCaloric. Upon infil, unpacks into basic gear.',
    images: {
      xlarge: 'assets/items/sponsored-kits/nucaloric-192x192.png',
    },
    usages: [],
    sources: {},
    credits: 0,
  },
  {
    id: 15030,
    slug: 'traxus-sponsored-kit',
    type: ItemType.SponsoredKit,
    rarity: ItemRarity.Enhanced,
    name: 'Enhanced Traxus Sponsored Kit',
    description: 'An emergency package from Traxus. Upon infil, unpacks into basic gear.',
    images: {
      xlarge: 'assets/items/sponsored-kits/traxus-192x192.png',
    },
    usages: [],
    sources: {},
    credits: 0,
  },
  {
    id: 15040,
    slug: 'mida-sponsored-kit',
    type: ItemType.SponsoredKit,
    rarity: ItemRarity.Enhanced,
    name: 'Enhanced Mida Sponsored Kit',
    description: 'An emergency package from Mida. Upon infil, unpacks into basic gear.',
    images: {
      xlarge: 'assets/items/sponsored-kits/mida-192x192.png',
    },
    usages: [],
    sources: {},
    credits: 0,
  },
  {
    id: 15050,
    slug: 'arachne-sponsored-kit',
    type: ItemType.SponsoredKit,
    rarity: ItemRarity.Enhanced,
    name: 'Enhanced Arachne Sponsored Kit',
    description: 'An emergency package from Arachne. Upon infil, unpacks into basic gear.',
    images: {
      xlarge: 'assets/items/sponsored-kits/arachne-192x192.png',
    },
    usages: [],
    sources: {},
    credits: 0,
  },
  {
    id: 15060,
    slug: 'sekiguchi-sponsored-kit',
    type: ItemType.SponsoredKit,
    rarity: ItemRarity.Enhanced,
    name: 'Enhanced Sekiguchi Sponsored Kit',
    description: 'An emergency package from Sekiguchi. Upon infil, unpacks into basic gear.',
    images: {
      xlarge: 'assets/items/sponsored-kits/sekiguchi-192x192.png',
    },
    usages: [],
    sources: {},
    credits: 0,
  },
];
