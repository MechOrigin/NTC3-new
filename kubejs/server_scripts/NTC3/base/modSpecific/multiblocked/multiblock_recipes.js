// const recipeRegistry = [
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_refinery_gases_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:methane_fluid_still', amount: 25},
//       fluidOutput2: {fluid: 'secretly_complicated:ethene_fluid_still', amount: 25},
//       fluidOutput3: {fluid: 'secretly_complicated:ethane_fluid_still', amount: 5},
//       fluidOutput4: {fluid: 'secretly_complicated:propene_fluid_still', amount: 30},
//       fluidOutput5: {fluid: 'secretly_complicated:propane_fluid_still', amount: 5},
//       fluidOutput6: {fluid: 'secretly_complicated:butene_fluid_still', amount: 5},
//       fluidOutput7: {fluid: 'secretly_complicated:butane_fluid_still', amount: 5},
//       fluidOutput8: {fluid: 'secretly_complicated:isobutane_fluid_still', amount: 5},
//       itemOutput1: {item: 'minecraft:air', count: 0},
//       itemOutput2: {item: 'minecraft:air', count: 0},
//       itemOutput3: {item: 'minecraft:air', count: 0},
//       inputFE: 10,
//       duration: 100
//     },
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_gasoline_blending_components_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:isobutane_fluid_still', amount: 25},
//       fluidOutput2: {fluid: 'secretly_complicated:butene_fluid_still', amount: 25},
//       fluidOutput3: {fluid: 'secretly_complicated:propene_fluid_still', amount: 5},
//       fluidOutput4: {fluid: 'secretly_complicated:mixed_xylenes_fluid_still', amount: 30},
//       fluidOutput5: {fluid: 'secretly_complicated:toluene_fluid_still', amount: 5},
//       fluidOutput6: {fluid: 'secretly_complicated:benzene_fluid_still', amount: 5},
//       fluidOutput7: {fluid: 'secretly_complicated:refinery_gases_fluid_still', amount: 5},
//       fluidOutput8: {fluid: 'minecraft:air', amount: 100},
//       itemOutput1: {item: 'minecraft:air', count: 0},
//       itemOutput2: {item: 'minecraft:air', count: 0},
//       itemOutput3: {item: 'minecraft:air', count: 0},
//       inputFE: 10,
//       duration: 100
//     },
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_naptha_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:pentane_fluid_still', amount: 15},
//       fluidOutput2: {fluid: 'secretly_complicated:isopentane_fluid_still', amount: 25},
//       fluidOutput3: {fluid: 'secretly_complicated:ethylbenzene_fluid_still', amount: 25},
//       fluidOutput4: {fluid: 'secretly_complicated:butadiene_fluid_still', amount: 10},
//       fluidOutput5: {fluid: 'secretly_complicated:isobutane_fluid_still', amount: 5},
//       fluidOutput6: {fluid: 'secretly_complicated:gasoline_blending_components_fluid_still', amount: 5},
//       fluidOutput7: {fluid: 'secretly_complicated:gasoline_fluid_still', amount: 15},
//       fluidOutput8: {fluid: 'minecraft:air', amount: 100},
//       itemOutput1: {item: 'minecraft:air', count: 0},
//       itemOutput2: {item: 'minecraft:air', count: 0},
//       itemOutput3: {item: 'minecraft:air', count: 0},
//       inputFE: 10,
//       duration: 100
//     },
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_naptha_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:pentane_fluid_still', amount: 5},
//       fluidOutput2: {fluid: 'secretly_complicated:isopentane_fluid_still', amount: 5},
//       fluidOutput3: {fluid: 'secretly_complicated:ethylbenzene_fluid_still', amount: 5},
//       fluidOutput4: {fluid: 'secretly_complicated:butadiene_fluid_still', amount: 10},
//       fluidOutput5: {fluid: 'secretly_complicated:isobutane_fluid_still', amount: 10},
//       fluidOutput6: {fluid: 'secretly_complicated:gasoline_blending_components_fluid_still', amount: 10},
//       fluidOutput7: {fluid: 'secretly_complicated:gasoline_fluid_still', amount: 55},
//       fluidOutput8: {fluid: 'minecraft:air', amount: 100},
//       itemOutput1: {item: 'minecraft:air', count: 0},
//       itemOutput2: {item: 'minecraft:air', count: 0},
//       itemOutput3: {item: 'minecraft:air', count: 0},
//       inputFE: 10,
//       duration: 100
//     },
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_kerosene_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:hydrogen_fluid_still', amount: 10},
//       fluidOutput2: {fluid: 'secretly_complicated:ethene_fluid_still', amount: 30},
//       fluidOutput3: {fluid: 'secretly_complicated:propene_fluid_still', amount: 30},
//       fluidOutput4: {fluid: 'secretly_complicated:butene_fluid_still', amount: 10},
//       fluidOutput5: {fluid: 'secretly_complicated:isobutylene_fluid_still', amount: 5},
//       fluidOutput6: {fluid: 'secretly_complicated:butadiene_fluid_still', amount: 5},
//       fluidOutput7: {fluid: 'secretly_complicated:naptha_fluid_still', amount: 10},
//       fluidOutput8: {fluid: 'minecraft:air', amount: 100},
//       itemOutput1: {item: 'minecraft:air', count: 0},
//       itemOutput2: {item: 'minecraft:air', count: 0},
//       itemOutput3: {item: 'minecraft:air', count: 0},
//       inputFE: 10,
//       duration: 100
//     },
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_light_distillates_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:kerosene_fluid_still', amount: 15},
//       fluidOutput2: {fluid: 'secretly_complicated:diesel_fluid_still', amount: 25},
//       fluidOutput3: {fluid: 'secretly_complicated:fuel_oil_fluid_still', amount: 25},
//       fluidOutput4: {fluid: 'secretly_complicated:gasoline_fluid_still', amount: 25},
//       fluidOutput5: {fluid: 'secretly_complicated:naptha_fluid_still', amount: 10},
//       fluidOutput6: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput7: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput8: {fluid: 'minecraft:air', amount: 100},
//       itemOutput1: {item: 'minecraft:air', count: 0},
//       itemOutput2: {item: 'minecraft:air', count: 0},
//       itemOutput3: {item: 'minecraft:air', count: 0},
//       inputFE: 10,
//       duration: 100
//     },
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_heavy_distillates_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:lubricant_oil_fluid_still', amount: 15},
//       fluidOutput2: {fluid: 'secretly_complicated:paraffin_wax_fluid_still', amount: 15},
//       fluidOutput3: {fluid: 'secretly_complicated:petroleum_jelly_fluid_still', amount: 10},
//       fluidOutput4: {fluid: 'secretly_complicated:diesel_fluid_still', amount: 30},
//       fluidOutput5: {fluid: 'secretly_complicated:light_distillates_fluid_still', amount: 30},
//       fluidOutput6: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput7: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput8: {fluid: 'minecraft:air', amount: 100},
//       itemOutput1: {item: 'minecraft:air', count: 0},
//       itemOutput2: {item: 'minecraft:air', count: 0},
//       itemOutput3: {item: 'minecraft:air', count: 0},
//       inputFE: 10,
//       duration: 100
//     },
//     {
//       //itemInput: {item: 'minecraft:charcoal', chance: '0.10'},
//       //itemOutput: {item: 'minecraft:charcoal', chance: '0.10'},
//       fluidInput: {fluid: 'secretly_complicated:steam_cracked_residual_fuel_oils_fluid_still', amount: 100},
//       fluidOutput1: {fluid: 'secretly_complicated:heavy_distillates_fluid_still', amount: 30},
//       fluidOutput2: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput3: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput4: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput5: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput6: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput7: {fluid: 'minecraft:air', amount: 100},
//       fluidOutput8: {fluid: 'minecraft:air', amount: 100},
//       itemOutput1: {item: 'secretly_complicated:coal_coke_dust', chance: '0.10', count: 3},
//       itemOutput2: {item: 'secretly_complicated:bitumen_dust', chance: '0.10', count: 2},
//       itemOutput3: {item: 'secretly_complicated:carbon_dust', chance: '0.10', count: 2},
//       inputFE: 10,
//       duration: 100
//     }
//   ]
  
