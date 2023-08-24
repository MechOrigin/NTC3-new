onEvent('recipes', (event) => {

    removeRecipeByID(event, [
      'projecte:alchemical_coal',
      'projecte:mobius_fuel',
      'projecte:aeternalis_fuel',
      'projecte:conversions/mobius_fuel_to_alchemical_coal',
      'projecte:conversions/aeternalis_fuel_to_mobius_fuel',
      'projectexpansion:emc_link/basic'
      ])

    // modifyShaped(event, 'pipez:wrench', 1, [' B ', ' AB', 'A  '], {
    //     A: '#forge:rods',
    //     B: '#forge:plates/iron'
    //   })

    event.custom({"type":"minecraft:crafting_shaped","pattern":["GEX","MBM","GEX"],"key":{"M":{"item":"integratedtunnels:part_interface_item"},"B":{"item":"integrateddynamics:crystalized_chorus_block"},"X":{"item":"projecte:high_covalence_dust"},"E":{"item":"projecte:medium_covalence_dust"},"G":{"item":"projecte:low_covalence_dust"}},"result":{"item":"projectexpansion:basic_emc_link","count":1}})


});