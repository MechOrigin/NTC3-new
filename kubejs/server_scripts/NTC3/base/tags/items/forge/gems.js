//priority: 200

// Listen to item tag event
onEvent('tags.items', e => {

    e.add('forge:gems/flint', 'minecraft:flint');
    e.add('forge:gems', 'minecraft:flint');
    
    e.add('forge:gems/coal', 'minecraft:coal');
    e.add('forge:gems', 'minecraft:coal');

    e.add('forge:gems/charcoal', 'minecraft:charcoal');
    e.add('forge:gems', 'minecraft:charcoal');

    e.add('forge:gems/enderpearl', 'minecraft:ender_pearl');
    e.add('forge:gems', 'minecraft:ender_pearl');

})