import { DefaultTheme } from "vitepress";

type INavbar = {
  nav: DefaultTheme.Config["nav"];
  socialLinks: DefaultTheme.Config["socialLinks"];
};

export const navbar: INavbar = {
  nav: [
    //
    {
      text: "Início",
      link: "/",
    },

    {
      text: "Sobre",
      items: [
        {
          text: "Quem somos nós",
          link: "/about/team",
        },
        {
          text: "Documentação Técnica",
          link: "https://docs.google.com/document/d/1HB6QzwVzIVluIq6WzlZJ68DHcR_M7PNXsbHyp2g5BlU/edit?usp=sharing",
        },
      ],
    },

    {
      text: "Guia para Usuários",
      link: "/user-guides/introduction",
    },

    {
      text: "Dev Docs",
      link: "/dev/",
    },
  ],

  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/ladesa-ro/docs",
    },
  ],
};
