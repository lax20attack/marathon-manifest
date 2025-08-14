import { BACKPACKS } from './backpack/backpack';
import { CONSUMABLES } from './consumable/consumable';
import { CURRENCIES } from './currencies/currencies';
import { Item } from './items.interface';
import { KEYS } from './keys/keys';
import { MATERIALS } from './materials/materials';
import { REPUTATIONS } from './reputations/reputations';
import { VALUABLES } from './valuables/valuables';
import { WEAPONS } from './weapons/weapons';

export const ITEMS: Item[] = [
  ...BACKPACKS,
  ...CONSUMABLES,
  ...CURRENCIES,
  ...KEYS,
  ...MATERIALS,
  ...REPUTATIONS,
  ...VALUABLES,
  ...WEAPONS,
];
