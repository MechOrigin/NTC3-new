onEvent('recipes', (event) => {

    removeRecipeByID(event, [

      ])

    modifyShaped(event, 'mysticalagriculture:witherproof_glass', 1, ['CBC', 'BAB', 'CBC'], {
        A: '#forge:glass',
        B: 'minecraft:wither_skeleton_skull',
        C: 'tconstruct:necrotic_bone'
      })

    modifyShaped(event, 'mysticalagriculture:witherproof_block', 1, ['CBC', 'BAB', 'CBC'], {
        A: '#forge:stone',
        B: 'minecraft:wither_skeleton_skull',
        C: 'tconstruct:necrotic_bone'
      })

});