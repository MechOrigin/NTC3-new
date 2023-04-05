onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'thermal:machines/refinery/refinery_crude_oil',
        'thermal:machines/refinery/refinery_light_oil',
        'thermal:machines/refinery/refinery_heavy_oil'
    ])

            // {
            //     outputs: [Item.of('minecraft:sugar_genibra', 2)],
            //     input: fluid.of('thermal:syrup_belucci', 25)
            // }

    const id_prefix = 'ntc3:base/thermal/refinery/';
    const recipes = [
        {
            input: Fluid.of('secretly_complicated:crude_oil_fluid_still', 100),
            outputs: [
                Item.of('secretly_complicated:bitumen_gem').withChance(0.10),
                Fluid.of('secretly_complicated:sulfuric_heavy_distillates_fluid_still', 25),
                Fluid.of('secretly_complicated:sulfuric_residual_fuel_oils_fluid_still', 50)
            ],
            energy: 6000,
            id: `${id_prefix}refinery_crude_oil`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_heavy_distillates_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_kerosene_fluid_still', 25),
                Fluid.of('secretly_complicated:sulfuric_light_distillates_fluid_still', 50),
                Item.of('secretly_complicated:tar_chunk').withChance(0.10),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_heavy_distillates`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_residual_fuel_oils_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_light_distillates_fluid_still', 25),
                Fluid.of('secretly_complicated:sulfuric_heavy_distillates_fluid_still', 50),
                Item.of('secretly_complicated:coal_coke_gem').withChance(0.10),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_residual_fuel_oils`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_kerosene_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_gasoline_blending_components_fluid_still', 25),
                Fluid.of('secretly_complicated:sulfuric_naphtha_fluid_still', 50),
                Item.of('secretly_complicated:carbon_dust').withChance(0.20),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_kerosene`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_light_distillates_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_kerosene_fluid_still', 25),
                Fluid.of('secretly_complicated:sulfuric_naphtha_fluid_still', 50),
                Item.of('secretly_complicated:carbon_dust').withChance(0.20),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_light_distillates`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_gasoline_blending_components_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_refinery_gases_fluid_still', 75),
                Item.of('secretly_complicated:sulfur_dust').withChance(0.20),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_gasoline_blending_components`
        },
        {
            input: Fluid.of('secretly_complicated:sulfuric_naphtha_fluid_still', 100),
            outputs: [
                Fluid.of('secretly_complicated:sulfuric_refinery_gases_fluid_still', 25),
                Fluid.of('secretly_complicated:sulfuric_gasoline_blending_components_fluid_still', 50),
                Item.of('secretly_complicated:sulfur_dust').withChance(0.20),
            ],
            energy: 6000,
            id: `${id_prefix}refinery_sulfuric_naphtha`
        },
        
        {
            input: Fluid.of('thermal:latex', 90),
            outputs: [
                Fluid.of('secretly_complicated:rubber_fluid_still', 90),
                Item.of('secretly_complicated:rubber_small_dust').withChance(0.10),
            ],
            energy: 6000,
            id: `${id_prefix}raw_latex_to_rubber_fluid`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.refinery(recipe.outputs, recipe.input, recipe.energy).id(recipe.id);
    });
});
