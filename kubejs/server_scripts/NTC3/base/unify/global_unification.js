// ! Thanks mathgeniuszach on curseforge for this customization
// ? https://www.curseforge.com/minecraft/customization/unifytags/files


// Whether or not to unify items in inventory
global["INVENTORY_UNIFY"] = false
// Whether or not to unify items in world
global["ITEM_UNIFY"] = false
// Whether or not to unify recipes
global["RECIPE_UNIFY"] = true
// Whether or not to hide not-first materials in jei (requires secondary script)
global["HIDE_UNIFIED_ITEMS"] = false
// Whether or not to disable non-priority ore-gen
global["UNIFY_ORE_GEN"] = false

// Mod priorities
global["unifypriorities"] = [
    'secretly_complicated',
    'thermal',
    // 'minecraft',
    // 'kubejs',
    // 'quark',
    // 'tconstruct',
    // 'appliedenergistics2',
    // 'mekanism',
    // 'mysticalagriculture',
    // 'biomesoplenty',
    // 'integrateddynamics'
]
// Items to exclude (will not be unified)
global["unifyexclude"] = new Set([
    // "minecraft:stone"
])

// Add oredictionary tags here to unify (or use javascript to generate it!)
var tags = [
    // "forge:plates/iron",
    // "forge:gears/iron",
    //"forge:silicon"
]
// Block tags for ore gen unification (an equal item tag is required for this to work, which is the case with ores normally)
/*var btags = [
    "forge:ores/copper",
    "forge:ores/tin",
    "forge:ores/aluminum",
    "forge:ores/lead",
    "forge:ores/silver",
    "forge:ores/nickel",
    "forge:ores/platinum",
    "forge:ores/uranium",
    "forge:ores/iridium",
    "forge:ores/zinc",
    "forge:ores/osmium",
    "forge:ores/sulfur",
]*/
// Easier way to add multiple tags (feel free to add empty extra tags, this will ignore them)
var tagGen = [
    "copper=ores,raw_ores,dusts,gears,plates,rods",
    "aluminum=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "silver=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "lead=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "nickel=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "iron=ores,raw_ores,dusts,gears,plates,rods,crushed,impure_dust",
    "gold=ores,raw_ores,dusts,gears,plates,rods",
    "tin=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "zinc=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "bronze=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "steel=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    "rose_gold=blocks,ingots,nuggets,ores,raw_ores,dusts,gears,plates,rods",
    // "coal=storage_blocks,gems,dusts,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "iron=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "gold=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "diamond=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "emerald=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "lapis=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "redstone=storage_blocks,chunks,crystal,dirty_dust,shard,fragment",
    // "nether_quartz=storage_blocks,dusts,gears,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "copper=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "aluminum=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "silver=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "lead=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "nickel=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "uranium=storage_blocks,ingots,nuggets,dusts,rods,fragment,chunks",
    // "osmium=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,fragment,chunks",
    // "tin=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,fragment,chunks",
    // "zinc=storage_blocks,ingots,nuggets,dusts,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "cobalt=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // //"certus_quartz=gems,clump,crystal,dirty_dust,shard,fragment,chunks",
    // //"charged_certus_quartz=gems,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "fluorite=storage_blocks,gems,dusts,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "bitumen=storage_blocks,gems,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "cinnabar=storage_blocks,gems,clump,dusts,crystal,dirty_dust,shard,fragment,chunks",
    // "apatite=storage_blocks,gems,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "sulfur=storage_blocks,gems,clump,dusts,crystal,dirty_dust,shard,fragment,chunks",
    // "potassium_nitrate=storage_blocks,gems,clump,dusts,crystal,dirty_dust,shard,fragment,chunks",
    // "dimensional=storage_blocks,clump,dusts,crystal,dirty_dust,shard,fragment,chunks",
    // "silicon=storage_blocks,gems",
    // "ruby=storage_blocks,gems,dusts,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "sapphire=storage_blocks,gems,dusts,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "peridot=storage_blocks,gems,dusts,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "bronze=storage_blocks,ingots,nuggets,dusts,gears,plates,rods,chunks",
    // "steel=storage_blocks,ingots,nuggets,dusts,rods",
    // "platinum=storage_blocks,ingots,nuggets,dusts,rods",
    // "iridium=storage_blocks,ingots,nuggets,dusts,rods,clump,crystal,dirty_dust,shard,fragment,chunks",
    // "brass=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    // "constantan=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    // "electrum=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    // "invar=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    // "signalum=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    // "lumium=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    // "enderium=storage_blocks,ingots,nuggets,dusts,gears,plates,rods",
    // "coal_coke=storage_blocks,gems,dusts",
    // //"fluix=storage_blocks,gems,dusts",
    // "charcoal=storage_blocks,dusts",
    // "obsidian=storage_blocks,dusts",
    // "ender=storage_blocks,dusts",
    // "graphite=storage_blocks,dusts",
    // "lithium=storage_blocks,dusts",
    // "wood=storage_blocks,dusts",
    // "thallasium=dusts,clump,crystal,dirty_dust,shard,fragment"
]
for (let line of tagGen) {
    let data = line.split("=")
    for (let type of data[1].split(",")) {
        tags.push("forge:" + type + "/" + data[0])
    }
}