//   onEvent('recipes', event => {
//     recipeRegistry.forEach((r) => {
//       event.recipes.multiblocked.multiblock("distillation_tower")

//         //.inputItem(r.itemInput)

//         .inputFluid(Fluid.of(r.fluidInput.fluid, r.fluidInput.amount))
//         //.inputFluid(Fluid.of(r.fluidInput.fluid, r.fluidInput.amount))

//         .outputFluid(Fluid.of(r.fluidOutput1.fluid, r.fluidOutput1.amount))
//         .outputFluid(Fluid.of(r.fluidOutput2.fluid, r.fluidOutput2.amount))
//         .outputFluid(Fluid.of(r.fluidOutput3.fluid, r.fluidOutput3.amount))
//         .outputFluid(Fluid.of(r.fluidOutput4.fluid, r.fluidOutput4.amount))
//         .outputFluid(Fluid.of(r.fluidOutput5.fluid, r.fluidOutput5.amount))
//         .outputFluid(Fluid.of(r.fluidOutput6.fluid, r.fluidOutput6.amount))
//         .outputFluid(Fluid.of(r.fluidOutput7.fluid, r.fluidOutput7.amount))
//         .outputFluid(Fluid.of(r.fluidOutput8.fluid, r.fluidOutput8.amount))

//         //.outputItem(r.itemInput.item)
//         .outputItem(Item.of(r.itemOutput1).withCount(r.itemOutput1.count))
//         .outputItem(Item.of(r.itemOutput2).withCount(r.itemOutput2.count))
//         .outputItem(Item.of(r.itemOutput3).withCount(r.itemOutput3.count))

