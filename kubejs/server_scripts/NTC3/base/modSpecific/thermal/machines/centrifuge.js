onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'thermal:machines/centrifuge/centrifuge_oil_red_sand',
        'thermal:machines/centrifuge/centrifuge_oil_sand'
    ])

    const id_prefix = 'ntc3:base/thermal/centrifuge/';
    const recipes = [
        {
            input: 'secretly_complicated:oilsands_netherrack_ore',
            outputs: [
                Item.of('minecraft:netherrack').withChance(0.75),
                Item.of('secretly_complicated:bitumen_gem').withChance(2.5),
                Item.of('thermal:tar').withCount(2),
                Fluid.of('secretly_complicated:raw_oil_fluid_still', 50)
            ],
            id: `${id_prefix}oilsands_netherrack`
        },
        {
            input: 'secretly_complicated:oil_shale_netherrack_ore',
            outputs: [
                Item.of('minecraft:netherrack').withChance(0.75),
                Item.of('secretly_complicated:bitumen_gem').withChance(1.5),
                Item.of('thermal:tar').withCount(1),
                Fluid.of('secretly_complicated:raw_oil_fluid_still', 100)
            ],
            id: `${id_prefix}oil_shale_netherrack`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).id(recipe.id);
    });
});