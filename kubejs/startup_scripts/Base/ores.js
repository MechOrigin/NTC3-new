onEvent('block.modification', event => {

  oresToUnify.forEach((material) => {
    let oreSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_ore`)).id;
    let oreNetherSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_netherrack_ore`)).id;
    let oreEndSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_end_ore`)).id;
    //add diorite, andesite, granite, etc later

    ores_modification(event, material, oreSecret, oreNetherSecret, oreEndSecret);
  });

  function ores_modification(event, material, oreSecret, oreNetherSecret, oreEndSecret) {
    // if (material == air) {
    //   return;
    // }
    // console.log(`regular: ${material}` + ' ' + oreSecret);
    // console.log(`nether: ${material}` + ' ' + oreNetherSecret);
    // console.log(`end: ${material}` + ' ' + oreEndSecret);

      event.modify(oreSecret, block => {
        block.destroySpeed = 2.0
        block.hasCollision = true
        block.material = "stone"
      })

      event.modify(oreNetherSecret, block => {
        block.destroySpeed = 2.0
        block.hasCollision = true
        block.material = "stone"
      })

      event.modify(oreEndSecret, block => {
        block.destroySpeed = 2.0
        block.hasCollision = true
        block.material = "stone"
      })
  }

    // event.modify('secretly_complicated:lignite_coal_ore', block => {
    //   block.destroySpeed = 2.0
    //   block.hasCollision = true
    //   block.material = "stone"
    // })

    // event.modify('secretly_complicated:tetrahedrite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:stibnite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:pyrite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:chalcopyrite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:brown_limonite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:yellow_limonite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:banded_iron_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:malachite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:lazurite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:cinnabar_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:cassiterite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:graphite_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:bauxite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:ilmenite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:beryllium_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:thorium_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:magnetite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:vanadium_magnetite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:galena_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:garnierite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:pentlandite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:sulfur_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:pyrite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:aluminium_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:copper_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:emerald_end_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:lead_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:silver_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:nickel_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:tin_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:zinc_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:cobaltite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:sphalerite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:cassiterite_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:oilsands_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:oil_shale_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:cinnabar_netherrack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:cooperite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:barite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:quartzite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:tetrahedrite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:tungstate_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:lepidolite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:spodumene_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })
      
    //   event.modify('secretly_complicated:glauconite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })
      
    //   event.modify('secretly_complicated:bentonite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })
      
    //   event.modify('secretly_complicated:magnesite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })
      
    //   event.modify('secretly_complicated:olivine_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:pitchblende_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:uraninite_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })

    //   event.modify('secretly_complicated:ruby_netherack_ore', block => {
    //     block.destroySpeed = 2.0
    //     block.hasCollision = true
    //     block.material = "stone"
    //   })
  })