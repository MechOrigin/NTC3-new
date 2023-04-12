//priority: 200

// Listen to item tag event
onEvent('tags.blocks', event => {

    var itemsToRemove = [];

    elementsToUnify.forEach((material) => {

        let oresThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_ore`)).id;
        let oresDeepslateThermal = getPreferredItemInTag(Ingredient.of(`thermal:deepslate_${material}_ore`)).id;

        // let oresMinecraft = getPreferredItemInTag(Ingredient.of(`minecraft:${material}_ore`)).id;
        // let oresDeepslateMinecraft = getPreferredItemInTag(Ingredient.of(`minecraft:deepslate_${material}_ore`)).id;

        let blockThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_block`)).id;
        //let blockImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:storage_${material}`)).id;

        let blockMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:block_${material}`)).id;

        let oresMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:${material}_ore`)).id;
        let oresDeepslateMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:deepslate_${material}_ore`)).id;

        //let oresImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:ore_${material}`)).id;
        //let oresDeepslateImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:deepslate_ore_${material}`)).id;

        let oresBeyondEarthMoon = getPreferredItemInTag(Ingredient.of(`beyond_earth:moon_${material}_ore`)).id;
        let oresBeyondEarthVenus = getPreferredItemInTag(Ingredient.of(`beyond_earth:venus_${material}_ore`)).id;
        let oresBeyondEarthMars = getPreferredItemInTag(Ingredient.of(`beyond_earth:mars_${material}_ore`)).id;
        let oresBeyondEarthGlacio = getPreferredItemInTag(Ingredient.of(`beyond_earth:glacio_${material}_ore`)).id;
        let oresBeyondEarthMercury = getPreferredItemInTag(Ingredient.of(`beyond_earth:mercury_${material}_ore`)).id;
        let blockBeyondEarth = getPreferredItemInTag(Ingredient.of(`beyond_earth:${material}_block`)).id;


        if (material == air) {return;}

        itemsToRemove.push(
            // [`forge:dusts/${material}`, 'immersiveengineering:ingot_' + material],
            // 'immersiveengineering:dust_' + material,
            // 'immersiveengineering:nugget_' + material,
            // 'immersiveengineering:stick_' + material,
            // 'mekanism:nugget_' + material,
            // 'mekanism:dust_' + material,
            // 'mekanism:ingot_' + material,
            // 'mekanism:block_' + material,
            // 'thermal:' + material + '_block',
           oresThermal,
           oresDeepslateThermal,
        //    oresMinecraft,
        //    oresDeepslateMinecraft,
           blockThermal,
        //    blockImmersive,
           blockMekanism,
           oresMekanism,
           oresDeepslateMekanism,
           oresBeyondEarthMoon,
           oresBeyondEarthVenus,
           oresBeyondEarthMars,
           oresBeyondEarthGlacio,
           oresBeyondEarthMercury,
           //oresImmersive,
           //oresDeepslateImmersive,
           blockBeyondEarth
        );
    });

    alloysToUnify.forEach((material) => {

        let blockThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_block`)).id;
        //let blockImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:storage_${material}`)).id;
        let blockMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:block_${material}`)).id;
        let blockBiggerReactor = getPreferredItemInTag(Ingredient.of(`biggerreactors:${material}_block`)).id;
        let blockBeyondEarth = getPreferredItemInTag(Ingredient.of(`beyond_earth:${material}_block`)).id;


        if (material == air) {return;}

        itemsToRemove.push(
            blockThermal,
            //blockImmersive,
            blockMekanism,
            blockBiggerReactor,
            blockBeyondEarth
        );
    });

    itemsToRemove.forEach(disabledItem => {
        if (disabledItem == air) {return;}
        //console.log(`${disabledItem}`);
            // event.remove('forge:ores', disabledItem);
            // event.remove(('forge:ores'+'/'+`${disabledItem.replace(':', '').replace('thermal', '').replace('_ore', '')}`), disabledItem);
            
            event.removeAllTagsFrom(disabledItem);
    });

    event.remove([]);

    event.removeAllTagsFrom('thermal:niter_ore');
    event.removeAllTagsFrom('thermal:deepslate_niter_ore');
    event.removeAllTagsFrom('thermal:cinnabar_ore');
    event.removeAllTagsFrom('thermal:deepslate_cinnabar_ore');
    event.removeAllTagsFrom('thermal:sulfur_ore');
    event.removeAllTagsFrom('thermal:deepslate_sulfur_ore');

    // event.removeAllTagsFrom('immersiveengineering:ore_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:deepslate_ore_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:ore_lead');
    // event.removeAllTagsFrom('immersiveengineering:deepslate_ore_lead');
    // event.removeAllTagsFrom('immersiveengineering:ore_silver');
    // event.removeAllTagsFrom('immersiveengineering:deepslate_ore_silver');
    // event.removeAllTagsFrom('immersiveengineering:ore_nickel');
    // event.removeAllTagsFrom('immersiveengineering:deepslate_ore_nickel');
    // event.removeAllTagsFrom('immersiveengineering:ore_uranium');
    // event.removeAllTagsFrom('immersiveengineering:deepslate_ore_uranium');

    // event.removeAllTagsFrom('immersiveengineering:storage_aluminum');
    // event.removeAllTagsFrom('immersiveengineering:storage_uranium');

    event.removeAllTagsFrom('mekanism:block_osmium');
    event.removeAllTagsFrom('mekanism:block_uranium');
    event.removeAllTagsFrom('mekanism:block_charcoal');
    event.removeAllTagsFrom('mekanism:osmium_ore');
    event.removeAllTagsFrom('mekanism:uranium_ore');

    event.removeAllTagsFrom('biggerreactors:uranium_block');

    event.removeAllTagsFrom('tconstruct:soulsteel_block');
  })