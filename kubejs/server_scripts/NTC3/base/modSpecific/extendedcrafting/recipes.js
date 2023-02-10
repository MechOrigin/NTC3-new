onEvent('recipes', (event) => {

  const id_prefix = 'ntc3:sieve/';

    removeRecipeByID(event, [
      'extendedcrafting:redstone_ingot',
      'extendedcrafting:black_iron_ingot',
      'extendedcrafting:black_iron_slate'
      ])

//      event.remove({output: 'exnihilosequentia:lead_pieces'})

    modifyShapeless(event, 'extendedcrafting:black_iron_slate', 1, ['#forge:ingots/black_steel', '#forge:ingots/black_steel'])

    modifyShaped(event, 'extendedcrafting:basic_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:basic_component',
      B: '#forge:ingots/black_steel'
    })

    modifyShaped(event, 'extendedcrafting:frame', 1, ['BCB', 'CAC', 'BCB'], {
      A: 'extendedcrafting:black_iron_slate',
      B: '#forge:ingots/black_steel',
      C: '#forge:glass/colorless'
    })

    modifyShaped(event, 'extendedcrafting:compressor', 1, ['BEB', 'CDC', 'BAB'], {
      A: 'extendedcrafting:black_iron_slate',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:elite_component',
      D: 'extendedcrafting:frame',
      E: 'extendedcrafting:elite_catalyst'
    })
    
    modifyShaped(event, 'extendedcrafting:crafting_core', 1, ['BCB', 'EDE', 'BAB'], {
      A: 'extendedcrafting:black_iron_slate',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:elite_component',
      D: 'extendedcrafting:frame',
      E: 'extendedcrafting:elite_catalyst'
    })
      
    modifyShaped(event, 'extendedcrafting:advanced_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:advanced_component',
      B: '#forge:ingots/black_steel'
    })

    modifyShaped(event, 'extendedcrafting:elite_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:elite_component',
      B: '#forge:ingots/black_steel'
    })
          
    modifyShaped(event, 'extendedcrafting:ultimate_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:ultimate_component',
      B: '#forge:ingots/black_steel'
    })

    modifyShaped(event, 'extendedcrafting:redstone_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:redstone_component',
      B: '#forge:ingots/black_steel'
    })
    
    modifyShaped(event, 'extendedcrafting:ender_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:ender_component',
      B: '#forge:ingots/black_steel'
    })
    
    modifyShaped(event, 'extendedcrafting:enhanced_ender_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:enhanced_ender_component',
      B: '#forge:ingots/black_steel'
    })
    
    modifyShaped(event, 'extendedcrafting:the_ultimate_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:the_ultimate_component',
      B: '#forge:ingots/black_steel'
    })
    
    modifyShaped(event, 'extendedcrafting:crystaltine_catalyst', 1, [' A ', 'ABA', ' A '], {
      A: 'extendedcrafting:crystaltine_component',
      B: '#forge:ingots/black_steel'
    })
    
    modifyShaped(event, 'extendedcrafting:pedestal', 2, [' B ', ' B ', 'BAB'], {
      A: '#forge:blocks/black_steel',
      B: '#forge:ingots/black_steel'
    })
       
    modifyShaped(event, 'extendedcrafting:basic_auto_table', 1, ['BAB', 'CDC', 'BAB'], {
      A: 'extendedcrafting:redstone_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:crystaltine_component',
      D: 'extendedcrafting:basic_table'
    })
         
    modifyShaped(event, 'extendedcrafting:advanced_auto_table', 1, ['BAB', 'CDC', 'BAB'], {
      A: 'extendedcrafting:redstone_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:crystaltine_component',
      D: 'extendedcrafting:advanced_table'
    })
            
    modifyShaped(event, 'extendedcrafting:elite_auto_table', 1, ['BAB', 'CDC', 'BAB'], {
      A: 'extendedcrafting:redstone_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:crystaltine_component',
      D: 'extendedcrafting:elite_table'
    })
            
    modifyShaped(event, 'extendedcrafting:ultimate_auto_table', 1, ['BAB', 'CDC', 'BAB'], {
      A: 'extendedcrafting:redstone_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:crystaltine_component',
      D: 'extendedcrafting:ultimate_table'
    })

    // modifyShapeless(event, {item: 'patchouli:guide_book', nbt: {"patchouli:book": "extendedcrafting:guide" }}, 1, ['#forge:ingots/black_steel', 'minecraft:book'])

    /* packaged ex crafting
    */
    modifyShaped(event, 'packagedexcrafting:basic_crafter', 1, ['BAB', 'DED', 'BCB'], {
      A: 'packagedauto:me_package_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:redstone_catalyst',
      D: 'extendedcrafting:crystaltine_component',
      E: 'extendedcrafting:basic_auto_table'
    })
     
    modifyShaped(event, 'packagedexcrafting:advanced_crafter', 1, ['BAB', 'DED', 'BCB'], {
      A: 'packagedauto:me_package_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:redstone_catalyst',
      D: 'extendedcrafting:crystaltine_component',
      E: 'extendedcrafting:advanced_auto_table'
    })
     
    modifyShaped(event, 'packagedexcrafting:elite_crafter', 1, ['BAB', 'DED', 'BCB'], {
      A: 'packagedauto:me_package_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:redstone_catalyst',
      D: 'extendedcrafting:crystaltine_component',
      E: 'extendedcrafting:elite_auto_table'
    })
     
    modifyShaped(event, 'packagedexcrafting:ultimate_crafter', 1, ['BAB', 'DED', 'BCB'], {
      A: 'packagedauto:me_package_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:redstone_catalyst',
      D: 'extendedcrafting:crystaltine_component',
      E: 'extendedcrafting:ultimate_auto_table'
    })
     
    modifyShaped(event, 'packagedexcrafting:combination_crafter', 1, ['EAE', 'CFC', 'BDB'], {
      A: 'packagedauto:me_package_component',
      B: '#forge:ingots/black_steel',
      C: 'extendedcrafting:redstone_catalyst',
      D: 'extendedcrafting:crystaltine_catalyst',
      E: 'extendedcrafting:enhanced_ender_component',
      F: 'extendedcrafting:crafting_core'
    })
     
});