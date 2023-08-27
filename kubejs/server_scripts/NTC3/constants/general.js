priority: 1000

const air = 'minecraft:air';

// priority of which mod output should come from, if applicable
const modPriorities = [
    'secretly_complicated',
    'thermal',
    'minecraft',
    'kubejs',
    'quark',
    'tconstruct',
    'ae2',
    'mekanism',
    'mysticalagriculture',
    'biomesoplenty',
    'integrateddynamics',
    'beyond_earth',
    'aquaculture',
    'exnihiliosequentia',
    'biggerreactors'
];

// Used for recipes/tags that use colors
const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

// Quark Crystal Cluster Colors

const quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];


const materialsToUnify = [
    'aluminium',
    'aluminum',
    'lead',
    'silver',
    'nickel',
    'uranium',
    'constantan',
    'electrum',
    'steel',
    'brick',
    'copper',
    'gold',
    'iron',
    'netherite',
    'enderium',
    'lumium',
    'signalum',
    'lead',
    'nickel',
    'silver',
    'tin',
    'bronze',
    'constantan',
    'electrum',
    'invar',
    'rose_gold',
    'steel',
    'neptunium_ingot',
    // 'desh',
    // 'ostrum',
    // 'calorite',
    'steel',
    //'osmium',
    'tin',
    'lead',
    'bronze',
    'refined_glowstone',
    'refined_obsidian',
    'steel',
    'netherite_scrap',
    'cobalt',
    'slimesteel',
    'amethyst_bronze',
    'rose_gold',
    'pig_iron',
    'queens_slime',
    'manyullyn',
    'hepatizon',
    'soulsteel',
    'knightslime',
    'emerald',
    'lapis',
    'redstone',
    'coal',
    'diamond',
    'cheese',
    'bauxite',
    'apatite',
    'cinnabar',
    'niter',
    'sulfur',
    'charcoal',
    'zeolite',
    'spent_zeolite',
/*    'stone',
    'iron',
    'gold',
    'copper',
    'coal',
    'diamond',
    'emerald',
    'lapis',
    'redstone',
    'quartz',
    'netherite_scrap',
    'aluminium',
    'beryllium',
    'bismuth',
    'cobalt',
    'iridium',
    'lead',
    'manganese',
    'molybdenum',
    'neodymium',
    'nickel',
    'palladium',
    'platinum',
    'silver',
    'thorium',
    'titanium',
    'uranium_238',
    'graphite',
    'lithium',
    'sulfur',
    'tin',
    'zinc',
    'oilsands',
    'almandine',
    'andradite',
    'banded_iron',
    'brown_limonite',
    'calcite',
    'cassiterite',
    'chalcopyrite',
    'cobaltite',
    'cooperite',
    'galena',
    'garnierite',
    'grossular',
    'ilmenite',
    'rutile',
    'magnesite',
    'magnetite',
    'molybdenite',
    'phosphate',
    'pyrite',
    'pyrolusite',
    'pyrope',
    'saltpeter',
    'scheelite',
    'spessartine',
    'sphalerite',
    'stibnite',
    'tetrahedrite',
    'tungstate',
    'uraninite',
    'uvarovite',
    'wulfenite',
    'yellow_limonite',
    'vanadium_magnetite',
    'bastnasite',
    'pentlandite',
    'spodumene',
    'tantalite',
    'lepidolite',
    'glauconite',
    'bentonite',
    'pitchblende',
    'malachite',
    'barite',
    'talc',
    'soapstone',
    'blue_topaz',
    'green_sapphire',
    'lazurite',
    'ruby',
    'blue_sapphire',
    'sodalite',
    'tanzanite',
    'topaz',
    'olivine',
    'opal',
    'amethyst',
    'phosphorus',
    'red_garnet',
    'yellow_garnet',
    'cinnabar',
    'wrought_iron',
    'tungstensteel',
    'naquadah',
    'enriched_naquadah',
    'quartzite',
    'lignite_coal',
    'salt',
    'rock_salt',
    'bauxite',
    'oil_shale'*/
];

