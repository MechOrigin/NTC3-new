const recipeRegistry = [
    {
      itemInput: {item: 'alltheores:nickel_ingot', chance: '0.10'},
      itemOutput: {item: 'alltheores:nickel_ingot', chance: '0.10'},
      fluidInput: {fluid: 'minecraft:lava', amount: 1},
      fluidOutput: {fluid: 'minecraft:lava', amount: 1},
      inputFE: 10,
      duration: 100
    }
  ]
  
  onEvent('recipes', event => {
    recipeRegistry.forEach((r) => {
      event.recipes.multiblocked.multiblock("oil_cracking_unit")

        .inputItem(r.itemInput)

        .inputFluid(Fluid.of(r.fluidInput.fluid, r.fluidInput.amount))
        .inputFluid(Fluid.of(r.fluidInput.fluid, r.fluidInput.amount))

        .outputItem(r.ingot2.item)

        .inputFE(10)
        .setPerTick(true)

        .duration(r.duration)
    })
  })