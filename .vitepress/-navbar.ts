import { DefaultTheme } from "vitepress";

type INavbar = {
  nav: DefaultTheme.Config["nav"];
  socialLinks: DefaultTheme.Config["socialLinks"];
};

export const navbar: INavbar = {
  nav: [
    //
    { text: "Início", link: "/" },

    { text: "Guia para Usuários", link: "/user-guides/introduction" },

    { text: "Dev Docs", link: "/dev/" },
  ],

  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/ladesa-ro/docs",
    },
  ],
};
