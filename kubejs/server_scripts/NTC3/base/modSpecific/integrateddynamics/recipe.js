onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'integrateddynamics:blasting/menril_log_filled_coal',
        'integrateddynamics:blasting/menril_log_coal',
        'integrateddynamics:smelting/menril_log_filled_coal',
        'integrateddynamics:smelting/menril_log_coal',
        'integrateddynamics:mechanical_squeezer/convenience/minecraft_dye_green'
      ])

    // modifyShaped(event, 'pipez:wrench', 1, [' B ', ' AB', 'A  '], {
    //     A: '#forge:rods',
    //     B: '#forge:plates/iron'
    //   })

});