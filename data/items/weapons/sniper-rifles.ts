import { AmmoType, MagazineType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType, ItemUpdatedVersion } from '../items.interface';
import { WeaponModSlotType } from '../mods/mods.interface';
import { Weapon, WeaponType } from './weapons.interface';

export const SNIPER_RIFLES: Weapon[] = [
  {
    id: 87002,
    updatedVersion: ItemUpdatedVersion.ALPHA_6,
    slug: 'longshot',
    type: ItemType.Weapon,
    name: 'Longshot',
    description: 'Ballistic semiautomatic sniper rifle. High damage, high customization.',
    rarity: ItemRarity.Standard,
    images: {
      icon: 'assets/items/weapons/longshot-180x135.png',
      large: 'assets/items/weapons/longshot-600x450.png',
      xlarge: 'assets/items/weapons/longshot-800x600.png',
    },
    sources: {},
    credits: null,
    weaponType: WeaponType.SniperRifle,
    ammoType: AmmoType.Ballistic,
    magazineType: MagazineType.MIPS,
    stats: {
      damage: 70,
      precisionMultiplier: 2,
      rateOfFire: 50,

      accuracy: 74.8,
      hipfireSpread: 6.75,
      adsSpread: 0,
      crouchSpreadBonus: 60,
      movingInaccuracy: 90.9,

      handling: 29,
      equipSpeed: 1.7,
      adsSpeed: 1.1,
      weight: 38,
      recoil: 60,
      aimAssist: 0.3,
      reloadSpeed: 4.7,

      range: 175,
      magazine: 3,
      zoom: 4,
    },
    modSlotTypes: [
      WeaponModSlotType.Optic,
      WeaponModSlotType.Chip,
      WeaponModSlotType.Magazine,
      WeaponModSlotType.Barrel,
    ],
  },
];
