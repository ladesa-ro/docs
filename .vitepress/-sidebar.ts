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

    items: [
      {
        text: "Início",
        link: "/developers/",
      },

      {
        text: "Sistemas do Ladesa",
        collapsed: true,
        items: [
          {
            text: "Primeiros Passos",
            link: "/developers/ladesa-systems/",
          },

          {
            text: "Microsserviços",
            collapsed: true,
            items: [
              {
                text: "Sobre",
                link: "/developers/ladesa-systems/microservices/",
              },

              {
                text: "Primeiros passos",
                collapsed: true,
                items: [
                  {
                    text: "Configurar Ambiente",
                    link: "/developers/ladesa-systems/microservices/first-steps/setup/",
                  },
                  {
                    text: "Kit para Desenvolvedores",
                    link: "/developers/ladesa-systems/microservices/first-steps/dev-kit/",
                  },
                ],
              },

              {
                text: "Front-End",
                collapsed: true,
                items: [
                  {
                    text: "Aplicação Web",
                    link: "/developers/ladesa-systems/microservices/front-end/web/",
                  },
                  {
                    text: "Mobile",
                    link: "/developers/ladesa-systems/microservices/front-end/mobile/",
                  },
                ],
              },
              {
                text: "Back-End",
                collapsed: true,
                items: [
                  {
                    text: "Web API Integrada",
                    link: "/developers/ladesa-systems/microservices/back-end/api/",
                  },
                  {
                    text: "Gerar Horário",
                    link: "/developers/ladesa-systems/microservices/back-end/gerar-horario/",
                  },
                  {
                    text: "Autenticação",
                    link: "/developers/ladesa-systems/microservices/back-end/auth/",
                  },
                ],
              },
              {
                text: "Documentação",
                link: "/developers/ladesa-systems/microservices/docs/",
              },
            ],
          },

          {
            text: "Integração",
            collapsed: true,

            items: [
              {
                text: "Conectar",
                link: "/developers/ladesa-systems/connect/",
              },
              {
                text: "Web API Integrada",

                collapsed: true,
                items: [
                  {
                    text: "Visão Geral",
                    link: "/developers/ladesa-systems/connect/web-api/overview",
                  },
                  {
                    text: "JavaScript",
                    link: "/developers/ladesa-systems/connect/web-api/javascript/",
                  },
                  {
                    text: "Vue/Nuxt",
                    link: "/developers/ladesa-systems/connect/web-api/javascript/vue-nuxt/",
                  },
                ],
              },
            ],
          },

          {
            text: "Distribuição",
            collapsed: true,

            items: [
              {
                text: "Vamos Distribuir",
                link: "/developers/ladesa-systems/distribute/",
              },

              {
                text: "Build e Empacotamento",
                link: "/developers/ladesa-systems/distribute/build-and-package/",
              },

              {
                text: "Clientes (front-end)",
                collapsed: true,
                items: [
                  {
                    text: "Web",
                    link: "/developers/ladesa-systems/distribute/client-front-end/web/",
                  },
                  {
                    text: "Mobile",
                    collapsed: true,
                    items: [
                      {
                        text: "Android",
                        link: "/developers/ladesa-systems/distribute/client-front-end/mobile/android/",
                      },
                      {
                        text: "iOS",
                        link: "/developers/ladesa-systems/distribute/client-front-end/mobile/ios/",
                      },
                    ],
                  },
                  {
                    text: "Desktop",
                    collapsed: true,
                    items: [
                      {
                        text: "Windows",
                        link: "/developers/ladesa-systems/distribute/client-front-end/desktop/windows/",
                      },
                      {
                        text: "macOS",
                        link: "/developers/ladesa-systems/distribute/client-front-end/desktop/macos/",
                      },
                      {
                        text: "Linux",
                        link: "/developers/ladesa-systems/distribute/client-front-end/desktop/linux/",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Servidor (back-end)",
                collapsed: true,
                items: [
                  {
                    text: "Container OCI",
                    link: "/developers/ladesa-systems/distribute/server-back-end/container/",
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
                link: "/developers/ladesa-systems/deploy/",
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
                        link: "/developers/ladesa-systems/deploy/cluster/initialize-kubernetes/",
                      },

                      {
                        text: "Certificados",
                        collapsed: true,
                        items: [
                          {
                            text: "CertManager",
                            link: "/developers/ladesa-systems/deploy/cluster/certificates/setup-cert-manager",
                          },
                          {
                            text: "ClusterIssuer",
                            link: "/developers/ladesa-systems/deploy/cluster/certificates/cluster-issuer",
                          },
                        ],
                      },

                      {
                        text: "Configurar o Portainer",
                        link: "/developers/ladesa-systems/deploy/cluster/setup-portainer/",
                      },

                      {
                        text: "Bancos de Dados",
                        collapsed: true,
                        items: [
                          {
                            text: "Postgres",
                            link: "/developers/ladesa-systems/deploy/cluster/databases/postgres/",
                          },
                          {
                            text: "MariaDB",
                            link: "/developers/ladesa-systems/deploy/cluster/databases/mariadb/",
                          },
                          {
                            text: "Redis",
                            link: "/developers/ladesa-systems/deploy/cluster/databases/redis/",
                          },
                        ],
                      },

                      {
                        text: "Infisical",
                        collapsed: true,
                        items: [
                          {
                            text: "Server",
                            link: "/developers/ladesa-systems/deploy/cluster/infisical/server/",
                          },
                          {
                            text: "Operator",
                            link: "/developers/ladesa-systems/deploy/cluster/infisical/pulling-secrets/kubernetes/operator/",
                          },
                          {
                            text: "Secret Sync",
                            link: "/developers/ladesa-systems/deploy/cluster/infisical/pulling-secrets/kubernetes/infisical-secret-resource/",
                          },
                        ],
                      },

                      {
                        text: "Registry",
                        link: "/developers/ladesa-systems/deploy/cluster/registry/",
                      },

                      {
                        text: "E-mail",
                        collapsed: true,
                        items: [
                          {
                            text: "Postal",
                            link: "/developers/ladesa-systems/deploy/cluster/e-mail/postal/",
                          },
                        ],
                      },

                      {
                        text: "RabbitMQ",
                        link: "/developers/ladesa-systems/deploy/cluster/rabbitmq/",
                      },

                      {
                        text: "Sistemas do Ladesa",
                        collapsed: true,
                        items: [
                          {
                            text: "API",
                            link: "/developers/ladesa-systems/deploy/cluster/ladesa/api/",
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
                    link: "/developers/ladesa-systems/deploy/hacks/",
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
        ],
      },

      {
        text: "Tutoriais Gerais",
        collapsed: true,
        items: [
          {
            text: "Motivação",
            link: "/developers/tutorials/",
          },

          {
            text: "Ambientes e Estágios",
            link: "/developers/tutorials/environments",
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
                text: "Plataformas de Execução",
                link: "/developers/tutorials/source-code/runtime-platforms",
              },

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
    ],
  },
];
