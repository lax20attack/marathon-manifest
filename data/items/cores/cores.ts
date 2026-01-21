import { ASSASSIN_CORES } from './assassin';
import { Core } from './cores.interface';
import { DESTROYER_CORES } from './destroyer';
import { RECON_CORES } from './recon';
import { THIEF_CORES } from './thief';
import { TRIAGE_CORES } from './triage';
import { VANDAL_CORES } from './vandal';

export const CORES: Core[] = [
  ...DESTROYER_CORES,
  ...VANDAL_CORES,
  ...RECON_CORES,
  ...ASSASSIN_CORES,
  ...TRIAGE_CORES,
  ...THIEF_CORES,
];
