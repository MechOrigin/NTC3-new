

onEvent(`jei.information`, e => {
    // e.add(`allthemodium:molten_bluelava_bucket`, [`Soul Lava appears occasionally in the nether.`, `(Small source blocks only - no pools.)`])
    // e.add(`allthemodium:allthemodium_ore`, [`Check all the oceans for Allthemodium.`, `(Y 5-45)`])
    // e.add(`allthemodium:vibranium_ore`, [`Vibranium can be found in warped forests in the Nether.`, `(Y 80-127)`])
    // e.add(`allthemodium:unobtainium_ore`, [`Unobtainium can be obtained from the Highland biomes in the End.`])


    e.add(`secretly_complicated:ruby_netherrack_ore`, [`Chromium can be found in Ruby/Cinnabar Veins in the Nether.`, `(Y 5-40)`])
    e.add(`secretly_complicated:chromium_solid`, [`Chromium can be found in Ruby/Cinnabar Veins in the Nether.`, `(Y 5-40)`])
    e.add(`secretly_complicated:chromium_dust`, [`Chromium can be found in Ruby/Cinnabar Veins in the Nether.`, `(Y 5-40)`])

    e.add(`secretly_complicated:bentonite_netherrack_ore`, [`Zeolite can be found in Bentonite Veins in the Nether.`, `(Y 8-118)`])
    e.add(`secretly_complicated:zeolite_gem`, [`Zeolite can be found in Bentonite Veins in the Nether.`, `(Y 8-118)`])
    e.add(`secretly_complicated:zeolite_dust`, [`Zeolite can be found in Bentonite Veins in the Nether.`, `(Y 8-118)`])
    
    e.add(`secretly_complicated:nickel_netherrack_ore`, [`Nickel can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:garnierite_netherrack_ore`, [`Nickel can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:pentlandite_netherrack_ore`, [`Nickel can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:cooperite_netherrack_ore`, [`Nickel can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:nickel_solid`, [`Nickel can be found in Garnierite/Pentlandite/Cooperite Veins in the Nether.`, `(Y 1-255)`])
    
    e.add(`secretly_complicated:zinc_netherrack_ore`, [`Zinc can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:sphalerite_netherrack_ore`, [`Zinc can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:zinc_solid`, [`Zinc can be found in Sphalerite Veins in the Nether.`, `(Y 1-255)`])
    
    e.add(`secretly_complicated:silver_netherrack_ore`, [`Silver can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:galena_netherrack_ore`, [`Silver can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:silver_solid`, [`Silver can be found in Galena Veins in the Nether.`, `(Y 1-255)`])
        
    e.add(`secretly_complicated:tin_netherrack_ore`, [`Tin can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:cassiterite_netherrack_ore`, [`Tin can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:tin_solid`, [`Tin can be found in Cassiterite Veins in the Nether.`, `(Y 1-255)`])
            
    e.add(`secretly_complicated:spessartine_netherrack_ore`, [`Manganese can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:pyrolusite_netherrack_ore`, [`Manganese can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:tantalite_netherrack_ore`, [`Manganese can be found in the Nether.`, `(Y 1-255)`])
    e.add(`secretly_complicated:manganese_solid`, [`Tin can be found in Spessartine/Pyrolusite/Tantalite Veins in the Nether.`, `(Y 1-255)`])
    
  })

onEvent(`jei.hide.items`, e => {
    const hideMetal = (mod, name, types) => {
        types.forEach(type => {
        const typeFirst = [`mekanism`, `thermal`]
        const id = typeFirst.includes(mod) ?
            `${mod}:${type}_${name}` :
            `${mod}:${name}_${type}`
        if (!Ingredient.of(id).isEmpty()) {
            e.hide(id)
        }
        })
    }

  //Hides items based name, format: `mod`, `metal`, [`type1`, `type2`, `etc`]
  // hideMetal(`immersiveengineering`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `aluminum`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `uranium`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `steel`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `electrum`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
  // hideMetal(`immersiveengineering`, `constantan`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])

  hideMetal(`mekanism`, `copper`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `tin`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `uranium`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `lead`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `osmium`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `bronze`, [`ingot`, `dust`, `nugget`, `block`])

  // hideMetal(`create`, `copper`, [`ingot`, `ore`, `nugget`, `block`])
  // hideMetal(`create`, `zinc`, [`ingot`, `ore`, `nugget`, `block`])

  hideMetal(`thermal`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `tin`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `block`])

  // hideMetal(`iceandfire`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  // hideMetal(`iceandfire`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `block`])

  // hideMetal(`tmechworks`, `copper`, [`ingot`, `ore`, `block`, `nugget`])
  // hideMetal(`tmechworks`, `aluminum`, [`ingot`, `ore`, `block`, `nugget`])

  const hideStuff = (mod, type, names) => {
    names.forEach(name => {
      const typeFirst = [`mekanism`, `thermal`]
      const id = typeFirst.includes(mod) ?
        `${mod}:${type}_${name}` :
        `${mod}:${name}_${type}`
      if (!Ingredient.of(id).isEmpty()) {
        e.hide(id)
      }
    })
  }

  //Hides items based on type, format: `mod`, `type`, [`name1`, `name2`, `etc`]
  // hideStuff(`immersiveengineering`, `dust`, [`iron`, `gold`, `sulfur`, `wood`])
  // hideStuff(`immersiveengineering`, `plate`, [`iron`, `gold`, `copper`, `aluminum`, `lead`, `silver`, `nickel`, `constantan`, `electrum`])

  hideStuff(`mekanism`, `dust`, [`sulfur`, `lapis_lazuli`, `emerald`, `diamond`, `quartz`, `iron`, `gold`])
  hideStuff(`mekanism`, `crystal`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `shard`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `dirty_dust`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `clump`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])

  hideStuff(`appliedenergistics2`, `dust`, [`nether_quartz`, `ender`, `iron`, `gold`])

  // hideStuff(`create`, `sheet`, [`iron`, `golden`, `copper`])

  hideStuff(`thermal`, `dust`, [`iron`, `gold`])
})

onEvent(`item.tooltip`, e => {
  // refined.forEach(refin => {
  //   e.add(`refinedstorage:${refin}`, `Right click or craft with a dye to color`)
  // })
  // e.add(`pedestals:pedestal/stone333`, [`Press show uses(default U) key on §6§lColored Pallet§r`, `to show different colored pedestals you can make.`])
  // e.add(`allthemodium:teleport_pad`, Text.of(`The Mining dimension is disabled.`).red())
  // e.add(`#resourcefulbees:valid_apiary`, `Valid Apiary Block`)
})