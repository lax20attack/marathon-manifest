# marathon-manifest

Community supported manifest of the items in Bungie's Marathon.

Contribute by opening an issue or creating a PR.



# Contributing

### Please DO NOT break your NDA by adding items from private builds!

First PR? Awesome, you got this. Don't worry, you can't break this repo.

1. Copy this repositoy - Fork this repository, and pull it locally.
2. Open the folder with VS Code
3. Install the suggested "Prettier" extension. This helps keep formatting the same.
4. Make your changes locally and push to your fork
5. Create a PR on this repository, with your fork as the source.


## Housekeeping

Please run prettier before opening a PR.

## Adding an item

This is an example of an item added to the manifest.

```typescript
  {
    // Sequential ID. Materials start at 1000. Each type will start at it's own thousendth.
    id: 1000,

    // Slug used to uniquely identify the item
    slug: 'micro-processor',

    // Image of the item. Notice the path is from te relative root of the repo
    imageUrl: 'assets/items/materials/processor.png',

    // Properties directly from the game
    type: ItemType.Material,
    rarity: ItemRarity.Enhanced,
    name: 'Micro Processor',
    description: 'Grants a temporary but significant boost to computing power.',
    usages: [ItemUsageType.CyberAcmeUpgrades, ItemUsageType.NuCaloricVendorUnlocks],
    sources: [
      {
        type: ItemSourceType.MapPoi,
        map: MAPS.perimeter,
        pois: [MAPS.perimeter.pois.northRelay, MAPS.perimeter.pois.southRelay],
      },
    ],
    containers: [{ type: ItemContainerType.CoreStorage }],
    credits: 10,
  },
```
