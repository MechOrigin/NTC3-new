onEvent('recipes', (event) => {

    removeRecipeByID(event, [

      ])

    modifyShaped(event, 'ntc3:coke_oven', 1, ['ABA', 'BCB', 'ABA'], {
    A: '#forge:plates/copper',
    B: 'minecraft:bricks',
    C: '#forge:storage_blocks/redstone'
    })

    modifyShaped(event, 'ntc3:blast_furnace', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/iron',
      B: 'minecraft:nether_bricks',
      C: 'minecraft:piston'
      })

    modifyShaped(event, 'ntc3:alloy_kiln', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/copper',
      B: 'minecraft:nether_bricks',
      C: 'minecraft:blast_furnace'
      })

    modifyShaped(event, 'mbd:item_bus_out', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'pipez:item_pipe'
      })

    modifyShaped(event, 'mbd:item_bus_in', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'pipez:item_pipe'
      })

    modifyShaped(event, 'mbd:fluid_hatch_out', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'pipez:fluid_pipe'
      })
    modifyShaped(event, 'mbd:fluid_hatch_in', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'pipez:fluid_pipe'
      })

    modifyShaped(event, 'mbd:mek_gas_hatch_out', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/steel',
      B: '#forge:plates/rubber',
      C: 'pipez:gas_pipe'
      })
    modifyShaped(event, 'mbd:mek_gas_hatch_in', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/steel',
      B: '#forge:plates/rubber',
      C: 'pipez:gas_pipe'
      })

    modifyShaped(event, 'mbd:energy_output', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'pipez:energy_pipe'
      })
    modifyShaped(event, 'mbd:energy_input', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'pipez:energy_pipe'
      })


      // Coke Oven Bricks
      event.custom({"type":"minecraft:crafting_shaped","pattern":["GGG","GBG","GGG"],"key":{"G":{"item":"minecraft:light_gray_concrete_powder"},"B":{"item":"minecraft:clay"}},"result":{"item":"kubejs:oven_bricks","count":1}})
});