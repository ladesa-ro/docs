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
          collapsed: true,
          autogenerate: {
            directory: "user-guides",
          },
        },
        {
          label: "Guia para Desenvolvedores",
          collapsed: true,

          items: [
            {
              label: "Início",
              link: "/dev/",
            },
            {
              label: "Tutoriais",
              items: [
                {
                  label: "Git",
                  link: "/dev/tutorials/git",
                },
                {
                  label: "Node",
                  link: "/dev/tutorials/node",
                },
                {
                  label: "Docker",
                  link: "/dev/tutorials/docker",
                },
              ],
            },
            {
              label: "Sistemas",
              items: [
                {
                  label: "Web",
                  link: "/dev/services/web/",
                },
                {
                  label: "Mobile",
                  link: "/dev/services/mobile/",
                },
                {
                  label: "Gerar Horário",
                  link: "/dev/services/gerar-horario/",
                },
                {
                  label: "API",
                  link: "/dev/services/api/",
                },
                {
                  label: "Autenticação",
                  link: "/dev/services/auth/",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
