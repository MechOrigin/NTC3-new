priority: 100

onEvent('recipes', event => {
	elementsToUnify.forEach((material) => {
        //let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
		let crushed_ore = getPreferredItemInTag(Ingredient.of(`#forge:crushed/${material}`)).id;
		let dust_impure = getPreferredItemInTag(Ingredient.of(`#forge:impure_dust/${material}`)).id;
		let dust_pure = getPreferredItemInTag(Ingredient.of(`#forge:pure_dust/${material}`)).id;
		// let crushed_ore_centrifuged = getPreferredItemInTag(Ingredient.of(`#forge:crushed_ore_centrifuged/${material}`)).id;
		// let crushed_ore_purified = getPreferredItemInTag(Ingredient.of(`#forge:crushed_ore_purified/${material}`)).id;
		let raw_ore = getPreferredItemInTag(Ingredient.of(`#forge:raw_ores/${material}`)).id;

		let ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
		let nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;
		let block = getPreferredItemInTag(Ingredient.of(`#forge:blocks/${material}`)).id;

		let gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
		let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;
		let small_dust = getPreferredItemInTag(Ingredient.of(`#forge:small_dusts/${material}`)).id;
		let tiny_dust = getPreferredItemInTag(Ingredient.of(`#forge:tiny_dusts/${material}`)).id;

		let plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;
		let denseplate = getPreferredItemInTag(Ingredient.of(`#forge:dense_plates/${material}`)).id;

		let gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        let rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        let wire = getPreferredItemInTag(Ingredient.of(`#forge:wires/${material}`)).id;

		minecraft_crushed_ores_to_nugget_smelting(event, material, crushed_ore, nugget);
		minecraft_crushed_ores_to_gem_smelting(event, material, crushed_ore, gem);
		//minecraft_crushed_ores_to_dust_smelting(event, material, crushed_ore, dust);
		minecraft_dusts_to_ingots_smelting(event, material, ingot, dust);
		minecraft_pure_dusts_to_ingots_smelting(event, material, ingot, dust_pure);
		minecraft_dust_to_ingot_smelting_other(event, material, ingot, dust);
		minecraft_raw_ores_to_ingots_smelting(event, material, raw_ore);
		minecraft_impure_dusts_to_nuggets_smelting(event, material, nugget, dust_impure);

		greg_hammer_plating(event, material, ingot, plate, gem);
		greg_rod_assembly(event, material, ingot, rod);
		greg_hammer_wire(event, material, ingot, wire, gem);
		greg_hammer_dense_plating(event, material, plate, denseplate, gem);

		fix_ingot_from_nugget(event, material, ingot, nugget);
		fix_nugget_from_ingot(event, material, ingot, nugget);
		fix_ingot_from_block(event, material, ingot, block);
		fix_block_from_ingot(event, material, ingot, block);
		small_dust_to_dust_crafting(event, material, small_dust, dust);
		tiny_dust_to_small_dust_crafting(event, material, tiny_dust, small_dust);

		removeAllById(event, material);

		thermal_metal_casting(event, material, block, ingot, nugget, gear, rod, plate, wire);
		thermal_metal_ore_pulverizing(event, material, raw_ore, crushed_ore, ingot, small_dust, dust);
        thermal_metal_melting(event, material, block, ingot, nugget, gear, rod, plate, wire, dust_impure);
		thermal_metal_induction_smelter(event, material, block, ingot);
		thermal_metal_centrifuge(event, material, dust)
		thermal_press(event, material, block, ingot, nugget, gear, plate, denseplate)
		
        tconstruct_metal_casting(event, material, block, ingot, nugget, gear, rod, plate, wire);
		tconstruct_metal_melting(event, material, block, dust_impure, dust_pure);

		minecraft_dust_to_ingot_smelting_alloys(event, material, ingot, dust);

	});

	// materialsToUnify.forEach((material) => {
	// 	let crushedSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_crushed`)).id;
	// 	let impureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_impure_dust`)).id;
	// 	let pureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_pure_dust`)).id;
	// });

	planksToUnify.forEach((woodTypes) => {
		let planks = getPreferredItemInTag(Ingredient.of(`#forge:planks/${woodTypes}`)).id;
		let sawdust = getPreferredItemInTag(Ingredient.of(`#forge:sawdust`)).id;

		greg_saw_plating(event, woodTypes, planks);
	});

	gemsToUnify.forEach((material) => {
		let gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
		let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;
		let block = getPreferredItemInTag(Ingredient.of(`#forge:blocks/${material}`)).id;

		thermal_metal_gem_pulverizing(event, material, gem, dust);
		fix_gem_from_block(event, material, gem, block);
		fix_block_from_gem(event, material, gem, block);
	});

	alloysToUnify.forEach((material) => {
		let ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
		let nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;
		let block = getPreferredItemInTag(Ingredient.of(`#forge:blocks/${material}`)).id;

		let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;
		let plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;
		let gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        let rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        let wire = getPreferredItemInTag(Ingredient.of(`#forge:wires/${material}`)).id;
		let dust_impure = getPreferredItemInTag(Ingredient.of(`#forge:impure_dust/${material}`)).id;
		let dust_pure = getPreferredItemInTag(Ingredient.of(`#forge:pure_dust/${material}`)).id;

		// thermal_metal_induction_smelter(event, material, ingot);
		// thermal_metal_centrifuge(event, material, dust);
		// thermal_press(event, material, gear);
		// thermal_metal_melting(event, material, block, ingot, nugget, gear, rod, plate, wire, dust_impure);
		// thermal_metal_casting(event, material, block, ingot, nugget, gear, rod, plate, wire);

		// fix_ingot_from_nugget(event, material, ingot, nugget);
		// fix_block_from_ingot(event, material, ingot, block);

		// minecraft_dust_to_ingot_smelting_alloys(event, material, ingot, dust);

		// tconstruct_metal_casting(event, material, block, ingot, nugget, gear, rod, plate, wire);
		// tconstruct_metal_melting(event, material, block, dust_impure, dust_pure);

	});

	// var idRemove = [
	// 	''
	// ];
	// idRemove.forEach(iR => {
    //     event.remove({
    //         id: iR
    //     });
    // });


	function minecraft_crushed_ores_to_nugget_smelting(event, material, crushed_ore, nugget) {
        if (crushed_ore == air || nugget == air) {
            return;
        }

        var blacklistedMaterials = ['ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = Item.of(nugget, 10), 
            input = `#forge:crushed/${material}`;

		// silicon
		if (`${material}` == 'silicon') {
			input = Item.of('#forge:dusts/certus_quartz', 1)
			output = Item.of('#forge:nuggets/silicon', 1)
		}

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_crushed_ores_to_gem_smelting(event, material, crushed_ore, gem) {
        if (crushed_ore == air || gem == air) {
            return;
        }

        var blacklistedMaterials = ['amber', 'ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = gem,
            input = `#forge:crushed/${material}`;

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
    }

	// function minecraft_crushed_ores_to_dust_smelting(event, material, crushed_ore, dust) {
    //     if (crushed_ore == air || dust == air) {
    //         return;
    //     }

    //     var blacklistedMaterials = [

	// 	];

    //     for (var i = 0; i < blacklistedMaterials.length; i++) {
    //         if (blacklistedMaterials[i] == material) {
    //             return;
    //         }
    //     }

    //     var output = dust,
    //         input = `#forge:crushed/${material}`;


    //     event.smelting(output, input).xp(0.35);
    //     event.blasting(output, input).xp(0.7);
    // }


	function minecraft_dusts_to_ingots_smelting(event, material, ingot, dust) {
        if (dust == air || ingot == air) {
            return;
        }

        var blacklistedMaterials = [
			'rose_gold',
			'neptunium_ingot',
			'refined_glowstone',
			'refined_obsidian',
			'sulfur'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

		// if (crushed_ore_centrifuged != air) {
		// 	input.push(`#forge:crushed_ore_centrifuged/${material}`);
		// }

		// if (crushed_ore_purified != air) {
		// 	input.push(`#forge:crushed_ore_purified/${material}`);
		// }

        var output = `#forge:ingots/${material}`,
            input = `#forge:dusts/${material}`;

		// Iron
		if (`${material}` == 'magnetite') {
			output = Item.of('#forge:nuggets/iron', 8)
		}
		if (`${material}` == 'banded_iron') {
			output = Item.of('#forge:nuggets/iron', 4)
		}
		if (`${material}` == 'brown_limonite') {
			output = Item.of('#forge:nuggets/iron', 2)
		}
		if (`${material}` == 'pyrite') {
			output = Item.of('#forge:nuggets/iron', 3)
		}
		if (`${material}` == 'yellow_limonite') {
			output = Item.of('#forge:nuggets/iron', 2)
		}
		//Copper
		if (`${material}` == 'chalcopyrite') {
			output = Item.of('#forge:nuggets/copper', 3)
		}
		if (`${material}` == 'malachite') {
			output = Item.of('#forge:nuggets/copper', 2)
		}
		if (`${material}` == 'tetrahedrite') {
			output = Item.of('#forge:nuggets/copper', 3)
		}
		//Nickel
		if (`${material}` == 'pentlandite') {
			output = Item.of('#forge:nuggets/nickel', 4)
		}
		if (`${material}` == 'garnierite') {
			output = Item.of('#forge:nuggets/nickel', 4)
		}
		//Lead
		if (`${material}` == 'galena') {
			output = Item.of('#forge:nuggets/lead', 3)
		}
		//Tin
		if (`${material}` == 'cassiterite') {
			output = Item.of('#forge:nuggets/tin', 3)
		}
		//Zinc
		if (`${material}` == 'sphalerite') {
			output = Item.of('#forge:nuggets/zinc', 4)
		}

		//console.log(`regular: ${material}` + ' ' + output + ' ' + input);
		//Moved to RemoveAllById
		

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_pure_dusts_to_ingots_smelting(event, material, ingot, dust_pure) {
        if (ingot == air || dust_pure == air) {
            return;
        }

        var blacklistedMaterials = [

		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = ingot,
            input = `#forge:pure_dust/${material}`;

		if (`${material}` == 'sulfur') {
			output = Item.of('#forge:dusts/sulfur', 1)
		}

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_dust_to_ingot_smelting_other(event, material, ingot, dust) {
        if (ingot == air || dust == air) {
            return;
        }

        var blacklistedMaterials = [
			'sulfur'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = `#forge:ingots/${material}`,
            input = `#forge:dusts/${material}`;

		//console.log(`other: ${material}` + ' ' + output + ' ' + input);

		//Moved to RemoveAllById

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_raw_ores_to_ingots_smelting(event, material, raw_ore) {
        if (raw_ore == air) {
            return;
        }

        var blacklistedMaterials = [

		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = `#forge:ingots/${material}`,
            input = `#forge:raw_ores/${material}`;

		// Iron
		if (`${material}` == 'magnetite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'banded_iron') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'brown_limonite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'pyrite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		if (`${material}` == 'yellow_limonite') {
			output = Item.of('#forge:ingots/iron', 1)
		}
		//Copper
		if (`${material}` == 'chalcopyrite') {
			output = Item.of('#forge:ingots/copper', 1)
		}
		if (`${material}` == 'malachite') {
			output = Item.of('#forge:ingots/copper', 1)
		}
		if (`${material}` == 'tetrahedrite') {
			output = Item.of('#forge:ingots/copper', 1)
		}
		//Nickel
		if (`${material}` == 'pentlandite') {
			output = Item.of('#forge:ingots/nickel', 1)
		}
		if (`${material}` == 'garnierite') {
			output = Item.of('#forge:ingots/nickel', 1)
		}
		//Lead
		if (`${material}` == 'galena') {
			output = Item.of('#forge:ingots/lead', 1)
		}
		//Tin
		if (`${material}` == 'cassiterite') {
			output = Item.of('#forge:ingots/tin', 1)
		}
		//Zinc
		if (`${material}` == 'sphalerite') {
			output = Item.of('#forge:ingots/zinc', 1)
		}

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
    }

	function minecraft_impure_dusts_to_nuggets_smelting(event, material, nugget, dust_impure) {
		if (nugget == air || dust_impure == air) {
            return;
        }

        var blacklistedMaterials = [
			'sulfur'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = Item.of(nugget, 5),
            input = `#forge:impure_dust/${material}`;

		//console.log(`other: ${material}` + ' ' + output + ' ' + input);

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
	}

	//greg plates
	function greg_hammer_plating(event, material, ingot, plate, gem) {
        if (ingot == air || plate == air) {
            return;
        }

		var blacklistedMaterials = [
			'sulfur'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let output = plate,
            input = Item.of(`#forge:ingots/${material}`, 2),
            hammer = '#forge:tools/hammer';

        if (gem != air) {
            input.push(`#forge:gems/${material}`);
        }

		// Moved to RemoveAllById

        event.shapeless(output, [input, hammer]).id(`ntc3:base/hammering/${material}_plates`);
    }

	function greg_hammer_dense_plating(event, material, plate, denseplate, gem) {
        if (material == air || plate == air || denseplate == air) {
            return;
        }

		var blacklistedMaterials = [
			'sulfur'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let output = denseplate,
            input = Item.of(`#forge:plates/${material}`, 8),
            hammer = '#forge:tools/hammer';

        if (gem != air) {
            input.push(`#forge:gems/${material}`);
        }

        event.shapeless(output, [input, hammer]).id(`ntc3:base/hammering/${material}_dense_plates`);
    }

	function greg_rod_assembly(event, material, ingot, rod) {
        if (ingot == air || rod == air) {
            return;
        }

		var blacklistedMaterials = [
			'sulfur'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let output = rod,
            input = Item.of(`#forge:ingots/${material}`);

		event.shaped(output, ['  A', ' A ', 'A  '], {
			A: input
		}).id(`ntc3:crafting_shaped_${material}_rod`);
	}

		//greg wires
		function greg_hammer_wire(event, material, ingot, wire, gem) {
			if (ingot == air || wire == air) {
				return;
			}
	
			var blacklistedMaterials = [
				'sulfur'
			];
	
			for (var i = 0; i < blacklistedMaterials.length; i++) {
				if (blacklistedMaterials[i] == material) {
					return;
				}
			}
	
			let output = wire,
				input = Item.of(`#forge:rods/${material}`, 2),
				hammer = '#forge:tools/hammer';
	
			if (gem != air) {
				//input.push(`#forge:gems/${material}`);
				return;
			}
	
			// Moved to RemoveAllById
	
			event.shapeless(output, [input, hammer]).id(`ntc3:base/hammering/${material}_wires`);
		}

	function greg_saw_plating(event, woodTypes, planks) {
        if (planks == air) {
            return;
        }

        let output = Item.of(`#forge:plates/wood`),
            input = planks,
            saw = '#forge:tools/saw';

        event.shapeless(output, [input, saw]).id(`ntc3:base/sawing/${woodTypes}_plates`);
    }

	function small_dust_to_dust_crafting(event, material, small_dust, dust) {
		if (material == air || small_dust == air) {
            return;
        }

		var blacklistedMaterials = [
			// 'iron',
			// 'gold',
			// 'copper'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }
		
        let output = dust,
        input = Item.of(`#forge:small_dusts/${material}`, 9);

		event.shapeless(output, [input]).id(`ntc3:base/${material}_small_dust_to_dust`);
	}

	
	function tiny_dust_to_small_dust_crafting(event, material, tiny_dust, small_dust) {
		if (material == air || tiny_dust == air) {
            return;
        }

		var blacklistedMaterials = [
			// 'iron',
			// 'gold',
			// 'copper'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }
		
        let output = small_dust,
        input = Item.of(`#forge:tiny_dusts/${material}`, 9);

		event.shapeless(output, [input]).id(`ntc3:base/${material}_tiny_dust_to_small_dust`);
	}

	function removeAllById(event, material) {

		//minecraft_dusts_to_ingots_smelting
		event.remove({ id: `mekanism:processing/${material}/ingot/from_dust_smelting`});
		//event.remove({ id: `minecraft:${material}_ingot`});
		event.remove({ id: `mekanism:processing/${material}/ingot/from_dust_blasting`});
		//event.remove({ id: `antimatter_shared:ingot_${material}` })
		//event.remove({ id: `immersiveengineering:smelting/${material}_ingot_from_dust`})
		//event.remove({ id: `immersiveengineering:smelting/${material}_ingot_from_dust_from_blasting`})
		event.remove({ id: `thermal:smelting/${material}_ingot_from_dust_smelting`})
		event.remove({ id: `thermal:smelting/${material}_ingot_from_dust_blasting`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_mercury_ore`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_mars_ore`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_moon_ore`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_glacio_ore`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_venus_ore`})
		event.remove({ id: `beyond_earth:${material}_ingot`})
		event.remove({ id: `beyond_earth:${material}_ingot_2`})
		event.remove({ id: `beyond_earth:${material}_ingot_3`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_mercury_ore`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_mars_ore`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_moon_ore`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_glacio_ore`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_venus_ore`})
		event.remove({ id: `thermal:storage/raw_${material}_block`})
		event.remove({ id: `mekanism:processing/${material}/ingot/from_raw_smelting`});
		event.remove({ id: `mekanism:processing/${material}/ingot/from_raw_blasting`});

		//minecraft_dust_to_ingot_smelting_other
		event.remove({ id: `mekanism:processing/${material}/ingot/from_dust_smelting` });
		//event.remove({ id: `minecraft:${material}_ingot` });
		event.remove({ id: `mekanism:processing/${material}/ingot/from_dust_blasting` });
		//event.remove({ id: `antimatter_shared:ingot_${material}` })
		//console.log(`mekanism:processing/${material}/ingot/from_dust_smelting`);

		//greg_plates
		//event.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` })
		//event.remove({ id: `antimatter:plate` })
		event.remove({ id: `beyond_earth:${material}_plate` })

		//greg_wires
		//event.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` })
		//event.remove({ id: `antimatter:plate` })
		//event.remove({ id: `beyond_earth:${material}_plate` })

		//fix_ingot_from_nugget
		event.remove({ id: `tconstruct:common/materials/${material}_ingot_from_nuggets` })
		//event.remove({ id: `immersiveengineering:crafting/nugget_${material}_to_${material}_ingot` })
		event.remove({ id: `thermal:storage/${material}_ingot_from_nuggets` })
		event.remove({ id: `minecraft:${material}_ingot_from_nuggets` })
		event.remove({ id: `mekanism:nuggets/${material}` })
		event.remove({ id: `beyond_earth:${material}_ingot_from_nugget` })

		//fix_nugget_from_ingot
		event.remove({ id: `minecraft:${material}_nugget` })
		event.remove({ id: `tconstruct:common/materials/${material}_nugget_from_ingot` })
		event.remove({ id: `thermal:storage/${material}_nugget_from_ingot` })
		event.remove({ id: `beyond_earth:${material}_nugget_from_ingot` })
		event.remove({ id: `exnihiliosequentia:ens_${material}_nugget` })

		//fix_ingot_from_block
		event.remove({ id: `thermal:storage/${material}_block` })
		event.remove({ id: `tconstruct:common/materials/${material}_block_from_ingots` })
		event.remove({ id: `minecraft:${material}_ingot_from_${material}_block` })

		//fix_block_from_ingot
		event.remove({ id: `thermal:storage/${material}_ingot_from_block` })
		event.remove({ id: `tconstruct:common/materials/${material}_block_from_ingots` })
		event.remove({ id: `minecraft:${material}_block` })
		event.remove({ id: `mekanism:storage_blocks/${material}` })
		event.remove({ id: `beyond_earth:${material}_block` })

		//thermal_metal_ore_pulverizing
		event.remove({ id: /thermal:machines\/pulverizer/})
		event.remove({ id: /thermal:machines\/pulverizer\/pulverizer_.*/ })
		//event.remove({ id: /thermal:machines\/biggerreactors/ })
		//event.remove({ id: /thermal:compat\/immersiveengineering/ })
		// event.remove({ id: `thermal:parts/${material}_gear` })
		// event.remove({ type: 'thermal:pulverizer' });

		//tconstruct_metal_casting
		event.remove({ id: /tconstruct:smeltery\/casting/ })

		//thermal_metal_induction_smelter
		event.remove({ id: /thermal:machines\/smelter/ })

		//thermal_press
		event.remove({ id: /thermal:machines\/press/ })
		event.remove({ id: `thermal:parts/${material}_gear`})

		//thermal_metal_casting
		event.remove({ id: /thermal:compat\/tconstruct/ })

		//thermal_metal_centrifuge
		event.remove({ id: /thermal:machines\/centrifuge\/centrifuge_\w*_dust/ })

		//minecraft_dust_to_ingot_smelting_alloys
		event.remove({ id: `mekanism:processing/${material}/ingot/from_dust_smelting` });
		//event.remove({ id: `minecraft:${material}_ingot` });
		event.remove({ id: `mekanism:processing/${material}/ingot/from_dust_blasting` });
		//event.remove({ id: `antimatter_shared:ingot_${material}` })
		//event.remove({ id: `immersiveengineering:smelting/${material}_ingot_from_dust`})
		//event.remove({ id: `immersiveengineering:smelting/${material}_ingot_from_dust_from_blasting`})
		event.remove({ id: `thermal:smelting/${material}_ingot_from_dust_smelting`})
		event.remove({ id: `thermal:smelting/${material}_ingot_from_dust_blasting`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_mercury_ore`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_mars_ore`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_moon_ore`})
		event.remove({ id: `beyond_earth:blasting/${material}_ingot_from_glacio_ore`})
		event.remove({ id: `beyond_earth:${material}_ingot`})
		event.remove({ id: `beyond_earth:${material}_ingot_2`})
		event.remove({ id: `beyond_earth:${material}_ingot_3`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_mercury_ore`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_mars_ore`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_moon_ore`})
		event.remove({ id: `beyond_earth:smelting/${material}_ingot_from_glacio_ore`})
		//console.log(`mekanism:processing/${material}/ingot/from_dust_smelting`);
	}

	function fix_ingot_from_nugget(event, material, ingot, nugget) {
		if (material == air || nugget == air || ingot == air) {
            return;
        }

		var blacklistedMaterials = [
			//'iron',
			//'gold',
			//'copper'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }
		
        let output = ingot,
        input = Item.of(`#forge:nuggets/${material}`, 9);

		//Removals moved to removeAllById function

		event.shapeless(output, [input]).id(`ntc3:base/${material}_ingot_from_nuggets`);
	}

	function fix_nugget_from_ingot(event, material, ingot, nugget) {
		if (material == air || ingot == air || nugget == air) {
            return;
        }

		var blacklistedMaterials = [
			//'iron',
			//'gold',
			//'copper'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }
		
		// ingot to nugget again
		let output = Item.of(`#forge:nuggets/${material}`, 9),
		input = ingot;

		//Removals moved to removeAllById function

		event.shapeless(output, [input]).id(`ntc3:base/${material}_nuggets_from_ingot`);
	}

	function fix_ingot_from_block(event, material, ingot, block) {
		if (material == air || ingot == air || block == air) {
            return;
        }

		var blacklistedMaterials = [
			// 'iron',
			// 'gold',
			// 'copper'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }
		
		// ingot to nugget again
		// let output = Item.of(`#forge:ingots/${material}`, 9),
		// input = block;

		// event.shapeless(output, [input]).id(`ntc3:base/${material}_ingots_from_block`);
	}

	function fix_block_from_ingot(event, material, ingot, block) {
		if (material == air || ingot == air || block == air) {
            return;
        }

		var blacklistedMaterials = [

		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

		/*
        let output = block,
            input = Item.of(`#forge:ingots/${material}`, 9);

		 event.remove({ id: `mekanism:storage_blocks/${material}` })
		 //event.remove({ id: `immersiveengineering:crafting/ingot_${material}_to_storage_${material}` })
		 event.remove({ id: `thermal:storage/${material}_ingot_from_block` })
		// event.remove({ id: `minecraft:${material}_ingot_from_nuggets` })
		event.remove({ id: `beyond_earth:${material}_block` })

		event.shapeless(output, [input]).id(`ntc3:base/${material}_ingot_from_blocks`);
		event.remove({ id: `thermal:storage/${material}_block` })
				*/
		//expert mode remove block recipes

	}

    function thermal_metal_casting(event, material, block, ingot, nugget, gear, rod, plate, wire) {
		if (ingot == air || block == air) {
            return;
        }

		var blacklistedMaterials = [
			'rubber'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let modId;
		let stateId;
        if (Fluid.exists(`tconstruct:molten_${material}`)) {
			modId = 'tconstruct';
			stateId = 'molten';
        } else if (Fluid.exists(`secretly_complicated:${material}_fluid_still`)) {
            modId = 'secretly_complicated';
			stateId = 'fluid_still';
        // } else if (Fluid.exists(`kubejs:molten_${material}`)) {
        //     modId = 'kubejs';
        } else {
            return;
        }

        var recipes = [
            { cast: 'tconstruct:ingot_cast', type: 'ingot', amount: 90, output: ingot, energy: 50 }
        ];
        if (nugget != air) {
            recipes.push({ cast: 'tconstruct:nugget_cast', type: 'nugget', amount: 10, output: nugget, energy: 50 });
        }
        if (gear != air) {
            recipes.push({ cast: 'tconstruct:gear_cast', type: 'gear', amount: 360, output: gear, energy: 50 });
        }
        if (rod != air) {
            recipes.push({ cast: 'tconstruct:rod_cast', type: 'rod', amount: 45, output: rod, energy: 50 });
        }
        if (plate != air) {
            recipes.push({ cast: 'tconstruct:plate_cast', type: 'plate', amount: 90, output: plate, energy: 50 });
        }
        if (wire != air /*&& (`${material}` == 'copper') || (`${material}` == 'electrum') || (`${material}` == 'aluminium') || (`${material}` == 'steel') || (`${material}` == 'lead')*/) {
            recipes.push({ cast: 'tconstruct:wire_cast', type: 'wire', amount: 45, output: wire, energy: 50 });
        }
		var blockrecipes = [
            { type: 'block', amount: 810, output: block, energy: 50 }
        ];

		// Moved to RemoveAllById

		if (stateId == 'fluid_still') {
			recipes.forEach((recipe) => {
				//console.log(`Created new ${recipe.type} as ${recipe.amount} with ${recipe.output} and ${recipe.energy}`);
				event.custom({
					type: 'thermal:chiller',
					ingredients: [
						{
							fluid: `${modId}:${material}_${stateId}`,
							amount: `${recipe.amount}`
						},
						{
							item: `${recipe.cast}`
						}
					],
					result: [
						{
							item: recipe.output,
							count: 1
						}
					],
					energy: recipe.energy,
				})
				.id(`ntc3:compat/tconstruct/chiller_tconstruct_${material}_${recipe.type}`);
			});
			blockrecipes.forEach((recipe) => {
				//console.log(`Created new ${recipe.type} as ${recipe.amount} with ${recipe.output} and ${recipe.energy}`);
				event.custom({
					type: 'thermal:chiller',
					ingredients: [
						{
							fluid: `${modId}:${material}_${stateId}`,
							amount: `${recipe.amount}`
						}
					],
					result: [
						{
							item: recipe.output,
							count: 1
						}
					],
					energy: recipe.energy,
				})
				.id(`ntc3:compat/tconstruct/chiller_tconstruct_${material}_${recipe.type}`);
			});
		} else {
			recipes.forEach((recipe) => {
				//console.log(`Created new ${recipe.type} as ${recipe.amount} with ${recipe.output} and ${recipe.energy}`);
				event.custom({
					type: 'thermal:chiller',
					ingredients: [
						{
							fluid: `${modId}:${stateId}_${material}`,
							amount: `${recipe.amount}`
						},
						{
							item: `${recipe.cast}`
						}
					],
					result: [
						{
							item: recipe.output,
							count: 1
						}
					],
					energy: recipe.energy,
				})
				.id(`ntc3:compat/tconstruct/chiller_tconstruct_${material}_${recipe.type}`);
			});
			blockrecipes.forEach((recipe) => {
				//console.log(`Created new ${recipe.type} as ${recipe.amount} with ${recipe.output} and ${recipe.energy}`);
				event.custom({
					type: 'thermal:chiller',
					ingredients: [
						{
							fluid: `${modId}:${stateId}_${material}`,
							amount: `${recipe.amount}`
						}
					],
					result: [
						{
							item: recipe.output,
							count: 1
						}
					],
					energy: recipe.energy,
				})
				.id(`ntc3:compat/tconstruct/chiller_tconstruct_${material}_${recipe.type}`);
			});
		}
    }

    function thermal_metal_ore_pulverizing(event, material, raw_ore, crushed_ore, ingot, small_dust, dust) {
        if (material == air || crushed_ore == air) {
            return;
        }

		var recipes = [
           // { primaryOutput: dust, stoneOutput: 'minecraft:gravel', secondaryOutput: dust, primaryCount: 2, input: raw_ore, experience: 0.2 }
			{ primaryOutput: dust, stoneOutput: 'minecraft:gravel', secondaryOutput: dust, primaryCount: 2, input: crushed_ore, experience: 0.2 }
        ];

        if (ingot != air) {
			recipes.push({ primaryOutput: small_dust, primaryCount: 9, input: ingot, experience: 0.2 });
		}

		//Remove events moved to RemoveAllbyId

		recipes.forEach((recipe) => {
			//console.log(`Created new ${recipe.primaryOutput}, ${recipe.secondaryOutput}, ${recipe.stoneOutput} as ${recipe.input} and ${recipe.experience}`);
			if (`${recipe.input}` == ingot) {
				event.custom({
					type: 'thermal:pulverizer',
					ingredients: [
						{
							item: `${recipe.input}`
						}
					],
					result: [
						{
							item: `${recipe.primaryOutput}`,
							count: `${recipe.primaryCount}`
						}
					],
					experience: `${recipe.experience}`,
				})
				.id(`ntc3:machine/pulverizer/pulverizer_${material}_ore`);
			} else {
				event.custom({
					type: 'thermal:pulverizer',
					ingredients: [
						{
							item: `${recipe.input}`
						}
					],
					result: [
						{
							item: `${recipe.primaryOutput}`,
							count: `${recipe.primaryCount}`
						},
						{
							item: `${recipe.secondaryOutput}`,
							chance: 0.15
						},
						{
							item: `${recipe.stoneOutput}`,
							chance: 0.2
						}
					],
					experience: `${recipe.experience}`,
				})
				.id(`ntc3:machine/pulverizer/pulverizer_${material}_ore`);
			}
		});
    }

    function thermal_metal_melting(event, material, block, ingot, nugget, gear, rod, plate, wire, dust_impure) {
        if (ingot == air || wire == air) {
            return;
        }

        let modId;
		let stateId;
        if (Fluid.exists(`tconstruct:molten_${material}`)) {
			modId = 'tconstruct';
			stateId = 'molten';
        } else if (Fluid.exists(`secretly_complicated:${material}_fluid_still`)) {
            modId = 'secretly_complicated';
			stateId = 'fluid_still';
        // } else if (Fluid.exists(`kubejs:molten_${material}`)) {
        //     modId = 'kubejs';
        } else {
            return;
        }

        var recipes = [
            { type: 'ingot', amount: 90, input: ingot, energy: 50 }
        ];
        if (nugget != air) {
            recipes.push({ type: 'nugget', amount: 10, input: nugget, energy: 50 });
        }
        if (gear != air) {
            recipes.push({ type: 'gear', amount: 360, input: gear, energy: 50 });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: 45, input: rod, energy: 50 });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: 90, input: plate, energy: 50 });
        }
        if (wire != air /*&& (`${material}` == 'copper') || (`${material}` == 'electrum') || (`${material}` == 'aluminium') || (`${material}` == 'steel') || (`${material}` == 'lead')*/) {
            recipes.push({ type: 'wire', amount: 45, input: wire, energy: 50 });
        }
		if (block != air) {
            recipes.push({ type: 'block', amount: 810, input: block, energy: 50 });
        }
		if (dust_impure != air) {
            recipes.push({ type: 'dust_impure', amount: 60, input: dust_impure, energy: 50 });
        }
		
		if (stateId == 'fluid_still') {
			recipes.forEach((recipe) => {
				//console.log(`Created new ${recipe.type} as ${recipe.amount} with ${recipe.input} and ${recipe.energy}`);
				event.recipes.thermal
					.crucible(Fluid.of(`${modId}:${material}_${stateId}`, recipe.amount), recipe.input)
					.energy(recipe.energy)
					.id(`ntc3:base/thermal/crucible/${material}_${recipe.type}`);
			});
		} else {
			recipes.forEach((recipe) => {
				//console.log(`Created new ${recipe.type} as ${recipe.amount} with ${recipe.input} and ${recipe.energy}`);
				event.recipes.thermal
					.crucible(Fluid.of(`${modId}:${stateId}_${material}`, recipe.amount), recipe.input)
					.energy(recipe.energy)
					.id(`ntc3:base/thermal/crucible/${material}_${recipe.type}`);
			});
		}
    }

    function tconstruct_metal_casting(event, material, block, ingot, nugget, gear, rod, plate, wire) {
        if (ingot == air) {
            return;
        }

        let modId;
		let stateId;
        if (Fluid.exists(`tconstruct:molten_${material}`)) {
			modId = 'tconstruct';
			stateId = 'molten';
        } else if (Fluid.exists(`secretly_complicated:${material}_fluid_still`)) {
            modId = 'secretly_complicated';
			stateId = 'fluid_still';
        // } else if (Fluid.exists(`kubejs:molten_${material}`)) {
        //     modId = 'kubejs';
        } else {
            return;
        }

        var recipes = [
            { type: 'ingot', amount: 90, cooling: 57, output: ingot }
        ];
        if (nugget != air) {
            recipes.push({ type: 'nugget', amount: 10, cooling: 19, output: nugget });
        }
        if (gear != air) {
            recipes.push({ type: 'gear', amount: 360, cooling: 114, output: gear });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: 45, cooling: 40, output: rod });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: 90, cooling: 57, output: plate });
        }
        if (wire != air /*&& (`${material}` == 'copper') || (`${material}` == 'electrum') || (`${material}` == 'aluminium') || (`${material}` == 'steel') || (`${material}` == 'lead') || (`${material}` == 'red_alloy')*/ ) {
            recipes.push({ type: 'wire', amount: 45, cooling: 57, output: wire });
        }

		var basinrecipes = [];
		if (block != air) {
            basinrecipes.push({ type: 'block', amount: 810, cooling: 171, output: block });
        }

		//Moved to RemoveAllById

        let casts = ['gold', 'sand'];
        casts.forEach((cast) => {
			if (stateId == 'fluid_still') {
				recipes.forEach((recipe) => {
					//console.log(`Created cast ${recipe.type} as ${recipe.amount} with ${recipe.cooling} and ${recipe.output}`);
					event.custom({
							type: 'tconstruct:casting_table',
							cast: {
								tag: `tconstruct:casts/${cast == 'sand' ? 'single_use' : 'multi_use'}/${recipe.type}`
							},
							cast_consumed: cast == 'sand' ? true : false,
							fluid: {
								name: `${modId}:${material}_${stateId}`,
								amount: recipe.amount
							},
							result: recipe.output,
							cooling_time: recipe.cooling
					})
					.id(`ntc3:smeltery/casting/metal/${material}/${recipe.type}_${cast}_cast`);
				});
			} else {
				recipes.forEach((recipe) => {
					//console.log(`Created cast ${recipe.type} as ${recipe.amount} with ${recipe.cooling} and ${recipe.output}`);
					event.custom({
							type: 'tconstruct:casting_table',
							cast: {
								tag: `tconstruct:casts/${cast == 'sand' ? 'single_use' : 'multi_use'}/${recipe.type}`
							},
							cast_consumed: cast == 'sand' ? true : false,
							fluid: {
								name: `${modId}:${stateId}_${material}`,
								amount: recipe.amount
							},
							result: recipe.output,
							cooling_time: recipe.cooling
					})
					.id(`ntc3:smeltery/casting/metal/${material}/${recipe.type}_${cast}_cast`);
				});
			}
        });

		if (stateId == 'fluid_still') {
			basinrecipes.forEach((recipe) => {
				//console.log(`Created cast ${recipe.type} as ${recipe.amount} with ${recipe.cooling} and ${recipe.output}`);
				event.custom({
					type: 'tconstruct:casting_basin',
					fluid: {
						name: `${modId}:${material}_${stateId}`,
						amount: 810
					},
					result: `${recipe.output}`,
					cooling_time: 171
				})
				.id(`ntc3:smeltery/casting/metal/${material}/block`);
			});
		} else {
			basinrecipes.forEach((recipe) => {
				//console.log(`Created cast ${recipe.type} as ${recipe.amount} with ${recipe.cooling} and ${recipe.output}`);
				event.custom({
					type: 'tconstruct:casting_basin',
					fluid: {
						name: `${modId}:${stateId}_${material}`,
						amount: 810
					},
					result: `${recipe.output}`,
					cooling_time: 171
				})
				.id(`ntc3:smeltery/casting/metal/${material}/block`);
			});
		}
    }

    function tconstruct_metal_melting(event, material, block, dust_impure, dust_pure) {
        if (material == air || dust_impure == air || dust_pure == air) {
            return;
        }

        let modId;
		let stateId;
        if (Fluid.exists(`tconstruct:molten_${material}`)) {
			modId = 'tconstruct';
			stateId = 'molten';
        } else {
            return;
        }


		var id_prefix = 'ntc3:unify/tconstruct/melting/';
		
		var recipes = [
				{
					ingredient: {
						item: dust_pure
					},
					result: {
						fluid: `${modId}:${stateId}_${material}`,
						amount: 100
					},
					temperature: 800,
					time: 57,
					id: `${id_prefix}${material}_dust_pure`
				},
				{
					ingredient: {
						item: dust_impure
					},
					result: {
						fluid: `${modId}:${stateId}_${material}`,
						amount: 60
					},
					temperature: 800,
					time: 57,
					id: `${id_prefix}${material}_dust_impure`
				},
				{
					ingredient: {
						item: block
					},
					result: {
						fluid: `${modId}:${stateId}_${material}`,
						amount: 810
					},
					temperature: 800,
					time: 171,
					id: `${id_prefix}${material}_block`
				}
			];
			
	
		recipes.forEach((recipe) => {
			recipe.type = 'tconstruct:melting';
			event.custom(recipe).id(recipe.id);
		});

    }


    function thermal_metal_induction_smelter(event, material, block, ingot) {
        if (material == air || block == air) {
            return;
        }

		var recipes = [
			// {
            // primaryIngotInput: air, secondaryIngotInput: air, thirdIngotInput: air,
			// primaryDustInput: air, secondaryDustInput: air, thirdDustInput: air,
            // count1: 1, count2: 1, count3: 1, count4: 1, output: air, energy: 50  }
        ];

		var output = `forge:ingots/${material}`;
		

        // Steel
        if (`${material}` == 'steel') {
			recipes.push({ primaryIngotInput: 'forge:ingots/iron', primaryDustInput: 'forge:dusts/iron', /*primaryBlockInput: 'forge:blocks/iron',*/ count1: 1,
						secondaryIngotInput: 'forge:gems/coal_coke', secondaryDustInput: 'forge:dusts/coal_coke', /*secondaryBlockInput: 'forge:blocks/coal_coke',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 1, energy: 800 });
		}
		if (`${material}` == 'rose_gold') {
			recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', /*primaryBlockInput: 'forge:blocks/copper',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/gold', secondaryDustInput: 'forge:dusts/gold', /*secondaryBlockInput: 'forge:blocks/gold',*/ count2: 4,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		if (`${material}` == 'bronze') {
			recipes.push({ primaryIngotInput: 'forge:ingots/tin', primaryDustInput: 'forge:dusts/tin', /*primaryBlockInput: 'forge:blocks/tin',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/copper', secondaryDustInput: 'forge:dusts/copper', /*secondaryBlockInput: 'forge:blocks/copper',*/ count2: 3,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 4, energy: 800 });
        }
		if (`${material}` == 'electrum') {
			recipes.push({ primaryIngotInput: 'forge:ingots/gold', primaryDustInput: 'forge:dusts/gold', /*primaryBlockInput: 'forge:blocks/gold',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/silver', secondaryDustInput: 'forge:dusts/silver', /*secondaryBlockInput: 'forge:blocks/silver',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 2, energy: 800 });
        }
		if (`${material}` == 'invar') {
			recipes.push({ primaryIngotInput: 'forge:ingots/iron', primaryDustInput: 'forge:dusts/iron', /*primaryBlockInput: 'forge:blocks/iron',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/nickel', secondaryDustInput: 'forge:dusts/nickel', /*secondaryBlockInput: 'forge:blocks/nickel',*/ count2: 2,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 3, energy: 800 });
        }
		if (`${material}` == 'constantan') {
			recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', /*primaryBlockInput: 'forge:blocks/iron',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/nickel', secondaryDustInput: 'forge:dusts/nickel', /*secondaryBlockInput: 'forge:blocks/nickel',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 2, energy: 800 });
        }
		if (`${material}` == 'netherite') {
			recipes.push({ primaryIngotInput: 'forge:ingots/netherite_scrap', primaryDustInput: 'forge:dusts/netherite_scrap', /*primaryBlockInput: 'forge:ores/netherite_scrap',*/ count1: 4,
						secondaryIngotInput: 'forge:ingots/gold', secondaryDustInput: 'forge:dusts/gold', /*secondaryBlockInput: 'forge:blocks/gold',*/ count2: 4,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 1, energy: 800 });
        }
		if (`${material}` == 'tin_alloy') {
			recipes.push({ primaryIngotInput: 'forge:ingots/tin', primaryDustInput: 'forge:dusts/tin', /*primaryBlockInput: 'forge:blocks/tin',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/iron', secondaryDustInput: 'forge:dusts/iron', /*secondaryBlockInput: 'forge:blocks/iron',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 2, energy: 800 });
        }
		if (`${material}` == 'battery_alloy') {
			recipes.push({ primaryIngotInput: 'forge:ingots/lead', primaryDustInput: 'forge:dusts/lead', /*primaryBlockInput: 'forge:blocks/lead',*/ count1: 4,
						secondaryIngotInput: 'forge:ingots/antimony', secondaryDustInput: 'forge:dusts/antimony', /*secondaryBlockInput: 'forge:blocks/antimony',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		if (`${material}` == 'soldering_alloy') {
			recipes.push({ primaryIngotInput: 'forge:ingots/tin', primaryDustInput: 'forge:dusts/tin', /*primaryBlockInput: 'forge:blocks/tin',*/ count1: 9,
						secondaryIngotInput: 'forge:ingots/antimony', secondaryDustInput: 'forge:dusts/antimony', /*secondaryBlockInput: 'forge:blocks/antimony',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 10, energy: 800 });
        }
		if (`${material}` == 'red_alloy') {
			recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', /*primaryBlockInput: 'forge:blocks/copper',*/ count1: 1,
						secondaryDustInput: 'forge:dusts/redstone', /*secondaryBlockInput: 'forge:blocks/redstone',*/ count2: 4,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		// if (`${material}` == 'fireclay') {
		// 	recipes.push({ primaryDustInput: 'forge:dusts/brick', count1: 1,
		// 				secondaryDustInput: 'forge:dusts/sand', count2: 2,
		// 				thirdIngotInput: air, thirdDustInput: air, count3: 1,
		// 				primaryOutput: output, count4: 1, energy: 800 });
        // }
		if (`${material}` == 'brass') {
			recipes.push({ primaryIngotInput: 'forge:ingots/zinc', primaryDustInput: 'forge:dusts/zinc', /*primaryBlockInput: 'forge:blocks/zinc',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/copper', secondaryDustInput: 'forge:dusts/copper', /*secondaryBlockInput: 'forge:blocks/copper',*/ count2: 3,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 4, energy: 800 });
        }
		if (`${material}` == 'magnalium') {
			recipes.push({ primaryIngotInput: 'forge:ingots/magnesium', primaryDustInput: 'forge:dusts/magnesium', /*primaryBlockInput: 'forge:blocks/magnesium',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/aluminium', secondaryDustInput: 'forge:dusts/aluminium', /*secondaryBlockInput: 'forge:blocks/aluminium',*/ count2: 2,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 3, energy: 800 });
        }
		if (`${material}` == 'cupronickel') {
			recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', /*primaryBlockInput: 'forge:blocks/copper',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/nickel', secondaryDustInput: 'forge:dusts/nickel', /*secondaryBlockInput: 'forge:blocks/nickel',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 2, energy: 800 });
        }
		// if (`${material}` == 'amethyst_bronze') {
		// 	recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', count1: 1,
		// 				secondaryIngotInput: 'forge:gems/amethyst', count2: 1,
		// 				thirdIngotInput: air, thirdDustInput: air, count3: 1,
		// 				primaryOutput: output, count4: 1, energy: 800 });
        // }
		if (`${material}` == 'enderium') {
			recipes.push({ primaryIngotInput: 'forge:ingots/lead', primaryDustInput: 'forge:dusts/lead', /*primaryBlockInput: 'forge:blocks/lead',*/ count1: 3,
						secondaryIngotInput: 'forge:gems/diamond', secondaryDustInput: 'forge:dusts/diamond', /*secondaryBlockInput: 'forge:blocks/diamond',*/ count2: 1,
						thirdIngotInput: 'forge:gems/enderpearl', thirdDustInput: 'forge:dusts/enderpearl', /*secondaryBlockInput: 'forge:blocks/enderpearl',*/ count3: 2,
						primaryOutput: output, count4: 2, energy: 16000 });
        }
		if (`${material}` == 'lumium') {
			recipes.push({ primaryIngotInput: 'forge:ingots/tin', primaryDustInput: 'forge:dusts/tin', /*primaryBlockInput: 'forge:blocks/tin',*/ count1: 3,
						secondaryIngotInput: 'forge:ingots/silver', secondaryDustInput: 'forge:dusts/silver', /*secondaryBlockInput: 'forge:blocks/silver',*/ count2: 1,
						thirdIngotInput: 'forge:dusts/glowstone', /*secondaryBlockInput: 'forge:blocks/glowstone',*/ count3: 2,
						primaryOutput: output, count4: 4, energy: 12000 });
        }
		if (`${material}` == 'signalum') {
			recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', /*primaryBlockInput: 'forge:blocks/copper',*/ count1: 3,
						secondaryIngotInput: 'forge:ingots/silver', secondaryDustInput: 'forge:dusts/silver', /*secondaryBlockInput: 'forge:blocks/silver',*/ count2: 1,
						thirdIngotInput: 'forge:dusts/redstone', /*secondaryBlockInput: 'forge:blocks/redstone',*/ count3: 4,
						primaryOutput: output, count4: 4, energy: 14000 });
        }
		// if (`${material}` == 'hepatizon') {
		// 	recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', count1: 2,
		// 				secondaryIngotInput: 'forge:ingots/cobalt', secondaryDustInput: 'forge:dusts/cobalt', count2: 1,
		// 				thirdIngotInput: 'forge:obsidian', count3: 1,
		// 				primaryOutput: output, count4: 2, energy: 800 });
        // }
		// if (`${material}` == 'manyullyn') {
		// 	recipes.push({ primaryIngotInput: 'forge:ingots/cobalt', primaryDustInput: 'forge:dusts/cobalt', count1: 3,
		// 				secondaryIngotInput: 'forge:ingots/netherite_scrap', secondaryDustInput: 'forge:dusts/netherite_scrap', count2: 1,
		// 				thirdIngotInput: air, thirdDustInput: air, count3: 1,
		// 				primaryOutput: output, count4: 4, energy: 800 });
        // }
		// if (`${material}` == 'pig_iron') {
		// 	recipes.push({ primaryIngotInput: 'forge:ingots/iron', primaryDustInput: 'forge:dusts/iron', count1: 1,
		// 				secondaryIngotInput: 'forge:slimeball/blood', count2: 1,
		// 				thirdIngotInput: 'forge:honeybottle', count3: 1,
		// 				primaryOutput: output, count4: 2, energy: 800 });
        // }
		// if (`${material}` == 'queens_slime') {
		// 	recipes.push({ primaryIngotInput: 'forge:ingots/cobalt', primaryDustInput: 'forge:dusts/cobalt', count1: 1,
		// 				secondaryIngotInput: 'forge:ingots/gold', secondaryDustInput: 'forge:dusts/gold', count2: 1,
		// 				thirdIngotInput: 'forge:slimeball/magma_cream', count3: 1,
		// 				primaryOutput: output, count4: 2, energy: 800 });
        // }
		// if (`${material}` == 'slimesteel') {
		// 	recipes.push({ primaryIngotInput: 'forge:ingots/iron', primaryDustInput: 'forge:dusts/iron', count1: 1,
		// 				secondaryIngotInput: 'forge:ingots/seared_brick', count2: 1,
		// 				thirdIngotInput: 'forge:slimeball/sky', count3: 1,
		// 				primaryOutput: output, count4: 2, energy: 800 });
        // }
		if (`${material}` == 'black_bronze') {
			recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', /*primaryBlockInput: 'forge:blocks/copper',*/ count1: 3,
						secondaryIngotInput: 'forge:ingots/gold', secondaryDustInput: 'forge:dusts/gold', /*secondaryBlockInput: 'forge:blocks/gold',*/ count2: 1,
						thirdIngotInput: 'forge:ingots/silver', thirdDustInput: 'forge:dusts/silver', /*secondaryBlockInput: 'forge:blocks/silver',*/ count3: 1,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		if (`${material}` == 'black_steel') {
			recipes.push({ primaryIngotInput: 'forge:ingots/nickel', primaryDustInput: 'forge:dusts/nickel', /*primaryBlockInput: 'forge:blocks/nickel',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/black_bronze', secondaryDustInput: 'forge:dusts/black_bronze', /*secondaryBlockInput: 'forge:blocks/black_bronze',*/ count2: 1,
						thirdIngotInput: 'forge:ingots/steel', thirdDustInput: 'forge:dusts/steel', /*secondaryBlockInput: 'forge:blocks/steel',*/ count3: 3,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		if (`${material}` == 'ferrite_mixture') {
			recipes.push({ primaryIngotInput: 'forge:ingots/nickel', primaryDustInput: 'forge:dusts/nickel', /*primaryBlockInput: 'forge:blocks/nickel',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/zinc', secondaryDustInput: 'forge:dusts/zinc', /*secondaryBlockInput: 'forge:blocks/zinc',*/ count2: 1,
						thirdIngotInput: 'forge:ingots/iron', thirdDustInput: 'forge:dusts/iron', /*secondaryBlockInput: 'forge:blocks/iron',*/ count3: 4,
						primaryOutput: output, count4: 6, energy: 800 });
        }
		if (`${material}` == 'nichrome') {
			recipes.push({ primaryIngotInput: 'forge:ingots/nickel', primaryDustInput: 'forge:dusts/nickel', /*primaryBlockInput: 'forge:blocks/nickel',*/ count1: 4,
						secondaryIngotInput: 'forge:ingots/chromium', secondaryDustInput: 'forge:dusts/chromium', /*secondaryBlockInput: 'forge:blocks/chromium',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		if (`${material}` == 'osmiridium') {
			recipes.push({ primaryIngotInput: 'forge:ingots/iridium', primaryDustInput: 'forge:dusts/iridium', /*primaryBlockInput: 'forge:blocks/iridium',*/ count1: 3,
						secondaryIngotInput: 'forge:ingots/osmium', secondaryDustInput: 'forge:dusts/osmium', /*secondaryBlockInput: 'forge:blocks/osmium',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 4, energy: 800 });
        }
		if (`${material}` == 'gallium_arsenide') {
			recipes.push({ primaryIngotInput: 'forge:ingots/arsenic', primaryDustInput: 'forge:dusts/arsenic', /*primaryBlockInput: 'forge:blocks/arsenic',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/gallium', secondaryDustInput: 'forge:dusts/gallium', /*secondaryBlockInput: 'forge:blocks/gallium',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 2, energy: 800 });
        }
		if (`${material}` == 'kanthal') {
			recipes.push({ primaryIngotInput: 'forge:ingots/iron', primaryDustInput: 'forge:dusts/iron', /*primaryBlockInput: 'forge:blocks/iron',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/aluminium', secondaryDustInput: 'forge:dusts/aluminium', /*secondaryBlockInput: 'forge:blocks/aluminium',*/ count2: 1,
						thirdIngotInput: 'forge:ingots/chromium', thirdDustInput: 'forge:dusts/chromium', /*secondaryBlockInput: 'forge:blocks/chromium',*/ count3: 1,
						primaryOutput: output, count4: 3, energy: 800 });
        }
		if (`${material}` == 'cobalt_brass') {
			recipes.push({ primaryIngotInput: 'forge:ingots/brass', primaryDustInput: 'forge:dusts/brass', /*primaryBlockInput: 'forge:blocks/brass',*/ count1: 7,
						secondaryIngotInput: 'forge:ingots/aluminium', secondaryDustInput: 'forge:dusts/aluminium', /*secondaryBlockInput: 'forge:blocks/aluminium',*/ count2: 1,
						thirdIngotInput: 'forge:ingots/cobalt', thirdDustInput: 'forge:dusts/cobalt', /*secondaryBlockInput: 'forge:blocks/cobalt',*/ count3: 1,
						primaryOutput: output, count4: 9, energy: 800 });
        }
		if (`${material}` == 'bismuth_bronze') {
			recipes.push({ primaryIngotInput: 'forge:ingots/bismuth', primaryDustInput: 'forge:dusts/bismuth', /*primaryBlockInput: 'forge:blocks/bismuth',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/zinc', secondaryDustInput: 'forge:dusts/zinc', /*secondaryBlockInput: 'forge:blocks/zinc',*/ count2: 1,
						thirdIngotInput: 'forge:ingots/copper', thirdDustInput: 'forge:dusts/copper', /*secondaryBlockInput: 'forge:blocks/copper',*/ count3: 3,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		if (`${material}` == 'sterling_silver') {
			recipes.push({ primaryIngotInput: 'forge:ingots/copper', primaryDustInput: 'forge:dusts/copper', /*primaryBlockInput: 'forge:blocks/copper',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/silver', secondaryDustInput: 'forge:dusts/silver', /*secondaryBlockInput: 'forge:blocks/silver',*/ count2: 4,
						thirdIngotInput: air, thirdDustInput: air, count3: 3,
						primaryOutput: output, count4: 5, energy: 800 });
        }
		if (`${material}` == 'electrical_steel') {
			recipes.push({ primaryIngotInput: 'forge:ingots/silicon', primaryDustInput: 'forge:dusts/silicon', /*primaryBlockInput: 'forge:blocks/silicon',*/ count1: 1,
						secondaryIngotInput: 'forge:ingots/steel', secondaryDustInput: 'forge:dusts/steel', /*secondaryBlockInput: 'forge:blocks/steel',*/ count2: 1,
						thirdIngotInput: air, thirdDustInput: air, count3: 1,
						primaryOutput: output, count4: 2, energy: 10000 });
        }
		if (`${material}` == 'stainless_steel') {
			recipes.push({ primaryIngotInput: 'forge:ingots/invar', primaryDustInput: 'forge:dusts/invar', /*primaryBlockInput: 'forge:blocks/silicon',*/ count1: 3,
						secondaryIngotInput: 'forge:ingots/manganese', secondaryDustInput: 'forge:dusts/manganese', /*secondaryBlockInput: 'forge:blocks/steel',*/ count2: 1,
						thirdIngotInput: 'forge:ingots/chromium', thirdDustInput: 'forge:dusts/chromium', count3: 1,
						primaryOutput: output, count4: 5, energy: 800 });
        }

		// Moved to RemoveAllById
		
			recipes.forEach((recipe) => {
				if (`${recipe.thirdIngotInput}` == air) {
					//console.log(`Created new ${recipe.primaryIngotInput}, ${recipe.secondaryIngotInput}, ${recipe.thirdIngotInput}, ${recipe.primaryOutput}`);
					event.custom({
						type: 'thermal:smelter',
						ingredients: [
							{
							value: [
								{
								tag: `${recipe.primaryIngotInput}`
								},
								{
								tag: `${recipe.primaryDustInput}`
								}
							],
							count: `${recipe.count1}`
							},
							{
							value: [
								{
								tag: `${recipe.secondaryIngotInput}`
								},
								{
								tag: `${recipe.secondaryDustInput}`
								}
							],
							count: `${recipe.count2}`
							}
						],
						result: [
							{
							tag: `${recipe.primaryOutput}`,
							count: `${recipe.count4}`
							}
						],
						energy: `${recipe.energy}`
					})
					.id(`ntc3:smeltery/alloys/metal/${material}_2_material_alloys`);
				} else {
					//console.log(`Created new ${recipe.primaryIngotInput}, ${recipe.secondaryIngotInput}, ${recipe.thirdIngotInput}, ${recipe.primaryOutput}`);
					event.custom({
						type: 'thermal:smelter',
						ingredients: [
							{
							value: [
								{
								tag: `${recipe.primaryIngotInput}`
								},
								{
								tag: `${recipe.primaryDustInput}`
								}
							],
							count: `${recipe.count1}`
							},
							{
							value: [
								{
								tag: `${recipe.secondaryIngotInput}`
								},
								{
								tag: `${recipe.secondaryDustInput}`
								}
							],
							count: `${recipe.count2}`
							},
							{
							value: [
								{
								tag: `${recipe.thirdIngotInput}`
								},
								{
								tag: `${recipe.thirdDustInput}`
								}
							],
							count: `${recipe.count3}`
							}
						],
						result: [
							{
							tag: `${recipe.primaryOutput}`,
							count: `${recipe.count4}`
							}
						],
						energy: `${recipe.energy}`
					})
					.id(`ntc3:smeltery/alloys/metal/${material}_3_material_alloys`);
				}}
				);
		}

	function thermal_metal_centrifuge(event, material, dust) {
		if (dust == air) {
            return;
        }

		var recipes = [
			// {
            // primaryOutput: air, secondaryOutput: air, thirdOutput: air,
			// fourthOutput: air, fluidOutput: air, primaryInput: air,
            // count1: 1, count2: 1, count3: 1, count4: 1, amount: 1, energy: 50  }
        ];

        var input = `forge:dusts/${material}`;

		if (`${material}` == 'bronze') {
			recipes.push({
				primaryOutput: 'forge:dusts/copper', count1: 3,
				secondaryOutput: 'forge:dusts/tin', count2: 1,
				primaryInput: input,
				energy: 50 });
		} else {
			return;
		}

		// Moved to RemoveAllById

		recipes.forEach((recipe) => {
			//console.log(`Created new ${recipe.primaryInput}, ${recipe.primaryOutput}, ${recipe.secondaryOutput}`);
			event.custom({
				type: 'thermal:centrifuge',
				ingredient:
					{
						tag: `${recipe.primaryInput}`
					},
				  result: [
					{
						tag: `${recipe.primaryOutput}`,
						count: `${recipe.count1}`
					},
					{
						tag: `${recipe.secondaryOutput}`,
						count: `${recipe.count2}`
					}
				  ],
				  energy: `${recipe.energy}`
			})
			.id(`ntc3:centrifuge/alloys/metal/${material}/dust`);
		});
	}

	function thermal_press(event, material, block, ingot, nugget, gear, plate, denseplate) {
		if (material == air || block == air || ingot == air) {
            return;
        }

		var blacklistedMaterials = [
			'netherite'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

		// Moved to RemoveAllById

		const id_prefix = 'ntc3:base/thermal/press/';
		const recipes = [
			// {
			//     inputs: [Item.of('atmospheric:red_arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
			//     outputs: [Item.of('atmospheric:red_arid_sand', 4)],
			//     energy: 2400,
			//     id: `${id_prefix}red_arid_sand`
			// }
		];

		// var output = Item.of(nugget, 10), 
		// input = `#forge:crushed/${material}`;

		// // silicon
		// if (`${material}` == 'silicon') {
		// 	input = Item.of('#forge:dusts/certus_quartz', 1)
		// 	output = Item.of('#forge:nuggets/silicon', 1)
		// }
	
		// ['osmium', 'aluminum', 'uranium'].forEach((metal) => {
			recipes.push(
				{
				inputs: [
					Item.of(ingot, 9),
					Item.of('thermal:press_packing_3x3_die')
				],
				outputs: [Item.of(block)],
				energy: 2400,
				id: `${id_prefix}${material}_block`
				},
				{
				inputs: [
					Item.of(nugget, 9),
					Item.of('thermal:press_packing_3x3_die')
				],
				outputs: [Item.of(ingot)],
				energy: 2400,
				id: `${id_prefix}${material}_ingot`
				},
				{
				inputs: [
					Item.of(block, 1),
					Item.of('thermal:press_unpacking_die')
				],
				outputs: [Item.of(ingot, 9)],
				energy: 2400,
				id: `${id_prefix}${material}_ingot_unpacking`
				},
				{
				inputs: [
					Item.of(ingot, 1),
					Item.of('thermal:press_unpacking_die')
				],
				outputs: [Item.of(nugget, 9)],
				energy: 2400,
				id: `${id_prefix}${material}_nugget_unpacking`
				},
				{
				inputs: [
					Item.of(ingot, 2)
				],
				outputs: [Item.of(plate, 2)],
				energy: 2400,
				id: `${id_prefix}${material}_plate`
				},
				{
				inputs: [
					Item.of(ingot, 4),
					Item.of('thermal:press_gear_die')
				],
				outputs: [Item.of(gear, 2)],
				energy: 2400,
				id: `${id_prefix}${material}_gear`
				},
				{
				inputs: [
					Item.of(plate, 4)
				],
				outputs: [Item.of(denseplate, 1)],
				energy: 2400,
				id: `${id_prefix}${material}_denseplate`
				}
				
			);
		// });
	
		recipes.forEach((recipe) => {
			//console.log(`Created new ${recipe.outputs}, ${recipe.inputs}`);
			event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
		});
	}

	function minecraft_dust_to_ingot_smelting_alloys(event, material, ingot, dust) {
        if (ingot == air || dust == air) {
            return;
        }

        var blacklistedMaterials = [
			'iron',
			'gold',
			'copper'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = `#forge:ingots/${material}`,
            input = `#forge:dusts/${material}`;

		//console.log(`other: ${material}` + ' ' + output + ' ' + input);
		// Removals moved to RemoveAllbyID function

        event.smelting(output, input).xp(0.35);
        event.blasting(output, input).xp(0.7);
    }

	function thermal_metal_gem_pulverizing(event, material, gem, dust) {
        if (material == air || gem == air) {
            return;
        }

		var recipes = [
           // { primaryOutput: dust, stoneOutput: 'minecraft:gravel', secondaryOutput: dust, primaryCount: 2, input: raw_ore, experience: 0.2 }
			{ primaryOutput: dust, secondaryOutput: dust, primaryCount: 2, input: gem, experience: 0.2 }
        ];

		recipes.forEach((recipe) => {
			//console.log(`Created new ${recipe.primaryOutput}, ${recipe.secondaryOutput}, ${recipe.stoneOutput} as ${recipe.input} and ${recipe.experience}`);
			event.custom({
				type: 'thermal:pulverizer',
				ingredients: [
					{
						item: `${recipe.input}`
					}
				],
				result: [
					{
						item: `${recipe.primaryOutput}`,
						count: `${recipe.primaryCount}`
					},
					{
						item: `${recipe.secondaryOutput}`,
						chance: 0.15
					}
				],
				experience: `${recipe.experience}`,
			})
			.id(`ntc3:machine/pulverizer/pulverizer_${material}_gem`);
		});
    }

	function fix_gem_from_block(event, material, gem, block) {
		if (material == air || gem == air || block == air) {
            return;
        }

		var blacklistedMaterials = [
			// 'iron',
			// 'gold',
			// 'copper'
		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

		//gems
		let output = Item.of(`#forge:gems/${material}`, 9),
		input = block;
		event.shapeless(output, [input]).id(`ntc3:base/${material}_gems_from_block`);
	}

	function fix_block_from_gem(event, material, gem, block) {
		if (material == air || gem == air || block == air) {
            return;
        }

		var blacklistedMaterials = [

		];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

		//gems
		let output = block,
        input = Item.of(`#forge:gems/${material}`, 9);
		event.shapeless(output, [input]).id(`ntc3:base/${material}_blocks_from_gems`);
		//expert mode remove block recipes?

	}

})
