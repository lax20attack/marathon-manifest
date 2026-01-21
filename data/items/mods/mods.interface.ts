import { AmmoType, MagazineType } from '../ammo/ammo.interface';
import { Item } from '../items.interface';
import { WeaponStats, WeaponType } from '../weapons/weapons.interface';

export enum WeaponModSlotType {
  Barrel = 'Barrel',
  Chip = 'Chip',
  Generator = 'Generator',
  Grip = 'Grip',
  Magazine = 'Magazine',
  Muzzle = 'Muzzle',
  Optic = 'Optic',
  Shield = 'Shield',
  UNKNOWN = 'Unknown', // Ares RG last slot, not sure what it is yet
}

// We can remove this - For now we'll keep it to document how the text changes based on the weapon type + slot
export enum WeaponModType {
  Array = 'Array',
  VoltArray = 'Volt Array',
  VoltCell = 'Volt Cell',

  // Barrels
  Barrel = 'Barrel', // Generic barrel for all weapons
  CQCBarrel = 'CQC Barrel', // Close Quarters Combat, aka SMG

  // Chips
  AssaultChip = 'Assault Chip',
  CQCChip = 'CQC Chip',
  MachineGunChip = 'Machine Gun Chip',
  MarksmanChip = 'Marksman Chip',
  RailgunChip = 'Railgun Chip',
  ShotgunChip = 'Shotgun Chip',
  SniperChip = 'Sniper Chip',

  // Grips
  ShotgunGrip = 'Shotgun Grip',

  // Magazines
  AssaultMagazine = 'Assault Magazine',

  // Optics
  PrecisionOptic = 'Precision Optic',
  SidearmOptic = 'Sidearm Optic',
}

export interface WeaponModSlot {
  type: WeaponModSlotType;
  name: string;
  imageUrl: string;
}

export const WEAPON_MOD_SLOTS: Record<WeaponModSlotType, WeaponModSlot> = {
  [WeaponModSlotType.Barrel]: {
    type: WeaponModSlotType.Barrel,
    name: 'Barrel',
    imageUrl: 'assets/items/mods/barrel-42x42.jpg',
  },
  [WeaponModSlotType.Chip]: {
    type: WeaponModSlotType.Chip,
    name: 'Chip',
    imageUrl: 'assets/items/mods/chip-42x42.jpg',
  },
  [WeaponModSlotType.Generator]: {
    type: WeaponModSlotType.Generator,
    name: 'Generator',
    imageUrl: 'assets/items/mods/generator-42x42.jpg',
  },
  [WeaponModSlotType.Grip]: {
    type: WeaponModSlotType.Grip,
    name: 'Grip',
    imageUrl: 'assets/items/mods/grip-42x42.jpg',
  },
  [WeaponModSlotType.Magazine]: {
    type: WeaponModSlotType.Magazine,
    name: 'Magazine',
    imageUrl: 'assets/items/mods/magazine-42x42.jpg',
  },
  [WeaponModSlotType.Muzzle]: {
    type: WeaponModSlotType.Muzzle,
    name: 'Muzzle',
    imageUrl: 'assets/items/mods/muzzle-42x42.jpg',
  },
  [WeaponModSlotType.Optic]: {
    type: WeaponModSlotType.Optic,
    name: 'Optic',
    imageUrl: 'assets/items/mods/optic-42x42.jpg',
  },
  [WeaponModSlotType.Shield]: {
    type: WeaponModSlotType.Shield,
    name: 'Shield',
    imageUrl: 'assets/items/mods/shield-42x42.jpg',
  },
  [WeaponModSlotType.UNKNOWN]: {
    type: WeaponModSlotType.UNKNOWN,
    name: 'Unknown',
    imageUrl: 'assets/items/mods/unknown-42x42.jpg',
  },
};

export interface WeaponMod extends Item {
  // Railgun, Shotgun, Sniper Rifle, etc.
  weaponTypes: WeaponType[];

  // The slot this mod fits into
  slotType: WeaponModSlotType;

  // Volt or ballistic
  ammoTypes: AmmoType[];

  // Only populated for volt magazine mods to display "Volt Array Mod" (battery) vs "Volt Cell Mod" (cell)
  magazineType?: MagazineType;

  // List of weapon ids. If populated, this mod can ONLY be applied to these weapons.
  exclusive?: number[];

  // How this mod affects the weapon
  stats: Partial<WeaponStats>;

  // Some mods have an ability that provides passive effects
  ability?: ModAbility;

  // Hardcoded actual in-game stats used to calculate what the actual `stats` function should be
  actualStats?: {
    weaponSlug: string;
    stat: keyof WeaponStats;
    adjustment: number;
  }[];
}

/** Some mods have abilities that provide passive effects. */
export interface ModAbility {
  // The name of the ability
  name: string;

  // A description of the ability
  description: string;
}
