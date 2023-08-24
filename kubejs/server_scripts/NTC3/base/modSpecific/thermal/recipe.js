onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'thermal:redstone_servo',
        'thermal:rf_coil',
        'thermal:rubber_from_vine',
        'thermal:rubber_3',
        'thermal:rubber_from_dandelion',
        'thermal:smelting/cured_rubber_from_smelting',
        'thermal:storage/charcoal_block',
        'thermal:storage/charcoal_from_block'
      ])

    modifyShaped(event, 'thermal:redstone_servo', 1, [' B ', ' A ', ' B '], {
        A: '#forge:rods/iron',
        B: '#forge:wires/red_alloy'
      })

    modifyShaped(event, 'thermal:rf_coil', 1, ['  B', ' A ', 'B  '], {
      A: '#forge:rods/gold',
      B: '#forge:wires/red_alloy'
    })

    modifyShaped(event, 'thermal:energy_cell', 1, ['AEA', 'BCB', 'ADA'], {
      A: '#forge:ingots/rubber',
      B: '#forge:ingots/iron',
      C: 'thermal:energy_cell_frame',
      D: 'thermal:rf_coil',
      E: 'minecraft:redstone_block'
    })

    modifyShaped(event, 'thermal:fluid_cell', 1, ['AEA', 'BCB', 'ADA'], {
      A: '#forge:ingots/rubber',
      B: '#forge:ingots/iron',
      C: 'thermal:fluid_cell_frame',
      D: 'thermal:redstone_servo',
      E: '#thermal:glass/hardened'
    })

    modifyShaped(event, 'thermal:device_tree_extractor', 1, ['ABA', 'DCD', 'AEA'], {
      A: 'kubejs:treated_planks',
      B: '#forge:gears/iron',
      C: 'industrialforegoing:machine_frame_pity',
      D: '#forge:glass',
      E: 'thermal:redstone_servo'
    })

    event.custom({"type":"minecraft:crafting_shapeless","ingredients":[{"item":"thermal:basalz_powder"},{"item":"thermal:basalz_powder"},{"item":"thermal:basalz_powder"},{"item":"thermal:basalz_rod"}],"result":{"item":"thermal:basalz_rod","count":1}})
    event.custom({"type":"minecraft:crafting_shapeless","ingredients":[{"item":"thermal:blizz_powder"},{"item":"thermal:blizz_powder"},{"item":"thermal:blizz_powder"},{"item":"thermal:blizz_rod"}],"result":{"item":"thermal:blizz_rod","count":1}})
    event.custom({"type":"minecraft:crafting_shaped","pattern":["  X"," X ","X  "],"key":{"X":{"item":"minecraft:blaze_powder"}},"result":{"item":"minecraft:blaze_rod","count":1}})
    event.custom({"type":"minecraft:crafting_shaped","pattern":["  X"," X ","X  "],"key":{"X":{"item":"thermal:blitz_powder"}},"result":{"item":"thermal:blitz_rod","count":1}})
  

});