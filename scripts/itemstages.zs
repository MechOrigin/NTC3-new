import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;

// Locks all items from a mod to a stage
ItemStages.createModRestriction("ae2things", "one");
ItemStages.createModRestriction("ae2", "one");
ItemStages.createModRestriction("ae2additions", "one");
ItemStages.createModRestriction("mysticalagriculture", "one");

ItemStages.createModRestriction("projecte", "projecte_lvl0").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:projecte:philosophers_stone>, "philosophers_stone_unlock");

ItemStages.createModRestriction("botanypots", "one");
ItemStages.createModRestriction("aquamirae", "one");

ItemStages.createModRestriction("thermal", "thermal_lvl0");

ItemStages.createModRestriction("projectexpansion", "one");
ItemStages.createModRestriction("appmek", "one");
ItemStages.createModRestriction("extendedcrafting", "one");
ItemStages.createModRestriction("mekanism", "one");

ItemStages.createModRestriction("beyond_earth", "beyond_earth_unlock");

ItemStages.createModRestriction("computercraft", "one");

ItemStages.createModRestriction("alexsdelight", "culturaldelights_unlock");

ItemStages.createModRestriction("alexsmobs", "alexsmobs_unlock");

ItemStages.createModRestriction("aquaculture", "aquaculture_unlock");

ItemStages.createModRestriction("buildinggadgets", "buildinggadgets_unlock");
ItemStages.createModRestriction("compactmachines", "one");

ItemStages.createModRestriction("cookingforblockheads", "culturaldelights_unlock");

ItemStages.createModRestriction("culturaldelights", "culturaldelights_unlock");

ItemStages.createModRestriction("darkutils", "one");
ItemStages.createModRestriction("enderchests", "one");

ItemStages.createModRestriction("farmersdelight", "culturaldelights_unlock");

ItemStages.createModRestriction("hostilenetworks", "hostilenetworks_unlock");

ItemStages.createModRestriction("integrateddynamics", "tier0_integrated_dynamics");
ItemStages.createModRestriction("integratedterminals", "tier0_integrated_dynamics");
ItemStages.createModRestriction("integratedtunnels", "tier0_integrated_dynamics");

ItemStages.createModRestriction("ironfurnaces", "ironfurnaces_unlock");

ItemStages.createModRestriction("laserio", "one");
ItemStages.createModRestriction("mininggadgets", "one");

ItemStages.createModRestriction("nethers_exoticism", "nethers_exoticism_unlock");

ItemStages.createModRestriction("nethersdelight", "culturaldelights_unlock");

ItemStages.createModRestriction("packagedauto", "one");
ItemStages.createModRestriction("tconstruct", "tier0_tinkers_lvl0");

ItemStages.createModRestriction("croptopia", "croptopia_unlock");

ItemStages.createModRestriction("cacao", "culturaldelights_unlock");
ItemStages.createModRestriction("shrink", "one");
ItemStages.createModRestriction("mekanismadditions", "one");
ItemStages.createModRestriction("mekanismgenerators", "one");
ItemStages.createModRestriction("packagedexcrafting", "one");
ItemStages.createModRestriction("alcocraft", "culturaldelights_unlock");
ItemStages.createModRestriction("ob_aquamirae", "one");
ItemStages.createModRestriction("ob_core", "one");
ItemStages.createModRestriction("apotheosis", "apotheosis_unlock");


ItemStages.createModRestriction("ars_nouveau", "ars_nouveau_lvl0").preventInventory(false).preventPickup(false);
ItemStages.restrict(<tag:items:forge:logs/archwood>, "ars_nouveau_archwood_unlock");
ItemStages.createModRestriction("ars_elemental", "ars_nouveau_archwood_unlock").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ars_scalaes", "ars_nouveau_archwood_unlock").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("arsomega", "ars_nouveau_archwood_unlock").preventInventory(false).preventPickup(false);

ItemStages.createModRestriction("enigmaticlegacy", "one");
ItemStages.createModRestriction("gateways", "gateways_unlock");
ItemStages.createModRestriction("nameless_trinkets", "nameless_trinkets_unlock");
ItemStages.createModRestriction("piglin_expansion", "piglin_expansion_unlock");
ItemStages.createModRestriction("pyromancer", "pyromancer_unlock");
ItemStages.createModRestriction("spirit", "spirit_unlock");
ItemStages.createModRestriction("fluxnetworks", "one");
ItemStages.createModRestriction("materialis", "one");
ItemStages.createModRestriction("naturalist", "one");

ItemStages.createModRestriction("exnihilosequentia", "exnihilo_lvl0").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("excompressum", "exnihilo_lvl0");



// ItemStages.restrict(IIngredient toRestrict, String... requiredStages);
//ItemStages.restrict(<item:minecraft:stick>, "ex_one");
// ItemStages.restrict(MCTag<Item> toRestrict, String... requiredStages);
//ItemStages.restrict(<tag:items:forge:cobblestone>, "ex_two");
// ItemStages.restrict(Enchantment enchantment, String... requiredStages);
//ItemStages.restrict(<enchantment:minecraft:sharpness>, "ex_three");
// ItemStages.restrict(Rarity rarity, String... requiredStages);
//ItemStages.restrict(Rarity.EPIC, "ex_four");
// ItemStages.restrict(ToolType toolType, String... requiredStages);
//ItemStages.restrict(<tooltype:pickaxe>, "ex_five");
//ItemStages.createModRestriction(String modid, Predicate<IItemStack>, String... requiredStages);
//ItemStages.createModRestriction("minecraft", s => <item:minecraft:stick>.matches(s), "one");
