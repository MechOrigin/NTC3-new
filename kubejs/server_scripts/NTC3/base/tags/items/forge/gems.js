//priority: 200

// Listen to item tag event
onEvent('tags.items', e => {

    e.add('forge:gems/flint', 'minecraft:flint');
    e.add('forge:gems/coal', 'minecraft:coal');

})