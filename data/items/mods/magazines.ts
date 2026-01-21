import { AmmoType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';
import { WeaponMod, WeaponModSlotType } from './mods.interface';

export const MAGAZINES: WeaponMod[] = [
  {
    id: 10400,
    name: 'Extended Feather Mag',
    slug: 'extended-feather-mag',
    rarity: ItemRarity.Enhanced,
    weaponTypes: [WeaponType.AssaultRifle],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Magazine,
    type: ItemType.Mod,
    description: null,
    images: {
      icon: 'assets/items/mods/magazines/magazine-64x64.png',
    },
    sources: {},
    credits: 60,
    stats: {},
  },
  {
    id: 10401,
    name: 'Tapered Heatsink',
    slug: 'tapered-heatsink',
    rarity: ItemRarity.Deluxe,
    weaponTypes: [WeaponType.Railgun],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Magazine,
    type: ItemType.Mod,
    description: null,
    images: {
      icon: 'assets/items/mods/magazines/magazine-64x64.png',
    },
    sources: {},
    credits: 180,
    stats: {},
  },
  {
    id: 10402,
    name: 'Hollow-Case Rounds',
    slug: 'hollow-case-rounds-enhanced',
    rarity: ItemRarity.Enhanced,
    weaponTypes: [WeaponType.AssaultRifle, WeaponType.SubmachineGun],
    ammoTypes: [AmmoType.Ballistic],
    slotType: WeaponModSlotType.Magazine,
    type: ItemType.Mod,
    description: null,
    images: {
      icon: 'assets/items/mods/magazines/magazine-64x64.png',
    },
    sources: {},
    credits: 60,
    stats: {},
  },
  {
    id: 10403,
    name: 'Hollow-Case Rounds',
    slug: 'hollow-case-rounds-deluxe',
    rarity: ItemRarity.Deluxe,
    weaponTypes: [WeaponType.AssaultRifle, WeaponType.SubmachineGun],
    ammoTypes: [AmmoType.Ballistic],
    slotType: WeaponModSlotType.Magazine,
    type: ItemType.Mod,
    description: 'Increase magazine size, reload speed, and range.',
    images: {
      icon: 'assets/items/mods/magazines/magazine-64x64.png',
    },
    sources: {},
    credits: 207,
    stats: {},
  },
];
