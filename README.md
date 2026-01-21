# Marathon Manifest

A community-maintained database of all items, weapons, maps, factions, and runners in Bungie's Marathon.
Assets and data are property of Bungie Inc.

Marathon Manifest provides structured, typed data for the Marathon universe, making it easy to build tools, guides, and applications. The manifest includes:

- **Weapons** - Stats, images, and metadata for all weapons
- **Items** - Equipment, consumables, and other items
- **Maps** - Map data including layouts and images
- **Factions** - Faction information and assets
- **Runners** - Runner profiles and abilities

## Usage

### TypeScript

Use in code:

```typescript
import { WEAPONS } from '@marathon-manifest/data/items/weapons/weapons';
import { Weapon, WeaponType } from '@marathon-manifest/data/items/weapons/weapons.interface';

// Get all assault rifles
const assaultRifles = WEAPONS.filter((w) => w.weaponType === WeaponType.AssaultRifle);

// Find a specific weapon
const overrunAR: Weapon = WEAPONS.find((w) => w.slug === 'overrun-ar');
console.log(overrunAR.stats.damage);
```

## Installation

The recommended way to use Marathon Manifest is as a git submodule within an Nx workspace.

### Clone Directly

If you're not using Nx or git submodules, you can clone it directly:

```bash
cd your-project
git clone https://github.com/lax20attack/marathon-manifest
```

### Install as a git submodule

```bash
# From your Nx workspace root
cd libs
git submodule add https://github.com/lax20attack/marathon-manifest
cd ..
```

### Install as an NX workspace library

Clone this repo as a lib at `/libs/marathon-manifest`

You can edit the included `project.json` file to fit your own project, but don't commit this file.

### TypeScript

Set up paths in `tsconfig.json` for better aliasing:

```json
"compilerOptions": {
  "paths": {
     "@marathon-manifest/*": [
      "libs/marathon-manifest/*"
    ]
  },
}
```

# Contributing

Whether you're adding new items, updating stats, or improving documentation, your help is appreciated.

## Getting Started

### First Time Contributing?

1. **Fork this repository** and clone it locally
2. **Open the folder** with VS Code
3. **Install the recommended extensions** (Prettier for consistent formatting)
4. **Make your changes** locally
5. **Push to your fork** and create a Pull Request

## Contribution Guidelines

### Before Submitting a PR

1. ✅ **Run Prettier, ESLint, and Type check** `npm run smoke-test`
2. ✅ **Compress all assets** - Use tools like TinyPNG or ImageOptim
3. ✅ **Keep original assets** - Optional - Place uncompressed versions in `assets/_uncompressed/`
4. ✅ **Write clear commit messages** - Describe what you're adding/changing

### What to Contribute

- **New weapon stats** - Add missing weapons or update existing data
- **Map information** - Map layouts, callouts, and images
- **Assets** - High-quality icons, images, and visual resources
- **Documentation** - Improve this README or add inline documentation

## Adding Items to the Manifest

### Adding a Weapon

Weapons are defined in `data/items/weapons/weapons.ts`. Each weapon includes stats, images, and metadata.

**Example Weapon Entry:**

```typescript
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
}
```

### Adding Other Items

Follow similar patterns for:

- **Items** - `data/items/`
- **Factions** - `data/factions/`
- **Runners** - `data/runners/`

Each has its own interface defining the required fields.

## Asset Guidelines

### Images

- **Weapon Icons** - There are multiple sizes for weapons. For example:

  - overrun-ar-180x135.png
  - overrun-ar-600x450.png
  - overrun-ar-800x600.png

- **Other Icons** Almost all other icons are square. Ex: 64x64, 72x72, 128x128. There are different sizes because at the time of adding the icon, these were the largest sizes available. Ideally, we would have all icons with a standard size (128x128 for example)
