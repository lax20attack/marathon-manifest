import { Map, MapPOI } from '../maps/maps.interface';

export interface Item {
  // Unique identifier for the item
  id: number;

  // Unique slug for the item, used in URLs
  slug: string;

  // Type of the item, e.g., Material, Weapon, Consumable
  type: ItemType;

  // Display name of the item
  name: string;

  // Description of the item
  description: string;

  // URL of the item, relative to the root of the manifest directory
  imageUrl: string;

  // Optional rarity of the item. Weapons don't have a rarity, but other items do.
  rarity?: ItemRarity;

  // Sources from which the item can be obtained. e.g., map objectives, POIs
  sources: ItemSource[];

  // Usages of the item, e.g., for upgrades or vendor unlocks
  usages: ItemUsageType[];

  // Containers where the item can be found. e.g., Arms Locker, Bioprinter
  containers: ItemContainer[];

  // How many credits the item costs
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
