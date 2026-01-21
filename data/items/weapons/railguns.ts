import { AmmoType, MagazineType } from '../ammo/ammo.interface';
import { ItemRarity, ItemType } from '../items.interface';
import { WeaponModSlotType } from '../mods/mods.interface';
import { Weapon, WeaponType } from './weapons.interface';

export const RAILGUNS: Weapon[] = [
  {
    id: 85000,
    slug: 'v00-zeus-rg',
    type: ItemType.Weapon,
    name: 'V00 Zeus RG',
    description: 'Anti-materiel railgun. Fires automatically once fully charged.',
    rarity: ItemRarity.Standard,
    images: {
      icon: 'assets/items/weapons/v00-zeus-rg-180x135.png',
      large: 'assets/items/weapons/v00-zeus-rg-600x450.png',
      xlarge: 'assets/items/weapons/v00-zeus-rg-800x600.png',
    },
    sources: {},
    credits: null,
    weaponType: WeaponType.Railgun,
    ammoType: AmmoType.Volt,
    magazineType: MagazineType.VoltCell,
    stats: {
      damage: 120,
      precisionMultiplier: 1.5,
      rateOfFire: 90,

      accuracy: 74.8,
      hipfireSpread: 4.1,
      adsSpread: 0,
      crouchSpreadBonus: 60,
      movingInaccuracy: 90.9,

      handling: 49,
      equipSpeed: 0.9,
      adsSpeed: 0.55,
      weight: 20,
      recoil: 100,
      aimAssist: 1.65,
      reloadSpeed: 3.5,
      chargeTime: 0.75,

      range: 155,
      voltDrain: 50,
      zoom: 2.5,
    },
    modSlotTypes: [
      WeaponModSlotType.Chip,
      WeaponModSlotType.Magazine,
      WeaponModSlotType.Generator,
    ],
  },
];
