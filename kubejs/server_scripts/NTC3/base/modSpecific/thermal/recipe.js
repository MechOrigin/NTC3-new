onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'thermal:redstone_servo',
        'thermal:rf_coil'
      ])

    modifyShaped(event, 'thermal:redstone_servo', 1, [' B ', ' A ', ' B '], {
        A: '#forge:rods/iron',
        B: '#forge:wires/red_alloy'
      })

    modifyShaped(event, 'thermal:rf_coil', 1, ['  B', ' A ', 'B  '], {
      A: '#forge:rods/gold',
      B: '#forge:wires/red_alloy'
    })

});