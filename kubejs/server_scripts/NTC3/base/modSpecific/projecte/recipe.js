onEvent('recipes', (event) => {

    removeRecipeByID(event, [
      'projecte:alchemical_coal',
      'projecte:mobius_fuel',
      'projecte:aeternalis_fuel',
      'projecte:conversions/mobius_fuel_to_alchemical_coal',
      'projecte:conversions/aeternalis_fuel_to_mobius_fuel',
      ])

    // modifyShaped(event, 'pipez:wrench', 1, [' B ', ' AB', 'A  '], {
    //     A: '#forge:rods',
    //     B: '#forge:plates/iron'
    //   })

});