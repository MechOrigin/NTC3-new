onEvent('recipes', (event) => {
    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //Also note, can't use Item.of because Count is caps sensitive (Name too)

    const machineShapes = {
        me_controller: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'C', 'C', 'C', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'C', 'C', 'C', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['C', 'Q', 'Q', 'Q', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['Q', 'E', 'F', 'E', 'Q'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['C', 'Q', 'Q', 'Q', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['Q', 'S', 'E', 'S', 'Q'],
                    ['Q', 'S', 'S', 'S', 'Q'],
                    ['C', 'Q', 'Q', 'Q', 'C']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['C', 'C', 'C', 'C', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'Q', 'Q', 'Q', 'C'],
                    ['C', 'C', 'C', 'C', 'C']
                ]
            }
        ],
        mekanism_steel_casing: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "O", "O", "O", "S"],
                    ["O", "S", "O", "S", "O"],
                    ["O", "O", "S", "O", "O"],
                    ["O", "S", "O", "S", "O"],
                    ["S", "O", "O", "O", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["O", "S", "O", "S", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "G", "G", "G", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "S", "O", "S", "O"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["O", "O", "S", "O", "O"],
                    ["O", "G", "G", "G", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "G", "G", "G", "O"],
                    ["O", "O", "S", "O", "O"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["O", "S", "O", "S", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "G", "G", "G", "O"],
                    ["S", "G", "G", "G", "S"],
                    ["O", "S", "O", "S", "O"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "O", "O", "O", "S"],
                    ["O", "S", "O", "S", "O"],
                    ["O", "O", "S", "O", "O"],
                    ["O", "S", "O", "S", "O"],
                    ["S", "O", "O", "O", "S"]
                ]
            }
        ],
        // mysticalagri_machine_frame: [
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["I", "I", "I", "I"],
        //             ["I", "I", "I", "I"],
        //             ["I", "I", "I", "I"],
        //             ["I", "I", "I", "I"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["I", "I", "I", "I"],
        //             ["I", "S", "C", "I"],
        //             ["I", "C", "S", "I"],
        //             ["I", "I", "I", "I"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["I", "I", "I", "I"],
        //             ["I", "C", "S", "I"],
        //             ["I", "S", "C", "I"],
        //             ["I", "I", "I", "I"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["I", "I", "I", "I"],
        //             ["I", "I", "I", "I"],
        //             ["I", "I", "I", "I"],
        //             ["I", "I", "I", "I"]
        //         ]
        //     }
        // ],
        // pity_machine_frame: [
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["T", "T", "T", "T"],
        //             ["T", "I", "I", "T"],
        //             ["T", "I", "I", "T"],
        //             ["T", "T", "T", "T"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["S", "S", "S", "S"],
        //             ["S", "R", "R", "S"],
        //             ["S", "R", "R", "S"],
        //             ["S", "S", "S", "S"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["S", "S", "S", "S"],
        //             ["S", "R", "R", "S"],
        //             ["S", "R", "R", "S"],
        //             ["S", "S", "S", "S"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["T", "T", "T", "T"],
        //             ["T", "I", "I", "T"],
        //             ["T", "I", "I", "T"],
        //             ["T", "T", "T", "T"]
        //         ]
        //     }
        // ],
        // rftools_machine_frame: [
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["S", "S", "S", "S"],
        //             ["S", "S", "S", "S"],
        //             ["S", "S", "S", "S"],
        //             ["S", "S", "S", "S"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["S", "S", "S", "S"],
        //             ["S", "I", "C", "S"],
        //             ["S", "C", "I", "S"],
        //             ["S", "S", "S", "S"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["S", "S", "S", "S"],
        //             ["S", "C", "I", "S"],
        //             ["S", "I", "C", "S"],
        //             ["S", "S", "S", "S"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["S", "S", "S", "S"],
        //             ["S", "S", "S", "S"],
        //             ["S", "S", "S", "S"],
        //             ["S", "S", "S", "S"]
        //         ]
        //     }
        // ],
        thermal_fluid_cell_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            }
        ],
        thermal_machine_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "I", "I", "I"],
                    ["I", "C", "C", "I"],
                    ["I", "C", "C", "I"],
                    ["I", "I", "I", "I"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["I", "C", "C", "I"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["I", "C", "C", "I"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "C", "C", "S"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["S", "C", "C", "S"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["S", "S", "S", "S"],
                    ["S", "C", "C", "S"],
                    ["S", "C", "C", "S"],
                    ["S", "S", "S", "S"]
                ]
            }
        ],
        thermal_redstone_flux_frame: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["E", "C", "C", "E"],
                    ["C", "-", "-", "C"],
                    ["C", "-", "-", "C"],
                    ["E", "C", "C", "E"]
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ["L", "E", "E", "L"],
                    ["E", "C", "C", "E"],
                    ["E", "C", "C", "E"],
                    ["L", "E", "E", "L"]
                ]
            }
        ],
        // end_resin_processor: [
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["P", "P", "P", "P"],
        //             ["O", "C", "E", "I"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["P", "F", "F", "P"],
        //             ["P", "F", "F", "P"]
        //         ]
        //     }
        // ],
        // compact_crafter: [
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["D", "G", "G", "G", "G", "G", "D"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["D", "G", "G", "G", "G", "G", "D"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["G", "G", "G", "G", "G", "G", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "G", "G", "G", "G", "G", "G"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["G", "G", "G", "G", "G", "G", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "G", "G", "G", "G", "G", "G"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["G", "G", "G", "G", "G", "G", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "H", "H", "H", "-", "G"],
        //             ["G", "-", "H", "H", "H", "-", "G"],
        //             ["G", "-", "H", "H", "H", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "G", "G", "G", "G", "G", "G"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["G", "G", "G", "G", "G", "G", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "H", "H", "H", "-", "G"],
        //             ["G", "-", "H", "H", "H", "-", "G"],
        //             ["G", "-", "H", "H", "H", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "G", "G", "G", "G", "G", "G"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["G", "G", "G", "G", "G", "G", "G"],
        //             ["G", "-", "C", "A", "-", "-", "G"],
        //             ["G", "B", "H", "H", "H", "B", "G"],
        //             ["G", "A", "H", "H", "H", "A", "G"],
        //             ["G", "-", "H", "H", "H", "-", "G"],
        //             ["G", "-", "-", "A", "-", "-", "G"],
        //             ["G", "G", "G", "G", "G", "G", "G"]
        //         ]
        //     },
        //     {
        //         type: 'compactcrafting:mixed',
        //         pattern: [
        //             ["D", "G", "G", "G", "G", "G", "D"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["G", "-", "-", "-", "-", "-", "G"],
        //             ["E", "G", "G", "F", "G", "G", "D"]
        //         ]
        //     }
        // ]
    };

    const recipes = [
        {
                //me_controller
                recipeSize: 5,
                layers: machineShapes.me_controller,
                catalyst: {
                    id: 'ae2:quartz_vibrant_glass',
                    Count: 1
                },
                components: {
                    'F': {
                        type: 'compactcrafting:block',
                        block: 'ae2:fluix_block'
                    },
                    'S': {
                        type: 'compactcrafting:block',
                        block: 'ae2:smooth_sky_stone_block'
                    },
                    'E': {
                        type: 'compactcrafting:block',
                        block: 'ae2:energy_acceptor'
                    },
                    'Q': {
                        type: 'compactcrafting:block',
                        block: 'ae2:quantum_ring'
                    },
                    'C': {
                        type: 'compactcrafting:block',
                        block: 'secretly_complicated:electrical_steel_block'
                    }
                },
                outputs: [{
                    id: 'ae2:controller',
                    Count: 1
                }]
        },

        {
            //mekanism_steel_casing
            recipeSize: 5,
            layers: machineShapes.mekanism_steel_casing,
            catalyst: {
                id: 'extendedcrafting:ender_star',
                Count: 1
            },
            components: {
                'S': {
                    type: 'compactcrafting:block',
                    block: 'secretly_complicated:steel_block'
                },
                'O': {
                    type: 'compactcrafting:block',
                    block: 'mekanismadditions:black_plastic'
                },
                'G': {
                    type: 'compactcrafting:block',
                    block: 'secretly_complicated:osmium_block'
                }
            },
            outputs: [{
                id: 'mekanism:steel_casing',
                Count: 1
            }]
    },

    // {
    //     //mysticalagri_machine_frame
    //     recipeSize: 4,
    //     layers: machineShapes.mysticalagri_machine_frame,
    //     catalyst: {
    //         id: 'mysticalagriculture:inferium_essence',
    //         Count: 1
    //     },
    //     components: {
    //         'S': {
    //             type: 'compactcrafting:block',
    //             block: 'mysticalagriculture:inferium_block'
    //         },
    //         'I': {
    //             type: 'compactcrafting:block',
    //             block: 'minecraft:iron_block'
    //         },
    //         'C': {
    //             type: 'compactcrafting:block',
    //             block: 'mysticalagriculture:prosperity_block'
    //         }
    //     },
    //     outputs: [{
    //         id: 'mysticalagriculture:machine_frame',
    //         Count: 1
    //     }]
    // },

    // {
    //     //pity_machine_frame
    //     recipeSize: 4,
    //     layers: machineShapes.pity_machine_frame,
    //     catalyst: {
    //         id: 'industrialforegoing:plastic',
    //         Count: 1
    //     },
    //     components: {
    //         'S': {
    //             type: 'compactcrafting:block',
    //             block: 'quark:sturdy_stone'
    //         },
    //         'T': {
    //             type: 'compactcrafting:block',
    //             block: 'immersiveengineering:treated_wood_horizontal'
    //         },
    //         'I': {
    //             type: 'compactcrafting:block',
    //             block: 'minecraft:iron_block'
    //         },
    //         'R': {
    //             type: 'compactcrafting:block',
    //             block: 'extendedcrafting:redstone_ingot_block'
    //         }
    //     },
    //     outputs: [{
    //         id: 'industrialforegoing:machine_frame_pity',
    //         Count: 1
    //     }]
    // },

    // {
    //     //rftools_machine_frame
    //     recipeSize: 4,
    //     layers: machineShapes.rftools_machine_frame,
    //     catalyst: {
    //         id: 'emendatusenigmatica:dimensional_gem',
    //         Count: 1
    //     },
    //     components: {
    //         'S': {
    //             type: 'compactcrafting:block',
    //             block: 'mekanismadditions:gray_plastic'
    //         },
    //         'I': {
    //             type: 'compactcrafting:block',
    //             block: 'emendatusenigmatica:cobalt_block'
    //         },
    //         'C': {
    //             type: 'compactcrafting:block',
    //             block: 'emendatusenigmatica:dimensional_block'
    //         }
    //     },
    //     outputs: [{
    //         id: 'rftoolsbase:machine_frame',
    //         Count: 1
    //     }]
    // },

    {
        //thermal_fluid_cell_frame
        recipeSize: 4,
        layers: machineShapes.thermal_fluid_cell_frame,
        catalyst: {
            id: 'secretly_complicated:brass_gear',
            Count: 1
        },
        components: {
            'E': {
                type: 'compactcrafting:block',
                block: 'secretly_complicated:aluminium_block'
            },
            'L': {
                type: 'compactcrafting:block',
                block: 'secretly_complicated:copper_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'tconstruct:clear_glass'
            }
        },
        outputs: [{
            id: 'thermal:fluid_cell_frame',
            Count: 1
        }]
    },

    {
        //thermal_machine_frame
        recipeSize: 4,
        layers: machineShapes.thermal_machine_frame,
        catalyst: {
            id: 'tconstruct:clear_glass',
            Count: 1
        },
        components: {
            'S': {
                type: 'compactcrafting:block',
                block: 'secretly_complicated:steel_block'
            },
            'I': {
                type: 'compactcrafting:block',
                block: 'minecraft:iron_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'tconstruct:clear_glass'
            }
        },
        outputs: [{
            id: 'thermal:machine_frame',
            Count: 1
        }]
    },

    {
        //thermal_redstone_flux_frame
        recipeSize: 4,
        layers: machineShapes.thermal_redstone_flux_frame,
        catalyst: {
            id: 'secretly_complicated:electrum_gear',
            Count: 1
        },
        components: {
            'E': {
                type: 'compactcrafting:block',
                block: 'secretly_complicated:electrum_block'
            },
            'L': {
                type: 'compactcrafting:block',
                block: 'secretly_complicated:lead_block'
            },
            'C': {
                type: 'compactcrafting:block',
                block: 'tconstruct:clear_glass'
            }
        },
        outputs: [{
            id: 'thermal:energy_cell_frame',
            Count: 1
        }]
    },

    // {
    //     //end resin processor
    //     recipeSize: 4,
    //     layers: machineShapes.end_resin_processor,
    //     catalyst: {
    //         id: 'avaritia:endest_pearl',
    //         Count: 1
    //     },
    //     components: {
    //         'P': {
    //             type: 'compactcrafting:block',
    //             block: 'enderioalloys:block_alloy_crystalline_pink_slime'
    //         },
    //         'F': {
    //             type: 'compactcrafting:block',
    //             block: 'masterfulmachinery:end_resin_processor_maximum_port_fluids_input'
    //         },
    //         'E': {
    //             type: 'compactcrafting:block',
    //             block: 'masterfulmachinery:end_resin_processor_maximum_port_energy_input'
    //         },
    //         'I': {
    //             type: 'compactcrafting:block',
    //             block: 'masterfulmachinery:end_resin_processor_singlechest_port_items_input'
    //         },
    //         'O': {
    //             type: 'compactcrafting:block',
    //             block: 'masterfulmachinery:end_resin_processor_singlechest_port_items_output'
    //         },
    //         'C': {
    //             type: 'compactcrafting:block',
    //             block: 'masterfulmachinery:end_resin_processor_controller'
    //         }
    //     },
    //     outputs: [{
    //         id: 'custommachinery:custom_machine_item',
    //         Count: 1,
    //         tag: {machine:"custommachinery:end_resin_processor"}
    //     }]
    // },

    // {
    //     //compact_crafting_single_block
    //     // (The Irony, yo I heard you like compact crafting so I'm gonna compact craft your compact crafter so you can compact craft)
    //     recipeSize: 7,
    //     layers: machineShapes.compact_crafter,
    //     catalyst: {
    //         id: 'extendedcrafting:the_ultimate_ingot',
    //         Count: 1
    //     },
    //     components: {
    //         'A': {
    //             type: 'compactcrafting:block',
    //             block: 'compactcrafting:field_projector'
    //         },
    //         'B': {
    //             type: 'compactcrafting:block',
    //             block: 'compactcrafting:match_proxy'
    //         },
    //         'C': {
    //             type: 'compactcrafting:block',
    //             block: 'compactcrafting:rescan_proxy'
    //         },
    //         'D': {
    //             type: 'compactcrafting:block',
    //             block: 'rftoolsbuilder:space_chamber'
    //         },
    //         'E': {
    //             type: 'compactcrafting:block',
    //             block: 'rftoolsbuilder:space_chamber_controller'
    //         },
    //         'F': {
    //             type: 'compactcrafting:block',
    //             block: 'rftoolsbuilder:builder'
    //         },
    //         'G': {
    //             type: 'compactcrafting:block',
    //             block: 'mekanismadditions:black_plastic'
    //         },
    //         'H': {
    //             type: 'compactcrafting:block',
    //             block: 'mekanismadditions:orange_plastic'
    //         }
    //     },
    //     outputs: [{
    //         id: 'custommachinery:custom_machine_item',
    //         Count: 1,
    //         tag: {machine:"custommachinery:compact_crafter"}
    //     }]
    // }

    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        });
    });

    removeRecipeByID(event, [
        'compactcrafting:field_projector',
        'thermal:energy_cell_frame',
        'ae2:controller',
        'mekanism:steel_casing',
        'thermal:machine_frame',
        'thermal:fluid_cell_frame'

        ])

    modifyShaped(event, 'compactcrafting:field_projector', 1, ['CDC', ' R ', 'SSS'], {
        C: '#forge:plates/constantan',
        D: 'compactcrafting:projector_dish',
        R: 'compactcrafting:base',
        S: '#forge:plates/invar'
    })
    
    modifyShaped(event, 'compactcrafting:projector_dish', 4, ['CA ', 'CBD', 'CA '], {
        A: '#forge:plates/constantan',
        B: 'minecraft:beacon',
        C: '#forge:glass_panes',
        D: '#forge:plates/invar'
    })
    
    modifyShaped(event, 'compactcrafting:base', 4, [' D ', 'BCB', 'ABA'], {
        A: '#forge:plates/constantan',
        B: '#forge:plates/invar',
        C: 'minecraft:beacon',
        D: '#forge:rods/invar'
    })

    modifyShaped(event, 'compactmachines:personal_shrinking_device', 1, ['DAD', 'BCB', 'BBB'], {
        A: '#forge:glass_panes',
        B: '#forge:plates/invar',
        C: 'integratedterminals:part_terminal_storage',
        D: '#forge:plates/brass'
    })

});