const elementsToUnify = [
    'hydrogen',
    'helium',
    'lithium',
    'beryllium',
    'boron',
    'carbon',
    'nitrogen',
    'oxygen',
    'fluorine',
    'neon',
    'sodium',
    'magnesium',
    'aluminium',
    'silicon',
    'phosphorus',
    'sulfur',
    'chlorine',
    'argon',
    'potassium',
    'calcium',
    'scandium',
    'titanium',
    'vanadium',
    'chromium',
    'manganese',
    'iron',
    'cobalt',
    'nickel',
    'copper',
    'zinc',
    'gallium',
    'germanium',
    'arsenic',
    'selenium',
    'bromine',
    'krypton',
    'rubidium',
    'strontium',
    'yttrium',
    'zirconium',
    'niobium',
    'molybdenum',
    'technetium',
    'ruthenium',
    'rhodium',
    'palladium',
    'silver',
    'cadmium',
    'indium',
    'tin',
    'antimony',
    'tellurium',
    'iodine',
    'xenon',
    'caesium',
    'barium',
    'lanthanum',
    'cerium',
    'praseodymium',
    'neodymium',
    'promethium',
    'samarium',
    'europium',
    'gadolinium',
    'terbium',
    'dysprosium',
    'holmium',
    'erbium',
    'thulium',
    'ytterbium',
    'lutetium',
    'hafnium',
    'tantalum',
    'tungsten',
    'rhenium',
    'osmium',
    'iridium',
    'platinum',
    'gold',
    'mercury',
    'thallium',
    'lead',
    'bismuth',
    'polonium',
    'astatine',
    'radon',
    'francium',
    'radium',
    'actinium',
    'thorium',
    'protactinium',
    'uranium',
    'neptunium',
    'plutonium',
    'americium',
    'curium',
    'berkelium',
    'californium',
    'einsteinium',
    'fermium',
    'mendelevium',
    'nobelium',
    'lawrencium',
    /*alloys*/
    'netherite', 
    // 'fireclay', 
    'amethyst_bronze', 
    'enderium', 
    'lumium', 
    'signalum', 
    'hepatizon', 
    'manyullyn', 
    'pig_iron', 
    'queens_slime', 
    'slimesteel', 
    'endereye', 
    'rose_gold', 
    'brass',
    'bronze',
    'electrum',
    'constantan',
    'invar',
    'steel',
    'tin_alloy',
    'battery_alloy',
    'soldering_alloy',
    'red_alloy',
    'magnalium',
    'borosilicate_glass',
    'yttrium_barium_cuprate',
    'black_bronze',
    'black_steel',
    'ferrite_mixture',
    'nichrome',
    'osmiridium',
    'gallium_arsenide',
    'sodium_sulfide',
    'kanthal',
    'vanadium_gallium',
    'vanadium_steel',
    'indium_gallium_phosphide',
    'cobalt_brass',
    'bismuth_bronze',
    'sterling_silver',
    'wrought_iron',
    'red_steel',
    'blue_steel',
    'tungstensteel',
    'nickel_zinc_ferrite',
    'tungsten_carbide',
    'hssg',
    'hsse',
    'hsss',
    'annealed_copper',
    'electrical_steel',
    'dark_steel',
    'pulsating_iron',
    'energetic_alloy',
    'end_steel',
    'stainless_steel',
    'polyethylene',
    'rubber',
    'arsenic_trioxide',
    'cobalt_oxide',
    'sodium_bisulfate',
    'sodium_sulfate',
    'raw_styrene_butadiene_rubber',
    'phosphorous_pentoxide',
    'sodium_hydroxide',
    'siliconrubber',
    'epoxid',
    'silicone',
    'polycaprolactam',
    'polytetrafluoroethylene',
    'polyphenylene_sulfide',
    'polystyrene',
    'styrene_butadiene_rubber',
    'polyvinyl_chloride',
    'fiber_reinforced_epoxy_resin'

];

const oresToUnify = [
    'graphite',
    'almandine',
    'andradite',
    'banded_iron',
    'brown_limonite',
    'cassiterite',
    'chalcopyrite',
    'cobaltite',
    'cooperite',
    'galena',
    'garnierite',
    'grossular',
    'ilmenite',
    'rutile',
    'magnesite',
    'molybdenite',
    'phosphate',
    'pyrite',
    'pyrolusite',
    'pyrope',
    'saltpeter',
    'scheelite',
    'spessartine',
    'sphalerite',
    'stibnite',
    'tetrahedrite',
    'tungstate',
    'uraninite',
    'uvarovite',
    'wulfenite',
    'yellow_limonite',
    'vanadium_magnetite',
    'bastnasite',
    'pentlandite',
    'spodumene',
    'tantalite',
    'lepidolite',
    'glauconite',
    'bentonite',
    'pitchblende',
    'malachite',
    'barite',
    'lazurite',
    'cinnabar',
    'quartzite',
    'lignite_coal',
    'rock_salt',
    'bauxite',
    'oil_shale',
    'oilsands',
    'aluminium',
    'copper',
    'emerald',
    'lead',
    'silver',
    'nickel',
    'tin',
    'zinc',
    'sulfur',
    'beryllium',
    'thorium',
    'blue_topaz',
    'charcoal',
    'coal_coke',
    'lignite_coke',
    'green_sapphire',
    'ruby',
    'blue_sapphire',
    'sodalite',
    'tanzanite',
    'topaz',
    'olivine',
    'red_garnet',
    'yellow_garnet',
    'monazite'
];

