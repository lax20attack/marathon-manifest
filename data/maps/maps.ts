import { MapActivityType } from './activity/activity.interface';
import { Map, MapId } from './maps.interface';

export const MAPS: Record<MapId, Map> = {
  perimeter: {
    id: 'perimeter',
    slug: 'perimeter',
    name: 'Perimeter',
    description: 'Perimeter is a vast expanse of space surrounding the core.',
    teamCount: 6,
    pois: {
      northRelay: {
        name: 'North Relay',
        description: ``,
        coordinates: { x: 47, y: 20.3 },
      },
      station: {
        name: 'Station',
        description: `Operational zone support facility from the colony's first major expansion.`,
        coordinates: { x: 70.4, y: 38 },
      },
      hauler: {
        name: 'Hauler',
        description: ``,
        coordinates: { x: 34.5, y: 49 },
      },
      southRelay: {
        name: 'South Relay',
        description: `Contains: Enhanced Processors, Enhanced Wires, Cores, Data cards.`,
        coordinates: { x: 68, y: 72.5 },
      },
      overflow: {
        name: 'Overflow',
        description: ``,
        coordinates: { x: 38.75, y: 80 },
      },
    },
    imageUrl: 'assets/maps/perimeter.jpg',
    activities: [
      {
        id: 0,
        type: MapActivityType.SPAWN_POINT,
        coordinatesList: [
          { x: 53.0, y: 2.7 },
          { x: 77.3, y: 70.0 },
          { x: 29.8, y: 88.9 },
        ],
      },
      {
        id: 1,
        type: MapActivityType.CREW_EXFIL,
        coordinatesList: [
          { x: 63.1, y: 75.1 },
          { x: 69.2, y: 42.7 },
          { x: 43.1, y: 18.5 },
          { x: 35.3, y: 55.3 },
          { x: 38.9, y: 76 },
        ],
      },
      {
        id: 2,
        type: MapActivityType.GUARDED_EXFIL,
        coordinatesList: [
          { x: 41.6, y: 37.5 },
        ],
      },
      {
        id: 3,
        type: MapActivityType.HIGH_VALUE_TARGET,
        coordinatesList: [
          { x: 52.4, y: 27.5 },
        ],
      },
      {
        id: 5,
        type: MapActivityType.UESC_INCURSION,
        coordinatesList: [
          { x: 66.5, y: 43.3 },
        ],
      },
      {
        id: 4,
        type: MapActivityType.INTERCEPT,
        coordinatesList: [
          { x: 41.4, y: 82.6 },
          { x: 66.9, y: 66.0 },
          { x: 45.1, y: 22.1 },
        ],
      },
      {
        id: 6,
        type: MapActivityType.HAZARD_ROOM,
        coordinatesList: [
          { x: 70.8, y: 34.9 },
          { x: 44.5, y: 13.9 },
        ],
      },
      {
        id: 7,
        type: MapActivityType.HAZARD_OVERRIDE_KEY,
        coordinatesList: [
          { x: 50.4, y: 13.9 },
        ],
      },
      {
        id: 8,
        type: MapActivityType.SUPPLY_DROP,
        coordinatesList: [
          { x: 47.3, y: 41.4 },
        ],
      },
      {
        id: 9,
        type: MapActivityType.FLARE_ROOM,
        coordinatesList: [
          { x: 71.0, y: 70.7 },
          { x: 66.1, y: 45.6 },
        ],
      },
      {
        id: 10,
        type: MapActivityType.LOCKBOX_KEY,
        coordinatesList: [
          { x: 68.5, y: 66.5 },
          { x: 70.5, y: 44.1 },
        ],
      },
    ],
  },
  direMarsh: {
    id: 'direMarsh',
    slug: 'dire-marsh',
    name: 'Dire Marsh',
    description: 'Dire Marsh is a treacherous swamp filled with dangerous creatures.',
    teamCount: 5,
    pois: {
      bioResearch: {
        name: 'Bio-Research',
        description: `Research hub for scientists studying Tau Ceti IV's swampland fauna.`,
        coordinates: { x: 69.5, y: 16 },
      },
      greenhouse: {
        name: 'Greenhouse',
        description: `Cultivation center for Sol and Tau Ceti vegetation to support and expand colony viability.`,
        coordinates: { x: 49.5, y: 26.75 },
      },
      complex: {
        name: 'Complex',
        description: `Heavily restricted during the colony era. Once staffed by an elite core of UESC colony administrators and corporate scientists.`,
        coordinates: { x: 82, y: 47 },
      },
      algaePonds: {
        name: 'Algae Ponds',
        description: `Agricultural site focused on cultivation of Tau Ceti IV's native algae proteins.`,
        coordinates: { x: 40, y: 55 },
      },
      quarantine: {
        name: 'Quarantine',
        description: `Makeshift isolation and treatment site, run by the UESC to to contain an unusual contagion.`,
        coordinates: { x: 11.4, y: 62.5 },
      },
      fieldMaintenance: {
        name: 'Field Maintenance',
        description: `Hub for heavy equipment used to maintain the colony's nascent industry and agriculture.`,
        coordinates: { x: 28, y: 82.5 },
      },
      aiUplink: {
        name: 'AI Uplink',
        description: ``,
        coordinates: { x: 63.1, y: 82.5 },
      },
    },
    imageUrl: 'assets/maps/dire-marsh.jpg',
    activities: [
      {
        id: 0,
        type: MapActivityType.SPAWN_POINT,
        coordinatesList: [
          { x: 2.8, y: 66.4 },
          { x: 64.8, y: 85.1 },
        ],
      },
      {
        id: 1,
        type: MapActivityType.CREW_EXFIL,
        coordinatesList: [
          { x: 79.2, y: 33.4 },
          { x: 79.3, y: 54.5 },
          { x: 46.1, y: 29.6 },
          { x: 63, y: 15.8 },
          { x: 35.6, y: 50.75 },
          { x: 15.1, y: 68 },
        ],
      },
      {
        id: 2,
        type: MapActivityType.GUARDED_EXFIL,
        coordinatesList: [
          { x: 71.3, y: 42.0 },
          { x: 39.8, y: 32.2 },
        ],
      },
      {
        id: 3,
        type: MapActivityType.HIGH_VALUE_TARGET,
        coordinatesList: [],
      },
      {
        id: 4,
        type: MapActivityType.UESC_INCURSION,
        coordinatesList: [
          { x: 56.5, y: 52.2 },
          { x: 55.7, y: 34.0 },
        ],
      },
      {
        id: 5,
        type: MapActivityType.INTERCEPT,
        coordinatesList: [
          { x: 31.0, y: 80.5 },
          { x: 8.2, y: 62.2 },
          { x: 82.8, y: 49.1 },
          { x: 43.3, y: 60.3 },
          { x: 8.6, y: 49.8 },
        ],
      },
      {
        id: 6,
        type: MapActivityType.HAZARD_ROOM,
        coordinatesList: [
          { x: 86.0, y: 38.4 },
          { x: 29.5, y: 65.3 },
        ],
      },
      {
        id: 7,
        type: MapActivityType.HAZARD_OVERRIDE_KEY,
        coordinatesList: [
          { x: 22.6, y: 70.1 },
          { x: 84.8, y: 43.9 },
        ],
      },
      {
        id: 8,
        type: MapActivityType.SUPPLY_DROP,
        coordinatesList: [
          { x: 15.5, y: 59 },
          { x: 65.4, y: 21.8 },
        ],
      },
      {
        id: 9,
        type: MapActivityType.FLARE_ROOM,
        coordinatesList: [
          { x: 16.7, y: 76.3 },
          { x: 71.8, y: 77.1 },
          { x: 39.1, y: 57.8 },
          { x: 31.7, y: 66.9 },
        ],
      },
    ],
  },
};
