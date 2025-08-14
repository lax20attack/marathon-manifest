import { Faction } from './data/factions/factions.interface';
import { Item } from './data/items/items.interface';
import { Map } from './data/maps/maps.interface';
import { Runner } from './data/runners/runners.interface';

export interface Manifest {
  items: Item[];
  factions: Faction[];
  maps: Map[];
  runners: Runner[];
}
