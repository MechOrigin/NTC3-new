onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'thermal:machines/refinery/refinery_crude_oil',
        'thermal:machines/refinery/refinery_light_oil',
        'thermal:machines/refinery/refinery_heavy_oil'
    ])

            // {
            //     outputs: [Item.of('minecraft:sugar', 2)],
            //     input: fluid.of('thermal:syrup', 25)
            // }

    const id_prefix = 'ntc3:base/thermal/refinery/';
    const recipes = [
        {
            input: Fluid.of('secretly_complicated:raw_oil_fluid_still', 100),
            outputs: [
                Item.of('secretly_complicated:bitumen_gem').withChance(0.10),
                Fluid.of('secretly_complicated:heavy_oil_fluid_still', 40),
                Fluid.of('secretly_complicated:light_oil_fluid_still', 60)
            ],
            energy: 6000,
            id: `${id_prefix}refinery_crude_oil`
        },
        {
            input: Fluid.of('secretly_complicated:heavy_oil_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_heavy_diesel_fluid_still', 75),
                Item.of('thermal:tar').withChance(0.10),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_heavy_oil`
        },
        {
            input: Fluid.of('secretly_complicated:light_oil_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_light_diesel_fluid_still', 100),
                Item.of('secretly_complicated:sulfur_dust').withChance(0.20),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_light_oil`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_light_diesel_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:light_diesel_fluid_still', 75),
                Item.of('secretly_complicated:sulfur_dust').withChance(0.20),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_light_diesel`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_heavy_diesel_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:heavy_diesel_fluid_still', 75),
                Item.of('thermal:tar').withChance(0.10),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_heavy_diesel`
        },
        {
            input: Fluid.of('thermal:latex', 90),
            outputs: [
                Fluid.of('secretly_complicated:rubber_fluid_still', 90),
                Item.of('secretly_complicated:small_rubber_dust').withChance(0.10),
            ],
            energy: 6000,
            id: `${id_prefix}raw_latex_to_rubber_fluid`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.refinery(recipe.outputs, recipe.input, recipe.energy).id(recipe.id);
    });
});
