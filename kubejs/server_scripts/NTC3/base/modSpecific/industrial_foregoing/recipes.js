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

//
//-----REPLACE OUTPUTS-----
//

//PLASTIC
	event.replaceOutput({}, 'industrialforegoing:plastic', '#forge:ingots/rubber')
  event.replaceInput({}, 'industrialforegoing:plastic', '#forge:ingots/rubber');
//LATEX
  event.replaceInput({}, 'industrialforegoing:latex', 'thermal:latex');

    });