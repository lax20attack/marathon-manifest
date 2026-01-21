import { ASSAULT_RIFLES } from './assault-rifles';
import { MACHINE_GUNS } from './machine-guns';
import { PISTOLS } from './pistols';
import { PRECISION_RIFLES } from './precision-rifles';
import { RAILGUNS } from './railguns';
import { SHOTGUNS } from './shotguns';
import { SNIPER_RIFLES } from './sniper-rifles';
import { SUBMACHINE_GUNS } from './submachine-guns';
import { Weapon } from './weapons.interface';

export const WEAPONS: Weapon[] = [
  ...ASSAULT_RIFLES,
  ...MACHINE_GUNS,
  ...PISTOLS,
  ...PRECISION_RIFLES,
  ...RAILGUNS,
  ...SHOTGUNS,
  ...SNIPER_RIFLES,
  ...SUBMACHINE_GUNS,
];
