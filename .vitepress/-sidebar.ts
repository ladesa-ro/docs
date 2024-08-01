import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "Introdução",

    collapsed: false,

    items: [
      {
        text: "Vamos Começar",
        link: "/intro/getting-started",
      },
    ],
  },
  {
    text: "Guia para Usuários",
    collapsed: false,
    link: "/user-guides/",

    items: [],
  },
  {
    text: "Dev Docs",
    collapsed: true,

    link: "/dev/",

    items: [
      {
        text: "Tutoriais",
        collapsed: true,

        link: "/dev/tutorials/",

        items: [
          {
            text: "Sistemas Operacionais",
            collapsed: false,
            items: [
              {
                text: "Linha de Comando",
                link: "/dev/tutorials/operating-systems/command-line",
              },
            ],
          },

          {
            text: "Código-Fonte",
            collapsed: false,
            items: [
              {
                text: "Git",
                link: "/dev/tutorials/source-code/git",
              },

              {
                text: "VS Code",
                link: "/dev/tutorials/source-code/vs-code",
              },
            ],
          },

          {
            text: "Gestão de Projetos",
            collapsed: false,
            items: [
              {
                text: "Jira",
                link: "/dev/tutorials/project-management/jira",
              },
            ],
          },

          {
            text: "Banco de Dados",
            collapsed: false,
            items: [
              {
                text: "Postgres",
                link: "/dev/tutorials/database/postgres",
              },
            ],
          },

          {
            text: "Plataformas",
            collapsed: false,
            items: [
              {
                text: "C# / DotNET",
                link: "/dev/tutorials/platforms/csharp-dotnet",
              },

              {
                text: "Node.js",
                link: "/dev/tutorials/platforms/node",
              },
              {
                text: "Web",
                collapsed: false,
                items: [
                  {
                    text: "Front-end",
                    collapsed: false,
                    items: [
                      {
                        text: "Vue",
                        link: "/dev/tutorials/platforms/web/front-end/vue",
                      },
                    ],
                  },

                  {
                    text: "Nuxt",
                    link: "/dev/tutorials/platforms/web/nuxt",
                  },
                ],
              },
            ],
          },

          {
            text: "API",
            collapsed: false,
            items: [
              {
                text: "API",
                link: "/dev/tutorials/api/",
              },
            ],
          },

          {
            text: "Contêiners",
            collapsed: false,
            items: [
              {
                text: "Docker",
                link: "/dev/tutorials/containers/docker",
              },
            ],
          },

          {
            text: "Avançado",
            collapsed: true,
            items: [
              {
                text: "Orquestração de Contêiners",
                collapsed: false,
                items: [
                  {
                    text: "Kubernetes",
                    link: "/dev/tutorials/advanced/containers-orchestration/kubernetes",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Sistemas",
        collapsed: true,
        items: [
          {
            text: "Web",
            link: "/dev/services/web",
          },
          {
            text: "Mobile",
            link: "/dev/services/mobile",
          },
          {
            text: "Gerar Horário",
            link: "/dev/services/gerar-horario",
          },
          {
            text: "API",
            link: "/dev/services/api",
          },
          {
            text: "Autenticação",
            link: "/dev/services/auth",
          },
          {
            text: "Documentação",
            link: "/dev/services/docs",
          },
        ],
      },
      {
        text: "Integração aos Sistemas",
        collapsed: true,
        items: [
          {
            text: "Integração à API",

            collapsed: true,
            items: [
              {
                text: "Introdução",
                link: "/dev/connect/api/introduction",
              },
              {
                text: "JavaScript/TypeScript",
                items: [
                  {
                    text: "api-client-fetch",
                    link: "/dev/connect/api/javascript/api-client-fetch",
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
