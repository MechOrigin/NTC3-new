onEvent('recipes', (event) => {

  const id_prefix = 'ntc3:sieve/';

    removeRecipeByID(event, [
      'exnihilosequentia:ens_raw_lead',
      'exnihilosequentia:ens_raw_zinc',
      'exnihilosequentia:ens_raw_tin',
      'exnihilosequentia:ens_raw_nickel',
      'exnihilosequentia:ens_raw_silver',
      'exnihilosequentia:ens_raw_uranium',
      'exnihilosequentia:ens_raw_platinum',
      'exnihilosequentia:ens_raw_aluminum',
      'exnihilosequentia:ens_raw_iron',
      'exnihilosequentia:ens_raw_gold',
      'exnihilosequentia:ens_raw_copper',
      'minecraft:ens_copper_ingot',
      'exnihilosequentia:ens_copper_nugget',
      'exnihilosequentia:fluid_item/ens_end_stone'
      ])

      event.remove({output: 'exnihilosequentia:lead_pieces'})
      event.remove({output: 'exnihilosequentia:nickel_pieces'})
      event.remove({output: 'exnihilosequentia:silver_pieces'})
      event.remove({output: 'exnihilosequentia:tin_pieces'})
      event.remove({output: 'exnihilosequentia:aluminum_pieces'})
      event.remove({output: 'exnihilosequentia:platinum_pieces'})
      event.remove({output: 'exnihilosequentia:uranium_pieces'})
      event.remove({output: 'exnihilosequentia:zinc_pieces'})

      event.remove({output: 'exnihilosequentia:iron_pieces'})
      event.remove({output: 'exnihilosequentia:gold_pieces'})
      event.remove({output: 'exnihilosequentia:copper_pieces'})

      event.remove({output: 'exnihilosequentia:copper_nugget'})

      event.remove({type: 'exnihilosequentia:sieve', output: 'minecraft:coal'})

      modifyShaped(event, 'exnihilosequentia:wooden_hammer', 1, [' A ', ' BA', 'B  '], {
        A: '#minecraft:planks',
        B: '#forge:rods'
      })
      modifyShaped(event, 'exnihilosequentia:stone_hammer', 1, [' A ', ' BA', 'B  '], {
        A: '#forge:cobblestone',
        B: '#forge:rods'
      })
      modifyShaped(event, 'exnihilosequentia:iron_hammer', 1, [' A ', ' BA', 'B  '], {
        A: '#forge:ingots/iron',
        B: '#forge:rods'
      })
      modifyShaped(event, 'exnihilosequentia:golden_hammer', 1, [' A ', ' BA', 'B  '], {
        A: '#forge:ingots/gold',
        B: '#forge:rods'
      })
      modifyShaped(event, 'exnihilosequentia:diamond_hammer', 1, [' A ', ' BA', 'B  '], {
        A: '#forge:gems/diamond',
        B: '#forge:rods'
      })

    //   const recipes = [
    //       {
    //         input: 'minecraft:gravel',
    //         output: 'secretly_complicated:iron_impure_dust'
    //       }
    //   ];

    //   recipes.forEach((recipe) => {
    //     event.custom({
    //       type: 'exnihilosequentia:sieve',
    //       rolls: [
    //         { chance: '0.05', mesh: 'flint'},
    //         { chance: '0.075', mesh: 'iron'},
    //         { chance: '0.15', mesh: 'diamond'}
    //       ],
    //       input: {
    //         item: recipe.input
    //       },
    //       result: {
    //         item: recipe.output
    //       }
    //     });
        
    // });

});