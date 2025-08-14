import { Map, MapPOI } from '../maps/maps.interface';

export interface Item {
  id: number;
  slug: string;
  type: ItemType;
  name: string;
  description: string;
  imageUrl: string;
  rarity?: ItemRarity;
  sources: ItemSource[];
  usages: ItemUsageType[];
  containers: ItemContainer[];
  credits?: number;
}

export enum ItemUsageType {
  CyberAcmeUpgrades = 'CyberAcme Upgrades',
  NuCaloricUpgrades = 'NuCaloric Upgrades',
  TraxusUpgrades = 'Traxus Upgrades',

  CyberAcmeVendorUnlocks = 'CyberAcme Vendor Unlocks',
  MIDAVendorUnlocks = 'MIDA Vendor Unlocks',
  NuCaloricVendorUnlocks = 'NuCaloric Vendor Unlocks',
  TraxusVendorUnlocks = 'Traxus Vendor Unlocks',
}

export enum ItemType {
  Armor = 'Armor',
  Backpack = 'Backpack',
  Consumable = 'Consumable',
  Container = 'Container',
  Currency = 'Currency',
  DataCard = 'Data Card',
  Key = 'Key',
  Material = 'Material',
  Reputation = 'Reputation',
  Valuable = 'Valuable',
  Weapon = 'Weapon',
}
export enum ItemRarity {
  Standard = 'Standard', // White
  Enhanced = 'Enhanced', // Green
  Deluxe = 'Deluxe', // Blue
  Superior = 'Superior', // Purple
  Prestige = 'Prestige', // Yellow
}

export enum ItemSourceType {
  MapObjective = 'Map Objective',
  MapPoi = 'Map POI',
  UESC = 'UESC',
}

export enum ItemSourceMapObjective {
  HighValueTarget = 'High Value Target',
  SupplyDrop = 'Supply Drop',
  UESCIncursion = 'UESC Incursion',
  UESCIntercept = 'UESC Intercept',
}

export interface ItemSource {
  type: ItemSourceType;

  // When type is MapPoi
  map?: Map;
  pois?: MapPOI[];

  // When type is MapObjective
  mapObjective?: ItemSourceMapObjective;
}

export enum ItemContainerType {
  ArmsLocker = 'Arms Locker',
  Bioprinter = 'Bioprinter',
  CacheCase = 'Cache Case',
  CacheDuffel = 'Cache Duffel',
  CoreStorage = 'Core Storage',
  GrassyAreas = 'Grassy Areas',
  LockedRooms = 'Locked Rooms',
  MedicalCabinet = 'Medical Cabinet',
  MunitionsCrate = 'Munitions Crate',
  TickNest = 'Tick Nest',
  ToolCart = 'Tool Cart',
}

export interface ItemContainer {
  type: ItemContainerType;
  rarity?: ItemRarity;
}

export const ITEM_RARITY_COLORS: Record<ItemRarity, string> = {
  [ItemRarity.Standard]: '#c9cad1',
  [ItemRarity.Enhanced]: '#00f587',
  [ItemRarity.Deluxe]: '#49abff',
  [ItemRarity.Superior]: '#c233ff',
  [ItemRarity.Prestige]: '#ffeb0f',
};
