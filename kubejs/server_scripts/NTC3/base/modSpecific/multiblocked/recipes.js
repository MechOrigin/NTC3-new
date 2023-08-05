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
      C: 'mekanism:basic_logistical_transporter'
      })

    modifyShaped(event, 'mbd:item_bus_in', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'mekanism:basic_logistical_transporter'
      })

    modifyShaped(event, 'mbd:fluid_hatch_out', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'mekanism:basic_mechanical_pipe'
      })
    modifyShaped(event, 'mbd:fluid_hatch_in', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'mekanism:basic_mechanical_pipe'
      })

    modifyShaped(event, 'mbd:mek_gas_hatch_out', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/steel',
      B: '#forge:plates/rubber',
      C: 'mekanism:basic_pressurized_tube'
      })
    modifyShaped(event, 'mbd:mek_gas_hatch_in', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/steel',
      B: '#forge:plates/rubber',
      C: 'mekanism:basic_pressurized_tube'
      })

    modifyShaped(event, 'mbd:energy_output', 1, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'mekanism:basic_universal_cable'
      })
    modifyShaped(event, 'mbd:energy_input', 1, ['BAB', 'ACA', 'BAB'], {
      A: '#forge:plates/iron',
      B: '#forge:plates/copper',
      C: 'mekanism:basic_universal_cable'
      })


      // Coke Oven Bricks
      event.custom({"type":"minecraft:crafting_shaped","pattern":["GGG","GBG","GGG"],"key":{"G":{"item":"minecraft:light_gray_concrete_powder"},"B":{"item":"minecraft:clay"}},"result":{"item":"kubejs:oven_bricks","count":1}})

      // Platinum Catalyst
      event.custom({"type":"minecraft:crafting_shaped","pattern":["GGG","MMM","GGG"],"key":{"M":{"item":"secretly_complicated:platinum_small_dust"},"G":{"item":"secretly_complicated:silicon_dust"}},"result":{"item":"secretly_complicated:platinum_catalyst_chunk","count":1}})
	
      modifyShaped(event, 'kubejs:treated_planks', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:planks',
        B: 'secretly_complicated:creosote_fluid_bucket'
        })

    });