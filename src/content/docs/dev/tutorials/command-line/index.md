---
title: Linha de Comando
---

O propósito deste tutorial é que você conheça e esteja ambientado a utilizar uma _Linha de Comando_. Você verá que esse recurso é poderoso, pois permite a execução de comandos por meio de texto, ou seja, fornecer instruções para que o sistema operacional realize ou apenas mostre a quem realize a operação. Entretanto, é necessário um ambiente a qual o usuário possa fornecer essas instruções e visualizá-las, e para esse problema são utilizados os _Emuladores de Terminais_.

## Emulador de Terminal

Popularmente, um _emulador de terminal_ é um software presente no seu ambiente desktop que permite o acesso a um _shell_ (invólucro, intermediario entre o usuário e o sistema operacional). Esse software permite o envio de comandos escritos para um interpretador de _shell_, mas antes de entrarmos nesse tópico, certifique-se de possuir um _emulador de terminal_ instalado no seu sistema.

### Windows

O Windows 10 e 11 contam com o _Windows Terminal_, um "_aplicativo de terminal moderno, rápido, eficiente, poderoso e produtivo para os usuários de ferramentas e shells de linha de comando, como prompt de comando, PowerShell e WSL_".

Para instalar o _Windows Terminal_, a _Microsoft_ recomenda oficialmente a instalação por meio da _Microsoft Store_, que pode ser acessada [neste link](https://aka.ms/terminal).

- Instalar via _Microsoft Store_ (oficial e recomendado): <https://aka.ms/terminal>

Segundo a desenvolvedora, este programa conta com "_várias guias, painéis, suporte a caracteres Unicode e UTF-8, um mecanismo de renderização de texto acelerado por GPU e temas, estilos e configurações personalizados._".

Por muito tempo, o _CMD_, também conhecido como _Prompt de Comando do Windows_ esteve presente junto ao _Power Shell_ nos sistemas operacionais `NT / Windows` como capazes de fornecer um ambiente que permita escrever instruções ao computador. Até então, ambos serviam um software em formato de janela (emulador de terminal) e o shell em sí (interpretador de instruções). Entretanto, o projeto _Power Shell_ caminha para ser mais um shell, e o papel de janela visual fica a cargo do _Windows Terminal_. Além disso, atualmente o projeto _Power Shell_ é o que conta com muitos novos recursos e otimizações, sendo esse o recomendado para a utilização em ambientes _Windows_

### Linux

A depender da sua distribuição, é bem provável que o seu ambiente desktop tenha instalado algum dos seguintes emuladores de terminal. Por favor, veja se o seu sistema operacional conta com algum deles:

- Konsole (para KDE)
- GNOME Terminal (para GNOME)
- Deepin Terminal (para deepin)

Além disso, existem vários projetos independentes de código aberto que fazem o papel de emulador de terminal. A seguir, estão listados alguns deles.

> NOTA: Apesar da popularidade dos seguintes softwares, considere informar sobre o método de instalação, estado de manutenção e _issues_ relatadas sobre o software antes de instalar.

- Terminator
- Tilix
- Yakuake
- Kitty
- Alacritty

### macOS

> NOTA: documentação em progresso. sinta-se livre para sugerir este tópico.

## Shell

O termo _shell_ é referido nessa documentação como sendo um _software_ capaz de interpretar instruções dadas ao sistema operacional.

> NOTA: work-in-progress.
