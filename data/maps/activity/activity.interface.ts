export enum MapActivityType {
  CREW_EXFIL = 'crewExfil',
  FLARE_ROOM = 'flareRoom',
  GAS_ROOM = 'gasRoom',
  GUARDED_EXFIL = 'guardedExfil',
  HIGH_VALUE_TARGET = 'highValueTarget',
  INTERCEPT = 'intercept',
  SUPPLY_DROP = 'supplyDrop',
  UESC_INCURSION = 'uescIncursion',
  UNKNOWN = 'unknownActivity',
}

export interface MapActivityItem {
  type: MapActivityType;
  name: string;
  imageUrl: string;
  description: string;
  isHiddenActivitiesItem?: boolean; // Indicates if the activity item has hidden items
  videoUrl?: string; // Optional video URL for the legend item
}
