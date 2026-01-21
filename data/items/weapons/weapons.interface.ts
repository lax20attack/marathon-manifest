import { AmmoType, MagazineType } from '../ammo/ammo.interface';
import { Item } from '../items.interface';
import { WeaponModSlotType } from '../mods/mods.interface';

export interface Weapon extends Item {
  weaponType: WeaponType;
  ammoType: AmmoType;
  magazineType: MagazineType;
  stats: WeaponStats;
  modSlotTypes: WeaponModSlotType[];
}

export interface WeaponStats {
  damage: number;
  precisionMultiplier: number;
  rateOfFire: number;

  // Shotguns do not have these stats
  accuracy?: number;
  hipfireSpread?: number;
  adsSpread?: number;
  crouchSpreadBonus?: number;
  movingInaccuracy?: number;

  // Handling - Calculated field, not an attribute of weapons but we'll keep this here if needed to recalculate later
  handling?: number;
  equipSpeed: number;
  adsSpeed: number;
  weight: number;
  recoil: number;
  aimAssist: number;
  reloadSpeed: number;

  // Volt weapons only
  chargeTime?: number;

  range: number;

  // Ballistic weapons
  magazine?: number;

  // Volt weapons
  voltDrain?: number;

  zoom: number;

  // Shotgun only
  pelletCount?: number;
  spreadAngle?: number;
}

export enum WeaponType {
  AssaultRifle = 'Assault Rifle',
  MachineGun = 'Machine Gun',
  Pistol = 'Pistol',
  PrecisionRifle = 'Precision Rifle',
  Railgun = 'Railgun',
  Shotgun = 'Shotgun',
  SniperRifle = 'Sniper Rifle',
  SubmachineGun = 'Submachine Gun',
}
