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
        'minecraft:furnace',
        'minecraft:ens_ancient_debris',
        'culturaldelights:jungle_planks',
        'minecraft:oak_planks',
        'minecraft:spruce_planks',
        'minecraft:birch_planks',
        'minecraft:jungle_planks',
        'minecraft:acacia_planks',
        'minecraft:dark_oak_planks',
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

    modifyShaped(event, 'kubejs:tool_saw_handle', 1, [' BB', 'AB ', 'A  '], {
      A: '#minecraft:planks',
      B: '#forge:rods/wooden'
    })

    modifyShaped(event, 'kubejs:tool_file_handle', 1, [' B ', ' B ', ' A '], {
      A: '#minecraft:planks',
      B: '#forge:rods/wooden'
    })

    modifyShaped(event, 'kubejs:tool_saw_blade', 1, [' AA', ' BB', 'A  '], {
      A: 'minecraft:stone',
      B: '#forge:gems/flint'
    })

    modifyShaped(event, 'kubejs:tool_file_blade', 1, [' A ', ' A ', ' B '], {
      A: 'minecraft:stone',
      B: '#forge:gems/flint'
    })

    
    // modifyShapeless(event, '#forge:tools/file', 1, ['kubejs:tool_file_blade', 'kubejs:tool_file_handle']).id(`ntc3:crafting_shaped_tool_file_handle`)

    // modifyShapeless(event, '#forge:tools/saw', 1, ['kubejs:tool_saw_blade', 'kubejs:tool_saw_handle']).id(`ntc3:crafting_shaped_tool_saw_handle`)
    
    event.shapeless(`#forge:tools/saw`, ['kubejs:tool_saw_blade', 'kubejs:tool_saw_handle']).id(`ntc3:crafting_shaped_tool_saw_handle`)

    event.shapeless('#forge:tools/file', ['kubejs:tool_file_blade', 'kubejs:tool_file_handle']).id(`ntc3:base/hammering/crafting_shaped_tool_file_handle`);
    // modifyShapeless(event, 'minecraft:oak_planks', 1, ['#minecraft:oak_logs'])
    // modifyShapeless(event, 'minecraft:spruce_planks', 1, ['#minecraft:spruce_logs']).
    // modifyShapeless(event, 'minecraft:birch_planks', 1, ['#minecraft:birch_logs'])
    // modifyShapeless(event, 'minecraft:jungle_planks', 1, ['#minecraft:jungle_logs'])
    // modifyShapeless(event, 'minecraft:acacia_planks', 1, ['#minecraft:acacia_logs'])
    // modifyShapeless(event, 'minecraft:dark_oak_planks', 1, ['#minecraft:dark_oak_logs'])

    event.shapeless('minecraft:oak_planks', ['#minecraft:oak_logs']).id(`ntc3:crafting_shaped_oak_logs`)
    event.shapeless('minecraft:spruce_planks', ['#minecraft:spruce_logs']).id(`ntc3:crafting_shaped_spruce_logs`)
    event.shapeless('minecraft:birch_planks', ['#minecraft:birch_logs']).id(`ntc3:crafting_shaped_birch_logs`)
    event.shapeless('minecraft:jungle_planks', ['#minecraft:jungle_logs']).id(`ntc3:crafting_shaped_jungle_logs`)
    event.shapeless('minecraft:acacia_planks', ['#minecraft:acacia_logs']).id(`ntc3:crafting_shaped_acacia_logs`)
    event.shapeless('minecraft:dark_oak_planks', ['#minecraft:dark_oak_logs']).id(`ntc3:crafting_shaped_dark_oak_logs`)


    event.shapeless('2x minecraft:oak_planks', ['#minecraft:oak_logs', '#forge:tools/saw'])
    event.shapeless('2x minecraft:spruce_planks', ['#minecraft:spruce_logs', '#forge:tools/saw'])
    event.shapeless('2x minecraft:birch_planks', ['#minecraft:birch_logs', '#forge:tools/saw'])
    event.shapeless('2x minecraft:jungle_planks', ['#minecraft:jungle_logs', '#forge:tools/saw'])
    event.shapeless('2x minecraft:acacia_planks', ['#minecraft:acacia_logs', '#forge:tools/saw'])
    event.shapeless('2x minecraft:dark_oak_planks', ['#minecraft:dark_oak_logs', '#forge:tools/saw'])
    
    //morpho tool
    event.custom({"type":"minecraft:crafting_shaped","pattern":["GG","  "],"key":{"G":{"item":"morphtool:tool"}},"result":{"item":"morphtool:tool","count":1,"type":"forge:nbt","nbt":"{\"morphtool:data\":{ae2:{Count:1,id:\"ae2:certus_quartz_wrench\"},fluxnetworks:{Count:1,id:\"fluxnetworks:flux_configurator\"},integratedtunnels:{Count:1,id:\"integrateddynamics:wrench\"},laserio:{Count:1,id:\"laserio:laser_wrench\"},mekanism:{Count:1,id:\"mekanism:configurator\"},thermal:{Count:1,id:\"thermal:wrench\"}}}"}})

    //akashic tome
    event.custom({"type":"minecraft:crafting_shaped","pattern":["GG","  "],"key":{"G":{"item":"akashictome:tome"}},"result":{"item":"akashictome:tome","count":1,"type":"forge:nbt","nbt":"{\"akashictome:data\":{apotheosis:{Count:1,id:\"patchouli:guide_book\",tag:{\"patchouli:book\":\"apotheosis:apoth_chronicle\"}},cookingforblockheads:{Count:1,id:\"cookingforblockheads:recipe_book\"},cookingforblockheads_0:{Count:1,id:\"cookingforblockheads:crafting_book\",tag:{\"akashictome:definedMod\":\"cookingforblockheads_0\"}},croptopia:{Count:1,id:\"croptopia:guide\"},extendedcrafting:{Count:1,id:\"patchouli:guide_book\",tag:{\"patchouli:book\":\"extendedcrafting:guide\"}},industrialforegoing:{Count:1,id:\"patchouli:guide_book\",tag:{\"patchouli:book\":\"industrialforegoing:industrial_foregoing\"}},integratedtunnels:{Count:1,id:\"integrateddynamics:on_the_dynamics_of_integration\"},laserio:{Count:1,id:\"patchouli:guide_book\",tag:{\"patchouli:book\":\"laserio:laseriobook\"}},mysticalagriculture:{Count:1,id:\"patchouli:guide_book\",tag:{\"patchouli:book\":\"mysticalagriculture:guide\"}},pyromancer:{Count:1,id:\"pyromancer:blazing_journal\",tag:{CustomModelData:0.0d,Damage:0}},solcarrot:{Count:1,id:\"solcarrot:food_book\"},tconstruct:{Count:1,id:\"tconstruct:encyclopedia\"},thermal:{Count:1,id:\"patchouli:guide_book\",tag:{\"patchouli:book\":\"thermal:guidebook\"}}}}"}})



});