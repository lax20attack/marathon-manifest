import { MapActivityItem, MapActivityType } from './activity.interface';

export const MAP_ACTIVITIES: Record<string, MapActivityItem> = {
  [MapActivityType.SPAWN_POINT]: {
    type: MapActivityType.SPAWN_POINT,
    name: 'Spawn Point',
    imageUrl: 'assets/maps/activities/spawn-point.png',
    description: 'The location where players will spawn at the start of the match.',
  },
  [MapActivityType.CREW_EXFIL]: {
    type: MapActivityType.CREW_EXFIL,
    name: 'Crew Exfil',
    imageUrl: 'assets/maps/activities/crew-exfil.png',
    description:
      'A designated area for crew members to safely exfiltrate from the map. This can only be used one time before moving to a new location.',
  },
  [MapActivityType.GUARDED_EXFIL]: {
    type: MapActivityType.GUARDED_EXFIL,
    name: 'Guarded Exfil',
    imageUrl: 'assets/maps/activities/guarded-exfil.png',
    description: 'A guarded extraction point. Once the exfil is started, UESC forces will arrive to defend the area.',
  },
  [MapActivityType.HIGH_VALUE_TARGET]: {
    type: MapActivityType.HIGH_VALUE_TARGET,
    name: 'High Value Target',
    imageUrl: 'assets/maps/activities/high-value-target.png',
    description: `A bubble spawns around a high value area. Enemies can shoot out but you can't shoot them unless you're inside the bubble.
    After the first wave, the bubble will disappear.
    <br/><br/> 
    Finish off the remaining enemies and interact with the box, which will shoot red flares and start a countdown until it opens.

    <br/><br/>
    You'll need an Advanced Mechanics Kit to reduce the damage received in the bubble. 
    `,
  },
  [MapActivityType.INTERCEPT]: {
    type: MapActivityType.INTERCEPT,
    name: 'Intercept',
    imageUrl: 'assets/maps/activities/intercept.png',
    description:
      'Triggered by selecting the terminals with matching numbers. This will spawn a UESC ship somewhere on the map, which can be destroyed for loot.',
  },
  [MapActivityType.UESC_INCURSION]: {
    type: MapActivityType.UESC_INCURSION,
    name: 'UESC Incursion',
    imageUrl: 'assets/maps/activities/uesc-incursion.png',
    description: 'Battle UESC forces in a wave based format. Interact with the terminal to trigger the incursion.',
  },

  // Hidden activities
  [MapActivityType.FLARE_ROOM]: {
    type: MapActivityType.FLARE_ROOM,
    name: 'Flare Room',
    imageUrl: 'assets/maps/activities/flare-room.png',
    description: 'Find extra locked boxes that can be opened with a Lockbox Key in the flare room.',
  },
  [MapActivityType.HAZARD_ROOM]: {
    type: MapActivityType.HAZARD_ROOM,
    name: 'Hazard Room',
    imageUrl: 'assets/maps/activities/hazard-room.png',
    description: `Clear the gas by interacting with a nearby terminal. This will let you loot the area safely for a short time. Using an Advanced Mechanics Kit will reduce the damage taken by the gas.`,
  },
  [MapActivityType.HAZARD_OVERRIDE_KEY]: {
    type: MapActivityType.HAZARD_OVERRIDE_KEY,
    name: 'Hazard Key',
    imageUrl: 'assets/maps/activities/hazard-override-key.png',
    description: `Insert the key into a red terminal near the Hazard Room to temporarily clear the gas.`,
  },
  [MapActivityType.LOCKBOX_KEY]: {
    type: MapActivityType.LOCKBOX_KEY,
    name: 'Lockbox Key',
    imageUrl: 'assets/maps/activities/lockbox-key.png',
    description: `Insert the key into a nearby red terminal to activate the override and clear the gas in the Hazard Room.`,
  },
  [MapActivityType.SUPPLY_DROP]: {
    type: MapActivityType.SUPPLY_DROP,
    name: 'Supply Drop',
    imageUrl: 'assets/maps/activities/supply-drop.png',
    description: `Call down a high-value Supply Drop from low orbit by activating the terminal.
    Supply drops contain valuable loot like mods and implants, but everyone on the map can see the blue beam in the sky when the event is triggered. 
    <br/><br/>
    Tip: The Supply Drop will have 4 modules. The module labled 1 will open first.`,
  },
  [MapActivityType.SUPPLY_CLEARANCE_CODE]: {
    type: MapActivityType.SUPPLY_CLEARANCE_CODE,
    name: 'Supply Code',
    imageUrl: 'assets/maps/activities/supply-clearance-code.png',
    description: `Required to call in a supply drop on Outpost.`,
  },
  /* [MapActivityType.TREASURE]: {
    type: MapActivityType.TREASURE,
    name: 'Treasure',
    imageUrl: 'assets/maps/activities/treasure.png',
    description: `Discover hidden treasures scattered across the map. These valuable finds can give your team a significant advantage.`,
  },*/
  [MapActivityType.ACCESS_CODE]: {
    type: MapActivityType.ACCESS_CODE,
    name: 'Access Code',
    imageUrl: 'assets/maps/activities/access-code.png',
    description: `Access codes are used to access locked areas of Outpost.`,
  },
  [MapActivityType.CONVEYANCE_REQUEST]: {
    type: MapActivityType.CONVEYANCE_REQUEST,
    name: 'Conveyance Request',
    imageUrl: 'assets/maps/activities/conveyance-request.png',
    description: `Conveyance requests are used to call for convoys within the Outpost.`,
  },
};
