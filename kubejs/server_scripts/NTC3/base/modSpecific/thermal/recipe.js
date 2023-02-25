onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'thermal:redstone_servo',
        'thermal:rf_coil',
        'thermal:rubber_from_vine',
        'thermal:rubber_3',
        'thermal:rubber_from_dandelion',
        'thermal:smelting/cured_rubber_from_smelting'
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

});