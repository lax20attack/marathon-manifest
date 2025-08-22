import { MAP_ACTIVITY_ITEMS } from './activity/activity';
import { MapActivitySourceType } from './activity/activity.interface';
import { Map, MapType } from './maps.interface';

export const MAPS: Record<MapType, Map> = {
  perimeter: {
    id: MapType.PERIMETER,
    name: 'Perimeter',
    description: 'Perimeter is a vast expanse of space surrounding the core.',
    maxPlayers: '18 Players, 6 Teams of 3',
    pois: {
      northRelay: {
        name: 'North Relay',
        description: ``,
        coordinates: { x: 47, y: 19.1 },
      },
      station: {
        name: 'Station',
        description: `Operational zone support facility from the colony's first major expansion.`,
        coordinates: { x: 70.4, y: 36.7 },
      },
      hauler: {
        name: 'Hauler',
        description: ``,
        coordinates: { x: 34.5, y: 47.75 },
      },
      southRelay: {
        name: 'South Relay',
        description: ``,
        coordinates: { x: 68, y: 71 },
      },
      overflow: {
        name: 'Overflow',
        description: ``,
        coordinates: { x: 38.75, y: 78.5 },
      },
    },
    imageUrl: 'assets/maps/perimeter.jpg',
    activities: [
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.CREW_EXFIL],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.GUARDED_EXFIL],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.HIGH_VALUE_TARGET],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.INTERCEPT],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.UESC_INCURSION],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.UNKNOWN],
    ],
    hiddenActivities: [
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.GAS_ROOM],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.SUPPLY_DROP],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.FLARE_ROOM],
    ],
  },
  direMarsh: {
    id: MapType.DIRE_MARSH,
    name: 'Dire Marsh',
    description: 'Dire Marsh is a treacherous swamp filled with dangerous creatures.',
    maxPlayers: '15 Players, 5 Teams of 3',
    pois: {
      bioResearch: {
        name: 'Bio-Research',
        description: `Research hub for scientists studying Tau Ceti IV's swampland fauna.`,
        coordinates: { x: 69.5, y: 14.3 },
      },
      greenhouse: {
        name: 'Greenhouse',
        description: `Cultivation center for Sol and Tau Ceti vegetation to support and expand colony viability.`,
        coordinates: { x: 49.5, y: 25.2 },
      },
      complex: {
        name: 'Complex',
        description: `Heavily restricted during the colony era. Once staffed by an elite core of UESC colony administrators and corporate scientists.`,
        coordinates: { x: 82, y: 45.5 },
      },
      algaePonds: {
        name: 'Algae Ponds',
        description: `Agricultural site focused on cultivation of Tau Ceti IV's native algae proteins.`,
        coordinates: { x: 40, y: 53.75 },
      },
      quarantine: {
        name: 'Quarantine',
        description: `Makeshift isolation and treatment site, run by the UESC to to contain an unusual contagion.`,
        coordinates: { x: 11.4, y: 61 },
      },
      fieldMaintenance: {
        name: 'Field Maintenance',
        description: `Hub for heavy equipment used to maintain the colony's nascent industry and agriculture.`,
        coordinates: { x: 28, y: 81 },
      },
      aiUplink: {
        name: 'AI Uplink',
        description: ``,
        coordinates: { x: 63.1, y: 81 },
      },
    },
    imageUrl: 'assets/maps/dire-marsh.jpg',
    activities: [
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.CREW_EXFIL],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.GUARDED_EXFIL],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.HIGH_VALUE_TARGET],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.INTERCEPT],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.UESC_INCURSION],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.UNKNOWN],
    ],
    hiddenActivities: [
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.GAS_ROOM],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.SUPPLY_DROP],
      MAP_ACTIVITY_ITEMS[MapActivitySourceType.FLARE_ROOM],
    ],
  },
  outpost: {
    id: MapType.OUTPOST,
    name: 'Outpost',
    description: 'Outpost is a remote facility located in a harsh environment.',
    maxPlayers: '9-12 Players, 3-4 Teams of 3',
    pois: {},
    imageUrl: 'assets/maps/outpost.jpg',
    activities: [],
    hiddenActivities: [],
  },
  uescMarathon: {
    id: MapType.UESC_MARATHON,
    name: 'UESC Marathon',
    description: 'Unknown',
    maxPlayers: 'Unknown',
    pois: {},
    imageUrl: 'assets/maps/uesc-marathon.jpg',
    activities: [],
    hiddenActivities: [],
  },
};
