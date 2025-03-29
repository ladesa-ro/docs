import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Ladesa Docs",
  tagline: "Navegue pela base de conhecimento do Ladesa",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.ladesa.com.br",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ladesa-ro", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ladesa-ro/docs/tree/main/docusaurus",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ladesa-ro/docs/tree/main/docusaurus",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Ladesa Docs",
      logo: {
        alt: "Ladesa Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "overviewDocsSidebar",
          position: "left",
          label: "Documentação",
        },

        {
          label: "Sobre",
          position: "right",
          items: [
            {
              sidebarId: "overviewDocsSidebar",
              to: "/docs/about/team",
              label: "Quem somos nós",
            },
          ],
        },

        {
          to: "/blog",
          label: "Blog",
          position: "right",
        },
        {
          href: "https://github.com/ladesa-ro/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentação",
          items: [
            {
              label: "Vamos Começar",
              to: "/docs/overview/introduction/getting-started",
            },
            {
              label: "Guia para Usuários",
              to: "/docs/users-guide/intro",
            },
            {
              label: "Guia para Desenvolvedores",
              to: "/docs/developers-guide/intro",
            },
          ],
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@LadesaRO",
            },
            {
              label: "Discord",
              href: "https://example.com/#",
            },
          ],
        },
        {
          title: "Mais",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ladesa-ro/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ladesa RO. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
