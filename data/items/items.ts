import { AMMOS } from './ammo/ammo';
import { BACKPACKS } from './backpack/backpack';
import { CONSUMABLES } from './consumable/consumable';
import { CURRENCIES } from './currencies/currencies';
import { Item } from './items.interface';
import { KEYS } from './keys/keys';
import { MATERIALS } from './materials/materials';
import { MODS } from './mods/mods';
import { REPUTATIONS } from './reputations/reputations';
import { VALUABLES } from './valuables/valuables';
import { WEAPONS } from './weapons/weapons';

export const ITEMS: Item[] = [
  ...AMMOS,
  ...BACKPACKS,
  ...CONSUMABLES,
  ...CURRENCIES,
  ...KEYS,
  ...MATERIALS,
  ...MODS,
  ...REPUTATIONS,
  ...VALUABLES,
  ...WEAPONS,
];
