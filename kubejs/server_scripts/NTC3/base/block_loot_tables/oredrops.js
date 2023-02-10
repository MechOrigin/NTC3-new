//
//Makes vanilla and modded ores drop Secretly Complicated Crushed Ore and Dirty Dust
//

onEvent('block.loot_tables', event => {

    event.addBlock('minecraft:iron_ore', table => { // Build loot table manually
        table.addPool(pool => {
          pool.rolls = 1 // fixed
          // pool.rolls = [4, 6] // or {min: 4, max: 6} // uniform
          // pool.rolls = {n: 4, p: 0.3} // binominal
          pool.survivesExplosion()
          pool.addItem('secretly_complicated:iron_crushed', 1, [1, 3]) // 40 = weight
          pool.addItem('secretly_complicated:iron_impure_dust', 2, [1, 3]) // [4-8] = count modifier, uses same syntax as rolls
          // pool.addCondition({json condition, see vanilla wiki})
          // pool.addEntry({json entry, see vanilla wiki for non-items})
        })
    })

    event.addBlock('secretly_complicated:gold_ore', table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.survivesExplosion()
        pool.addItem('secretly_complicated:gold_crushed', 1, [1, 3])
        pool.addItem('secretly_complicated:gold_impure_dust', 2, [1, 3])
      })
  })

    event.addBlock('minecraft:gold_ore', table => {
        table.addPool(pool => {
          pool.rolls = 1
          pool.survivesExplosion()
          pool.addItem('secretly_complicated:gold_crushed', 1, [1, 3])
          pool.addItem('secretly_complicated:gold_impure_dust', 2, [1, 3])
        })
    })

    event.addBlock('minecraft:copper_ore', table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.survivesExplosion()
        pool.addItem('secretly_complicated:copper_crushed', 1, [1, 3])
        pool.addItem('secretly_complicated:copper_impure_dust', 2, [1, 3])
      })
    })

    event.addBlock('tconstruct:cobalt_ore', table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.survivesExplosion()
        pool.addItem('secretly_complicated:cobalt_crushed', 1, [1, 3])
        pool.addItem('secretly_complicated:cobalt_impure_dust', 2, [1, 3])
      })
    })

  })