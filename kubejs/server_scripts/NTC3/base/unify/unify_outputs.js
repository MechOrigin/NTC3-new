priority: 900

/*
    This scripts unifies the output of recipes.

    It uses three arrays that define what to unify into what. 
    You can find those arrays in the constants/materials.js script

    The functions used can be found in the functions.js script, 
    in the same directory as this script is in.

    You may use this script and modify it as you see fit, as
    long as you do not claim to have made it. Attribution is
    appreciated, but not required.

    ! This script was borrowed from Enigmatica team - Thank you <3
*/
onEvent('recipes', (event) => {

    elementsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                let tagString = `#forge:${type}s/${material}`;
                let tag = Ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    let prefItem = getPreferredItemInTag(tag);
                    event.replaceOutput({}, tagString, prefItem);
                    //console.log(`materials: ${tagString} to tag ${prefItem}`);
                }
            }
        });
    });

    alloysToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                let tagString = `#forge:${type}s/${material}`;
                let tag = Ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    let prefItem = getPreferredItemInTag(tag);
                    event.replaceOutput({}, tagString, prefItem);
                    //console.log(`alloys: ${tagString} to tag ${prefItem}`);
                }
            }
        });
    });

});

