import { AmmoType, MagazineType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType, ItemUpdatedVersion } from '../items.interface';
import { WeaponModSlotType } from '../mods/mods.interface';
import { Weapon, WeaponType } from './weapons.interface';

export const MACHINE_GUNS: Weapon[] = [
  {
    id: 82002,
    updatedVersion: ItemUpdatedVersion.ALPHA_6,
    slug: 'conquest-lmg',
    type: ItemType.Weapon,
    name: 'Conquest LMG',
    description: 'Light machine gun with ramping rate of fire. Stability is increased while firing from crouched position.',
    rarity: ItemRarity.Standard,
    images: {
      icon: 'assets/items/weapons/conquest-lmg-180x135.png',
      large: 'assets/items/weapons/conquest-lmg-600x450.png',
      xlarge: 'assets/items/weapons/conquest-lmg-800x600.png',
    },
    sources: {},
    credits: null,
    weaponType: WeaponType.MachineGun,
    ammoType: AmmoType.Ballistic,
    magazineType: MagazineType.Light,
    stats: {
      damage: 16,
      precisionMultiplier: 1.4,
      rateOfFire: 540,

      accuracy: 49.9,
      hipfireSpread: 2.8,
      adsSpread: 0.85,
      crouchSpreadBonus: 70,
      movingInaccuracy: 90.9,

      handling: 22,
      equipSpeed: 1.2,
      adsSpeed: 0.8,
      weight: 47.5,
      recoil: 90,
      aimAssist: 1.4,
      reloadSpeed: 6.4,

      range: 60,
      magazine: 36,
      zoom: 1.2,
    },
    modSlotTypes: [
      WeaponModSlotType.Optic,
      WeaponModSlotType.Chip,
      WeaponModSlotType.Magazine,
      WeaponModSlotType.Shield,
    ],
  },
];
