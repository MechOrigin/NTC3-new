onEvent('recipes', (event) => {

    removeRecipeByOutput(event, [
        'minecraft:furnace'
    ])

    removeRecipeByID(event, [
        'nethers_exoticism:crafting_table_recipe_1',
        'nethers_exoticism:crafting_table_recipe_2',
        'minecraft:crafting_table',
        'fundamental:mixed_crafting_table',
        'fundamental:custom_to_regular_table_workaround',
        'fundamental:acacia_crafting_table',
        'fundamental:birch_crafting_table',
        'fundamental:dark_oak_crafting_table',
        'fundamental:jungle_crafting_table',
        'fundamental:spruce_crafting_table',
        'minecraft:furnace'
      ])

    modifyShaped(event, 'minecraft:crafting_table', 1, ['BB ', 'AA ', '   '], {
        A: '#minecraft:planks',
        B: '#forge:gems/flint'
      })

    modifyShaped(event, 'minecraft:furnace', 1, ['AAA', 'A A', 'AAA'], {
      A: 'quark:sturdy_stone'
    })

    modifyShaped(event, 'minecraft:end_crystal', 1, ['AAA', 'ABA', 'ACA'], {
      A: '#forge:glass',
      B: 'minecraft:beacon',
      C: 'minecraft:ghast_tear'
    })

    modifyShaped(event, 'minecraft:cauldron', 1, ['A A', 'A A', 'AAA'], {
      A: '#forge:ingots/iron'
    })

    modifyShaped(event, 'minecraft:bucket', 1, ['   ', 'A A', ' A '], {
      A: '#forge:ingots/iron'
    })

    modifyShapeless(event, 'minecraft:flint_and_steel', 1, ['#forge:ingots/steel', '#forge:gems/flint'])

    modifyShaped(event, 'minecraft:piston', 1, ['AAA', 'BCB', 'BDB'], {
    A: '#minecraft:planks',
    B: 'quark:sturdy_stone',
    C: '#forge:rods/iron',
    D: '#forge:ingots/red_alloy'
    })

    modifyShapeless(event, 'minecraft:oak_planks', 1, ['#minecraft:oak_logs'])
    modifyShapeless(event, 'minecraft:spruce_planks', 1, ['#minecraft:spruce_logs'])
    modifyShapeless(event, 'minecraft:birch_planks', 1, ['#minecraft:birch_logs'])
    modifyShapeless(event, 'minecraft:jungle_planks', 1, ['#minecraft:jungle_logs'])
    modifyShapeless(event, 'minecraft:acacia_planks', 1, ['#minecraft:acacia_logs'])
    modifyShapeless(event, 'minecraft:dark_oak_planks', 1, ['#minecraft:dark_oak_logs'])


});