---
title: Linha de Comando
---

O propósito deste tutorial é que você conheça e esteja ambientado a utilizar uma _Linha de Comando_.
Você verá que esse recurso é poderoso, pois permite a execução de comandos por meio de entrada
textual, de forma a fornecer instruções para que o sistema operacional realize as operações
submetidas. O primeiro passo para poder usufruir da linha de comando é ter um ambiente vocôe possa
fornecer essas instruções e visualizá-las, e para isso são utilizados os _Emuladores de Terminais_.

## Emulador de Terminal

Um _emulador de terminal_ é um software disponível no seu ambiente desktop que permite o acesso a um _shell_ — invólucro, intermediario entre o usuário e o sistema operacional —. Esse software permite o envio de comandos textuais para um interpretador de _shell_ — mas antes de entrarmos no tópico de _shells_, certifique-se de possuir um _emulador de terminal_ instalado no seu sistema.

### Windows

O sistema operacional Windows, em suas versões 10 e 11, conta com o _Windows Terminal_ — sendo, segundo a Microsoft, um "_aplicativo de terminal moderno, rápido, eficiente, poderoso e produtivo para os usuários de ferramentas e shells de linha de comando, como prompt de comando, PowerShell e WSL_".

Para instalar o _Windows Terminal_, a _Microsoft_ recomenda a instalação oficial por meio da _Microsoft Store_, que pode ser acessada [neste link](https://aka.ms/terminal).

- Instalar via _Microsoft Store_ (oficial e recomendado): <https://aka.ms/terminal>

:::note[Curiosidade]
Segundo a desenvolvedora, este programa conta com "_várias guias, painéis, suporte a caracteres Unicode e UTF-8, um mecanismo de renderização de texto acelerado por GPU e temas, estilos e configurações personalizados_".
:::

Por muito tempo, o _CMD_ — também conhecido como _Prompt de Comando do Windows_ —, esteve presente junto ao _Power Shell_ nos sistemas operacionais _NT / Windows_. Eles foram capazes de fornecer um ambiente preparado para a entrada de instruções ao computador. Até então, ambos serviram um software em formato de janela (emulador de terminal) e interpretador de instruções (shell). Entretanto, o projeto _Power Shell_ caminha para ser mais cada vez mais apenas o papel de shell, e o trabalho de projetar a janela visual fica a cargo do _Windows Terminal_. Além disso, atualmente o projeto _Power Shell_ conta com muitos novos recursos, atualizações e otimizações — sendo esse o recomendado para a utilização em ambientes _Windows_.

### Linux

A depender da sua distribuição GNU/Linux, é bem provável que o seu ambiente desktop tenha instalado algum emulador de terminal por padrão. Por favor, verifique que o seu sistema operacional possua algum disponível para o uso. A seguir, estão listados os emulares de terminal padrões dos ambientes desktop populares no ecossistêma GNU/Linux:

- Konsole (para KDE);
- GNOME Terminal (para GNOME);
- Deepin Terminal (para deepin).

Além disso, existem vários projetos independentes de código aberto que fazem o papel de emulador de terminal. A seguir, estão listados alguns deles.

:::note[Atenção]
Apesar da popularidade dos seguintes softwares, considere estar informado sobre o método de instalação, estado de manutenção e _problemas (ou issues)_ relatadas sobre o software escolhido antes de instalar.
:::

- Alacritty.
- Kitty;
- Terminator;
- Tilix;
- Yakuake;

### macOS

:::note[Documentação Incompleta]
Essa seção está incompleta. Sinta-se livre para sugerir conteúdo para este tópico.
:::

## Shell

O termo _shell_ é referido nessa documentação como sendo um _software_ capaz de interpretar instruções, estando próximo a comandos que interagam com o sistema operacional e o sistema de arquivos.

:::note[Documentação Incompleta]
Essa seção está incompleta. Sinta-se livre para sugerir conteúdo para este tópico.
:::
