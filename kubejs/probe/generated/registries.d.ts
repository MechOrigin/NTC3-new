/// <reference path="./globals.d.ts" />
declare namespace Registry {
    class Sound_event extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.SoundEventBuilder;
        create(id: string): Internal.SoundEventBuilder;
    }
    class Fluid extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.FluidBuilder;
        create(id: string): Internal.FluidBuilder;
    }
    class Block extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.BasicBlockJS$Builder;
        create(id: string, type: "detector"): Internal.DetectorBlock$Builder;
        create(id: string, type: "slab"): Internal.SlabBlockBuilder;
        create(id: string, type: "stairs"): Internal.StairBlockBuilder;
        create(id: string, type: "fence"): Internal.FenceBlockBuilder;
        create(id: string, type: "fence_gate"): Internal.FenceGateBlockBuilder;
        create(id: string, type: "wall"): Internal.WallBlockBuilder;
        create(id: string, type: "wooden_pressure_plate"): Internal.WoodenPressurePlateBlockBuilder;
        create(id: string, type: "stone_pressure_plate"): Internal.StonePressurePlateBlockBuilder;
        create(id: string, type: "wooden_button"): Internal.WoodenButtonBlockBuilder;
        create(id: string, type: "stone_button"): Internal.StoneButtonBlockBuilder;
        create(id: string, type: "falling"): Internal.FallingBlockBuilder;
        create(id: string, type: "crop"): Internal.CropBlockBuilder;
        create(id: string): Internal.BasicBlockJS$Builder;
    }
    class Item extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.BasicItemJS$Builder;
        create(id: string, type: "sword"): Internal.SwordItemBuilder;
        create(id: string, type: "pickaxe"): Internal.PickaxeItemBuilder;
        create(id: string, type: "axe"): Internal.AxeItemBuilder;
        create(id: string, type: "shovel"): Internal.ShovelItemBuilder;
        create(id: string, type: "hoe"): Internal.HoeItemBuilder;
        create(id: string, type: "helmet"): Internal.ArmorItemBuilder$Helmet;
        create(id: string, type: "chestplate"): Internal.ArmorItemBuilder$Chestplate;
        create(id: string, type: "leggings"): Internal.ArmorItemBuilder$Leggings;
        create(id: string, type: "boots"): Internal.ArmorItemBuilder$Boots;
        create(id: string, type: "music_disc"): Internal.RecordItemJS$Builder;
        create(id: string): Internal.BasicItemJS$Builder;
    }
    class Enchantment extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.EnchantmentBuilder;
        create(id: string): Internal.EnchantmentBuilder;
    }
    class Mob_effect extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.BasicMobEffect$Builder;
        create(id: string): Internal.BasicMobEffect$Builder;
    }
    class Entity_type extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
    }
    class Block_entity_type extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
    }
    class Potion extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.PotionBuilder;
        create(id: string): Internal.PotionBuilder;
    }
    class Particle_type extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.ParticleTypeBuilder;
        create(id: string): Internal.ParticleTypeBuilder;
    }
    class Motive extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.MotiveBuilder;
        create(id: string): Internal.MotiveBuilder;
    }
    class Custom_stat extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.CustomStatBuilder;
        create(id: string): Internal.CustomStatBuilder;
    }
    class Point_of_interest_type extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.PoiTypeBuilder;
        create(id: string): Internal.PoiTypeBuilder;
    }
    class Villager_type extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.VillagerTypeBuilder;
        create(id: string): Internal.VillagerTypeBuilder;
    }
    class Villager_profession extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.VillagerProfessionBuilder;
        create(id: string): Internal.VillagerProfessionBuilder;
    }
    class Gas extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.KubeJSGasBuilder;
        create(id: string): Internal.KubeJSGasBuilder;
    }
    class Infuse_type extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.KubeJSInfuseTypeBuilder;
        create(id: string): Internal.KubeJSInfuseTypeBuilder;
    }
    class Pigment extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.KubeJSPigmentBuilder;
        create(id: string): Internal.KubeJSPigmentBuilder;
    }
    class Slurry extends Internal.RegistryObjectBuilderTypes$RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.KubeJSSlurryBuilder$Basic;
        create(id: string, type: "dirty"): Internal.KubeJSSlurryBuilder$Dirty;
        create(id: string, type: "clean"): Internal.KubeJSSlurryBuilder$Clean;
        create(id: string): Internal.KubeJSSlurryBuilder$Basic;
    }
}