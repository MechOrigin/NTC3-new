onEvent('recipes', function (event) {
    // Item Inputs
    var data = {
        recipes: [
            {
                input: 'minecraft:acacia_log',
                output: 'minecraft:stripped_acacia_log',
                fluidOutput: 'thermal:latex',
                amount: 10,
                count: 1,
                duration: 30
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: recipe.input,
            result: {
                fluid: {
                    fluid: recipe.fluidOutput,
                    amount: recipe.amount
                },
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    },
                    {
                        item: recipe.output2,
                        chance: recipe.chance
                    }
                ]
            },
            duration: recipe.duration
        });

    });

});
