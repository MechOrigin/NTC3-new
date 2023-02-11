onEvent("lootjs", (event) => {
    event
    .addBlockLootModifier("secretly_complicated:lignite_coal_ore")
    .addWeightedLoot([1, 6], [
        Item.of("byg:ligite"), //really should be lignite from S_C
    ]);

    event
    .addBlockLootModifier("secretly_complicated:tetrahedrite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:copper_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:stibnite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:antimony_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:antimony_crushed"),
    ]);    

    event
    .addBlockLootModifier("secretly_complicated:pyrite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]); 
  
    event
    .addBlockLootModifier("secretly_complicated:chalcopyrite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:brown_limonite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:yellow_limonite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:banded_iron_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:iron_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:iron_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:malachite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:copper_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:lazurite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("minecraft:lapis_lazuli"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:cinnabar_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:cinnabar_gem"),
        Item.of("pyromancer:cinnabar_chunk"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:cinnabar_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:cassiterite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:tin_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:tin_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:graphite_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:graphite_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:graphite_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:aluminium_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:aluminium_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:copper_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:copper_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:copper_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:emerald_end_ore")
    .addWeightedLoot([1, 3], [
        Item.of("minecraft:emerald"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:beryllium_end_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:beryllium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:beryllium_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:thorium_end_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:thorium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:thorium_crushed"),
    ]);

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
    ])
    ;

    //((TiO2)2Al16H10O11): aluminium (Al), rutile, grossular (Ca3Al2Si3O12)
    event
    .addBlockLootModifier("secretly_complicated:bauxite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:aluminium_impure_dust"),
    ])
    .addWeightedLoot([0, 3], [
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
    ]);

    // event
    // .addBlockLootModifier("secretly_complicated:ilmenite_netherrack_ore")
    // .addWeightedLoot([1, 3], [
    //     Item.of("secretly_complicated:aluminium_impure_dust"),
    // ])
    // .addWeightedLoot([0, 1], [
    //     Item.of("secretly_complicated:aluminium_crushed"),
    // ]);

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
    .addWeightedLoot([0, 3], [
        Item.of("secretly_complicated:iron_crushed"),
    ])
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:titanium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:titanium_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:magnesite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:magnesium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:magnesium_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:vanadium_magnetite_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:vanadium_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:vanadium_crushed"),
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

    event
    .addBlockLootModifier("secretly_complicated:cinnabar_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:cinnabar_gem"),
        Item.of("pyromancer:cinnabar_chunk"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:cinnabar_crushed"),
    ]);

    event
    .addBlockLootModifier("secretly_complicated:sulfur_netherrack_ore")
    .addWeightedLoot([1, 3], [
        Item.of("secretly_complicated:sulfur_impure_dust"),
    ])
    .addWeightedLoot([0, 1], [
        Item.of("secretly_complicated:sulfur_crushed"),
    ]);
  
});