import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "Introdução",
    collapsed: false,
    items: [
      {
        text: "Vamos Começar",
        link: "/getting-started",
      },
    ],
  },

  {
    text: "Institucional",
    collapsed: false,

    items: [
      {
        text: "Quem somos nós",
        link: "/about/team",
      },
    ],
  },

  {
    text: "Guia para Usuários",
    collapsed: false,
    items: [
      {
        text: "Introdução",
        link: "/user-guides/introduction",
      },
    ],
  },

  {
    text: "Dev Docs",
    collapsed: true,

    link: "/developers/",

    items: [
      {
        text: "Sistemas",
        collapsed: true,
        items: [
          {
            text: "Web",
            link: "/developers/services/web/",
          },
          {
            text: "Mobile",
            link: "/developers/services/mobile/",
          },
          {
            text: "Gerar Horário",
            link: "/developers/services/gerar-horario/",
          },
          {
            text: "API",
            link: "/developers/services/api/",
          },
          {
            text: "Autenticação",
            link: "/developers/services/auth/",
          },
          {
            text: "Documentação",
            link: "/developers/services/docs/",
          },
        ],
      },
      {
        text: "Integração",
        collapsed: true,

        items: [
          {
            text: "Conectar",
            link: "/developers/connect/",
          },
          {
            text: "Web API Integrada",

            collapsed: true,
            items: [
              {
                text: "Visão Geral",
                link: "/developers/connect/web/overview",
              },
              {
                text: "JavaScript",
                link: "/developers/connect/web/javascript/",
              },
              {
                text: "Vue/Nuxt",
                link: "/developers/connect/web/javascript/vue-nuxt/",
              },
            ],
          },
        ],
      },

      {
        text: "Tutoriais",
        collapsed: true,

        link: "/developers/tutorials/",

        items: [
          {
            text: "Gestão de Projetos",
            collapsed: true,
            items: [
              {
                text: "Jira",
                link: "/developers/tutorials/project-management/jira/",
              },
            ],
          },

          {
            text: "Sistemas Operacionais",
            collapsed: true,
            items: [
              {
                text: "Linha de Comando",
                link: "/developers/tutorials/os/command-line/",
              },
            ],
          },

          {
            text: "Código-fonte",
            collapsed: true,
            items: [
              {
                text: "Git",
                link: "/developers/tutorials/source-code/git/",
              },

              {
                text: "VS Code",
                link: "/developers/tutorials/source-code/vs-code/",
              },
            ],
          },

          {
            text: "Plataformas",
            collapsed: true,
            items: [
              {
                text: "API",
                link: "/developers/tutorials/platforms/api/",
              },

              {
                text: "C# / .NET",
                link: "/developers/tutorials/platforms/csharp-dotnet/",
              },

              {
                text: "Node.js",
                link: "/developers/tutorials/platforms/node/",
              },

              {
                text: "Web/Vue",
                collapsed: true,
                items: [
                  {
                    text: "Sobre",
                    link: "/developers/tutorials/platforms/web/vue/about",
                  },

                  {
                    text: "NuxtJS",
                    link: "/developers/tutorials/platforms/web/vue/nuxt/",
                  },

                  {
                    text: "libs/vue-query",
                    link: "/developers/tutorials/platforms/web/vue/libs/vue-query/",
                  },
                ],
              },

              {
                text: "Bancos de Dados",
                collapsed: true,
                items: [
                  {
                    text: "Postgres",
                    link: "/developers/tutorials/platforms/database/postgres/",
                  },
                ],
              },
              {
                text: "Contêiners",
                collapsed: true,
                items: [
                  {
                    text: "Docker",
                    link: "/developers/tutorials/platforms/containers/docker/",
                  },
                  {
                    text: "Orquestração",
                    collapsed: true,
                    items: [
                      {
                        text: "Kubernetes",
                        link: "/developers/tutorials/platforms/containers/orchestration/kubernetes/",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
