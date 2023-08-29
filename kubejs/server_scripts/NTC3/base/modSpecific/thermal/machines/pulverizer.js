onEvent('recipes', (event) => {
    const id_prefix = 'ntc2:base/thermal/pulverizer/';
    const recipes = [
        {
            input: 'minecraft:netherrack',
            experience: 0.2,
            outputs: [Item.of('exnihilosequentia:crushed_netherrack', 2)],
            id: 'ntc3:machine/pulverizer/crushed_netherrack'
        },
        {
            input: 'minecraft:end_stone',
            experience: 0.2,
            outputs: [Item.of('exnihilosequentia:crushed_end_stone', 2)],
            id: 'ntc3:machine/pulverizer/crushed_end_stone'
        },
        {
            input: 'minecraft:sand',
            experience: 0.2,
            outputs: [Item.of('exnihilosequentia:dust', 2)],
            id: 'ntc3:machine/pulverizer/dust'
        },
        {
            input: 'minecraft:cobblestone',
            experience: 0.2,
            outputs: [Item.of('minecraft:gravel', 2)],
            id: 'ntc3:machine/pulverizer/cobble_to_gravel'
        },
        {
            input: 'minecraft:gravel',
            experience: 0.2,
            outputs: [Item.of('minecraft:sand', 2), Item.of('minecraft:flint', 1).withChance(0.50)],
            id: 'ntc3:machine/pulverizer/gravel_to_sand'
        },
        {
            input: 'minecraft:sandstone',
            experience: 0.2,
            outputs: [Item.of('minecraft:sand', 1), Item.of('minecraft:sand', 1).withChance(0.50), Item.of('secretly_complicated:potassium_nitrate_gem', 1).withChance(0.15)],
            id: 'ntc3:machine/pulverizer/sandstone_to_sand'
        }

    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
