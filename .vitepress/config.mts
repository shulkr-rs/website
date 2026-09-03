import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "docs",
  cleanUrls: true,
  sitemap: { hostname: "https://shulkr.rs" },
  title: "Shulkr",
  description: "Yet another library for building Minecraft servers in Rust",
  head: [["link", { rel: "icon", type: "image/png", href: "/favicon.png?v=2" }]],
  themeConfig: {
    logo: "/icon-256.png",

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/introduction" },
      { text: "API", link: "/api/item" },
    ],

    sidebar: [
      { text: "Introduction", link: "/introduction" },
      {
        text: "Setup",
        items: [
          { text: "Installation", link: "/setup/installation" },
          { text: "Logging", link: "/setup/logging" },
          { text: "Your First Server", link: "/setup/first-server" },
        ],
      },
      {
        text: "API",
        items: [
          { text: "ItemStack", link: "/api/item" },
          { text: "Inventory", link: "/api/inventory" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/shulkr-rs/shulkr" },
    ],
  },
});
