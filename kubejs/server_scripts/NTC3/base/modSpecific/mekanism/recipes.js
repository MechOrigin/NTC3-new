onEvent('recipes', (event) => {

    removeRecipeByOutput(event, [
    ])

    removeRecipeByID(event, [
        'mekanism:storage_blocks/charcoal',
        'mekanism:charcoal',
        'mekanism:crushing/charcoal_dust',
        'mekanism:enriching/charcoal_dust'
      ])

});