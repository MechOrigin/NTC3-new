onEvent('player.logged_in', event => {
    if (!event.hasGameStage('starting_items')) {
        event.server.scheduleInTicks(0, event.server, function (callback) {
            callback.data.runCommand('/clear')
            callback.data.runCommand('/execute in javd:void run fill 4 68 2 0 68 -2 minecraft:bedrock replace minecraft:air')
        })

        event.addGameStage('philosophers_stone_unlock');
        event.player.give(Item.of('ftbquests:book'));
        event.player.give(Item.of('projecte:philosophers_stone'));
        event.player.give(Item.of('tiab:time_in_a_bottle'));

        event.addGameStage('starting_items');
    }
});
