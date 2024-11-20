import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { navbar } from "./-navbar";
import { sidebar } from "./-sidebar";
import { META } from "./meta";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ladesa Docs",
  description: "Navegue pela base de conhecimento do Ladesa.",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  srcDir: META.vitepress.srcDir,

  srcExclude: ["**/_parts/**/*"],

  lang: "pt-BR",

  locales: {
    root: {
      label: "Português (brasileiro)",
      lang: "pt-BR",
    },
  },

  ignoreDeadLinks: "localhostLinks",

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin as (md: any) => void);
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //

    search: {
      provider: "local",
    },

    nav: navbar.nav,
    socialLinks: navbar.socialLinks,

    sidebar: sidebar,

    externalLinkIcon: true,

    lastUpdated: {
      text: "Atualizado em",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    editLink: {
      pattern: `${META.github.repo}/edit/${META.github.branch}/src/${META.vitepress.srcDir}/:path`,
    },
  },

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../src", import.meta.url)),
      },
    },
  },
});