function tryTag(tag) {
    try {
        return Ingredient.of("#" + tag)
    } catch (err) {
        return null
    }
}

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags (they should be loaded)
    var tagitems = new Map()
    tagLoop:
        for (let tag of tags) {
            let ingr = tryTag(tag)
            if (ingr) {
                let stacks = ingr.getStacks().toArray()
                for (let mod of global["unifypriorities"]) {
                    for (let stack of stacks) {
                        if (stack.getMod() == mod) {
                            if (!global["unifyexclude"].has(stack.getId())) tagitems[tag] = stack.getId()
                            continue tagLoop
                        }
                    }
                }
                if (stacks.length > 0) tagitems[tag] = stacks[0].getId()
            }
        }
    // Update tags
    global["unifytags"] = tags
    global["tagitems"] = tagitems

    // Unify the rest
    if (global["RECIPE_UNIFY"]) {
        for (let tag of global["unifytags"]) {
            let ingr = tryTag(tag)
            if (ingr) {
                let stacks = ingr.getStacks().toArray()
                let oItem = global["tagitems"][tag]
                for (let tItem of stacks) {
                    let itemId = tItem.getId()
                    if (global["unifyexclude"].has(itemId)) continue

                    event.replaceInput({}, itemId, "#" + tag)
                    event.replaceOutput({}, itemId, oItem)
                }
            }
        }
    }
})

// Handle inventory change (to check for unificaiton)
// Unfortunately it gets called twice due to setting the inventory.
onEvent("player.inventory.changed", event => {
    if (global["INVENTORY_UNIFY"] && event.getEntity().getOpenInventory().getClass().getName() == "net.minecraft.inventory.container.PlayerContainer") {
        // Get held item
        var heldItem = event.getItem()
        var itemId = heldItem.getId()
        // Check if item is excluded
        if (global["unifyexclude"].has(itemId)) return

        // Check for every tag in the list
        for (let tag of global["unifytags"]) {
            let ingr = tryTag(tag)
            if (ingr && ingr.test(heldItem)) {
                // If item is in tag, determine if it needs to be changed
                let tItem = global["tagitems"][tag]
                if (tItem != itemId) {
                    // Fix slot number
                    let slot = event.getSlot()
                    if (slot <= 5) slot += 36
                    else if (slot == 45) slot = 40
                    else if (slot >= 36) slot -= 36
                    // Update item
                    event.getEntity().inventory.set(slot, Item.of(tItem, heldItem.getCount()))
                }
                break
            }
        }
    }
})

// Items on ground
onEvent("entity.spawned", event => {
    if (global["ITEM_UNIFY"]) {
        var entity = event.getEntity()
        if (entity.getType() == "minecraft:item") {
            var gItem = entity.getItem()
            if (gItem) {
                var itemId = gItem.getId()
                // Check if item is excluded
                if (global["unifyexclude"].has(itemId)) return

                // Check for every tag in the list
                for (let tag of global["unifytags"]) {
                    let ingr = tryTag(tag)
                    if (ingr && ingr.test(gItem)) {
                        // If item is in tag, determine if it needs to be changed
                        let tItem = global["tagitems"][tag]
                        if (tItem != itemId) {
                            entity.setItem(Item.of(tItem, gItem.getCount()))
                        }
                        break
                    }
                }
            }
        }
    }
})