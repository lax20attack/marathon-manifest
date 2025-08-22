import { Item } from '../items.interface';
import { WeaponStats, WeaponType } from '../weapons/weapons.interface';

export enum WeaponModSlotType {
  Barrel = 'Barrel',
  Chip = 'Chip',
  Grip = 'Grip',
  Magazine = 'Magazine',
  Muzzle = 'Muzzle',
  Optic = 'Optic',

  UNKNOWN = 'Unknown', // Conquest LMG's last slot, not sure what it is yet
  UNKNOWN2 = 'Unknown2', // V00 Zeus RG's last slot, not sure what it is yet
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
    imageUrl: 'assets/items/mods/slots/barrel-42x42.jpg',
  },
  [WeaponModSlotType.Chip]: {
    type: WeaponModSlotType.Chip,
    name: 'Chip',
    imageUrl: 'assets/items/mods/slots/chip-42x42.jpg',
  },
  [WeaponModSlotType.Grip]: {
    type: WeaponModSlotType.Grip,
    name: 'Grip',
    imageUrl: 'assets/items/mods/slots/grip-42x42.jpg',
  },
  [WeaponModSlotType.Magazine]: {
    type: WeaponModSlotType.Magazine,
    name: 'Magazine',
    imageUrl: 'assets/items/mods/slots/magazine-42x42.jpg',
  },
  [WeaponModSlotType.Muzzle]: {
    type: WeaponModSlotType.Muzzle,
    name: 'Muzzle',
    imageUrl: 'assets/items/mods/slots/muzzle-42x42.jpg',
  },
  [WeaponModSlotType.Optic]: {
    type: WeaponModSlotType.Optic,
    name: 'Optic',
    imageUrl: 'assets/items/mods/slots/optic-42x42.jpg',
  },
  [WeaponModSlotType.UNKNOWN]: {
    type: WeaponModSlotType.UNKNOWN,
    name: 'Unknown',
    imageUrl: 'assets/items/mods/slots/unknown-42x42.jpg',
  },
  [WeaponModSlotType.UNKNOWN2]: {
    type: WeaponModSlotType.UNKNOWN2,
    name: 'Unknown',
    imageUrl: 'assets/items/mods/slots/unknown2-42x42.jpg',
  },
};

export interface WeaponMod extends Item {
  // Railgun, Shotgun, Sniper Rifle, etc.
  weaponType: WeaponType;

  // The slot this mod fits into
  slotType: WeaponModSlotType;

  // How this mod affects the weapon
  stats: Partial<WeaponStats>;

  // Some mods have an ability that provides passive effects
  ability?: ModAbility;
}

/**
 * Some mods have abilities that provide passive effects.
 */
export interface ModAbility {
  // The name of the ability
  name: string;

  // A description of the ability
  description: string;
}
