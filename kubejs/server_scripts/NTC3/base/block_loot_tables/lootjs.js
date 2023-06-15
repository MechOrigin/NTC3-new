/*
* Smelting:
* Impure Dust: 5 nuggets ; Crushed: 10 nuggets
* Washing then Smelting:
* Impure Dust: 1 ingot 
*/

onEvent("lootjs", (event) => {
    event
    .addBlockLootModifier("secretly_complicated:lignite_coal_netherrack_ore")
    .addWeightedLoot([1, 6], [
        Item.of("secretly_complicated:lignite_coal_gem"), 
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:charcoal_gem"), 
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:coal_coke_gem"), 
    ])
    ;

    //Cu3SbS3Fe
    event
    .addBlockLootModifier("secretly_complicated:tetrahedrite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:copper_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:antimony_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:antimony_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //Sb2S3
    event
    .addBlockLootModifier("secretly_complicated:stibnite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:antimony_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:antimony_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    // event
    // .addBlockLootModifier("secretly_complicated:pyrite_ore")
    // .addWeightedLoot([1, 3], [
    //     Item.of("secretly_complicated:iron_impure_dust"),
    // ])
    // .addWeightedLoot([0, 1], [
    //     Item.of("secretly_complicated:iron_crushed"),
    // ]); 
  
    // CuFeS2
    event
    .addBlockLootModifier("secretly_complicated:chalcopyrite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:copper_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //FeHO2 source of malachite?
    event
    .addBlockLootModifier("secretly_complicated:brown_limonite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    //FeHO2 source of nickel and cobalt?
    event
    .addBlockLootModifier("secretly_complicated:yellow_limonite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:banded_iron_netherrack_ore")
    .addWeightedLoot([1, 6], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    //Cu2CH2O5
    event
    .addBlockLootModifier("secretly_complicated:malachite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:copper_crushed"),
    ]);

    //Al6Si6Ca8Na8
    event
    .addBlockLootModifier("secretly_complicated:lazurite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("minecraft:lapis_lazuli"),
    ]);

    //Al3Si3Na4Cl
    event
    .addBlockLootModifier("secretly_complicated:sodalite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sodalite_gem"),
    ]);

    // PO4
    event
    .addBlockLootModifier("secretly_complicated:phosphate_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:apatite_dust"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:monazite_dust"), //PO4?
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:phosphorus_impure_dust"),
    ]);

    // PO4
    event
    .addBlockLootModifier("secretly_complicated:monazite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:monazite_gem"),
    ]);

    // CeCFO3
    event
    .addBlockLootModifier("secretly_complicated:bastnasite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:cerium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:cerium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:carbon_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:carbon_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:rare_earth_chunk"),
    ]);

    //HgS
    event
    .addBlockLootModifier("secretly_complicated:cinnabar_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:cinnabar_gem"),
        Item.of("pyromancer:cinnabar_chunk"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:cinnabar_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:mercury_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:mercury_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    // //SnO2
    // event
    // .addBlockLootModifier("secretly_complicated:cassiterite_ore")
    // .addWeightedLoot([1, 3], [
    //     Item.of("secretly_complicated:tin_impure_dust"),
    // ])
    // .addWeightedLoot([0, 1], [
    //     Item.of("secretly_complicated:tin_crushed"),
    // ]);

    event
    .addBlockLootModifier("secretly_complicated:graphite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:graphite_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:graphite_crushed"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("minecraft:diamond"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:aluminium_netherrack_ore") //"pure" drop from aluminium_bauxite_ilmenite vein
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:copper_netherrack_ore") // "pure"
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:copper_crushed"),
    ]);

    // event
    // .addBlockLootModifier("secretly_complicated:emerald_end_ore")
    // .addWeightedLoot([1, 3], [
    //     Item.of("minecraft:emerald"),
    // ]);

    // event
    // .addBlockLootModifier("secretly_complicated:beryllium_end_ore")
    // .addWeightedLoot([1, 3], [
    //     Item.of("secretly_complicated:beryllium_impure_dust"),
    // ])
    // .addWeightedLoot([0, 1], [
    //     Item.of("secretly_complicated:beryllium_crushed"),
    // ]);

    // event
    // .addBlockLootModifier("secretly_complicated:thorium_end_ore")
    // .addWeightedLoot([1, 3], [
    //     Item.of("secretly_complicated:thorium_impure_dust"),
    // ])
    // .addWeightedLoot([0, 1], [
    //     Item.of("secretly_complicated:thorium_crushed"),
    // ]);

    event
    .addBlockLootModifier("secretly_complicated:lead_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:lead_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:lead_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:silver_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:silver_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:silver_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:nickel_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:nickel_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:nickel_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:tin_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tin_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:tin_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:zinc_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:zinc_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:zinc_crushed"),
    ]);

    //(CoAsS): cobalt, arsenic, sulfur
    event
    .addBlockLootModifier("secretly_complicated:cobaltite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:cobalt_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:cobalt_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:arsenic_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:arsenic_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //((TiO2)2Al16H10O11): aluminium (Al), rutile, grossular (Ca3Al2Si3O12)
    event
    .addBlockLootModifier("secretly_complicated:bauxite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:titanium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:titanium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:calcium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:calcium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:silicon_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:silicon_crushed"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:yellow_garnet_dust"),
    ]);

    //Ca3Al2Si3O12
    event
    .addBlockLootModifier("secretly_complicated:grossular_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:calcium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:calcium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:silicon_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:silicon_crushed"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:yellow_garnet_dust"),
    ]);

    //Al2Mn3Si3O12
    event
    .addBlockLootModifier("secretly_complicated:spessartine_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:manganese_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:manganese_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:silicon_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:silicon_crushed"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:red_garnet_dust"),
    ]);

    //MnO2
    event
    .addBlockLootModifier("secretly_complicated:pyrolusite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:manganese_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:manganese_crushed"),
    ]);

    //MnTa2O6
    event
    .addBlockLootModifier("secretly_complicated:tantalite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:manganese_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:manganese_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tantalum_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:tantalum_crushed"),
    ]);

    // //MoS2
    // event
    // .addBlockLootModifier("secretly_complicated:tantalite_netherrack_ore")
    // .addWeightedLoot([1, 3], [
    //     Item.of("secretly_complicated:manganese_impure_dust"),
    // ])
    // .addWeightedLoot([0, 1], [
    //     Item.of("secretly_complicated:manganese_crushed"),
    // ])
    // .addWeightedLoot([1, 3], [
    //     Item.of("secretly_complicated:tantalum_impure_dust"),
    // ])
    // .addWeightedLoot([0, 1], [
    //     Item.of("secretly_complicated:tantalum_crushed"),
    // ]);

    //MoS2
    event
    .addBlockLootModifier("secretly_complicated:molybdenite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:molybdenum_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:molybdenum_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //PbMoO4
    event
    .addBlockLootModifier("secretly_complicated:wulfenite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:molybdenum_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:molybdenum_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:lead_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:lead_crushed"),
    ]);

    //NiO: nickel
    event
    .addBlockLootModifier("secretly_complicated:garnierite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:nickel_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:nickel_crushed"),
    ]);

    //(FeTiO3): iron (Fe), rutile (TiO2)
    event
    .addBlockLootModifier("secretly_complicated:ilmenite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:titanium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:titanium_crushed"),
    ]);

    //MgCO3
    event
    .addBlockLootModifier("secretly_complicated:magnesite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:magnesium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:magnesium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:carbon_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:carbon_crushed"),
    ]);

    //Fe3O4
    event
    .addBlockLootModifier("secretly_complicated:magnetite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    //Fe3O4V
    event
    .addBlockLootModifier("secretly_complicated:vanadium_magnetite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:vanadium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:vanadium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    //Pb3Ag3S2: lead, silver, sulfur, massicot (PbO)
    event
    .addBlockLootModifier("secretly_complicated:galena_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:lead_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:lead_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:silver_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:silver_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:massicot_chunk"),
    ]);

    //Ni9S8: Nickel, Sulfur
    event
    .addBlockLootModifier("secretly_complicated:pentlandite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:nickel_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:nickel_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //SnOs: Tin
    event
    .addBlockLootModifier("secretly_complicated:cassiterite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tin_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:tin_crushed"),
    ]);

    //FeS2: Iron, sulfur
    event
    .addBlockLootModifier("secretly_complicated:pyrite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //ZnS: Zinc, sulfur
    event
    .addBlockLootModifier("secretly_complicated:sphalerite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:zinc_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:zinc_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:oilsands_netherrack_ore")
    .addWeightedLoot([1, 1], [
        Item.of("secretly_complicated:oilsands_netherrack_ore"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:oil_shale_netherrack_ore")
    .addWeightedLoot([1, 1], [
        Item.of("secretly_complicated:oil_shale_netherrack_ore"),
    ]);

    //"pure" sulfur vein
    event
    .addBlockLootModifier("secretly_complicated:sulfur_netherrack_ore")
    .addWeightedLoot([1, 8], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //[SiO2]x
    event
    .addBlockLootModifier("secretly_complicated:quartzite_netherrack_ore")
    .addWeightedLoot([1, 8], [
        Item.of("minecraft:nether_quartz"),
        Item.of("ae2:certus_quartz"),
    ]);

    //NaMg6Si12H6(H2O)5O36
    event
    .addBlockLootModifier("secretly_complicated:bentonite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sodium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sodium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:magnesium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:magnesium_crushed"),
    ])
    .addWeightedLoot([1, 8], [
        Item.of("secretly_complicated:silicon_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:silicon_crushed"),
    ])
    .addWeightedLoot([1, 8], [
        Item.of("secretly_complicated:zeolite_gem"),
    ]);

    //Mg2Fe(SiO2)2
    event
    .addBlockLootModifier("secretly_complicated:olivine_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:magnesium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:magnesium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:silicon_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:silicon_crushed"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:olivine_dust"),
    ]);

    //KMg2Al4H2O12
    event
    .addBlockLootModifier("secretly_complicated:glauconite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:potassium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:potassium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:magnesium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:magnesium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ]);

    //"sheldonite isnt real" Pt3NiSPd
    event
    .addBlockLootModifier("secretly_complicated:cooperite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:platinum_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:platinum_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:nickel_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:nickel_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:palladium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:palladium_crushed"),
    ]);

    //BaSO4
    event
    .addBlockLootModifier("secretly_complicated:barite_netherrack_ore")
    .addWeightedLoot([1, 8], [
        Item.of("secretly_complicated:barium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:barium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);

    //CrAl2O3
    event
    .addBlockLootModifier("secretly_complicated:ruby_netherrack_ore")
    .addWeightedLoot([1, 8], [
        Item.of("secretly_complicated:ruby_gem"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:chromium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:chromium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ]);

    //KCl
    event
    .addBlockLootModifier("secretly_complicated:rock_salt_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:potassium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:potassium_crushed"),
    ])
    .addWeightedLoot([1, 8], [
        Item.of("secretly_complicated:rock_salt_chunk"),
    ]);

    //KLi3Al4F2O10
    event
    .addBlockLootModifier("secretly_complicated:lepidolite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:potassium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:potassium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ])
    .addWeightedLoot([1, 6], [
        Item.of("secretly_complicated:lithium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:lithium_crushed"),
    ]);

    //LiAlSi2O6
    event
    .addBlockLootModifier("secretly_complicated:spodumene_netherrack_ore")
    .addWeightedLoot([1, 1], [
        Item.of("secretly_complicated:rock_salt_chunk"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ])
    .addWeightedLoot([1, 6], [
        Item.of("secretly_complicated:lithium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:lithium_crushed"),
    ]);

    //Al2O3
    event
    .addBlockLootModifier("secretly_complicated:blue_sapphire_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:blue_sapphire_gem"),
    ]);

    //Al2O3
    event
    .addBlockLootModifier("secretly_complicated:green_sapphire_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:green_sapphire_gem"),
    ]);

    //Al3Mg3Si3O12
    event
    .addBlockLootModifier("secretly_complicated:pyrope_netherrack_ore")
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:olivine_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:red_garnet_gem"),
    ])
    .addWeightedLoot([1, 1], [
        Item.of("secretly_complicated:rock_salt_chunk"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ])
    .addWeightedLoot([1, 6], [
        Item.of("secretly_complicated:magnesium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:magnesium_crushed"),
    ]);

    //WCa2O4
    event
    .addBlockLootModifier("secretly_complicated:scheelite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tungsten_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:tungsten_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:calcium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:calcium_crushed"),
    ]);

    //WLi2O4
    event
    .addBlockLootModifier("secretly_complicated:tungstate_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tungsten_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:tungsten_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:lithium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:lithium_crushed"),
    ]);

    //UO2
    event
    .addBlockLootModifier("secretly_complicated:uraninite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:uranium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:uranium_crushed"),
    ]);

    //(UO2)3ThPb
    event
    .addBlockLootModifier("secretly_complicated:pitchblende_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:uranium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:uranium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:thorium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:thorium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:lead_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:lead_crushed"),
    ]);
  
    //Al2Fe3Si3O12
    event
    .addBlockLootModifier("secretly_complicated:almandine_netherrack_ore")
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:olivine_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:red_garnet_gem"),
    ])
    .addWeightedLoot([1, 1], [
        Item.of("secretly_complicated:rock_salt_chunk"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);
});