//         .setPerTick(true)
//         .inputFE(r.inputFE)

//         .duration(r.duration)
//     })
//   })

onEvent('recipes', event => {
// Alloy Kiln
    event.recipes.multiblocked.multiblock("alloy_kiln")
        .inputItem(Item.of('minecraft:iron_ingot', 2))
        .inputItem(Item.of('minecraft:redstone', 2))
        .outputItem(Item.of('extendedcrafting:redstone_ingot').withCount(2))
        .duration(120)
    event.recipes.multiblocked.multiblock("alloy_kiln")
        .inputItem(Item.of('minecraft:copper_ingot', 1))
        .inputItem(Item.of('minecraft:redstone', 4))
        .outputItem(Item.of('secretly_complicated:red_alloy_solid').withCount(2))
        .duration(120)
    //bronze
    event.recipes.multiblocked.multiblock("alloy_kiln")
        .inputItem(Item.of('minecraft:copper_ingot', 3))
        .inputItem(Item.of('secretly_complicated:tin_solid', 1))
        .outputItem(Item.of('secretly_complicated:bronze_solid').withCount(4))
        .duration(120)
    //invar
    event.recipes.multiblocked.multiblock("alloy_kiln")
        .inputItem(Item.of('secretly_complicated:nickel_solid', 2))
        .inputItem(Item.of('minecraft:iron_ingot', 1))
        .outputItem(Item.of('secretly_complicated:invar_solid').withCount(3))
        .duration(120)
    //brass
    event.recipes.multiblocked.multiblock("alloy_kiln")
        .inputItem(Item.of('minecraft:copper_ingot', 3))
        .inputItem(Item.of('secretly_complicated:zinc_solid', 1))
        .outputItem(Item.of('secretly_complicated:brass_solid').withCount(4))
        .duration(120)

// Blast Furnace
    event.recipes.multiblocked.multiblock("blast_furnace")
        .inputItem(Item.of('minecraft:iron_ingot', 1))
        .inputItem(Item.of('secretly_complicated:coal_coke_gem', 1))
        .outputItem(Item.of('secretly_complicated:steel_solid').withCount(1))
        .duration(1200)
    event.recipes.multiblocked.multiblock("blast_furnace")
        .inputItem(Item.of('minecraft:iron_block', 1))
        .inputItem(Item.of('secretly_complicated:coal_coke_gem', 9))
        .outputItem(Item.of('secretly_complicated:steel_block').withCount(1))
        .duration(10800)

// Coke Oven
    // event.recipes.multiblocked.multiblock("coke_oven")
    //     .inputItem(Item.of('quark:charcoal_block', 1))
    //     .outputFluid(Fluid.of('secretly_complicated:creosote_fluid_still', 225))
    //     .outputItem(Item.of('secretly_complicated:coke_brick_block').withCount(1))
    //     .duration(10800)
    event.recipes.multiblocked.multiblock("coke_oven")
        .inputItem(Item.of('minecraft:coal_block', 1))
        .outputFluid(Fluid.of('secretly_complicated:creosote_fluid_still', 450))
        .outputItem(Item.of('secretly_complicated:coal_coke_block').withCount(1))
        .duration(10800)
    event.recipes.multiblocked.multiblock("coke_oven")
        .inputItem(Ingredient.of('#minecraft:logs', 1))
        .outputFluid(Fluid.of('secretly_complicated:creosote_fluid_still', 100))
        .outputItem(Item.of('minecraft:charcoal').withCount(1))
        .duration(1200)
    // event.recipes.multiblocked.multiblock("coke_oven")
    //     .inputItem(Item.of('minecraft:charcoal', 1))
    //     .outputFluid(Fluid.of('secretly_complicated:creosote_fluid_still', 25))
    //     .outputItem(Item.of('secretly_complicated:coal_coke_gem').withCount(1))
    //     .duration(1200)
    event.recipes.multiblocked.multiblock("coke_oven")
        .inputItem(Item.of('minecraft:coal', 1))
        .outputFluid(Fluid.of('secretly_complicated:creosote_fluid_still', 50))
        .outputItem(Item.of('secretly_complicated:coal_coke_gem').withCount(1))
        .duration(1200)

// Fermenting Tank
    // fermented biomass
    event.recipes.multiblocked.multiblock("fermenting_tank")
        .inputItem(Item.of('secretly_complicated:shredded_biomass_chunk', 8))
        .inputFluid(Fluid.of('minecraft:water', 1000))
        .outputFluid(Fluid.of('secretly_complicated:fermented_biomass_fluid_still', 1200))
        .duration(10800)

// Mixing Tank
    // Impure Dust to Pure Dust - Replaced Cauldron manual process
    // Moved to unify_materials.js
    // event.recipes.multiblocked.multiblock("large_fluid_mixer")
    //     .inputItem(Ingredient.of(`#forge:impure_dust/${material}`))
    //     .inputFluid(Fluid.of('minecraft:water', 20))
    //     .outputItem(Item.of(`#forge:impure_dust/${material}`).withCount(1))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(80)

// Large Sifter
    // Gravel to Impure dust - replaces manual exnihilio process
    // Moved to unify_materials.js
    // event.recipes.multiblocked.multiblock("large_sifter")
    //     .inputItem(Item.of('minecraft:gravel')
    //     .outputItem(Item.of('secretly_complicated:iron_impure_dust').withCount(2))
    //     .setChance(0.25)
    //     .outputItem(Item.of('secretly_complicated:copper_impure_dust').withCount(2))
    //     .setChance(0.25)
    //     .outputItem(Item.of('secretly_complicated:gold_impure_dust').withCount(2))
    //     .setChance(0.25)
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(80)

// Chemical Reactor
    // Titanium Tetra Chloride
    // event.recipes.multiblocked.multiblock("chemical_reactor")
    //     .inputItem(Item.of('secretly_complicated:titanium_small_dust', 2))
    //     .inputFluid(Fluid.of('secretly_complicated:hydrochloric_acid_fluid_still', 20))
    //     .outputFluid(Fluid.of('secretly_complicated:titaniumtetrachloride_fluid_still', 10))
    //     //.outputGas({type: 'secretly_complicated:hydrogen_gas', amount: 20})
    //     .outputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 10))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(360)

    // Polyethylene Dust
    // event.recipes.multiblocked.multiblock("chemical_reactor")
    //     //.inputGas({type: 'secretly_complicated:ethene_gas', amount: 20})
    //     .inputFluid(Fluid.of('secretly_complicated:ethene_fluid_still', 20))
    //     .inputFluid(Fluid.of('secretly_complicated:titaniumtetrachloride_fluid_still', 20))
    //     .outputItem(Item.of('secretly_complicated:polyethylene_dust').withCount(1))
    //     .outputFluid(Fluid.of('secretly_complicated:titaniumtetrachloride_fluid_still', 10))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(360)

    // Nitrating Mixture
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:nitric_acid_fluid_still', 20))
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_acid_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:nitration_mixture_fluid_still', 40))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)

    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:nitration_mixture_fluid_still', 20))
        .inputFluid(Fluid.of('secretly_complicated:toluene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:mononitrotoluene_fluid_still', 40))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)

    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:nitration_mixture_fluid_still', 20))
        .inputFluid(Fluid.of('secretly_complicated:mononitrotoluene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:dinitrotoluene_fluid_still', 40))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)

    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:nitration_mixture_fluid_still', 20))
        .inputFluid(Fluid.of('secretly_complicated:dinitrotoluene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:trinitrotoluene_fluid_still', 40))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
        
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:trinitrotoluene_fluid_still', 20))
        .inputFluid(Fluid.of('secretly_complicated:silica_xerogel_fluid_still', 20))
        .outputItem(Item.of('secretly_complicated:gelled_trinitrotoluene_chunk').withCount(1))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)

    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputItem(Item.of('secretly_complicated:silicon_dust', 1))
        .inputFluid(Fluid.of('secretly_complicated:rubber_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:silica_xerogel_fluid_still', 20))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)

    // event.recipes.multiblocked.multiblock("chemical_reactor")
    //     .setChance(0.0)
    //     .inputItem(Item.of('mekanism:advanced_control_circuit', 1))
    //     .setChance(1)
    //     .inputFluid(Fluid.of('secretly_complicated:ethene_fluid_still', 810))
    //     .inputFluid(Fluid.of('secretly_complicated:oxygen_fluid_still', 810))
    //     // .inputGas({type: 'kubejs:ethene_gas', amount: 810})
    //     // .inputGas("secretly_complicated:oxygen_gas 810")
    //     .outputItem(Item.of('secretly_complicated:polyethylene_block').withCount(1))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(360)
    // event.recipes.multiblocked.multiblock("chemical_reactor")
    //     .setChance(0.0)
    //     .inputItem(Item.of('ae2:logic_processor', 1))
    //     .setChance(1)
    //     .inputFluid(Fluid.of('secretly_complicated:ethene_fluid_still', 90))
    //     .inputFluid(Fluid.of('secretly_complicated:oxygen_fluid_still', 90))
    //     // .inputGas("secretly_complicated:ethene_gas 90")
    //     // .inputGas("secretly_complicated:oxygen_gas 90")
    //     .outputItem(Item.of('secretly_complicated:polyethylene_solid').withCount(1))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(360)
    // event.recipes.multiblocked.multiblock("chemical_reactor")
    //     .inputItem(Item.of('minecraft:sugar', 1))
    //     .inputItem(Item.of('secretly_complicated:polyethylene_tiny_dust', 1))
    //     .inputFluid(Fluid.of('secretly_complicated:toluene_fluid_still', 100))
    //     .outputItem(Item.of('secretly_complicated:gelled_toluene_chunk').withCount(2))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(360)
    // event.recipes.multiblocked.multiblock("chemical_reactor")
    //     .inputItem(Item.of('minecraft:sugar', 9))
    //     .inputItem(Item.of('secretly_complicated:polyethylene_small_dust', 1))
    //     .inputFluid(Fluid.of('secretly_complicated:toluene_fluid_still', 900))
    //     .outputItem(Item.of('secretly_complicated:gelled_toluene_block').withCount(2))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(360)
    // event.recipes.multiblocked.multiblock("chemical_reactor")
    //     .inputItem(Item.of('secretly_complicated:gelled_toluene_chunk', 4))
    //     .inputFluid(Fluid.of('secretly_complicated:sulfuric_acid_fluid_still', 250))
    //     .outputItem(Item.of('minecraft:tnt').withCount(1))
    //     .setPerTick(true)
    //     .inputFE(30)
    //     .duration(360)
