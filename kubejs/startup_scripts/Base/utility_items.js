onEvent('item.registry', event => {
    // Register new items here
    // event.create('example_item').displayName('Example Item')
    event.create('purple_mark').displayName('NTC3 Quest')



    event.create('tool_saw_handle').displayName('Saw Handle')
    event.create('tool_saw_blade').displayName('Saw Blade')
    event.create('tool_hand_saw').maxDamage(250).displayName('Hand Saw')

    event.create('tool_file_handle').displayName('File Handle')
    event.create('tool_file_blade').displayName('File Blade')
    event.create('tool_hand_file').maxDamage(250).displayName('Hand File')
  })
  
  onEvent('block.registry', event => {
    // Register new blocks here
    // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})