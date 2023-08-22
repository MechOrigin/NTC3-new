## [1.0.0] - 2022-05-30

### Added
- Usage:  Install the mod, run /probejs dump in your game then open your .minecraft in vscode as a folder.
- JER: By adding world-gen.json to the JER config folder and toggling the DIY setting ingame you can make your own ore distributions.
- Look into Multiblocked mod as there is no wiki yet but it looks cool

- Disabled mekanism ore gen
- Disabled AE2 meteorites and ore gen
- Disabled biggerreactors ore gen
- Disabled mysticalagri ore gen
- Disabled tinkers ore gen
- Disabled thermal ore gen
- Disabled books on spawn
- Disabled default large ore deposit generation
- Disabled antimatter (gregtech) ore gen
- Disabled AE2 facades in JEI
- Writing base scripts
    - Lychee
    - Tags
    - Unify Materials
    - Unifying parts: dust, ore, blocks, nuggets, plates, ingots, gears, rods
- Constants
    - General
- Functions, Packmode, Settings
- Added default configs
    - IE
    - mantle, thermal
- Terraforge building
    - Added wg_stone to world gen
    - Added forge tags to stone that generates
    - Disabled for now as it's still buggy
- Thermal needs work
    - Blast chiller uses wrong materials
    - Induction Smelter as well
    - Pulverizer
    - multiservo press
    - need to work on centrifuge ex: stibnite -> antimony, sulfur
    - need to add oil sand to centrifuge

    Color of the year 2022:
    #6667AB
    
- Need to fix a lot of broken chains after removing greg
    - purified dust does nothing
    - crushed ore turns into 10 nuggets
    - dust to ingots



## [0.0.1] - 2022-12-14

### Idea Stream

- Separate each mod by how and where you can start it. Overworld, Nether, End, etc
- Gamestage will unlock at the level able to start it.
- For example Ars Nouveau can start at the acquisition of lapis.


## [0.0.2] - 2023-01-20

### Idea Stream

- Start in skyblock, work towards nether painting to get to nether.
- Work on nether mods: 1, 2, 3. To get access to flint and steel to light nether portal to overworld.
- Work on overworld mods: 1, 2, 3. To get access to specific metals and the End.
- The end isn't the end, work on automation to get the final star to unlock creative items.

- Ore available in the nether: Tin, Zinc, Silver, Redstone/Cinnabar, Oil, Nickel, Lead, Aluminium, Ancient Debris
- Aluminium: Ilmenite, Bauxite
- Lead: Galena, Silver
- Nickel: Garnierite, Cobaltite, Pentlandite
- Silver: Galena, Lead
- Tin: Cassiterite
- Zinc: Sulfur, Pyrite, Sphalerite

- Ilmenite (FeTiO3): iron (Fe), rutile (TiO2)
- Bauxite ((TiO2)2Al16H10O11): aluminium (Al), rutile (Ti), grossular (Ca3Al2Si3O12)
- Galena Pb3Ag3S2: lead, silver, sulfur, massicot (PbO)
- Garnierite NiO: nickel
- Cobaltite (CoAsS): cobalt, arsenic, sulfur
- Pentlandite Ni9S8: Nickel, Sulfur
- Cassiterite SnOs: Tin
- Pyrite FeS2: Iron, sulfur
- Sphalerite ZnS: Zinc, sulfur

- After gathering materials in the Nether, you will have the resources needed to farm the Wither, which will grant access to machines and the Overworld.
- When you unlock the Nether the goal is to get materials to unlock Thermal Machines (Alloy Smelter, Pyrolizer, Compactor to name a few important ones), Multiblock Machines (such as Chemical Reactor), beginning of AE2 and early EMC farms. Some of these Thermal Machines will unlock Oil processing, latex and rubber processing, polyethylene production, and TNT.
- TNT production unlocks cool things like the destruction catalyst from ProjectE. While Pyrolyzer unlocks ProjectE fuels such as Mobius/Aeternalis.
- While in the Nether it is recommended to get a really good Steel production going as entry into Thermal mods requires a lot of Steel. Thermal isn't necessarily required right away but it speeds production a lot.
- With the exception of Gems. Blocks aren't "craftable" but rather instead require Casting Basin from Tinkers, later they are craftable with Thermal Compacter.
- With the removal of Immersive Engineering, getting the AE2 presses has to be reworked. Opting for tier 0 extended crafting table recipe, Cobalt plates around silicon, gold, diamond.
- Finding MysticalAgriculture essence should be easy. It also has EMC. Locked to level 0 seeds until Overworld.

- After experimenting with Project Rankine, loving the mod, making some changes to NTC3:
    - Burning logs creates Ash, which can be used with bucket of water, 2 ash, 1 sulfur gem to make bonemeal x4
    - Coal x3 = 2 bituminous coal gems, coal x2 = 3x lignite gems, 1x anthracite coal = 2 coal, 1x subbituminous coal = 1 coal
    - 1 charcoal = 4 carbon nugget
    - 1 graphite gem = 3 carbon nugget, 1 coke gem = 1 carbon
    - 1 bituminous coal + oven = 1 coke, 1 coal + oven = 1 bituminous coal, 1 subbituminous coal + oven = 1 bituminous coal
    - stonecutting + wood = 4 sawdust
    - water, sawdust x4, clayball = pulp
- Cool concepts Foraging, Panning (sluicing), Evaporation
    - Clay, Kaolinite, Halloysite, Fire Clay

- Some more additions and changes:
    - added treated wood (creosote soaked wood)
    - added oven bricks for coke oven


- Some notes on mob farming ideas
    - Sieve blessed earth for small chance of sheep, cow, pig, chicken, villager egg
    - Sieve cursed earth for small chance of zombies, husks, drowned, skeleton, creeper, witch, and an even smaller chance of enderman eggs
    - Eggs can spawn mobs which can be either spawned and killed or put into a machine
        - Spawn and Kill:   neural networks leveling
                            industrial foregoing pokeball
                            Optional:
                                Spirit (soulstone leveling) and spawners
                                Gateways (portals for mobs to spawn in waves)
                                Mystical Agri chunks
                                Bees
        - Process in machine:   Thermal pulverizer
                                Mechanical Squeezer
                                
    - One cool idea I had was to make a compact crafting recipe with colored wool and a mob head to create a high tier mob model
    - Another idea was to make a compact crafting recipe with iron fences to make spirit spawner blocks
    - Sieve netherrack dust for small chance of piglin, hoglin, wither, blaze and ghast egg
    - Pour liquid exp over snowball, niter, obsidian, sulfur to get blizz, blitz, basalz and blaze dusts -> pack dusts to get rods -> pour soulsteel over rods to get respective eggs
    - Sieve endstone dust for small chance of enderman, shulker eggs
    - Remove beekeeping mod even though its cool

