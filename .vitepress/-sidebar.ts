import type { DefaultTheme } from "vitepress";
import {
  PATH_DEV_DOCS_INTRO,
  PATH_DEV_DOCS_SYSTEMS,
  PATH_DEV_DOCS_SYSTEMS_INTRO,
  PATH_DEV_DOCS_SYSTEMS_MICROSERVICES,
  PATH_DEV_DOCS_SYSTEMS_MICROSERVICES_DEV_KIT,
  PATH_DEV_DOCS_SYSTEMS_MICROSERVICES_FIRST_STEPS_SETUP,
  PATH_DEV_DOCS_SYSTEMS_MICROSERVICES_INTRO,
  PATH_INTRODUCTION_GETTING_STARTED,
  PATH_INTRODUCTION_SYSTEMS,
  PATH_USER_GUIDES_INTRODUCTION,
} from "./-paths";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "Introdução",
    collapsed: false,
    items: [
      {
        text: "Vamos Começar",
        link: PATH_INTRODUCTION_GETTING_STARTED,
      },
      {
        text: "Sistemas do Ladesa",
        link: PATH_INTRODUCTION_SYSTEMS,
      },
    ],
  },

  {
    text: "Guia para Usuários",
    collapsed: false,
    items: [
      {
        text: "Início",
        link: PATH_USER_GUIDES_INTRODUCTION,
      },
    ],
  },

  {
    text: "Dev Docs",
    collapsed: true,

    items: [
      {
        text: "Início",
        link: PATH_DEV_DOCS_INTRO,
      },

      {
        text: "Sistemas do Ladesa",
        collapsed: true,
        items: [
          {
            text: "Primeiros Passos",
            link: PATH_DEV_DOCS_SYSTEMS_INTRO,
          },

          {
            text: "Microsserviços",
            collapsed: true,
            items: [
              {
                text: "Sobre",
                link: PATH_DEV_DOCS_SYSTEMS_MICROSERVICES_INTRO,
              },

              {
                text: "Primeiros passos",
                collapsed: true,
                items: [
                  {
                    text: "Configurar Ambiente",
                    link: PATH_DEV_DOCS_SYSTEMS_MICROSERVICES_FIRST_STEPS_SETUP,
                  },
                  {
                    text: "Kit para Desenvolvedores",
                    link: PATH_DEV_DOCS_SYSTEMS_MICROSERVICES_DEV_KIT,
                  },
                ],
              },

              {
                text: "Front-End",
                collapsed: true,
                items: [
                  {
                    text: "Aplicação Web",
                    link: `${PATH_DEV_DOCS_SYSTEMS_MICROSERVICES}/front-end/web/`,
                  },
                  {
                    text: "Mobile",
                    link: `${PATH_DEV_DOCS_SYSTEMS_MICROSERVICES}/front-end/mobile/`,
                  },
                ],
              },
              {
                text: "Back-End",
                collapsed: true,
                items: [
                  {
                    text: "Web API Integrada",
                    link: `${PATH_DEV_DOCS_SYSTEMS_MICROSERVICES}/back-end/api/`,
                  },
                  {
                    text: "Gerar Horário",
                    link: `${PATH_DEV_DOCS_SYSTEMS_MICROSERVICES}/back-end/gerar-horario/`,
                  },
                  {
                    text: "Autenticação",
                    link: `${PATH_DEV_DOCS_SYSTEMS_MICROSERVICES}/back-end/auth/`,
                  },
                ],
              },
              {
                text: "Documentação",
                link: `${PATH_DEV_DOCS_SYSTEMS_MICROSERVICES}/docs/`,
              },
            ],
          },

          {
            text: "Integração",
            collapsed: true,

            items: [
              {
                text: "Conectar",
                link: `${PATH_DEV_DOCS_SYSTEMS}/connect/`,
              },
              {
                text: "Web API Integrada",

                collapsed: true,
                items: [
                  {
                    text: "Visão Geral",
                    link: `${PATH_DEV_DOCS_SYSTEMS}/connect/web-api/overview`,
                  },
                  {
                    text: "JavaScript",
                    link: `${PATH_DEV_DOCS_SYSTEMS}/connect/web-api/javascript/`,
                  },
                  {
                    text: "Vue/Nuxt",
                    link: `${PATH_DEV_DOCS_SYSTEMS}/connect/web-api/javascript/vue-nuxt/`,
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
                link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/`,
              },

              {
                text: "Build e Empacotamento",
                link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/build-and-package/`,
              },

              {
                text: "Clientes (front-end)",
                collapsed: true,
                items: [
                  {
                    text: "Web",
                    link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/client-front-end/web/`,
                  },
                  {
                    text: "Mobile",
                    collapsed: true,
                    items: [
                      {
                        text: "Android",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/client-front-end/mobile/android/`,
                      },
                      {
                        text: "iOS",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/client-front-end/mobile/ios/`,
                      },
                    ],
                  },
                  {
                    text: "Desktop",
                    collapsed: true,
                    items: [
                      {
                        text: "Windows",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/client-front-end/desktop/windows/`,
                      },
                      {
                        text: "macOS",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/client-front-end/desktop/macos/`,
                      },
                      {
                        text: "Linux",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/client-front-end/desktop/linux/`,
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
                    link: `${PATH_DEV_DOCS_SYSTEMS}/distribute/server-back-end/container/`,
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
                link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/`,
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
                        link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/initialize-kubernetes/`,
                      },

                      {
                        text: "Certificados",
                        collapsed: true,
                        items: [
                          {
                            text: "CertManager",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/certificates/setup-cert-manager`,
                          },
                          {
                            text: "ClusterIssuer",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/certificates/cluster-issuer`,
                          },
                        ],
                      },

                      {
                        text: "Configurar o Portainer",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/setup-portainer/`,
                      },

                      {
                        text: "Bancos de Dados",
                        collapsed: true,
                        items: [
                          {
                            text: "Postgres",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/databases/postgres/`,
                          },
                          {
                            text: "MariaDB",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/databases/mariadb/`,
                          },
                          {
                            text: "Redis",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/databases/redis/`,
                          },
                        ],
                      },

                      {
                        text: "Infisical",
                        collapsed: true,
                        items: [
                          {
                            text: "Server",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/infisical/server/`,
                          },
                          {
                            text: "Operator",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/infisical/pulling-secrets/kubernetes/operator/`,
                          },
                          {
                            text: "Secret Sync",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/infisical/pulling-secrets/kubernetes/infisical-secret-resource/`,
                          },
                        ],
                      },

                      {
                        text: "Registry",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/registry/`,
                      },

                      {
                        text: "E-mail",
                        collapsed: true,
                        items: [
                          {
                            text: "Postal",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/e-mail/postal/`,
                          },
                        ],
                      },

                      {
                        text: "RabbitMQ",
                        link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/rabbitmq/`,
                      },

                      {
                        text: "Sistemas do Ladesa",
                        collapsed: true,
                        items: [
                          {
                            text: "API",
                            link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/cluster/ladesa/api/`,
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
                    link: `${PATH_DEV_DOCS_SYSTEMS}/deploy/hacks/`,
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
