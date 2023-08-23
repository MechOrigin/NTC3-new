onEvent('recipes', (event) => {

// event.recipes.tconstruct.casting_table(outputItem, inputFluidId)
// event.recipes.tconstruct.casting_table(outputItem, inputFluidId, inputFluidAmount) // defaults to 144 mB

// Supported recipe methods:
// .cast(castIngredient) // defaults to #tconstruct:casts/multi_use/ingot
// .noCast()
// .multiUseCast(castType)
// .singleUseCast(castType)
// .consumeCast()
// .switchSlots()
// .coolingTime(ticks) // defaults to 60

// event.recipes.tconstruct.casting_basin(output, inputFluidId)
// event.recipes.tconstruct.casting_basin(output, inputFluidId, inputFluidAmount) // defaults to 1296
// Supports the same cast methods as casting table!
// .coolingTime(ticks) // defaults to 180


    const { casting_table, casting_basin } = event.recipes.tconstruct;
  
    
  
    // casting_table('minecraft:carrot', 'minecraft:water').singleUseCast('nugget')
  
    // casting_basin('minecraft:coal_block', 'minecraft:lava')
  
    casting_basin('tconstruct:smeltery_controller', 'tconstruct:molten_copper', 360).cast('#tconstruct:seared_bricks').coolingTime(100).consumeCast().switchSlots()
  
    casting_table('spirit:soul_steel_ingot', 'tconstruct:molten_soulsteel', 90).multiUseCast('ingot')
  
    casting_basin('spirit:soul_steel_block', 'tconstruct:molten_soulsteel', 810).noCast()

    casting_basin('tconstruct:clear_glass', 'tconstruct:molten_glass', 1000).noCast()

    casting_basin('minecraft:quartz_block', 'tconstruct:molten_quartz', 1000).noCast()


    casting_table('thermal:blizz_powder', 'sophisticatedcore:xp_still', 80).cast('minecraft:snowball').coolingTime(60).consumeCast().switchSlots()

    casting_table('thermal:blitz_powder', 'sophisticatedcore:xp_still', 80).cast('#forge:dusts/niter').coolingTime(60).consumeCast().switchSlots()

    casting_table('thermal:basalz_powder', 'sophisticatedcore:xp_still', 80).cast('#forge:slag').coolingTime(60).consumeCast().switchSlots()

    casting_table('minecraft:blaze_powder', 'sophisticatedcore:xp_still', 80).cast('#forge:dusts/sulfur').coolingTime(60).consumeCast().switchSlots()

    casting_basin('minecraft:end_stone', 'tconstruct:molten_ender', 250).cast('#forge:sandstone').coolingTime(100).consumeCast().switchSlots()



    casting_table('thermal:blizz_spawn_egg', 'tconstruct:molten_soulsteel', 270).cast('thermal:blizz_rod').coolingTime(60).consumeCast().switchSlots()
    casting_table('thermal:blitz_spawn_egg', 'tconstruct:molten_soulsteel', 270).cast('thermal:blitz_rod').coolingTime(60).consumeCast().switchSlots()
    casting_table('thermal:basalz_spawn_egg', 'tconstruct:molten_soulsteel', 270).cast('thermal:basalz_rod').coolingTime(60).consumeCast().switchSlots()
    casting_table('minecraft:blaze_spawn_egg', 'tconstruct:molten_soulsteel', 270).cast('minecraft:blaze_rod').coolingTime(60).consumeCast().switchSlots()
  

  })