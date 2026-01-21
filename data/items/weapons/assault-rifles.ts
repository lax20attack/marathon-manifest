import { AmmoType, MagazineType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType, ItemUpdatedVersion } from '../items.interface';
import { WeaponModSlotType } from '../mods/mods.interface';
import { Weapon, WeaponType } from './weapons.interface';

export const ASSAULT_RIFLES: Weapon[] = [
  {
    id: 81000,
    slug: 'overrun-ar',
    type: ItemType.Weapon,
    name: 'Overrun AR',
    description: 'Light assault rifle with high rate of fire.',
    rarity: ItemRarity.Standard,
    images: {
      icon: 'assets/items/weapons/overrun-ar-180x135.png',
      large: 'assets/items/weapons/overrun-ar-600x450.png',
      xlarge: 'assets/items/weapons/overrun-ar-800x600.png',
    },
    sources: {},
    credits: 60,
    weaponType: WeaponType.AssaultRifle,
    ammoType: AmmoType.Ballistic,
    magazineType: MagazineType.Light,
    stats: {
      damage: 11.5,
      precisionMultiplier: 1.2,
      rateOfFire: 720,

      accuracy: 42.1,
      hipfireSpread: 3.14,
      adsSpread: 1.21,
      crouchSpreadBonus: 87.5,
      movingInaccuracy: 90.9,

      handling: 36,
      equipSpeed: 0.9,
      adsSpeed: 0.69,
      weight: 32,
      recoil: 100,
      aimAssist: 1.68,
      reloadSpeed: 3.6,

      range: 27,
      magazine: 20,
      zoom: 1.2,
    },
    modSlotTypes: [
      WeaponModSlotType.Optic,
      WeaponModSlotType.Magazine,
      WeaponModSlotType.Chip,
      WeaponModSlotType.Grip,
    ],
  },
  {
    id: 81003,
    updatedVersion: ItemUpdatedVersion.ALPHA_6,
    slug: 'm77-assault-rifle',
    type: ItemType.Weapon,
    name: 'M77 Assault Rifle',
    description: 'Ballistic assault rifle. Toggle the built-in flip scope for high precision.',
    rarity: ItemRarity.Standard,
    images: {
      icon: 'assets/items/weapons/m77-assault-rifle-180x135.png',
      large: 'assets/items/weapons/m77-assault-rifle-600x450.png',
      xlarge: 'assets/items/weapons/m77-assault-rifle-800x600.png',
    },
    sources: {},
    credits: null,
    weaponType: WeaponType.AssaultRifle,
    ammoType: AmmoType.Ballistic,
    magazineType: MagazineType.Light,
    stats: {
      damage: 15,
      precisionMultiplier: 1.5,
      rateOfFire: 450,

      accuracy: 54.9,
      hipfireSpread: 2.18,
      adsSpread: 1.34,
      crouchSpreadBonus: 80,
      movingInaccuracy: 40.9,

      handling: 41,
      equipSpeed: 0.9,
      adsSpeed: 0.5,
      weight: 32,
      recoil: 95,
      aimAssist: 1.4,
      reloadSpeed: 2.6,

      range: 37,
      magazine: 24,
      zoom: 1.2,
    },
    modSlotTypes: [
      WeaponModSlotType.Chip,
      WeaponModSlotType.Magazine,
      WeaponModSlotType.Grip,
    ],
  },
];
