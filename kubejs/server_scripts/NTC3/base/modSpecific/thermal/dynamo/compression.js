onEvent('recipes', (event) => {
    event.remove({ type: 'thermal:compression_fuel' });
    var multiplier = 1;
    var data = {
        recipes: [
            { input: 'thermal:tree_oil', energy: 100000 },
            { input: 'secretly_complicated:creosote_fluid_still', energy: 20000 },
            { input: 'secretly_complicated:sulfuric_naphtha_fluid_still', energy: 1500000 },
            { input: 'secretly_complicated:sulfuric_kerosene_fluid_still', energy: 1000000 },
            { input: 'secretly_complicated:sulfuric_light_distillates_fluid_still', energy: 800000 },
            { input: 'secretly_complicated:sulfuric_heavy_distillates_fluid_still', energy: 400000 },
            // need to add the rest of them
            

            // { input: 'immersivepetroleum:diesel', energy: 1000000 },
            // { input: 'immersiveengineering:biodiesel', energy: 1000000 },
            // { input: 'immersivepetroleum:gasoline', energy: 1500000 },
            // { input: 'mekanism:ethene', energy: 1800000 },
            // { input: 'mekanismgenerators:bioethanol', energy: 400000 },
            // { input: 'immersiveengineering:ethanol', energy: 400000 },
            // { input: 'industrialforegoing:biofuel', energy: 100000 },
            
            // { input: 'thermal:creosote', energy: 20000 },
            // { input: 'immersiveengineering:creosote', energy: 20000 },
            // { input: 'thermal:refined_fuel', energy: 1500000 }
        ]
    };
    data.recipes.forEach((recipe) => {
        //event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy * multiplier);
        event.recipes.thermal.compression_fuel(Fluid.of(recipe.input, 1000)).energy(recipe.energy * multiplier);
    });
});
