onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'integrateddynamics:blasting/menril_log_filled_coal',
        'integrateddynamics:blasting/menril_log_coal',
        'integrateddynamics:smelting/menril_log_filled_coal',
        'integrateddynamics:smelting/menril_log_coal',
        'integrateddynamics:mechanical_squeezer/convenience/minecraft_dye_green',
        'integrateddynamics:crafting/variable_transformer_input',
        'integrateddynamics:crafting/variable_transformer_output'
      ])

    // modifyShaped(event, 'pipez:wrench', 1, [' B ', ' AB', 'A  '], {
    //     A: '#forge:rods',
    //     B: '#forge:plates/iron'
    //   })

    event.custom({"type":"minecraft:crafting_shaped","pattern":[" E","MB"," E"],"key":{"E":{"item":"integrateddynamics:variable"},"B":{"item":"minecraft:hopper"},"M":{"item":"integrateddynamics:crystalized_menril_chunk"}},"result":{"item":"integrateddynamics:variable_transformer_output","count":1}})
    event.custom({"type":"minecraft:crafting_shaped","pattern":["E ","BD","E "],"key":{"E":{"item":"integrateddynamics:variable"},"B":{"item":"minecraft:hopper"},"D":{"item":"integrateddynamics:crystalized_menril_chunk"}},"result":{"item":"integrateddynamics:variable_transformer_input","count":1}})
  
});