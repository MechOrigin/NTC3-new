onEvent('recipes', (event) => {
    const id_prefix = 'ntc2:base/thermal/chiller/';

    const recipes = [
        // {
        //     inputs: [Fluid.of('tconstruct:molten_clay', 144), 'tconstruct:ingot_cast'],
        //     output: Item.of('minecraft:brick', 1),
        //     energy: 5000,
        //     id: 'thermal:compat/tconstruct/chiller_tconstruct_clay_ingot'
        // },
        // {
        //     inputs: [Fluid.of('tconstruct:molten_netherite', 144), 'tconstruct:ingot_cast'],
        //     output: Item.of('minecraft:netherite_ingot', 1),
        //     energy: 5000,
        //     id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_ingot'
        // },
        // {
        //     inputs: [Fluid.of('tconstruct:molten_debris', 144), 'tconstruct:ingot_cast'],
        //     output: Item.of('minecraft:netherite_scrap', 1),
        //     energy: 5000,
        //     id: 'thermal:compat/tconstruct/chiller_tconstruct_molten_debris'
        // },
        // {
        //     inputs: [Fluid.of('tconstruct:molten_netherite', 16), 'tconstruct:nugget_cast'],
        //     output: Item.of('tconstruct:netherite_nugget', 1),
        //     energy: 555,
        //     id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_nugget'
        // },
        // {
        //     inputs: [Fluid.of('tconstruct:molten_debris', 16), 'tconstruct:nugget_cast'],
        //     output: Item.of('tconstruct:debris_nugget', 1),
        //     energy: 555,
        //     id: 'thermal:compat/tconstruct/chiller_tconstruct_debris_nugget'
        // },
        {
            inputs: [Fluid.of('tconstruct:molten_glass', 1000)],
            output: Item.of('tconstruct:clear_glass', 1),
            energy: 555,
            id: `${id_prefix}clear_glass`
        },
        {
            inputs: [Fluid.of('secretly_complicated:rubber_fluid_still', 90), 'tconstruct:ingot_cast'],
            output: Item.of('secretly_complicated:rubber_solid', 1),
            energy: 555,
            id: `${id_prefix}rubber_solid`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.chiller(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
