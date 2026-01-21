import { AMMOS } from './ammo/ammo';
import { BACKPACKS } from './backpacks/backpacks';
import { CONSUMABLES } from './consumable/consumable';
import { CORES } from './cores/cores';
import { CURRENCIES } from './currencies/currencies';
import { EQUIPMENT } from './equipment/equipment';
import { IMPLANTS } from './implants/implants';
import { Item } from './items.interface';
import { KEYS } from './keys/keys';
import { LOST_CONTRACTS } from './lost-contracts/lost-contracts';
import { MODS } from './mods/mods';
import { SALVAGE } from './salvage/salvage';
import { SPONSORED_KITS } from './sponsored-kits/sponsored-kits';
import { VALUABLES } from './valuables/valuables';
import { WEAPONS } from './weapons/weapons';

export const ITEMS: Item[] = [
  ...WEAPONS,
  ...AMMOS,
  ...BACKPACKS,
  ...CONSUMABLES,
  ...CORES,
  ...CURRENCIES,
  ...EQUIPMENT,
  ...IMPLANTS,
  ...KEYS,
  ...LOST_CONTRACTS,
  ...SALVAGE,
  ...MODS,
  ...SPONSORED_KITS,
  ...VALUABLES,
];

// O(1) lookup maps for performance
export const ITEMS_MAP = new Map(ITEMS.map((item) => [item.slug, item]));
