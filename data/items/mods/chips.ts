import { AmmoType } from '../ammo/ammo.interface';
import { ItemImages, ItemRarity, ItemType } from '../items.interface';
import { WeaponType } from '../weapons/weapons.interface';
import { WeaponMod, WeaponModSlotType } from './mods.interface';

const chipImages: ItemImages = {
  icon: 'assets/items/mods/chips/chip-64x64.png',
  large: 'assets/items/mods/chips/chip-128x128.png',
};

const ALL_WEAPON_TYPES = Object.values(WeaponType);

export const CHIPS: WeaponMod[] = [
  {
    id: 10200,
    name: 'Flash Draw Chip',
    slug: 'flash-draw-chip',
    rarity: ItemRarity.Superior,
    weaponTypes: ALL_WEAPON_TYPES,
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Chip,
    type: ItemType.Mod,
    description: null,
    ability: {
      name: 'Energy Siphon',
      description: 'Restore health or shields when damaging a target affected by EMP.',
    },
    images: chipImages,
    sources: {},
    credits: 540,
    stats: {},
  },
  {
    id: 10201,
    name: 'Keen Scout Chip',
    slug: 'keen-scout-chip',
    rarity: ItemRarity.Enhanced,
    weaponTypes: ALL_WEAPON_TYPES,
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Chip,
    type: ItemType.Mod,
    description: null,
    ability: null,
    images: chipImages,
    sources: {},
    credits: 60,
    stats: {},
  },
  {
    id: 10202,
    name: 'Motionsense Chip',
    slug: 'motionsense-chip',
    rarity: ItemRarity.Enhanced,
    weaponTypes: ALL_WEAPON_TYPES,
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Chip,
    type: ItemType.Mod,
    description: null,
    images: chipImages,
    sources: {},
    credits: 60,
    stats: {},
  },
  {
    id: 10206,
    name: 'Torch Bug',
    slug: 'torch-bug',
    rarity: ItemRarity.Deluxe,
    weaponTypes: ALL_WEAPON_TYPES,
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Chip,
    type: ItemType.Mod,
    description: null,
    ability: {
      name: 'Challenger Class Asset',
      description: `Eliminating a hostile causes them to explode.`,
    },
    images: {
      icon: 'assets/items/mods/chips/chip-2-72x72.png',
    },
    sources: {},
    credits: null,
    stats: {},
  },
  {
    id: 10211,
    name: 'Ornithologist',
    slug: 'ornithologist',
    rarity: ItemRarity.Superior,
    weaponTypes: ALL_WEAPON_TYPES,
    ammoTypes: [AmmoType.Ballistic, AmmoType.Volt],
    slotType: WeaponModSlotType.Chip,
    type: ItemType.Mod,
    description: null,
    ability: {
      name: 'Sneak Class Asset',
      description: `After aiming down sights for a brief duration, projectile impacts from this weapon create a distracting bird call.`,
    },
    images: {
      icon: 'assets/items/mods/chips/chip-6-72x72.png',
    },
    sources: {},
    credits: 621,
    stats: {},
  },
];
