export enum MapActivitySourceType {
  CREW_EXFIL = 'Crew Exfil',
  FLARE_ROOM = 'Flare Room',
  GAS_ROOM = 'Gas Room',
  GUARDED_EXFIL = 'Guarded Exfil',
  HIGH_VALUE_TARGET = 'High Value Target',
  INTERCEPT = 'Intercept',
  SUPPLY_DROP = 'Supply Drop',
  UESC_INCURSION = 'UESC Incursion',
  UESC_INTERCEPT = 'UESC Intercept',
  UNKNOWN = 'Unknown Activity',
}

export interface MapActivityItem {
  type: MapActivitySourceType;
  name: string;
  imageUrl: string;
  description: string;
  isHiddenActivitiesItem?: boolean; // Indicates if the activity item has hidden items
  videoUrl?: string; // Optional video URL for the legend item
}