// Chemical Reactor - Refinery Stage 1
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_refinery_gases_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 100))
        // .inputGas({type: 'secretly_complicated:hydrogen_gas', amount: 100})
        .outputFluid(Fluid.of('secretly_complicated:refinery_gases_fluid_still', 80))
        // .outputGas({type: 'secretly_complicated:hydrogen_sulfide_gas', amount: 120})
        //.outputFluid(Fluid.of('secretly_complicated:hydrogen_sulfide_fluid_still', 120))
        .outputItem(Item.of('secretly_complicated:sulfur_dust').withCount(4))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_residual_fuel_oils_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 100))
        // .inputGas({type: 'secretly_complicated:hydrogen_gas', amount: 100})
        .outputFluid(Fluid.of('secretly_complicated:residual_fuel_oils_fluid_still', 80))
        // .outputGas({type: 'secretly_complicated:hydrogen_sulfide_gas', amount: 120})
        //.outputFluid(Fluid.of('secretly_complicated:hydrogen_sulfide_fluid_still', 120))
        .outputItem(Item.of('secretly_complicated:sulfur_dust').withCount(4))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_light_distillates_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 100))
        // .inputGas({type: 'secretly_complicated:hydrogen_gas', amount: 100})
        .outputFluid(Fluid.of('secretly_complicated:light_distillates_fluid_still', 80))
        // .outputGas({type: 'secretly_complicated:hydrogen_sulfide_gas', amount: 120})
        //.outputFluid(Fluid.of('secretly_complicated:hydrogen_sulfide_fluid_still', 120))
        .outputItem(Item.of('secretly_complicated:sulfur_dust').withCount(4))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_gasoline_blending_components_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 100))
        // .inputGas({type: 'secretly_complicated:hydrogen_gas', amount: 100})
        .outputFluid(Fluid.of('secretly_complicated:gasoline_blending_components_fluid_still', 80))
        // .outputGas({type: 'secretly_complicated:hydrogen_sulfide_gas', amount: 120})
        //.outputFluid(Fluid.of('secretly_complicated:hydrogen_sulfide_fluid_still', 120))
        .outputItem(Item.of('secretly_complicated:sulfur_dust').withCount(4))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_naptha_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 100))
        // .inputGas({type: 'secretly_complicated:hydrogen_gas', amount: 100})
        .outputFluid(Fluid.of('secretly_complicated:naptha_fluid_still', 80))
        // .outputGas({type: 'secretly_complicated:hydrogen_sulfide_gas', amount: 120})
        //.outputFluid(Fluid.of('secretly_complicated:hydrogen_sulfide_fluid_still', 120))
        .outputItem(Item.of('secretly_complicated:sulfur_dust').withCount(4))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_kerosene_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 100))
        // .inputGas({type: 'secretly_complicated:hydrogen_gas', amount: 100})
        .outputFluid(Fluid.of('secretly_complicated:kerosene_fluid_still', 80))
        // .outputGas({type: 'secretly_complicated:hydrogen_sulfide_gas', amount: 120})
        //.outputFluid(Fluid.of('secretly_complicated:hydrogen_sulfide_fluid_still', 120))
        .outputItem(Item.of('secretly_complicated:sulfur_dust').withCount(4))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("chemical_reactor")
        .inputFluid(Fluid.of('secretly_complicated:sulfuric_heavy_distillates_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 100))
        // .inputGas({type: 'secretly_complicated:hydrogen_gas', amount: 100})
        .outputFluid(Fluid.of('secretly_complicated:heavy_distillates_fluid_still', 80))
        // .outputGas({type: 'secretly_complicated:hydrogen_sulfide_gas', amount: 120})
        //.outputFluid(Fluid.of('secretly_complicated:hydrogen_sulfide_fluid_still', 120))
        .outputItem(Item.of('secretly_complicated:sulfur_dust').withCount(4))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)

// Oil Cracking Unit - Refinery Stage 2
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:refinery_gases_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 100))
        .outputFluid(Fluid.of('minecraft:water', 100))
        .outputFluid(Fluid.of('secretly_complicated:steam_cracked_refinery_gases_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:naptha_fluid_still', 100))
        .inputItem(Item.of('secretly_complicated:zeolite_dust', 1))
        .outputItem(Item.of('secretly_complicated:spent_zeolite_dust').withCount(1))
        .outputFluid(Fluid.of('secretly_complicated:catalytically_cracked_naptha_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:naptha_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 100))
        .outputFluid(Fluid.of('minecraft:water', 100))
        .outputFluid(Fluid.of('secretly_complicated:steam_cracked_naptha_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:kerosene_fluid_still', 100))
        .inputItem(Item.of('secretly_complicated:zeolite_dust', 1))
        .outputItem(Item.of('secretly_complicated:spent_zeolite_dust').withCount(1))
        .outputFluid(Fluid.of('secretly_complicated:catalytically_cracked_kerosene_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:kerosene_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 100))
        .outputFluid(Fluid.of('minecraft:water', 100))
        .outputFluid(Fluid.of('secretly_complicated:steam_cracked_kerosene_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:heavy_distillates_fluid_still', 100))
        .inputItem(Item.of('secretly_complicated:zeolite_dust', 1))
        .outputItem(Item.of('secretly_complicated:spent_zeolite_dust').withCount(1))
        .outputFluid(Fluid.of('secretly_complicated:catalytically_cracked_heavy_distillates_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:light_distillates_fluid_still', 100))
        .inputItem(Item.of('secretly_complicated:zeolite_dust', 1))
        .outputItem(Item.of('secretly_complicated:spent_zeolite_dust').withCount(1))
        .outputFluid(Fluid.of('secretly_complicated:catalytically_cracked_light_distillates_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:gasoline_blending_components_fluid_still', 100))
        .inputItem(Item.of('secretly_complicated:zeolite_dust', 1))
        .outputItem(Item.of('secretly_complicated:spent_zeolite_dust').withCount(1))
        .outputFluid(Fluid.of('secretly_complicated:catalytically_cracked_gasoline_blending_components_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:residual_fuel_oils_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 100))
        .outputFluid(Fluid.of('minecraft:water', 100))
        .outputFluid(Fluid.of('secretly_complicated:steam_cracked_residual_fuel_oils_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:residual_fuel_oils_fluid_still', 100))
        .inputItem(Item.of('secretly_complicated:zeolite_dust', 1))
        .outputItem(Item.of('secretly_complicated:spent_zeolite_dust').withCount(1))
        .outputFluid(Fluid.of('secretly_complicated:catalytically_cracked_residual_fuel_oils_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:gasoline_blending_components_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 100))
        .outputFluid(Fluid.of('minecraft:water', 100))
        .outputFluid(Fluid.of('secretly_complicated:steam_cracked_gasoline_blending_components_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:light_distillates_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 100))
        .outputFluid(Fluid.of('minecraft:water', 100))
        .outputFluid(Fluid.of('secretly_complicated:steam_cracked_light_distillates_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:heavy_distillates_fluid_still', 100))
        .inputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 100))
        .outputFluid(Fluid.of('minecraft:water', 100))
        .outputFluid(Fluid.of('secretly_complicated:steam_cracked_heavy_distillates_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)
    event.recipes.multiblocked.multiblock("oil_cracking_unit")
        .inputFluid(Fluid.of('secretly_complicated:refinery_gases_fluid_still', 100))
        .inputItem(Item.of('secretly_complicated:zeolite_dust', 1))
        .outputItem(Item.of('secretly_complicated:spent_zeolite_dust').withCount(1))
        .outputFluid(Fluid.of('secretly_complicated:catalytically_cracked_refinery_gases_fluid_still', 100))
        .setPerTick(true)
        .inputFE(30)
        .duration(360)

// Steam Boiler
    event.recipes.multiblocked.multiblock("steam_boiler")
        .inputFluid(Fluid.of('minecraft:water', 1000))
        .outputFluid(Fluid.of('secretly_complicated:steam_fluid_still', 1000))
        .setPerTick(true)
        .inputFE(10)
        .duration(120)

// Distillation Tower - Refinery Stage 1
    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:refinery_gases_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:methane_fluid_still', 25))
        .outputFluid(Fluid.of('secretly_complicated:ethene_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:ethane_fluid_still', 25))
        .outputFluid(Fluid.of('secretly_complicated:propene_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:propane_fluid_still', 25))
        .outputFluid(Fluid.of('secretly_complicated:butene_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:butane_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:isobutane_fluid_still', 5))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)

    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:crude_oil_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:sulfuric_refinery_gases_fluid_still', 7))
        .outputFluid(Fluid.of('secretly_complicated:sulfuric_gasoline_blending_components_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:sulfuric_naptha_fluid_still', 70))
        .outputFluid(Fluid.of('secretly_complicated:sulfuric_kerosene_fluid_still', 16))
        .outputFluid(Fluid.of('secretly_complicated:sulfuric_light_distillates_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:sulfuric_heavy_distillates_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:sulfuric_residual_fuel_oils_fluid_still', 7))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)

    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:naptha_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:pentane_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:isopentane_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:ethylbenzene_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:butadiene_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:isobutane_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:gasoline_blending_components_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:gasoline_fluid_still', 45))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)

    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:heavy_distillates_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:lubricant_oil_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:paraffin_wax_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:petroleum_jelly_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:diesel_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:light_distillates_fluid_still', 20))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)

    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:light_distillates_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:kerosene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:diesel_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:fuel_oil_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:gasoline_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:naptha_fluid_still', 20))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)

    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:kerosene_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:hydrogen_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:ethene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:propene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:butene_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:isobutylene_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:butadiene_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:naptha_fluid_still', 20))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)

    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:residual_fuel_oils_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:heavy_distillates_fluid_still', 20))
        .outputItem(Item.of('secretly_complicated:coal_coke_dust').withCount(3))
        .outputItem(Item.of('secretly_complicated:bitumen_dust').withCount(3))
        .outputItem(Item.of('secretly_complicated:carbon_dust').withCount(2))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)

    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:gasoline_blending_components_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:isobutane_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:butene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:propene_fluid_still', 20))
        .outputFluid(Fluid.of('secretly_complicated:mixed_xylenes_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:toluene_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:benzene_fluid_still', 10))
        .outputFluid(Fluid.of('secretly_complicated:refinery_gases_fluid_still', 10))
        .setPerTick(true)
        .inputFE(30)
        .duration(1200)
// Steam Cracked
    event.recipes.multiblocked.multiblock("distillation_tower")
        .inputFluid(Fluid.of('secretly_complicated:steam_cracked_refinery_gases_fluid_still', 100))
        .outputFluid(Fluid.of('secretly_complicated:methane_fluid_still', 25))
        .outputFluid(Fluid.of('secretly_complicated:ethene_fluid_still', 25))
        .outputFluid(Fluid.of('secretly_complicated:ethane_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:propene_fluid_still', 30))
        .outputFluid(Fluid.of('secretly_complicated:propane_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:butene_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:butane_fluid_still', 5))
        .outputFluid(Fluid.of('secretly_complicated:isobutane_fluid_still', 5))
        .setPerTick(true)
        .inputFE(30)
        .duration(100)

})