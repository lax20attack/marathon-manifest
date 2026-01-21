export enum MapActivityType {
  ACCESS_CODE = 'Access Code',
  CONVEYANCE_REQUEST = 'Conveyance Request',
  CREW_EXFIL = 'Crew Exfil',
  FLARE_ROOM = 'Flare Room',
  GUARDED_EXFIL = 'Guarded Exfil',
  HAZARD_OVERRIDE_KEY = 'Hazard Override Key',
  HAZARD_ROOM = 'Hazard Room',
  HIGH_VALUE_TARGET = 'High Value Target',
  INTERCEPT = 'Intercept',
  LOCKBOX_KEY = 'Lockbox Key',
  LOCKDOWN_ZONE = 'Lockdown Zone',
  LOCKED_ROOM = 'Locked Room',
  SPAWN_POINT = 'Spawn Point',
  SUPPLY_CLEARANCE_CODE = 'Supply Clearance Code',
  SUPPLY_DROP = 'Supply Drop',
  // TREASURE = 'Treasure',
  UESC_INCURSION = 'UESC Incursion',
  UESC_INTERCEPT = 'UESC Intercept',
}

export interface MapActivityItem {
  type: MapActivityType;
  name: string;
  imageUrl: string;
  description: string;
}
