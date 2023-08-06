
// onEvent('block.registry', (event) => {
    
//     const blocks = [{ 
//       name: 'PEGMATITE', material: 'rock', hardness: 2, harvestTool: ('pickaxe', 1)
//     }];
  
//     blocks.forEach((block) => {
//         event.create(block.name).material(block.material).hardness(block.hardness).harvestTool(block.harvestTool);
//     });
  
//   });

//priority: 900
onEvent('block.registry', (event) => {
  const blocks = [
      {
          name: 'oven_bricks',
          material: 'rock',
          hardness: 2.0
      },
      {
          name: 'treated_planks',
          material: 'wood',
          hardness: 2.0
      }
  ];

  blocks.forEach((block) => {
      const block_event = event
          .create(block.name)
          .material(block.material)
          .hardness(block.hardness)
          .textureAll(`kubejs:block/${block.name}`)
          .model(`kubejs:block/${block.name}`);

      if (block.leaves) {
          block_event
              .renderType('cutout')
              .notSolid()
              .noValidSpawns(true)
              .suffocating(false)
              .viewBlocking(false)
              .redstoneConductor(false)
              .transparent(false);
      }
  });
});


  
  /*
  air
  wood
  rock
  iron
  organic
  earth
  water
  lava
  leaves
  plants
  sponge
  wool
  sand
  glass
  tnt
  coral
  ice
  snow
  clay
  groud
  dragon_egg
  portal
  cake
  web
  slime
  honey
  berry_bush
  lantern
  */
  /*
  
      material('material')
      hardness(float) // >= 0.0
      resistance(float) // >= 0.0
      unbreakable()
      lightLevel(int) // 0.0 - 1.0
      harvestTool('tool', level) // Available tools: pickaxe, axe, hoe, shovel, level >= 0
      opaque(boolean)
      fullBlock(boolean)
      requiresTool(boolean)
      renderType('type') // solid, cutout, translucent, cutout required for blocks with texture like glass, translucent required for blocks like stained glass
      color(tintindex, color)
      texture('texturepath')
      texture('side', 'texturepath')
      model('modelpath')
      noItem()
      shapeCube(x0, y0, z0, x1, y1, z1) // 0.0 - 16.0, default is (0,0,0,16,16,16)
      notSolid()
      waterlogged()
      noDrops()
      slipperiness(float) // 
      speedFactor(float)
      jumpFactor(float)
      randomTick(randomTickEvent => {}) // see below
      item(itemBuilder => {})
      setLootTableJson(json)
      setBlockstateJson(json)
      setModelJson(json)
  
  */