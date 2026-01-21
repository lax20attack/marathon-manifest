import { BARRELS } from './barrels';
import { CHIPS } from './chips';
import { DAMPENERS } from './dampeners';
import { GENERATORS } from './generators';
import { GRIPS } from './grips';
import { MAGAZINES } from './magazines';
import { WeaponMod } from './mods.interface';
import { MUZZLES } from './muzzle';
import { OPTICS } from './optics';

export const MODS: WeaponMod[] = [
  ...BARRELS,
  ...CHIPS,
  ...DAMPENERS,
  ...GENERATORS,
  ...GRIPS,
  ...MAGAZINES,
  ...MUZZLES,
  ...OPTICS,
];
