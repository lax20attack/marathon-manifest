import { FACTIONS } from './data/factions/factions';
import { ITEMS } from './data/items/items';
import { MAPS } from './data/maps/maps';
import { RUNNERS } from './data/runners/runners';
import { Manifest } from './mainfest.interface';

export const MANIFEST: Manifest = {
  items: ITEMS,
  factions: FACTIONS,
  maps: [MAPS.perimeter],
  runners: RUNNERS,
};
