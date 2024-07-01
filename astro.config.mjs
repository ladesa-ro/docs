import node from "@astrojs/node";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config

export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    starlight({
      defaultLocale: "root",

      locales: {
        root: {
          label: "Português (brasileiro)",
          lang: "pt-BR",
        },
      },

      title: "Ladesa Docs",

      social: {
        github: "https://github.com/ladesa-ro",
      },

      editLink: {
        baseUrl: "https://github.com/ladesa-ro/docs/edit/main",
      },

      sidebar: [
        {
          label: "Começo",
          link: "/getting-started",
        },
        {
          label: "Guia para Usuários",
          autogenerate: {
            directory: "user-guides",
          },
        },
        {
          label: "Guia para Desenvolvedores",
          autogenerate: {
            directory: "dev",
          },
        },
      ],
    }),
  ],
});
