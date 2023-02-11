import mods.exnihilosequentia.ZenSieveRecipe;

<recipetype:exnihilosequentia:sieve>
.create("iron_impure_dust")
.setInput(<item:minecraft:gravel>)
.addDrop(<item:secretly_complicated:iron_impure_dust>)
.addRoll("diamond", 0.15).addRoll("iron", 0.075).addRoll("flint", 0.05);

<recipetype:exnihilosequentia:sieve>
.create("copper_impure_dust")
.setInput(<item:minecraft:gravel>)
.addDrop(<item:secretly_complicated:copper_impure_dust>)
.addRoll("diamond", 0.15).addRoll("iron", 0.075).addRoll("flint", 0.05);

<recipetype:exnihilosequentia:sieve>
.create("gold_impure_dust")
.setInput(<item:minecraft:gravel>)
.addDrop(<item:secretly_complicated:gold_impure_dust>)
.addRoll("diamond", 0.15).addRoll("iron", 0.075).addRoll("flint", 0.05);

<recipetype:exnihilosequentia:sieve>
.create("coal_chunk")
.setInput(<item:minecraft:gravel>)
.addDrop(<item:excompressum:uncompressed_coal>)
.addRoll("diamond", 0.15).addRoll("iron", 0.075).addRoll("flint", 0.05);

<recipetype:exnihilosequentia:sieve>
.create("amethyst_shard")
.setInput(<item:minecraft:gravel>)
.addDrop(<item:minecraft:amethyst_shard>)
.addRoll("diamond", 0.15).addRoll("iron", 0.075).addRoll("flint", 0.05);
