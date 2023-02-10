onEvent('recipes', (event) => {
    const id_prefix = 'ntc3:base/tconstruct/melting/';
    const recipes = [
        {
            ingredient: {
                tag: 'forge:ingots/red_alloy'
            },
            result: {
                fluid: 'secretly_complicated:red_alloy_fluid_still',
                amount: 90
            },
            temperature: 1000,
            time: 57,
            id: `${id_prefix}_redstone_alloy_from_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
