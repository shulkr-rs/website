# Installation

## Install

To install Shulkr, run the following command in your project:

```sh
cargo add shulkr
```

As an alternative you can add the following code to your `Cargo.toml`:

```toml
[dependencies]
shulkr = "0.1"
```


## Features

All three features are enabled by default.

| Feature | Default | What it adds |
| --- | --- | --- |
| `anvil` | yes | Reading worlds in Minecraft's Anvil region format. |
| `polar` | yes | Reading worlds in the Polar format. |
| `minimessage` | yes | MiniMessage parsing for text components. |

To take only what you need, turn the defaults off and opt back in:

```toml
[dependencies]
shulkr = { version = "0.1", default-features = false, features = ["minimessage"] }
```
