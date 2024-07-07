import { defineConfig } from "vitepress";
import { sidebar } from "./-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ladesa Docs",
  description: "Navegue pela base de conhecimento do Ladesa.",

  srcDir: "src/content",
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Início", link: "/" }],

    sidebar: sidebar,

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
