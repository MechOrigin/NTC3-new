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
	
      modifyShaped(event, 'kubejs:treated_planks', 8, ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:planks',
        B: 'secretly_complicated:creosote_fluid_bucket'
        })

        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"B":{"item":"minecraft:piston"},"G":{"item":"secretly_complicated:invar_plate"},"E":{"item":"secretly_complicated:red_alloy_plate"}},"result":{"item":"ntc3:metal_fabrication_unit","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"E":{"item":"secretly_complicated:stainless_steel_plate"},"B":{"item":"mekanism:dynamic_tank"},"G":{"item":"secretly_complicated:platinum_plate"}},"result":{"item":"ntc3:electrolyzer","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GGG","MBD","WWW"],"key":{"W":{"item":"integrateddynamics:crystalized_chorus_block"},"D":{"item":"integrateddynamics:mechanical_drying_basin"},"G":{"item":"integrateddynamics:crystalized_menril_block"},"M":{"item":"integrateddynamics:mechanical_squeezer"},"B":{"item":"integrateddynamics:coal_generator"}},"result":{"item":"ntc3:integrated_processor","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"G":{"item":"mekanism:dynamic_tank"},"B":{"item":"minecraft:sticky_piston"},"E":{"item":"secretly_complicated:nichrome_plate"}},"result":{"item":"ntc3:distillation_tower","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"B":{"item":"minecraft:piston"},"E":{"item":"secretly_complicated:nichrome_rod"},"G":{"item":"secretly_complicated:nichrome_plate"}},"result":{"item":"ntc3:chemical_reactor","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"G":{"item":"secretly_complicated:aluminium_plate"},"E":{"item":"mekanism:dynamic_tank"},"B":{"item":"minecraft:bucket"}},"result":{"item":"ntc3:large_fluid_mixer","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GGG","GBG","GGG"],"key":{"G":{"item":"secretly_complicated:aluminium_plate"},"B":{"item":"minecraft:bucket"}},"result":{"item":"ntc3:fermenting_tank","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"B":{"item":"minecraft:piston"},"G":{"item":"secretly_complicated:stainless_steel_plate"},"E":{"item":"secretly_complicated:nichrome_plate"}},"result":{"item":"ntc3:oil_cracking_unit","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"E":{"item":"secretly_complicated:iron_plate"},"G":{"item":"secretly_complicated:brass_plate"},"B":{"item":"exnihilosequentia:iron_mesh"}},"result":{"item":"ntc3:large_sifter","count":1}})
        event.custom({"type":"minecraft:crafting_shaped","pattern":["GEG","EBE","GEG"],"key":{"G":{"item":"secretly_complicated:bronze_plate"},"E":{"item":"minecraft:bricks"},"B":{"item":"minecraft:furnace"}},"result":{"item":"ntc3:steam_boiler","count":1}})
      

    });