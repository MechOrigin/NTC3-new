/*
*   Extended Crafting
*/

recipes.remove(<item:projecte:collector_mk1>);
mods.extendedcrafting.TableCrafting.addShaped("a2f6c342-f57e-436b-9011-ff36005305f6", 1, <item:projecte:collector_mk1>, [
	[<item:minecraft:glowstone>, <item:arsomega:infused_diamond_block>, <item:minecraft:glowstone>], 
	[<item:minecraft:glowstone>, <item:integrateddynamics:crystalized_chorus_block>, <item:minecraft:glowstone>], 
	[<item:minecraft:glowstone>, <item:ironfurnaces:netherite_furnace>, <item:minecraft:glowstone>]
]);

recipes.remove(<item:projecte:relay_mk1>);
mods.extendedcrafting.TableCrafting.addShaped("ea13449f-4757-4444-9290-4b037ee78bba", 1, <item:projecte:relay_mk1>, [
	[<tag:items:forge:obsidian>, <item:arsomega:infused_diamond_block>, <tag:items:forge:obsidian>], 
	[<tag:items:forge:obsidian>, <item:integrateddynamics:crystalized_chorus_block>, <tag:items:forge:obsidian>], 
	[<tag:items:forge:obsidian>, <item:ironfurnaces:netherite_furnace>, <tag:items:forge:obsidian>]
]);

recipes.remove(<item:projecte:alchemical_chest>);
mods.extendedcrafting.TableCrafting.addShaped("b1a8d56e-6097-40d6-a605-cd147e0b80fd", 1, <item:projecte:alchemical_chest>, [
	[<item:projecte:divining_rod_1>, <item:projecte:divining_rod_2>, <item:projecte:divining_rod_3>], 
	[<tag:items:tconstruct:smeltery_bricks>, <item:arsomega:infused_diamond>, <tag:items:tconstruct:smeltery_bricks>], 
	[<item:secretly_complicated:iron_dense_plate>, <item:sophisticatedstorage:netherite_chest>.withTag({woodType: "oak"}), <item:secretly_complicated:iron_dense_plate>]
]);

recipes.remove(<item:projecte:condenser_mk1>);
mods.extendedcrafting.TableCrafting.addShaped("5102e0ef-1964-4ef2-b03f-93cca6354d14", 1, <item:projecte:condenser_mk1>, [
	[<item:secretly_complicated:black_steel_dense_plate>, <item:arsomega:infused_diamond>, <item:secretly_complicated:black_steel_dense_plate>], 
	[<item:arsomega:infused_diamond>, <item:projecte:alchemical_chest>, <item:arsomega:infused_diamond>], 
	[<item:secretly_complicated:black_steel_dense_plate>, <item:arsomega:infused_diamond>, <item:secretly_complicated:black_steel_dense_plate>]
]);

recipes.remove(<item:projectexpansion:basic_emc_link>);
mods.extendedcrafting.TableCrafting.addShaped("e5df24b5-0afc-4ca7-a237-9c56816730b9", 1, <item:projectexpansion:basic_emc_link>, [
	[<item:nameless_trinkets:dubious_dust>, <item:nameless_trinkets:glowing_dust>, <item:nameless_trinkets:ultimate_dust>], 
	[<tag:items:ae2:interface>, <item:projecte:condenser_mk1>, <tag:items:ae2:interface>], 
	[<item:nameless_trinkets:dubious_dust>, <item:nameless_trinkets:glowing_dust>, <item:nameless_trinkets:ultimate_dust>]
]);