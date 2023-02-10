onEvent('recipes', (event) => {

    removeRecipeByID(event, [
      'dimpaintings:nether_painting',
      'dimpaintings:overworld_painting',
      'dimpaintings:end_painting',
      'javd:portal_block'
      ])

    modifyShaped(event, 'dimpaintings:nether_painting', 1, ['BCD', 'DAD', 'DCB'], {
    A: 'minecraft:painting',
    B: 'minecraft:flint_and_steel',
    C: 'minecraft:red_nether_bricks',
    D: 'minecraft:obsidian'
    })

});