onEvent('recipes', (event) => {

    removeRecipeByID(event, [
      'ae2:controller'
      ])
    
      removeRecipeByOutput(event, [
        'ae2:silicon'
      ])

    // modifyShaped(event, 'mysticalagriculture:witherproof_glass', 1, ['CBC', 'BAB', 'CBC'], {
    //     A: '#forge:glass',
    //     B: 'minecraft:wither_skeleton_skull',
    //     C: 'tconstruct:necrotic_bone'
    //   })


});