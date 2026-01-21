import { MapActivityType } from './activity/activity.interface';

export type MapId = 'perimeter' | 'direMarsh';

export type PoiId =
  // Perimeter
  | 'northRelay'
  | 'station'
  | 'hauler'
  | 'southRelay'
  | 'overflow'

  // Dire Marsh
  | 'aiUplink'
  | 'bioResearch'
  | 'greenhouse'
  | 'complex'
  | 'algaePonds'
  | 'quarantine'
  | 'fieldMaintenance';

export interface Map {
  id: MapId;
  slug: string;
  name: string;
  description: string;
  teamCount: number;
  pois: Partial<Record<PoiId, MapPOI>>;
  imageUrl: string;
  activities: MapActivity[];
}

// The map activity and it's location
export interface MapActivity {
  id: number;
  type: MapActivityType;
  coordinatesList: { x: number; y: number }[];
}

export interface MapPOI {
  name: string;
  description: string;
  // Coordinates of the POI on the map as a percentage of the map's dimensions
  coordinates: { x: number; y: number };
}
