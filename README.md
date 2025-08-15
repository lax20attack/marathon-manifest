# marathon-manifest

Community supported manifest of the items in Bungie's Marathon.

Contribute by opening an issue or creating a PR.



# Contributing

### Please DO NOT break your NDA by adding items from private builds!

First PR? Awesome! You got this. Don't worry, you can't break this repo.

1. Fork this repository, and pull it locally.
2. Open the folder with VS Code.
3. Install the suggested "Prettier" extension. This helps keep formatting the same.
4. Make your changes locally and push to your fork.
5. Create a PR on this repository, with your fork as the source.


## Housekeeping

Please run prettier before opening a PR.

## Adding an item

This is an example of a weapon item added to the manifest.

In File: `apps\client\src\marathon-manifest\data\items\weapons\weapons.ts`
```typescript
{
  id: 8000,
  slug: 'overrun-ar',
  type: ItemType.Weapon,
  name: 'Overrun AR',
  description: '',
  images: {
    icon: 'assets/items/weapons/overrun-ar-180x135.png',
  },
  usages: [],
  sources: [],
  containers: [],
  activities: [],
  credits: 60,
  weaponType: WeaponType.AssaultRifle,
  ammoType: AmmoType.Light,
  stats: {
    damage: 11.5,
    precisionMultiplier: 1.2,
    rateOfFire: 720,
    accuracy: 37.1,
    hipfireSpread: 3.3,
    adsSpread: 0.98,
    crouchSpreadBonus: 87.5,
    movingSpreadPenalty: 90.9,
    control: 42,
    handling: 32,
    equipSpeed: 0.9,
    adsSpeed: 0.5,
    moveSpeedPenalty: 32,
    recoil: 100,
    aimAssist: 2.1,
    reloadSpeed: 3.6,
    range: 33,
    magazine: 24,
    zoom: 1.5,
  }
}
```

You can view the corresponding interface for a Weapon here:

`apps\client\src\marathon-manifest\data\items\weapons\weapons.interface.ts`