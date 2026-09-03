# ItemStack API

## Creating ItemStacks

```rs
let empty = ItemStack::EMPTY;

// ItemStack with a custom amount
let stone = ItemStack::new(Material::Stone, 64);

// ItemStack with amount set to 1 by default
let stone = ItemStack::of(Material::Stone);
```

## Modifying ItemStacks

```rs
let wooden_sword = ItemStack::of(Material::WoodenSword)
    .with(DataComponent::ITEM_NAME, TextComponent::text("Custom Sword"))
    .with(DataComponent::ITEM_MODEL, Identifier::new("example", "custom_sword"))
    .with(DataComponent::LORE, [
        TextComponent::text("Line 1"),
        TextComponent::text("Line 2"),
        TextComponent::text("Line 3")
    ]);
```
