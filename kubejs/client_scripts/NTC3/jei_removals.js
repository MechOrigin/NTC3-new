
onEvent('jei.hide.items', event => {

    var itemsToHide = [];

    materialsToUnify.forEach((material) => {

        let dustThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_dust`)).id;
        let dustImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:dust_${material}`)).id;
        let dustMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:dust_${material}`)).id;
        let dustBiggerReactor = getPreferredItemInTag(Ingredient.of(`biggerreactors:${material}_dust`)).id;

        let plateThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_plate`)).id;
        let plateImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:plate_${material}`)).id;

        let gearThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_gear`)).id;

        let nuggetThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_nugget`)).id;
        let nuggetImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:nugget_${material}`)).id;

        let ingotThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_ingot`)).id;
        let ingotImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:ingot_${material}`)).id;
        let ingotMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:ingot_${material}`)).id;
        let ingotBiggerReactor = getPreferredItemInTag(Ingredient.of(`biggerreactors:${material}_ingot`)).id;

        // let rawThermal = getPreferredItemInTag(Ingredient.of(`thermal:raw_${material}`)).id;
        // let rawImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:raw_${material}`)).id;
        // let rawMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:raw_${material}`)).id;

        // let oresThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_ore`)).id;
        // let oresDeepslateThermal = getPreferredItemInTag(Ingredient.of(`thermal:deepslate_${material}_ore`)).id;

        // let oresMinecraft = getPreferredItemInTag(Ingredient.of(`minecraft:${material}_ore`)).id;
        // let oresDeepslateMinecraft = getPreferredItemInTag(Ingredient.of(`minecraft:deepslate_${material}_ore`)).id;

        // let blockThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_block`)).id;
        // let blockImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:storage_${material}`)).id;
        // let blockMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:block_${material}`)).id;

        

        if (material == air) {return;}

        if (material == 'constantan') {return;}

        itemsToHide.push(
            // 'immersiveengineering:ingot_' + material,
            // 'immersiveengineering:dust_' + material,
            // 'immersiveengineering:nugget_' + material,
            // 'immersiveengineering:stick_' + material,
            // 'mekanism:nugget_' + material,
            // 'mekanism:dust_' + material,
            // 'mekanism:ingot_' + material,
            // 'mekanism:block_' + material,
            // 'thermal:' + material + '_block',
            // 'thermal:' + material + '_dust'
            dustThermal,
            dustImmersive,
            dustMekanism,
            plateThermal,
            gearThermal,
            nuggetThermal,
            ingotThermal,
            // rawThermal,
            blockThermal,
            blockImmersive,
            // rawMekanism,
            ingotMekanism,
            blockMekanism,

            plateImmersive,
            nuggetImmersive,
            ingotImmersive,
            // rawImmersive,

            // oresThermal,
            // oresDeepslateThermal,

            // oresMinecraft,
            // oresDeepslateMinecraft,

            // ingotBiggerReactor,
            // dustBiggerReactor
        );
    });

    alloysToUnify.forEach((material) => {

        let dustThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_dust`)).id;
        let dustImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:dust_${material}`)).id;
        let dustMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:dust_${material}`)).id;

        let plateThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_plate`)).id;
        let plateImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:plate_${material}`)).id;

        let gearThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_gear`)).id;

        let nuggetThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_nugget`)).id;
        let nuggetImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:nugget_${material}`)).id;
        let nuggetMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:nugget_${material}`)).id;

        let ingotThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_ingot`)).id;
        let ingotImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:ingot_${material}`)).id;
        let ingotMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:ingot_${material}`)).id;

        // let blockThermal = getPreferredItemInTag(Ingredient.of(`thermal:${material}_block`)).id;
        // let blockImmersive = getPreferredItemInTag(Ingredient.of(`immersiveengineering:storage_${material}`)).id;
        // let blockMekanism = getPreferredItemInTag(Ingredient.of(`mekanism:block_${material}`)).id;

        

        if (material == air) {return;}

        itemsToHide.push(
            dustThermal,
            dustImmersive,
            dustMekanism,
            plateThermal,
            gearThermal,
            nuggetThermal,
            ingotThermal,
            // blockThermal,
            // blockImmersive,
            plateImmersive,
            nuggetImmersive,
            ingotImmersive,
            nuggetMekanism,
            ingotMekanism,
            // blockMekanism
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (disabledItem == air) {return;}
        console.log(`${disabledItem}`);
        event.hide(disabledItem);
    });

    event.hide([
        'ae2:facade',
        // 'thermal:deepslate_niter_ore',
        // 'thermal:niter_ore',
        // 'thermal:niter_dust',
        // 'thermal:cinnabar_ore',
        // 'thermal:deepslate_cinnabar_ore',
        // 'thermal:sulfur_ore',
        // 'thermal:deepslate_sulfur_ore',
        // 'thermal:ender_pearl_dust',

        // 'immersiveengineering:ore_aluminum',
        // 'immersiveengineering:deepslate_ore_aluminum',
        // 'immersiveengineering:ore_lead',
        // 'immersiveengineering:deepslate_ore_lead',
        // 'immersiveengineering:ore_silver',
        // 'immersiveengineering:deepslate_ore_silver',
        // 'immersiveengineering:ore_nickel',
        // 'immersiveengineering:deepslate_ore_nickel',
        // 'immersiveengineering:ore_uranium',
        // 'immersiveengineering:deepslate_ore_uranium',

        // 'immersiveengineering:storage_aluminum',
        // 'immersiveengineering:storage_uranium',

        // 'mekanism:dust_lapis_lazuli',
        // 'mekanism:dust_charcoal',
        // 'mekanism:dust_obsidian',
        // 'mekanism:dust_osmium',
        // 'mekanism:dust_uranium',
        // 'mekanism:ingot_osmium',
        // 'mekanism:ingot_uranium',
        // 'mekanism:nugget_osmium',
        // 'mekanism:nugget_uranium',
        // 'mekanism:raw_osmium',
        // 'mekanism:raw_uranium',

        // 'biggerreactors:uranium_dust',
        // 'biggerreactors:uranium_ingot',
        // 'biggerreactors:uranium_block'
    ]);

})

  onEvent('jei.add.items', jei => {
    jei.add(Item.of('ae2:facade', {item:"minecraft:stone"}))
    jei.add(Item.of('tconstruct:tinkers_anvil', {texture:"emendatusenigmatica:bronze_block"}))
})