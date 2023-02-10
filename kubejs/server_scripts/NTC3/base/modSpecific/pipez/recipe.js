onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'pipez:wrench'
      ])

    modifyShaped(event, 'pipez:wrench', 1, [' B ', ' AB', 'A  '], {
        A: '#forge:rods',
        B: '#forge:plates/iron'
      })

});