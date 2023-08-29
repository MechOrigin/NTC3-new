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
        // {
        //     input: 'biomesoplenty:white_sandstone',
        //     experience: 0.2,
        //     outputs: [Item.of('biomesoplenty:white_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
        //     id: 'thermal:machine/pulverizer/pulverizer_white_sandstone'
        // }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
