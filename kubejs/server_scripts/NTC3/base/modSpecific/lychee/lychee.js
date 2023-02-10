onEvent('recipes', (event) => {

    elementsToUnify.forEach((material) => {
        let impureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_impure_dust`)).id;
        let pureDustSecret = getPreferredItemInTag(Ingredient.of(`secretly_complicated:${material}_pure_dust`)).id;

        antimatter_impure_processing(
            event,
            material,
            impureDustSecret,
            pureDustSecret
        );
    });

    function antimatter_impure_processing(
        event,
        material,
        impureDustSecret,
        pureDustSecret
    ) {
        if (impureDustSecret == air || pureDustSecret == air) {
            return;
        }

        event.custom({
            type: 'lychee:item_inside',
            item_in: {
                item: impureDustSecret
            },
            block_in: {
                blocks: ['water_cauldron'],
                state: {
                    level: 3
                }
            },
            post: [
                {
                    type: 'drop_item',
                    item: pureDustSecret
                },
                {
                    type: 'place',
                    block: {
                        blocks: ['water_cauldron'],
                        state: {
                            level: 3
                        }
                    }
                }
            ]
        });
    
        }

});

