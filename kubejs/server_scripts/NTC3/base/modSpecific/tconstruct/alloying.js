onEvent('recipes', (event) => {
    const recipes = [
        // {
        //     inputs: [
        //         {
        //             name: "tconstruct:molten_gold",
        //             amount: 144
        //         },
        //         {
        //             name: "emendatusenigmatica:molten_redstone",
        //             amount: 144
        //         },
        //         {
        //             name: "thermal:glowstone",
        //             amount: 1000
        //         }
        //     ],
        //     result: {
        //         fluid: "kubejs:molten_energetic_alloy",
        //         amount: 144
        //     },
        //     temperature: 1400
        // },
        // {
        //     inputs: [
        //         {
        //             name: "kubejs:molten_energetic_alloy",
        //             amount: 144
        //         },
        //         {
        //             name: "thermal:ender",
        //             amount: 250
        //         }
        //     ],
        //     result: {
        //         fluid: "kubejs:molten_vibrant_alloy",
        //         amount: 144
        //     },
        //     temperature: 4095
        // },
        {
            inputs: [
                {
                    name: "tconstruct:molten_cobalt",
                    amount: 90
                },
                {
                    name: "tconstruct:molten_iron",
                    amount: 180
                },
                {
                    name: "tconstruct:liquid_soul",
                    amount: 1000
                }
            ],
            result: {
                fluid: "tconstruct:molten_soulsteel",
                amount: 360
            },
            temperature: 1200
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:alloy',
            inputs: recipe.inputs,
            result: recipe.result,
            temperature: recipe.temperature
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