const planksToUnify = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'crimson',
    'warped',
    'menril'
    //'fir',
    //'redwood',
    //'cherry',
    //'mahogany',
    //'jacaranda',
    //'palm',
    //'willow',
    //'dead',
    //'magic',
    //'umbran',
    //'hellbark'
];

const typesToUnify = ['nugget', 'ingot', 'gem', 'block', 'ore', 'raw_ore', 'dust', 'gear', 'plate', 'rod'];

const alloysToUnify = [
    'netherite', 
    'fireclay', 
    'amethyst_bronze', 
    'enderium', 
    'lumium', 
    'signalum', 
    'hepatizon', 
    'manyullyn', 
    'pig_iron', 
    'queens_slime', 
    'slimesteel', 
    'endereye', 
    'rose_gold', 
    'brass',
    'bronze',
    'electrum',
    'constantan',
    'invar',
    'steel',
    'tin_alloy',
    'battery_alloy',
    'soldering_alloy',
    'red_alloy',
    'magnalium',
    'borosilicate_glass',
    'yttrium_barium_cuprate',
    'black_bronze',
    'black_steel',
    'ferrite_mixture',
    'nichrome',
    'osmiridium',
    'gallium_arsenide',
    'sodium_sulfide',
    'kanthal',
    'vanadium_gallium',
    'vanadium_steel',
    'indium_gallium_phosphide',
    'cobalt_brass',
    'bismuth_bronze',
    'sterling_silver',
    'wrought_iron',
    'red_steel',
    'blue_steel',
    'tungstensteel',
    'nickel_zinc_ferrite',
    'tungsten_carbide',
    'hssg',
    'hsse',
    'hsss',
    'annealed_copper',
    'electrical_steel',
    'dark_steel',
    'pulsating_iron',
    'energetic_alloy',
    'end_steel'
];

const gemsToUnify = [
    'coal_coke',
    'bitumen',
    'apatite',
    'potassium_nitrate',
    'cinnabar',
    'charcoal',
    'blue_topaz',
    'lignite_coke',
    'green_sapphire',
    'ruby',
    'blue_sapphire',
    'sodalite',
    'tanzanite',
    'topaz',
    'olivine',
    'red_garnet',
    'yellow_garnet',
    'monazite',
    'emerald',
    'lapis',
    'redstone',
    'coal',
    'diamond',
    'niter',
    'sulfur',
    'zeolite',
    'spent_zeolite',
];

/*
2f 2f 63 61 6e 64 69 63 65 20 64 61 72 65 0d 0a 2f 2f 6c 75 78 75 72 79 20 67 69 72 6c 0d 0a 2f 2f 73 6b 69 6e 6c 6f 76 65 72 73 0d 0a 2f 2f 6f 6e 6c 79 73 75 6e 73 65 74 74 65 72 73 0d 0a 2f 2f 4d 61 74 74 79 20 4d 69 6c 61 20 50 65 72 65 7a 0d 0a 2f 2f 44 69 61 6e 61 20 44 61 6e 69 65 6c 73
verobuffone
mila monet
*/

// Defines melting point of various materials
const meltingPoints = {
    thallasium: { temp: 800 },
    signalum: { temp: 1272 },
    lumium: { temp: 1354 },
    enderium: { temp: 1450 },
    sulfur: { temp: 115 },
    redstone: { temp: 660 },
    potassium_nitrate: { temp: 334 },
    lapis: { temp: 3400 },
    fluorite: { temp: 1418 },
    dimensional: { temp: 1450 },
    coal: { temp: 1149 },
    cinnabar: { temp: 580 },
    bitumen: { temp: 115 },
    tin: { temp: 232 },
    lead: { temp: 328 },
    aluminum: { temp: 660 },
    silver: { temp: 961 },
    bronze: { temp: 913 },
    gold: { temp: 1063 },
    copper: { temp: 1000 },
    iron: { temp: 1149 },
    nickel: { temp: 1453 },
    cobalt: { temp: 1495 },
    steel: { temp: 1510 },
    platinum: { temp: 1770 },
    tungsten: { temp: 3400 },
    netherite_scrap: { temp: 3400 }
};
