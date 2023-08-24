onEvent('recipes', (event) => {

    removeRecipeByOutput(event, [
      'mekanism:dynamic_valve'
    ])

    removeRecipeByID(event, [
        'mekanism:storage_blocks/charcoal',
        'mekanism:charcoal',
        'mekanism:crushing/charcoal_dust',
        'mekanism:enriching/charcoal_dust',

        'mekanism:transmitter/logistical_transporter/basic',
        'mekanism:transmitter/universal_cable/basic',
        'mekanism:transmitter/mechanical_pipe/basic',
        'mekanism:transmitter/thermodynamic_conductor/basic',
        'mekanism:transmitter/pressurized_tube/basic'
      ])

      event.custom({"type":"minecraft:crafting_shaped","pattern":["MBM"],"key":{"B":{"item":"minecraft:copper_ingot"},"M":{"item":"minecraft:iron_ingot"}},"result":{"item":"mekanism:basic_thermodynamic_conductor","count":8}})
      event.custom({"type":"minecraft:crafting_shaped","pattern":["MBM"],"key":{"B":{"item":"minecraft:hopper"},"M":{"item":"minecraft:iron_ingot"}},"result":{"item":"mekanism:basic_logistical_transporter","count":8}})
      event.custom({"type":"minecraft:crafting_shaped","pattern":["MBM"],"key":{"M":{"item":"minecraft:iron_ingot"},"B":{"tag":"forge:glass"}},"result":{"item":"mekanism:basic_pressurized_tube","count":8}})
      event.custom({"type":"minecraft:crafting_shaped","pattern":["MBM"],"key":{"M":{"item":"minecraft:iron_ingot"},"B":{"item":"minecraft:bucket"}},"result":{"item":"mekanism:basic_mechanical_pipe","count":8}})
      event.custom({"type":"minecraft:crafting_shaped","pattern":["MBM"],"key":{"M":{"item":"minecraft:iron_ingot"},"B":{"item":"minecraft:redstone"}},"result":{"item":"mekanism:basic_universal_cable","count":8}})

      event.custom({"type":"minecraft:crafting_shaped","pattern":[" E ","EBE"," E "],"key":{"B":{"item":"minecraft:piston"},"E":{"item":"mekanism:dynamic_tank"}},"result":{"item":"mekanism:dynamic_valve","count":2}})
});