import { defineConfig } from "vitepress";
import { sidebar } from "./-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ladesa Docs",
  description: "Navegue pela base de conhecimento do Ladesa.",

  srcDir: "src/content",
  cleanUrls: true,

  locales: {
    root: {
      label: "Português (brasileiro)",
      lang: "pt-BR",
    },
  },

  themeConfig: {
    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      //
      { text: "Início", link: "/" },
      { text: "Guia para Usuários", link: "/user-guides/" },
      { text: "Dev Docs", link: "/dev/" },
    ],

    sidebar: sidebar,

    socialLinks: [{ icon: "github", link: "https://github.com/ladesa-ro/docs" }],
  },
});