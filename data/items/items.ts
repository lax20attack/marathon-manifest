import { AMMOS } from './ammo/ammo';
import { BACKPACKS } from './backpack/backpack';
import { CONSUMABLES } from './consumable/consumable';
import { CORES } from './cores/cores';
import { CURRENCIES } from './currencies/currencies';
import { IMPLANTS } from './implants/implants';
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
  ...CORES,
  ...CURRENCIES,
  ...IMPLANTS,
  ...KEYS,
  ...MATERIALS,
  ...MODS,
  ...REPUTATIONS,
  ...VALUABLES,
  ...WEAPONS,
];
