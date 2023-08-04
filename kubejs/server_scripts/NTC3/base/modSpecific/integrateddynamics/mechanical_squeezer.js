onEvent('recipes', function (event) {
    // Item Inputs
    var data = {
        recipes: [
            {
                input: 'minecraft:diorite',
                output: 'minecraft:quartz',
                count: 1,
                duration: 10
            },
            {
                input: 'minecraft:andesite',
                output: 'minecraft:quartz',
                count: 1,
                duration: 10
            },
            {
                input: 'minecraft:granite',
                output: 'minecraft:quartz',
                count: 2,
                duration: 10
            },
            {
                input: 'minecraft:kelp',
                output: 'secretly_complicated:shredded_biomass_chunk',
                count: 1,
                duration: 10
            },
            {
                input: 'minecraft:vine',
                output: 'secretly_complicated:shredded_biomass_chunk',
                count: 1,
                duration: 10
            },
            {
                input: '#forge:crops',
                output: 'secretly_complicated:shredded_biomass_chunk',
                count: 2,
                duration: 30
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: recipe.input,
            result: {
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    }
                ]
            },
            duration: recipe.duration
        });

    });

});
