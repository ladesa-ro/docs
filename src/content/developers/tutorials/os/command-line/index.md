# Linha de Comando

A _Linha de Comando_ pode ser uma aliada muito poderosa e de extrema utilidade no seu dia a dia, pois permite a você comandar o
sistema operacional por meio de entradas textuais.

<script setup lang="ts">
  const introVideo = {
    title: "Por meio do comando 'echo', é retornado à saída textual o mesmo conteúdo que foi fornecido como argumento. Captura de Tela do Emulador de Terminal Konsole com o interpretador de shell GNU bash no sistema operacional GNU/Linux Manjaro."
  }

</script>

<video :title="introVideo.title" controls loop muted autoplay style="width: 100%; aspect-ratio: 53/28;">
  <source src="/assets/dev-tutorials-command-line/terminal-emulator-konsole-with-bash.mp4" type="video/mp4" />
</video>

A utilização da Linha de Comando está relacionada a dois conceitos simples mas essenciais em sua utilização:

- _**Interface de Usuário**_ — com a qual você interage diretamente —, aqui chamada de _Emulador de Terminal_;
- _**Interpretador de instruções**_ — aquele que interpreta e encaminha os comandos à execução.

Continue o seu aprendizado para iniciar as configurações da Linha de Comando em seu ambiente de trabalho já na próxima seção deste tutorial. Bons estudos!

## Emulador de Terminal

O meio com o qual você pode interagir com a Linha de Comando é chamado de _Emulador de Terminal_. Esse recurso é o responsável por captar os seus comandos, direcionar ao interpretador de instruções e retornar ao seu conhecimento a saída de suas solicitações.

### Obter um Emulador de Terminal

<PluginTabs style="text-wrap: nowrap;" sharedStateKey="operatingSystem">
<PluginTabsTab label="Windows" icon="seti:windows">

#### Windows Terminal como Emulador de Terminal <Badge text="Recomendado" variant="note"></Badge>

Caso você utilize o sistema operacional Windows em suas versões 10, 11 ou mais recente, recomendamos o uso do _Windows Terminal_ para atuar como _Emulador de Terminal_ nessa plataforma.

##### Sobre o Windows Terminal

![Windows Terminal distribuido oficialmente na Microsoft Store](/assets/dev-tutorials-command-line/windows-terminal-microsoft-store.png)

A seguir você receberá instruções sobre como obter esse software.

##### Instalar o Windows Terminal

