import { Runner, RunnerType } from './runners.interface';

export const RUNNERS: Runner[] = [
  {
    type: RunnerType.Destroyer,
    images: {
      icon: 'assets/runners/destroyer-150x230.png',
      large: 'assets/runners/destroyer-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Ex-UESC special operations',
      role: 'Combat specialist',
      tech: 'Assault / Defend',
      description: `War is brutal. Be brutal. Brutal is your nature. Be you. You are unstoppable. Don't stop. They are the enemy. Make friends.`,
    },
    abilities: {
      prime: {
        name: 'Search and Destroy',
        description: `Activate your <b>shoulder-mounted missile pods</b>. <br/><br/>
        Dealing systained damage to targets launches homing missiles, <b>immobilizing</b> and dealing damage upon impact.`,
      },
      tactical: {
        name: 'Riot Barricade',
        description: `Activate an <b>energy barricade</b> that blocks incoming damage, draining tactical ability energy over time.<br/><br/>
        <b>Taking damage</b> drains additional energy.`,
      },
      trait1: {
        name: 'Thruster',
        description: `Activate while airborne to fire <b>boosters</b> that <b>thrust</b> you in the direction you are moving.`,
      },
      trait2: {
        name: 'Tactical Sprint',
        description: `Double-press sprint to move faster at the cost of generating <b>additional heat</b>.`,
      },
    },
    stats: {
      heatCapacity: 15,
      agility: 10,
      lootSpeed: 5,
      meleeDamage: 15,

      primeRecovery: 5,
      tacticalRecovery: 10,
      selfRepairSpeed: 15,
      finisherSiphon: 10,
      reviveSpeed: 10,

      hardware: 25,
      firewall: 20,
      fallResistance: 5,
      pingDuration: 5,
    },
  },
  {
    type: RunnerType.Vandal,
    images: {
      icon: 'assets/runners/vandal-150x230.png',
      large: 'assets/runners/vandal-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Martian freedom fighter',
      role: 'Combat anarchist',
      tech: 'Enhanced movement',
      description: `Break the rhythm. Change the chaos. Own the cycle. Replace the cage. <br/><br/>
      Amplify. Antagonize. Disrupt. Destroy. Survivordie.`,
    },
    abilities: {
      prime: {
        name: 'Amplify',
        description: `Overcharge your <b>movement systems</b>, reducing the heat of buildup of movement abilities. Increases <b>movement speed</b> and <b>weapon dexterity</b>.`,
      },
      tactical: {
        name: 'Disrupt Cannon',
        description: `Press: Transform your arm into a <b>cannon</b> and fire a high-powered energy projectile that deals damage and <b>pushes</b> targets away. <br/><br/>
        Hold: <b>Overcharge</b> your arm cannon, greatly increasing the size and damage of the blast.`,
      },
      trait1: {
        name: 'Microjets',
        description: `Activate in air to perform <b>another jump</b> at the cost of <b>generating additional heat</b>.`,
      },
      trait2: { name: 'Power Slide', description: 'Grants a <b>supercharged</b> slide that generates additional heat.' },
    },
    stats: {
      heatCapacity: 25,
      agility: 30,
      lootSpeed: 5,
      meleeDamage: 5,

      primeRecovery: 10,
      tacticalRecovery: 5,
      selfRepairSpeed: 5,
      finisherSiphon: 10,
      reviveSpeed: 5,

      hardware: 10,
      firewall: 5,
      fallResistance: 10,
      pingDuration: 5,
    },
  },
  {
    type: RunnerType.Recon,
    images: {
      icon: 'assets/runners/recon-150x230.png',
      large: 'assets/runners/recon-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Classified',
      role: 'Tactical strategist',
      tech: 'Threat detection',
      description: `Run. See the pattern. <br/>
      Run. Become the pattern. <br/>
      Run. Die. Repeat. <br/>
      Run. Deliver the signal. <br/>
      Run. The pattern repeats. <br/>`,
    },
    abilities: {
      prime: {
        name: 'Echo Pulse',
        description: `Activate your shell's <b>advanced detection systems</b>, releasing a series of <b>sonar pulses</b> that reveal the location of nearby hostiles.`,
      },
      tactical: {
        name: 'Tracker Drone',
        description: `Deploy a mechanized <b>microbot</b> that tracks down nearby hostiles and explodes, <b>overheating</b> any targets caught in the blast.`,
      },
      trait1: {
        name: 'Interrogation',
        description: `When pinged by a hostile Runner, you automatically receive a <b>warning</b> in your shell's HUD. <br/><br/>
        Performing a <b>finisher</b> on a Runner <b>pings</b> their crew.`,
      },
      trait2: {
        name: 'Stalker Protocol',
        description: `After breaking a combatant's shields, they leave behind a <b>lingering holographic trail</b> for a short time.`,
      },
    },
    stats: {
      heatCapacity: 20,
      agility: 15,
      lootSpeed: 10,
      meleeDamage: 5,

      primeRecovery: 5,
      tacticalRecovery: 10,
      selfRepairSpeed: 5,
      finisherSiphon: 25,
      reviveSpeed: 10,

      hardware: 10,
      firewall: 15,
      fallResistance: 5,
      pingDuration: 25,
    },
  },
  {
    type: RunnerType.Assassin,
    images: {
      icon: 'assets/runners/assassin-150x230.png',
      large: 'assets/runners/assassin-300x460.png',
    },
    summary: {
      occupation: 'Freelance Runner',
      origin: 'Unknown',
      role: 'Shadow assassin',
      tech: 'Invisibility systems',
      description: `I saw a star fade and the expanse did offer; 'no sympathy, until the last spark shines. <br/><br/>
      These are my memories; us as blades quest past each synthetic pulse, in search of dreams; of peace.'`,
    },
    abilities: {
      prime: {
        name: 'Smoke Screen',
        description: `Throw a smoke disc that emits a <b>line of smoke fields</b> in front of you, disrupting the optics of those who step inside.`,
      },
      tactical: {
        name: 'Active Camo',
        description: `Activate your shell's camouflage systems, pulling a shroud of <b>invisibility</b> over yourself. <br/><br/>
        Performing offensive actions, taking damage, and using abilities or consumables briefly <b>disrupts your invisibility</b>.`,
      },
      trait1: {
        name: 'Shadow Dive',
        description: `Activate while <b>airborne</b> to slam a smoke disc into the ground, deploying a <b>smoke field</b>.`,
      },
      trait2: {
        name: 'Shroud',
        description: `Your shell automatically activates camouflage systems when entering any <b>smoke field</b>, making you <b>invisible</b>. <br/><br/>
        Invisibility persists for a short time after leaving the smoke field.`,
      },
    },
    stats: {
      heatCapacity: 10,
      agility: 20,
      lootSpeed: 15,
      meleeDamage: 10,

      primeRecovery: 10,
      tacticalRecovery: 5,
      selfRepairSpeed: 10,
      finisherSiphon: 10,
      reviveSpeed: 15,

      hardware: 10,
      firewall: 20,
      fallResistance: 10,
      pingDuration: 10,
    },
  },
  {
    type: RunnerType.Triage,
    images: {
      icon: 'assets/runners/triage-150x230.png',
      large: 'assets/runners/triage-300x460.png',
    },
    summary: {
      occupation: null,
      origin: null,
      role: null,
      tech: null,
      description: null,
    },
    abilities: {
      prime: {
        name: 'Reboot+',
        description: null,
      },
      tactical: {
        name: 'Med-Drone',
        description: null,
      },
      trait1: null,
      trait2: null,
    },
    stats: {
      heatCapacity: 10,
      agility: 10,
      lootSpeed: 10,
      meleeDamage: 5,

      primeRecovery: 10,
      tacticalRecovery: 5,
      selfRepairSpeed: 25,
      finisherSiphon: 5,
      reviveSpeed: 20,

      hardware: 15,
      firewall: 15,
      fallResistance: 5,
      pingDuration: 15,
    },
  },
  {
    type: RunnerType.Thief,
    images: {
      icon: 'assets/runners/thief-150x230.png',
      large: 'assets/runners/thief-300x460.png',
    },
    summary: {
      occupation: null,
      origin: null,
      role: null,
      tech: null,
      description: null,
    },
    abilities: {
      prime: {
        name: 'Pickpocket Drone',
        description: null,
      },
      tactical: {
        name: 'Grapple Device',
        description: null,
      },
      trait1: null,
      trait2: null,
    },
    stats: {
      heatCapacity: 5,
      agility: 5,
      lootSpeed: 5,
      meleeDamage: 5,

      primeRecovery: 5,
      tacticalRecovery: 5,
      selfRepairSpeed: 5,
      finisherSiphon: 5,
      reviveSpeed: 5,

      hardware: 5,
      firewall: 5,
      fallResistance: 5,
      pingDuration: 5,
    },
  },
  {
    type: RunnerType.Rook,
    images: {
      icon: 'assets/runners/rook-150x230.png',
      large: 'assets/runners/rook-300x460.png',
    },
    summary: {
      occupation: null,
      origin: null,
      role: null,
      tech: null,
      description: null,
    },
    abilities: {
      prime: {
        name: 'Recuperation',
        description: null,
      },
      tactical: {
        name: 'Signal Mask',
        description: null,
      },
      trait1: null,
      trait2: null,
    },
    stats: {
      heatCapacity: 0,
      agility: 0,
      lootSpeed: 0,
      meleeDamage: 0,

      primeRecovery: 0,
      tacticalRecovery: 0,
      selfRepairSpeed: 0,
      finisherSiphon: 0,
      reviveSpeed: 0,

      hardware: 0,
      firewall: 0,
      fallResistance: 0,
      pingDuration: 0,
    },
  },
];
