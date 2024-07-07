import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "Introdução",
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
    items: [
      {
        text: "Início",
        link: "/user-guides",
      },
    ],
  },
  {
    text: "Dev Docs",
    collapsed: true,

    items: [
      {
        text: "Início",
        link: "/dev/",
      },
      {
        text: "Tutoriais",
        collapsed: true,
        items: [
          {
            text: "Visão Geral",
            link: "/dev/tutorials",
          },

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
                text: "Front-end",
                items: [
                  {
                    text: "Vue",
                    link: "/dev/tutorials/platforms/front-end/vue",
                  },
                ],
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
            link: "/dev/services/web/",
          },
          {
            text: "Mobile",
            link: "/dev/services/mobile/",
          },
          {
            text: "Gerar Horário",
            link: "/dev/services/gerar-horario/",
          },
          {
            text: "API",
            link: "/dev/services/api/",
          },
          {
            text: "Autenticação",
            link: "/dev/services/auth/",
          },
          {
            text: "Documentação",
            link: "/dev/services/docs/",
          },
        ],
      },
      {
        text: "Integração aos Sistemas",
        collapsed: true,
        items: [
          {
            text: "API",
            link: "/dev/services-integrations/api/",
          },
        ],
      },
    ],
  },
];
