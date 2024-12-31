import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "Introdução",
    collapsed: false,
    items: [
      {
        text: "Vamos Começar",
        link: "/introduction/getting-started",
      },
      {
        text: "Sistemas do Ladesa",
        link: "/introduction/systems",
      },
    ],
  },

  {
    text: "Guia para Usuários",
    collapsed: false,
    items: [
      {
        text: "Início",
        link: "/user-guides/introduction",
      },
    ],
  },

  {
    text: "Dev Docs",
    collapsed: true,

    // link: "/developers/",

    items: [
      {
        text: "Início",
        link: "/developers/",
      },

      {
        text: "Tutoriais",
        collapsed: true,
        items: [
          {
            text: "Motivação",
            link: "/developers/tutorials/",
          },
          {
            text: "Plataformas",
            collapsed: true,
            items: [
              {
                text: "Front-End",
                collapsed: true,
                items: [
                  {
                    text: "Vue.js",
                    link: "/developers/tutorials/platforms/web/vue/",
                  },

                  {
                    text: "Vuetify",
                    link: "/developers/tutorials/platforms/web/vue/vuetify/",
                  },

                  {
                    text: "libs/vue-query",
                    link: "/developers/tutorials/platforms/web/vue/libs/vue-query/",
                  },
                ],
              },

              {
                text: "Back-End",
                collapsed: true,
                items: [
                  {
                    text: "Nuxt.js",
                    link: "/developers/tutorials/platforms/web/vue/nuxt/",
                  },

                  {
                    text: "Node.js",
                    link: "/developers/tutorials/platforms/node/",
                  },

                  {
                    text: "C# / .NET",
                    link: "/developers/tutorials/platforms/csharp-dotnet/",
                  },

                  {
                    text: "API",
                    link: "/developers/tutorials/platforms/api/",
                  },

                  {
                    text: "Banco de Dados",
                    collapsed: true,
                    items: [
                      {
                        text: "Postgres",
                        link: "/developers/tutorials/platforms/database/postgres/",
                      },
                    ],
                  },
                ],
              },

              {
                text: "Infraestrutura",
                collapsed: true,
                items: [
                  {
                    text: "Docker",
                    link: "/developers/tutorials/platforms/containers/docker/",
                  },
                  {
                    text: "Kubernetes",
                    link: "/developers/tutorials/platforms/containers/orchestration/kubernetes/",
                  },
                ],
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
              {
                text: "Permissões de Arquivos",
                link: "/developers/tutorials/os/file-permissions/",
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
                text: "Visual Studio Code",
                link: "/developers/tutorials/source-code/vs-code/",
              },
            ],
          },

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
        ],
      },

      {
        text: "Microsserviços",
        collapsed: true,
        items: [
          {
            text: "Sobre",
            link: "/developers/services/",
          },

          {
            text: "Primeiros passos",
            collapsed: true,
            items: [
              {
                text: "Configurar Ambiente",
                link: "/developers/services/first-steps/setup/",
              },
              {
                text: "Kit para Desenvolvedores",
                link: "/developers/services/first-steps/dev-kit/",
              },
            ],
          },

          {
            text: "Front-End",
            collapsed: true,
            items: [
              {
                text: "Aplicação Web",
                link: "/developers/services/web/",
              },
              {
                text: "Mobile",
                link: "/developers/services/mobile/",
              },
            ],
          },
          {
            text: "Back-End",
            collapsed: true,
            items: [
              {
                text: "Web API Integrada",
                link: "/developers/services/api/",
              },
              {
                text: "Gerar Horário",
                link: "/developers/services/gerar-horario/",
              },
              {
                text: "Autenticação",
                link: "/developers/services/auth/",
              },
            ],
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
        text: "Implantação",
        collapsed: true,
        items: [
          {
            text: "Vamos Implantar",
            link: "/developers/deploy/",
          },

          {
            text: "Plataformas de Execução",
            link: "/developers/deploy/runtime-platforms",
          },

          {
            text: "Ambientes",
            link: "/developers/deploy/environments",
          },

          {
            text: "Distribuição",
            collapsed: true,

            items: [
              {
                text: "Vamos Distribuir",
                link: "/developers/deploy/distribution/",
              },

              {
                text: "Clientes (front-end)",
                collapsed: true,
                items: [
                  {
                    text: "Web",
                    link: "/developers/deploy/distribution/client-front-end/web/",
                  },
                  {
                    text: "Mobile",
                    collapsed: true,
                    items: [
                      {
                        text: "Android",
                        link: "/developers/deploy/distribution/client-front-end/mobile/android/",
                      },
                      {
                        text: "iOS",
                        link: "/developers/deploy/distribution/client-front-end/mobile/ios/",
                      },
                    ],
                  },
                  {
                    text: "Desktop",
                    collapsed: true,
                    items: [
                      {
                        text: "Windows",
                        link: "/developers/deploy/distribution/client-front-end/desktop/windows/",
                      },
                      {
                        text: "macOS",
                        link: "/developers/deploy/distribution/client-front-end/desktop/macos/",
                      },
                      {
                        text: "Linux",
                        link: "/developers/deploy/distribution/client-front-end/desktop/linux/",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Servidor (back-end)",

                items: [
                  {
                    text: "Containers OCI",
                    link: "/developers/deploy/distribution/server-back-end/",
                  },
                ],
              },
            ],
          },

          {
            text: "Execução",
            collapsed: true,
            items: [
              {
                text: "Cluster",

                collapsed: true,

                items: [
                  {
                    text: "Inicializar Kubernetes",
                    link: "/developers/deploy/cluster/01-initialize-kubernetes/",
                  },

                  {
                    text: "Certificados",
                    collapsed: true,
                    items: [
                      {
                        text: "CertManager",
                        link: "/developers/deploy/cluster/certificates/setup-cert-manager",
                      },
                      {
                        text: "ClusterIssuer",
                        link: "/developers/deploy/cluster/certificates/cluster-issuer",
                      },
                    ],
                  },

                  {
                    text: "Configurar o Portainer",
                    link: "/developers/deploy/cluster/02-setup-portainer/",
                  },

                  {
                    text: "Bancos de Dados",
                    collapsed: true,
                    items: [
                      {
                        text: "Postgres",
                        link: "/developers/deploy/cluster/03-databases/postgres/",
                      },
                      {
                        text: "Redis",
                        link: "/developers/deploy/cluster/03-databases/redis/",
                      },
                    ],
                  },

                  {
                    text: "Infisical",
                    collapsed: true,
                    items: [
                      {
                        text: "Server",
                        link: "/developers/deploy/cluster/04-infisical/server/",
                      },
                      {
                        text: "Operator",
                        link: "/developers/deploy/cluster/04-infisical/pulling-secrets/kubernetes/operator/",
                      },
                      {
                        text: "Secret Sync",
                        link: "/developers/deploy/cluster/04-infisical/pulling-secrets/kubernetes/infisical-secret-resource/",
                      },
                    ],
                  },

                  {
                    text: "Registry",
                    link: "/developers/deploy/cluster/05-registry/",
                  },

                  {
                    text: "Sistemas do Ladesa",
                    collapsed: true,
                    items: [
                      {
                        text: "API",
                        link: "/developers/deploy/cluster/06-ladesa/api/",
                      },
                    ],
                  },
                ],
              },

              {
                text: "VPN",
              },

              {
                text: "Hacks",
                link: "/developers/deploy/hacks/",
              },
            ],
          },
        ],
      },

      {
        text: "Devops",
        collapsed: true,
        items: [],
      },
    ],
  },
];
