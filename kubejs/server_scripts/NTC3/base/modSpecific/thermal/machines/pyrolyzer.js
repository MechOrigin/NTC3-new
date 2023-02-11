onEvent('recipes', (event) => {
    const recipes = [
        // {
        //     input: '#minecraft:logs',
        //     outputs: [Item.of('minecraft:charcoal').toJson(), Fluid.of('immersiveengineering:creosote', 125).toJson()],
        //     experience: 0.15,
        //     energy: 200,
        //     id: 'thermal:machine/pyrolyzer/pyrolyzer_logs'
        // },
        // {
        //     input: '#forge:gems/bitumen',
        //     outputs: [
        //         Item.of('emendatusenigmatica:coke_gem').toJson(),
        //         Item.of('thermal:tar').withChance(0.5).toJson(),
        //         Fluid.of('thermal:heavy_oil', 50).toJson()
        //     ],
        //     experience: 0.15,
        //     energy: 400,
        //     id: 'thermal:machine/pyrolyzer/pyrolyzer_bitumen'
        // },
        // {
        //     input: '#forge:gems/coal',
        //     outputs: [
        //         Item.of('emendatusenigmatica:coke_gem').toJson(),
        //         Item.of('thermal:tar').withChance(0.25).toJson(),
        //         Fluid.of('immersiveengineering:creosote', 250).toJson()
        //     ],
        //     experience: 0.15,
        //     energy: 400,
        //     id: 'thermal:machine/pyrolyzer/pyrolyzer_coal'
        // },
        {
            input: '#forge:gems/coal_coke',
            outputs: [
                Item.of('projecte:alchemical_coal').toJson()
            ],
            experience: 0.15,
            energy: 3200,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_alchemical_coal'
        },
        {
            input: '#forge:blocks/coal_coke',
            outputs: [
                Item.of('projecte:alchemical_coal_block').toJson()
            ],
            experience: 0.15,
            energy: 3200,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_alchemical_coal_block'
        },
        {
            input: 'projecte:alchemical_coal',
            outputs: [
                Item.of('projecte:mobius_fuel').toJson()
            ],
            experience: 0.15,
            energy: 3200,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_mobius_fuel'
        },
        {
            input: 'projecte:alchemical_coal_block',
            outputs: [
                Item.of('projecte:mobius_fuel_block').toJson()
            ],
            experience: 0.15,
            energy: 3200,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_mobius_coal_block'
        },
        {
            input: 'projecte:mobius_fuel',
            outputs: [
                Item.of('projecte:aeternalis_fuel').toJson()
            ],
            experience: 0.15,
            energy: 3200,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_aeternalis_fuel'
        },
        {
            input: 'projecte:mobius_fuel_block',
            outputs: [
                Item.of('projecte:aeternalis_fuel_block').toJson()
            ],
            experience: 0.15,
            energy: 3200,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_aeternalis_coal_block'
        },
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'thermal:pyrolyzer',
            ingredient: Ingredient.of(recipe.input).toJson(),
            result: recipe.outputs,
            experience: recipe.experience,
            energy: recipe.energy
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
