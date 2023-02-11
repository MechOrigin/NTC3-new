onEvent('item.modification', event => {
    event.modify('beyond_earth:hammer', item => {
      item.maxDamage = 64 //change from 9 durability to 64
    })
  })