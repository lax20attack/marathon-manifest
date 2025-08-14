import { MapActivityItem } from './activity/activity.interface';

export enum MapType {
  PERIMETER = 'perimeter',
  DIRE_MARSH = 'direMarsh',
  OUTPOST = 'outpost',
  UESC_MARATHON = 'uescMarathon',
}

export interface Map {
  id: MapType;
  name: string;
  description: string;
  maxPlayers: string;
  pois: Record<string, MapPOI>;
  imageUrl: string;
  activities: MapActivityItem[];
  hiddenActivities: MapActivityItem[];
}

export interface MapPOI {
  name: string;
  description: string;
  // Coordinates of the POI on the map as a percentage of the map's dimensions
  coordinates: { x: number; y: number };
}
