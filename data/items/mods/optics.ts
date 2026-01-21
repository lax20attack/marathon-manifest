import { AmmoType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';
import { WeaponMod, WeaponModSlotType } from './mods.interface';

export const OPTICS: WeaponMod[] = [
  {
    id: 10600,
    name: 'Midsight Optic',
    slug: 'midsight-optic',
    rarity: ItemRarity.Enhanced,
    weaponTypes: [WeaponType.AssaultRifle, WeaponType.SubmachineGun],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Optic,
    type: ItemType.Mod,
    description: 'Slightly increases zoom, accuracy while moving, and ADS accuracy.',
    images: {
      icon: 'assets/items/mods/optics/optic-64x64.png',
    },
    sources: {},
    credits: 60,
    stats: {},
  },
  {
    id: 10601,
    name: 'Midsight Optic',
    slug: 'midsight-optic-deluxe',
    rarity: ItemRarity.Deluxe,
    weaponTypes: [WeaponType.AssaultRifle, WeaponType.SubmachineGun],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Optic,
    type: ItemType.Mod,
    description: null,
    images: {
      icon: 'assets/items/mods/optics/optic-64x64.png',
    },
    sources: {},
    credits: 180,
    stats: {},
  },
  {
    id: 10607,
    name: 'Far Reach Optic',
    slug: 'far-reach-optic',
    rarity: ItemRarity.Deluxe,
    weaponTypes: [WeaponType.AssaultRifle, WeaponType.SubmachineGun],
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Optic,
    type: ItemType.Mod,
    description: 'Increases zoom and ADS accuracy',
    ability: {
      name: 'Rangefinder',
      description: `Uses laser pulses to measure distance to the target.`,
    },
    images: {
      icon: 'assets/items/mods/optics/far-reach-optic-64x64.png',
    },
    sources: {},
    credits: 207,
    stats: {},
  },
];
