# marathon-manifest

Community supported manifest of the items in Bungie's Marathon.

Contribute by opening an issue or creating a PR.



# Contributing

### Please DO NOT break your NDA by adding items from private builds!

No PR is too small. Larger architectural or layout changes are welcome too, but let's discuss first.


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