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
              collapsed: false,
              items: [
                {
                  label: "Linha de Comando",
                  link: "/dev/tutorials/command-line",
                },

                {
                  label: "Código-Fonte",
                  collapsed: false,
                  items: [
                    {
                      label: "Git",
                      link: "/dev/tutorials/source-code/git",
                    },

                    {
                      label: "VS Code",
                      link: "/dev/tutorials/source-code/vs-code",
                    },
                  ],
                },

                {
                  label: "Gestão de Projetos",
                  collapsed: false,
                  items: [
                    {
                      label: "Jira",
                      link: "/dev/tutorials/project-management/jira",
                    },
                  ],
                },

                {
                  label: "Banco de Dados",
                  items: [
                    {
                      label: "Postgres",
                      link: "/dev/tutorials/database/postgres",
                    },
                  ],
                },

                {
                  label: "Plataformas",
                  collapsed: false,
                  items: [
                    {
                      label: "C# / DotNET",
                      link: "/dev/tutorials/csharp-dotnet",
                    },

                    {
                      label: "Node.js",
                      link: "/dev/tutorials/node",
                    },
                    {
                      label: "Front-end",
                      items: [
                        {
                          label: "Vue",
                          link: "/dev/tutorials/front-end/vue",
                        },
                      ],
                    },
                  ],
                },

                {
                  label: "Contêiners",
                  collapsed: false,
                  items: [
                    {
                      label: "Docker",
                      link: "/dev/tutorials/containers/docker",
                    },
                  ],
                },

                {
                  label: "Avançado",
                  collapsed: true,
                  items: [
                    {
                      label: "Orquestração de Contêiners",
                      collapsed: false,
                      items: [
                        {
                          label: "Kubernetes",
                          link: "/dev/tutorials/advanced/containers-orchestration/kubernetes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "Sistemas",
              collapsed: false,
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
                {
                  label: "Documentação",
                  link: "/dev/services/docs/",
                },
              ],
            },
            {
              label: "Integração aos Sistemas",
              collapsed: false,
              items: [
                {
                  label: "API",
                  link: "/dev/services-integrations/api/",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
