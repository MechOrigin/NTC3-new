console.info('EBF Recipe Scripet')

let ebfDefinition = MbdRegistry.getDefinition("mbd:ebf");

let recipeMap;

if (ebfDefinition != null) { // two ways to get the recipeMap
    recipeMap = ebfDefinition.getRecipeMap();
} else {
    recipeMap = MbdRegistry.getRecipeMap("ebf");
}

if (recipeMap != null) {
    console.info('EBF RecipeMap Found');

    /* recipe builder demo*/
    /*
    recipeMap.start()
        .duration(100)
        .name("name") // have to set a unique name.
        .inputItems('3x minecraft:apple')
        .outputItems('3x minecraft:apple')
        .inputItems('3x minecraft:apple')
        .outputItems('3x minecraft:apple')
        .inputFE(1000)
        .outputFE(1000)
        .inputFluids('minecraft:water 100')
        .outputFluids('minecraft:water 100')
        .inputMana(200) // botania mana
        .outputMana(200)
        .inputHeat(105.5) // mekanism heat
        .outputHeat(105.5)
        .inputGases("mekanism:xxxx 100") // mekanism gas
        .outputGases("mekanism:xxxx 100")
        .inputPigments("mekanism:xxxx 100") // mekanism pigment
        .outputPigments("mekanism:xxxx 100")
        .inputInfusions("mekanism:xxxx 100") // mekanism infusion
        .outputInfusions("mekanism:xxxx 100")
        .inputSlurries("mekanism:xxxx 100") // mekanism slurry
        .outputSlurries("mekanism:xxxx 100")
        .inputs(MbdRegistry.getCapability("item"), "minecraft:apple") // for addons capability
        .outputs(MbdRegistry.getCapability("fluid"), "minecraft:water 100")
        .buildAndRegister();
        */


    recipeMap.start()
        .duration(100)
        .data("temperature", 1000) // add additional/custom data
        .text("T: §61000§rK") // add text info in JEI
        .name("r1") // have to set a unique name.
        .inputItems('3x minecraft:apple', 'minecraft:gold_ingot')
        .outputItems('minecraft:golden_apple')
        .buildAndRegister();

    recipeMap.start() // start always from chance == 1
        .duration(100)
        .data("temperature", 5000) // add additional/custom data
        .text("T: §65000§rK") // add text info in JEI
        .name("r2") // have to set a unique name.
        .perTick(true) // turn on perTick
        .inputItems('minecraft:sand') // sand will consume per tick
        .perTick(false) // turn off perTick
        .outputItems('minecraft:glass')
        .chance(0.5) // set the chance 50%
        .outputFluids('minecraft:lava 100') // product chance 50%
        .buildAndRegister();
} else {
    console.info('EBF RecipeMap Missing');
}

if (ebfDefinition != null) { // setup recipe according to the temperature
    let location = ebfDefinition.toString(); // mbd:ebf
    let subID = ebfDefinition.getID() // mbd.ebf

    // register event for any machine.
    // onEvent(`mbd.setup_recipe`, event => {})

    // register event for a specific machine.
    onEvent(`mbd.setup_recipe.${subID}`, event => {
        let recipe = event.getRecipe(); // get recipe found (matching IO requirement).
        let recipeLogic = event.getRecipeLogic(); // get RecipeLogic
        let temp = recipe.getData("temperature") // get custom data
        if (temp != null) {
            if (temp > 1000) {
                // console.info(`ebf recipe cancel, ${temp} < 1000`)
                event.cancel(); // cancel to block this recipe setup.
            }
        }
    })
}
