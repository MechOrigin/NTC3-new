onEvent('item.modification', event => {

    // Tool uses
    event.modify('beyond_earth:hammer', item => {
      item.maxDamage = 64 //change from 9 durability to 64
    })



    event.modify('kubejs:tool_hand_saw', item => {
      item.maxDamage = 64 //change from 9 durability to 64
      item.craftingRemainder = Item.of('kubejs:tool_hand_saw', `{Damage:0}`)
      item.uses = 64
    })

    event.modify('kubejs:tool_hand_file', item => {
      item.maxDamage = 64 //change from 9 durability to 64
      item.craftingRemainder = 'kubejs:tool_hand_file'
      item.uses = 64
    })
  })