onEvent('recipes', function (event) {
    // Item Inputs
    var data = {
        recipes: [
            {
                entityInput: "minecraft:horse",
                consumesActivator: false,
                item1: "minecraft:leather_horse_armor",
                item2: "minecraft:golden_apple",
                item3: "minecraft:golden_apple",
                item4: "minecraft:saddle",
                item5: "nameless_trinkets:lucky_horseshoe",
                item6: "nameless_trinkets:lucky_horseshoe",
                item7: "nameless_trinkets:lucky_horseshoe",
                item8: "nameless_trinkets:lucky_horseshoe",
                entityOutput: "flyinghorsemod:flyinghorse",
                CustomName: "\"Zephyr\"",
                duration: 30,
                shouldSummonMob: true
              }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'spirit:soul_transmutation',
            entityInput: recipe.entityInput,
            consumesActivator: recipe.consumesActivator,
            itemInputs: [
                {
                    item: recipe.item1,
                },
                {
                    item: recipe.item2,
                },
                {
                    item: recipe.item3,
                },
                {
                    item: recipe.item4,
                },
                {
                    item: recipe.item5,
                },
                {
                    item: recipe.item6,
                },
                {
                    item: recipe.item7,
                },
                {
                    item: recipe.item8,
                }
            ],
            entityOutput: recipe.entityOutput,
            outputNbt: {
                CustomName: recipe.CustomName
            },
            duration: recipe.duration,
            shouldSummonMob: recipe.shouldSummonMob
        });

    });

});