::: tip Obter via Microsoft Store
Para instalar o _Windows Terminal_, a _Microsoft_ recomenda a instalação oficial por meio da loja _Microsoft Store_, que pode ser acessada [neste link](https://aka.ms/terminal).
:::

![Windows Terminal e Prompt de Comando](/assets/dev-tutorials-command-line/windows-terminal-cmd.png)

> Windows Terminal + Prompt de Comando (CMD).

---

O sistema operacional _Windows_ conta com o _Prompt de Comando_ (CMD) e o _PowerShell_ disponíveis nas versões mais recentes dessa plataforma. Por muito tempo, atuaram como Emulador de Terminal e Interpretador ao mesmo tempo.

| Projeto            | Janela visual                         | Interpreta comandos                      | Instalado por padrão                     |
| ------------------ | ------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| _CMD_              | <Badge text="Sim" type="tip"></Badge> | <Badge text="Sim" type="tip"></Badge>    | <Badge text="Sim" type="tip"></Badge>    |
| _PowerShell_       | <Badge text="Sim" type="tip"></Badge> | <Badge text="Sim" type="tip"></Badge>    | <Badge text="Sim" type="tip"></Badge>    |
| _Git Bash_         | <Badge text="Sim" type="tip"></Badge> | <Badge text="Sim" type="tip"></Badge>    | <Badge text="Não" type="danger"></Badge> |
| _Windows Terminal_ | <Badge text="Sim" type="tip"></Badge> | <Badge text="Não" type="danger"></Badge> | <Badge text="Não" type="danger"></Badge> |

::: info Você sabia?
O CMD tem suas raizes desde o MS-DOS. Entretanto, a Microsoft tem dado maior atenção a utilização do Windows Terminal (janela) + PowerShell (interpretador).
:::

---

Por muito tempo, ao utilizar o CMD ou o PowerShell, não era comum a separação entre a idéia de Emulador de Terminal e a de Intepretador de Comandos.

> TODO: inserir foto do prompt de comando.

> TODO: inserir foto do powershell.

---

Apesar disso, ecossistema Windows caminha para a utilização do _Windows Terminal_ como Emulador de Terminal e o uso do _Power Shell_ como um interpretador de comandos.

---

Além dos projetos apresentados anteriomente, existem vários outros softwares independentes de código aberto que fazem o papel de emulador de terminal. A seguir, estão listados alguns deles.

::: warning Atenção
Apesar da popularidade dos softwares mencionados, considere estar informado sobre o método de instalação, estado de manutenção e _problemas (ou issues)_ relatadas sobre o software escolhido antes de instalar.
:::

- cmder;
- Hyper.

---

Nessa parte, esperamos que você tenha um Emulador de Terminal disponível para uso em seu sistema operacional. Agora, você está pronto para continuar a leitura sobre shells!

</PluginTabsTab>
<PluginTabsTab label="GNU/Linux" icon="linux">
A depender da sua distribuição GNU/Linux, é bem provável que o seu ambiente desktop tenha instalado algum emulador de terminal por padrão. Por favor, verifique que o seu sistema operacional possua algum disponível para o uso. A seguir, estão listados os emulares de terminal padrões dos ambientes desktop populares no ecossistêma GNU/Linux:

- Konsole (para KDE);
- GNOME Terminal (para GNOME);
- Deepin Terminal (para deepin).

Além disso, existem vários projetos independentes de código aberto que fazem o papel de emulador de terminal. A seguir, estão listados alguns deles.

::: warning Atenção
Apesar da popularidade dos seguintes softwares, considere estar informado sobre o método de instalação, estado de manutenção e _problemas (ou issues)_ relatadas sobre o software escolhido antes de instalar.
:::

- Alacritty;
- Kitty;
- Terminator;
- Tilix;
- Yakuake.

</PluginTabsTab>
<PluginTabsTab label="macOS" icon="apple">

::: warning Documentação Incompleta
Essa seção está incompleta. Sinta-se livre para sugerir conteúdo para este tópico!
:::

</PluginTabsTab>
</PluginTabs>

## Shell

Já introduzido anteriormente, o termo _shell_ ou _interpretador de shell_ é um _software_ capaz de interpretar instruções. Toda sessão de um _shell_ está ligada a um usuário e pode contar com o acesso a árvore de arquivos do sistema operacional.

::: info Curiosidade
O termo shell pode ter a tradução literal para _concha, casca ou invólucro_, e sua concepção dentro do contexto de
linhas de comandos pode ser considerada como a de ser um intermediario entre o usuário e o sistema operacional.
:::

Assim como os Emuladores de Terminais, existem diversos _interpretadores de shell_, cada um podendo conter a sua sintáxe de comandos e forma trabalho com o fluxo de dados, arquivos e operações.

<PluginTabs sharedStateKey="operatingSystem">
<PluginTabsTab label="Windows" icon="seti:windows">

- PowerShell;
- CMD;
- Git Bash;
- WSL.

</PluginTabsTab>
<PluginTabsTab label="GNU/Linux" icon="linux"></PluginTabsTab>
<PluginTabsTab label="macOS" icon="apple"></PluginTabsTab>
</PluginTabs>

---

::: info Relação com a Documentação para Desenvolvedores
É de extrema utilidade os conceitos apresentados aqui, visto que serão usados durante toda a _Documentação para
Desenvolvedores_ do Ladesa. Durante toda a _Documentação para Desenvolvedores_ do Ladesa, será dado a preferência a
especificação léxica do `GNU bash`.
:::

---

::: warning Documentação Incompleta
Essa seção está incompleta. Sinta-se livre para sugerir conteúdo para este tópico!
:::

## Veja também

- <https://www.hanselman.com/blog/whats-the-difference-between-a-console-a-terminal-and-a-shell>
- <https://en.wikipedia.org/wiki/Comparison_of_command_shells>
- <https://pt.wikipedia.org/wiki/PowerShell>
- <https://en.wikipedia.org/wiki/Command-line_interface>
- <https://pt.wikipedia.org/wiki/Cmd.exe>
- <https://en.wikipedia.org/wiki/COMMAND.COM>
