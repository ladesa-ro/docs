import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "Introdução",
    collapsed: false,
    items: [
      {
        text: "Vamos Começar",
        link: "/introduction/getting-started",
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
            link: "/developers/services/web",
          },
          {
            text: "Mobile",
            link: "/developers/services/mobile",
          },
          {
            text: "Gerar Horário",
            link: "/developers/services/gerar-horario",
          },
          {
            text: "API",
            link: "/developers/services/api",
          },
          {
            text: "Autenticação",
            link: "/developers/services/auth",
          },
          {
            text: "Documentação",
            link: "/developers/services/docs",
          },
        ],
      },
      {
        text: "Integração",
        collapsed: true,
        items: [
          {
            text: "Integração à API",

            collapsed: true,
            items: [
              {
                text: "Introdução",
                link: "/developers/connect/api/introduction",
              },
              {
                text: "JavaScript/TypeScript",
                items: [
                  {
                    text: "api-client-fetch",
                    link: "/developers/connect/api/javascript/api-client-fetch",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Tutoriais",
        collapsed: true,

        // link: "/developers/tutorials/",

        items: [
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
            text: "Código-Fonte",
            collapsed: true,
            items: [
              {
                text: "Git",
                link: "/developers/tutorials/source-code/git",
              },

              {
                text: "VS Code",
                link: "/developers/tutorials/source-code/vs-code",
              },
            ],
          },

          {
            text: "Gestão de Projetos",
            collapsed: true,
            items: [
              {
                text: "Jira",
                link: "/developers/tutorials/project-management/jira",
              },
            ],
          },

          {
            text: "Banco de Dados",
            collapsed: true,
            items: [
              {
                text: "Postgres",
                link: "/developers/tutorials/database/postgres",
              },
            ],
          },

          {
            text: "Plataformas",
            collapsed: true,
            items: [
              {
                text: "C# / DotNET",
                link: "/developers/tutorials/platforms/csharp-dotnet",
              },

              {
                text: "Node.js",
                link: "/developers/tutorials/platforms/node",
              },
              {
                text: "Web",
                collapsed: true,
                items: [
                  {
                    text: "Front-end",
                    collapsed: true,
                    items: [
                      {
                        text: "Vue",
                        link: "/developers/tutorials/platforms/web/front-end/vue",
                      },
                    ],
                  },

                  {
                    text: "Nuxt",
                    link: "/developers/tutorials/platforms/web/nuxt",
                  },
                ],
              },
            ],
          },

          {
            text: "API",
            collapsed: true,
            items: [
              {
                text: "API",
                link: "/developers/tutorials/api/",
              },
            ],
          },

          {
            text: "Contêiners",
            collapsed: true,
            items: [
              {
                text: "Docker",
                link: "/developers/tutorials/containers/docker",
              },
            ],
          },

          {
            text: "Avançado",
            collapsed: true,
            items: [
              {
                text: "Orquestração de Contêiners",
                collapsed: true,
                items: [
                  {
                    text: "Kubernetes",
                    link: "/developers/tutorials/advanced/containers-orchestration/kubernetes",
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
