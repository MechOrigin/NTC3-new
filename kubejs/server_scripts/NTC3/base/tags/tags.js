onEvent('tags.items', e => {
    // e.add('forge:tools/hammer', 'immersiveengineering:hammer')
    // e.add('forge:tools/wire_cutter', 'immersiveengineering:wirecutter')
    e.add('forge:tools/hammer', 'beyond_earth:hammer')

    e.add('thermal:crafting/casts', 'tconstruct:ingot_cast')
    e.add('thermal:crafting/casts', 'tconstruct:nugget_cast')
    e.add('thermal:crafting/casts', 'tconstruct:gem_cast')
    e.add('thermal:crafting/casts', 'tconstruct:rod_cast')
    e.add('thermal:crafting/casts', 'tconstruct:plate_cast')
    e.add('thermal:crafting/casts', 'tconstruct:gear_cast')
    e.add('thermal:crafting/casts', 'tconstruct:wire_cast')

    e.add('forge:nuggets/slimesteel', 'tconstruct:slimesteel_nugget');
    e.add('forge:ingots/slimesteel', 'tconstruct:slimesteel_ingot');
    e.add('forge:storage_blocks/slimesteel', 'tconstruct:slimesteel_block');
    e.add('forge:ingots/seared_brick', 'tconstruct:seared_brick');
    e.add('forge:nuggets/queens_slime', 'tconstruct:queens_slime_nugget');
    e.add('forge:ingots/queens_slime', 'tconstruct:queens_slime_ingot');
    e.add('forge:storage_blocks/queens_slime', 'tconstruct:queens_slime_block');
    e.add('forge:slimeball/magma_cream', 'minecraft:magma_cream');
    e.add('forge:honeybottle', 'minecraft:honey_bottle');
    e.add('forge:nuggets/amethyst_bronze', 'tconstruct:amethyst_bronze_nugget');
    e.add('forge:ingots/amethyst_bronze', 'tconstruct:amethyst_bronze_ingot');
    e.add('forge:storage_blocks/amethyst_bronze', 'tconstruct:amethyst_bronze_block');
    // e.add('forge:nuggets/signalum', 'thermal:signalum_nugget');
    // e.add('forge:ingots/signalum', 'thermal:signalum_ingot');
    // e.add('forge:storage_blocks/signalum', 'thermal:signalum_block');
    // e.add('forge:nuggets/lumium', 'thermal:lumium_nugget');
    // e.add('forge:ingots/lumium', 'thermal:lumium_ingot');
    // e.add('forge:storage_blocks/lumium', 'thermal:lumium_block');
    // e.add('forge:nuggets/enderium', 'thermal:enderium_nugget');
    // e.add('forge:ingots/enderium', 'thermal:enderium_ingot');
    // e.add('forge:storage_blocks/enderium', 'thermal:enderium_block');
    e.add('forge:nuggets/pig_iron', 'tconstruct:pig_iron_nugget');
    e.add('forge:ingots/pig_iron', 'tconstruct:pig_iron_ingot');
    e.add('forge:storage_blocks/pig_iron', 'tconstruct:pig_iron_block');
    e.add('forge:nuggets/netherite', 'tconstruct:netherite_nugget');
    e.add('forge:ingots/netherite', 'minecraft:netherite_ingot');
    e.add('forge:storage_blocks/netherite', 'minecraft:netherite_block');
    e.add('forge:nuggets/hepatizon', 'tconstruct:hepatizon_nugget');
    e.add('forge:ingots/hepatizon', 'tconstruct:hepatizon_ingot');
    e.add('forge:storage_blocks/hepatizon', 'tconstruct:hepatizon_block');
    e.add('forge:nuggets/manyullyn', 'tconstruct:manyullyn_nugget');
    e.add('forge:ingots/manyullyn', 'tconstruct:manyullyn_ingot');
    e.add('forge:storage_blocks/manyullyn', 'tconstruct:manyullyn_block');

    e.add('forge:nuggets/redstone_iron', 'extendedcrafting:redstone_nugget');
    e.add('forge:ingots/redstone_iron', 'extendedcrafting:redstone_ingot');
    e.add('forge:storage_blocks/redstone_iron', 'extendedcrafting:redstone_ingot_block');

    e.add('forge:fishing_rods', 'aquaculture:iron_fishing_rod');
    e.add('forge:fishing_rods', 'aquaculture:gold_fishing_rod');
    e.add('forge:fishing_rods', 'aquaculture:diamond_fishing_rod');
    e.add('forge:fishing_rods', 'aquaculture:neptunium_fishing_rod');

    e.add('forge:ingots/soulsteel', 'spirit:soul_steel_ingot');
    e.add('forge:ingots', 'spirit:soul_steel_ingot');
    e.add('forge:storage_blocks/soulsteel', 'spirit:soul_steel_block');

    elementsToUnify.forEach((material) => {

      if (material == air) {return;}

      let ingotSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_solid`)).id;
      let gearSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_gear`)).id;
      let plateSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_plate`)).id;
      let densePlateSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_dense_plate`)).id;
      let rodSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_rod`)).id;
      let dustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_dust`)).id;
      let smallDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_small_dust`)).id;
      let tinyDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_tiny_dust`)).id;
      let crushedSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_crushed`)).id;
      let impureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_impure_dust`)).id;
      let pureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_pure_dust`)).id;
      let nuggetSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_nugget`)).id;
      let wireSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_wire`)).id;

      let blockSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_block`)).id;

      secret_tagging(e, material, ingotSecret, gearSecret, plateSecret, densePlateSecret,
                     rodSecret, dustSecret, smallDustSecret, tinyDustSecret, crushedSecret,
                     impureDustSecret, pureDustSecret, nuggetSecret, wireSecret, blockSecret);

    })

    alloysToUnify.forEach((material) => {

      if (material == air) {return;}

      let ingotSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_solid`)).id;
      let gearSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_gear`)).id;
      let plateSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_plate`)).id;
      let densePlateSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_dense_plate`)).id;
      let rodSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_rod`)).id;
      let dustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_dust`)).id;
      let smallDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_small_dust`)).id;
      let tinyDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_tiny_dust`)).id;
      let crushedSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_crushed`)).id;
      let impureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_impure_dust`)).id;
      let pureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_pure_dust`)).id;
      let nuggetSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_nugget`)).id;
      let wireSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_wire`)).id;

      let blockSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_block`)).id;

      secret_tagging(e, material, ingotSecret, gearSecret, plateSecret, densePlateSecret,
                     rodSecret, dustSecret, smallDustSecret, tinyDustSecret, crushedSecret,
                     impureDustSecret, pureDustSecret, nuggetSecret, wireSecret, blockSecret);

    })

    oresToUnify.forEach((material) => {

      if (material == air) {return;}

      let oreSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_ore`)).id;
      let oreNetherSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_netherrack_ore`)).id;
      let oreEndSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_end_ore`)).id;

      secret_tagging_ores(e, material, oreSecret, oreNetherSecret, oreEndSecret);


    })

    gemsToUnify.forEach((material) => {

      if (material == air) {return;}

      let gemSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_gem`)).id;
      let dustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_dust`)).id;
      let blockSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_block`)).id;

      secret_tagging_gems(e, material, gemSecret, dustSecret, blockSecret);


    })

    function secret_tagging(e, material, ingotSecret, gearSecret, plateSecret, densePlateSecret, rodSecret, dustSecret, smallDustSecret, tinyDustSecret, crushedSecret, impureDustSecret, pureDustSecret, nuggetSecret, wireSecret, blockSecret) {
        if (material == air) {
            return;
        }

        // Iron
        if (ingotSecret == 'secretly_complicated:iron_solid') {
          ingotSecret = 'minecraft:iron_ingot';
        }
        if (nuggetSecret == 'secretly_complicated:iron_nugget') {
          nuggetSecret = 'minecraft:iron_nugget';
        }
        if (blockSecret == 'secretly_complicated:iron_block') {
          blockSecret = 'minecraft:iron_block';
        }
        // Gold
        if (ingotSecret == 'secretly_complicated:gold_solid') {
          ingotSecret = 'minecraft:gold_ingot';
        }
        if (nuggetSecret == 'secretly_complicated:gold_nugget') {
          nuggetSecret = 'minecraft:gold_nugget';
        }
        if (blockSecret == 'secretly_complicated:gold_block') {
          blockSecret = 'minecraft:gold_block';
        }
        // Copper
        if (ingotSecret == 'secretly_complicated:copper_solid') {
          ingotSecret = 'minecraft:copper_ingot';
        }
        if (blockSecret == 'secretly_complicated:copper_block') {
          blockSecret = 'minecraft:copper_block';
        }

        e.add(`forge:ingots/${material}`, ingotSecret);
        e.add(`forge:gears/${material}`, gearSecret);
        e.add(`forge:plates/${material}`, plateSecret);
        e.add(`forge:dense_plates/${material}`, densePlateSecret);
        e.add(`forge:rods/${material}`, rodSecret);
        e.add(`forge:dusts/${material}`, dustSecret);
        e.add(`forge:small_dusts/${material}`, smallDustSecret);
        e.add(`forge:tiny_dusts/${material}`, tinyDustSecret);
        e.add(`forge:crushed/${material}`, crushedSecret);
        e.add(`forge:impure_dust/${material}`, impureDustSecret);
        e.add(`forge:pure_dust/${material}`, pureDustSecret);
        e.add(`forge:nuggets/${material}`, nuggetSecret);
        e.add(`forge:wires/${material}`, wireSecret);
        e.add(`forge:blocks/${material}`, blockSecret)

        e.add(`forge:ingots`, ingotSecret);
        e.add(`forge:gears`, gearSecret);
        e.add(`forge:plates`, plateSecret);
        e.add(`forge:dense_plates`, densePlateSecret);
        e.add(`forge:rods`, rodSecret);
        e.add(`forge:dusts`, dustSecret);
        e.add(`forge:small_dusts`, smallDustSecret);
        e.add(`forge:tiny_dusts`, tinyDustSecret);
        e.add(`forge:crushed`, crushedSecret);
        e.add(`forge:impure_dust`, impureDustSecret);
        e.add(`forge:pure_dust`, pureDustSecret);
        e.add(`forge:nuggets`, nuggetSecret);
        e.add(`forge:wires`, wireSecret);
        e.add(`forge:blocks`, blockSecret)


        //console.log(ingotSecret);

    }

    function secret_tagging_gems(e, material, gemSecret, dustSecret, blockSecret) {
      if (material == air || gemSecret == air || dustSecret == air || blockSecret == air) {
          return;
      }

      if (gemSecret == 'potassium_nitrate') {
        e.add(`forge:gems/niter`, gemSecret);
      }
      if (dustSecret == 'potassium_nitrate') {
        e.add(`forge:dusts/niter`, dustSecret);
      }

      if (gemSecret != air) {
      e.add(`forge:gems/${material}`, gemSecret);
      e.add(`forge:gems`, gemSecret);
      }

      if (dustSecret != air) {
        e.add(`forge:dusts/${material}`, dustSecret);
        e.add(`forge:dusts`, dustSecret);
        }

        if (blockSecret != air) {
          e.add(`forge:blocks/${material}`, blockSecret);
          e.add(`forge:blocks`, blockSecret);
          }

    }

    function secret_tagging_ores(e, material, oreSecret, oreNetherSecret, oreEndSecret) {
      if (material == air || oreSecret == air) {
          return;
      }

      e.add(`forge:ores/${material}`, oreSecret);
      e.add(`forge:ores`, oreSecret);
      e.add(`minecraft:mineable/pickaxe`, oreSecret);

      if (oreNetherSecret != air) {
        e.add(`forge:netherrack_ores/${material}`, oreNetherSecret);
        e.add(`forge:netherrack_ores`, oreNetherSecret);
        e.add(`minecraft:mineable/pickaxe`, oreNetherSecret);

      }

      if (oreEndSecret != air) {
        e.add(`forge:end_ores/${material}`, oreEndSecret);
        e.add(`forge:end_ores`, oreEndSecret);
        e.add(`minecraft:mineable/pickaxe`, oreEndSecret);

      }

    }

    //why?!
    /* Remove antimatter because NTC3 is adding it's own
    e.add('forge:nuggets/aluminum', 'antimatter_shared:nugget_aluminium');
    e.add('forge:ingots/aluminum', 'antimatter_shared:ingot_aluminium');
    e.add('forge:rods/aluminum', 'antimatter_shared:rod_aluminium');
    e.add('forge:plates/aluminum', 'antimatter_shared:plate_aluminium');
    e.add('forge:gear/aluminum', 'antimatter_shared:gear_aluminium');
    e.add('forge:dust/aluminum', 'antimatter_shared:dust_aluminium');
    */

    // e.add('forge:ores/coal', 'minecraft:coal_ore');
    // e.add('forge:ores/iron', 'minecraft:iron_ore');
    // e.add('forge:ores/copper', 'minecraft:copper_ore');
    // e.add('forge:ores/gold', 'minecraft:gold_ore');

    //e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')
  })
  onEvent('tags.blocks', e => {
//    e.add('minecraft:climbable', ['minecraft:chain', /additionallanterns:.*_chain/])
    e.add('minecraft:base_stone_overworld', [ 'minecraft:stone',
                                              'minecraft:andesite',
                                              'minecraft:diorite',
                                              'minecraft:granite',
                                              'quark:jasper',
                                              'quark:limestone',
                                              'quark:shale'/*,
                                              'antimatter_shared:granite_red',
                                              'antimatter_shared:granite_black',
                                              'antimatter_shared:marble',
                                              'antimatter_shared:basalt',
                                              'antimatter_shared:komatiite',
                                              'antimatter_shared:limestone',
                                              'antimatter_shared:green_schist',
                                              'antimatter_shared:blue_schist',
                                              'antimatter_shared:kimberlite',
                                              'antimatter_shared:quartzite'*/])

      e.add('forge:wg_stone', [               'minecraft:stone',
                                              'minecraft:andesite',
                                              'minecraft:diorite',
                                              'minecraft:granite',
                                              'quark:jasper',
                                              'quark:limestone',
                                              'quark:shale'/*,
                                              'antimatter_shared:granite_red',
                                              'antimatter_shared:granite_black',
                                              'antimatter_shared:marble',
                                              'antimatter_shared:basalt',
                                              'antimatter_shared:komatiite',
                                              'antimatter_shared:limestone',
                                              'antimatter_shared:green_schist',
                                              'antimatter_shared:blue_schist',
                                              'antimatter_shared:kimberlite',
                                              'antimatter_shared:quartzite'*/])

      oresToUnify.forEach((material) => {

        if (material == air) {return;}
  
        let oreSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_ore`)).id;
        let oreNetherSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_netherrack_ore`)).id;
        let oreEndSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_end_ore`)).id;

        secret_tagging_ores(e, material, oreSecret, oreNetherSecret, oreEndSecret);
  
      })

      function secret_tagging_ores(e, material, oreSecret, oreNetherSecret, oreEndSecret) {
        if (material == air || oreSecret == air) {
            return;
        }
  
        e.add(`forge:ores/${material}`, oreSecret);
        e.add(`forge:ores`, oreSecret);
        e.add(`minecraft:mineable/pickaxe`, oreSecret);

        if (oreNetherSecret != air) {
          e.add(`forge:netherrack_ores/${material}`, oreNetherSecret);
          e.add(`forge:netherrack_ores`, oreNetherSecret);
          e.add(`minecraft:mineable/pickaxe`, oreNetherSecret);
  
        }
  
        if (oreEndSecret != air) {
          e.add(`forge:end_ores/${material}`, oreEndSecret);
          e.add(`forge:end_ores`, oreEndSecret);
          e.add(`minecraft:mineable/pickaxe`, oreEndSecret);
  
        }
  
      }
      
  })

  onEvent('tags.entity_types', e => {
    // e.add('mob_grinding_utils:noswab', [/productivebees:.+/, 'artifacts:mimic',])
  })
  