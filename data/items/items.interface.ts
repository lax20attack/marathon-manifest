import { MapActivityType } from '../maps/activity/activity.interface';
import { Map, MapPOI } from '../maps/maps.interface';

export enum ItemRarity {
  Standard = 'Standard', // White
  Enhanced = 'Enhanced', // Green
  Deluxe = 'Deluxe', // Blue
  Superior = 'Superior', // Purple
  Prestige = 'Prestige', // Yellow
}

export enum ItemEnemySourceType {
  UESC = 'UESC',
}

export enum ItemContainerType {
  ArmsLocker = 'Arms Locker',
  Bioprinter = 'Bioprinter',
  CacheCase = 'Cache Case',
  CacheDuffel = 'Cache Duffel',
  CoreStorage = 'Core Storage',
  GrassyAreas = 'Grassy Areas',
  MedicalCabinet = 'Medical Cabinet',
  MunitionsCrate = 'Munitions Crate',
  TickNest = 'Tick Nest',
  ToolCart = 'Tool Cart',
}

export enum ItemType {
  Ammo = 'Ammo',
  Backpack = 'Backpack',
  Consumable = 'Consumable',
  Container = 'Container',
  Core = 'Core',
  Currency = 'Currency',
  DataCard = 'Data Card',
  Equipment = 'Equipment',
  Implant = 'Implant',
  Key = 'Key',
  LostContract = 'Lost Contract',
  Mod = 'Mod',
  Reputation = 'Reputation',
  Salvage = 'Salvage',
  SponsoredKit = 'Sponsored Kit',
  Valuable = 'Valuable',
  Weapon = 'Weapon',
}

export const ITEM_RARITY_COLORS: Record<ItemRarity, string> = {
  [ItemRarity.Standard]: '#c9cad1',
  [ItemRarity.Enhanced]: '#00f587',
  [ItemRarity.Deluxe]: '#49abff',
  [ItemRarity.Superior]: '#c233ff',
  [ItemRarity.Prestige]: '#ffeb0f',
};

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
  images: ItemImages;

  // Optional rarity of the item. Weapons don't have a rarity, but other items do.
  rarity: ItemRarity;

  // Sources from which the item can be obtained. e.g., POIs
  sources: ItemSource;

  // How many credits the item costs
  credits: number;

  // When the item was last updated in Marathon Guide
  updatedVersion?: ItemUpdatedVersion;
}

export enum ItemUpdatedVersion {
  ALPHA_6 = 6,
  ALPHA_7 = 7,
  RELEASE = 100,
}

export interface ItemImages {
  /** Material items should be 1:1 aspect ratio Weapon items should be 4:3 aspect ratio */

  // Icon image of the item, used in lists and small views
  icon?: string;

  // Large image of the item, used in detail views
  large?: string;

  // Largest image of the item, used in high-resolution displays
  xlarge?: string;
}

export interface ItemImageSize {
  width: number;
  height: number;
}

export interface ItemContainer {
  type: ItemContainerType;
  rarity?: ItemRarity;
}

export interface ItemSource {
  // Activities from which the item can be obtained. e.g., High Value Target, Supply Drop, etc.
  activities?: ItemActivitySource[];

  // Containers where the item can be found. e.g., Arms Locker, Bioprinter
  containers?: ItemContainer[];

  // Enemies that can drop the item. e.g., UESC
  enemies?: ItemEnemySource[];

  // Maps and POIs where the item can be found
  maps?: ItemMapSource[];
}

export interface ItemActivitySource {
  type: MapActivityType;
  rarity?: ItemRarity;
}

export interface ItemEnemySource {
  type: ItemEnemySourceType;
}

export interface ItemMapSource {
  map: Map;
  pois?: MapPOI[];
}
