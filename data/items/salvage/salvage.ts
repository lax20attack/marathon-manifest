import { MapActivityType } from '../../maps/activity/activity.interface';
import { MAPS } from '../../maps/maps';
import { ItemContainerType, ItemRarity, ItemType } from '../items.interface';
import { Salvage, SalvageUsageType } from './salvage.interface';

export const SALVAGE: Salvage[] = [
  {
    id: 1001,
    slug: 'sterilized-biostripping',
    type: ItemType.Salvage,
    rarity: ItemRarity.Deluxe,
    name: 'Sterilized Biostripping',
    description: 'Advanced material made of reclaimed waste and treated with a powerful bioagent, making it safe to handle.',
    images: {
      icon: 'assets/items/salvage/biostripping-64x64.png',
    },
    usages: [SalvageUsageType.CyberAcmeUpgrades],
    sources: {
      maps: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.algaePonds],
        },
      ],
      containers: [],
    },
    credits: null,
  },
  {
    id: 1002,
    slug: 'deimosite-rods',
    type: ItemType.Salvage,
    rarity: ItemRarity.Enhanced,
    name: 'Deimosite Rods',
    description: 'Stout rods made from material mined from Deimos itself..',
    images: {
      icon: 'assets/items/salvage/rods-64x64.png',
    },
    usages: [SalvageUsageType.TraxusUpgrades, SalvageUsageType.TraxusVendorUnlocks],
    sources: {
      maps: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.fieldMaintenance],
        },
      ],
      containers: [{ type: ItemContainerType.ArmsLocker }],
    },
    credits: 10,
  },
  {
    id: 1004,
    slug: 'lab-xerogel',
    type: ItemType.Salvage,
    rarity: ItemRarity.Deluxe,
    name: 'Lab Xerogel',
    description: 'A gel-like substance used in advanced crafting recipes.',
    images: {
      icon: 'assets/items/salvage/xerogel-64x64.png',
    },
    usages: [SalvageUsageType.CyberAcmeUpgrades],
    sources: {
      maps: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.quarantine, MAPS.direMarsh.pois.greenhouse],
        },
      ],
      containers: [{ type: ItemContainerType.ToolCart }],
      activities: [
        { type: MapActivityType.LOCKED_ROOM, rarity: ItemRarity.Deluxe },
      ],
    },
    credits: 50,
  },
  {
    id: 1007,
    slug: 'cetinite-rods',
    type: ItemType.Salvage,
    rarity: ItemRarity.Deluxe,
    name: 'Cetinite Rods',
    description: 'Rods smelted from strange alloy the colonists harvested from Tau Ceti IV prior to their disappearance.',
    images: {
      icon: 'assets/items/salvage/rods-64x64.png',
    },
    usages: [SalvageUsageType.TraxusBarter, SalvageUsageType.TraxusUpgrades],
    sources: {
      maps: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.fieldMaintenance],
        },
      ],
      containers: [
        { type: ItemContainerType.ArmsLocker },
      ],
      activities: [
        { type: MapActivityType.LOCKED_ROOM, rarity: ItemRarity.Deluxe },
      ],
    },
    credits: null,
  },
  {
    id: 1009,
    slug: 'combat-xerogel',
    type: ItemType.Salvage,
    rarity: ItemRarity.Superior,
    name: 'Combat Xerogel',
    description: 'A rare gel used in various crafting recipes.',
    images: {
      icon: 'assets/items/salvage/xerogel-64x64.png',
    },
    usages: [SalvageUsageType.CyberAcmeUpgrades],
    sources: {
      activities: [
        { type: MapActivityType.UESC_INCURSION },
        { type: MapActivityType.LOCKED_ROOM, rarity: ItemRarity.Superior },
      ],
    },
    credits: null,
  },
  {
    id: 1010,
    slug: 'reclaimed-biostripping',
    type: ItemType.Salvage,
    rarity: ItemRarity.Enhanced,
    name: 'Reclaimed Biostripping',
    description: 'Useful rubberlike material sourced from reclaimed biological waste.',
    images: {
      icon: 'assets/items/salvage/biostripping-64x64.png',
    },
    usages: [],
    sources: {
      maps: [
        {
          map: MAPS.direMarsh,
          pois: [MAPS.direMarsh.pois.algaePonds],
        },
      ],
      containers: [],
    },
    credits: 10,
  },
  {
    id: 1011,
    slug: 'shell-id',
    type: ItemType.Salvage,
    rarity: ItemRarity.Superior,
    name: 'Shell ID',
    description: 'Unique synth-vat identification for each biosynthetic Runner shell. Used as an informal trophy among mercenaries.',
    images: {
      icon: 'assets/items/salvage/shell-id-64x64.jpg',
    },
    usages: [SalvageUsageType.CyberAcmeUpgrades],
    sources: {
      activities: [
        { type: MapActivityType.HIGH_VALUE_TARGET },
        { type: MapActivityType.SUPPLY_DROP },
      ],
    },
    credits: 300,
  },
  {
    id: 1012,
    slug: 'storage-drive',
    type: ItemType.Salvage,
    rarity: ItemRarity.Enhanced,
    name: 'Storage Drive',
    description: 'A potential treasure trove of colony-era data.',
    images: {
      icon: 'assets/items/salvage/drive-64x64.png',
    },
    usages: [
      SalvageUsageType.NuCaloricUpgrades,
      SalvageUsageType.NuCaloricVendorUnlocks,
      SalvageUsageType.TraxusVendorUnlocks,
    ],
    sources: {
      maps: [
        { map: MAPS.perimeter, pois: [MAPS.perimeter.pois.southRelay] },
      ],
      containers: [
        {
          type: ItemContainerType.CoreStorage,
        },
      ],
    },
    credits: 10,
  },
];
