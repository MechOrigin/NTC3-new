onEvent('recipes', (event) => {

    removeRecipeByID(event, [
      'industrialforegoing:fluid_extractor',
      'industrialforegoing:latex_processing_unit'
      ])

    modifyShaped(event, 'industrialforegoing:machine_frame_pity', 1, ['BAB', 'ACA', 'BAB'], {
    A: 'minecraft:iron_ingot',
    B: 'kubejs:treated_planks',
    C: '#forge:storage_blocks/redstone'
    })

    });