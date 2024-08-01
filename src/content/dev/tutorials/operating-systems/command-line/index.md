# Linha de Comando

O propósito deste tutorial é que você conheça e esteja ambientado a utilizar uma _Linha de Comando_.

<video title="Captura de Tela do _Emulador de Terminal_ Konsole com o _interpretador de shell_ GNU bash no sistema operacional GNU/Linux Manjaro." controls loop muted autoplay style="width: 100%; aspect-ratio: 53/28;">
  <source src="/assets/dev-tutorials-command-line/terminal-emulator-konsole-with-bash.mp4" type="video/mp4" />
</video>

:::tip Nós somos quem escolhemos ser... Por isso, escolha!
Você verá que a Linha de Comando é um recurso muito poderoso, pois permite a instrução de comandos para
o sistema operacional por meio da entrada textual.
:::

## Emulador de Terminal

Um Emulador de Terminal permite o envio de comandos textuais para um _interpretador_.

### Obter um Emulador de Terminal

<PluginTabs style="text-wrap: nowrap;" sharedStateKey="operatingSystem">
<PluginTabsTab label="Windows" icon="seti:windows">

O sistema operacional _Windows_ conta com o _Prompt de Comando_ (CMD) e o _PowerShell_ disponíveis por padrão nas versões mais recentes dessa plataforma. Há também o software _Windows Terminal_, criado pela Microsoft, que desempenha o papel de _emulador de terminal_.

---

> TODO: inserir foto do Windows Terminal + Prompt de Comando.

![Windows Terminal e Prompt de Comando](/assets/dev-tutorials-command-line/windows-terminal-cmd.png)

---

| Projeto            | Janela visual                                | Interpreta comandos                          | Instalado por padrão                         |
| ------------------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| _CMD_              | <Badge text="Sim" variant="success"></Badge> | <Badge text="Sim" variant="success"></Badge> | <Badge text="Sim" variant="success"></Badge> |
| _PowerShell_       | <Badge text="Sim" variant="success"></Badge> | <Badge text="Sim" variant="success"></Badge> | <Badge text="Sim" variant="success"></Badge> |
| _Git Bash_         | <Badge text="Sim" variant="success"></Badge> | <Badge text="Sim" variant="success"></Badge> | <Badge text="Não" variant="note"></Badge>    |
| _Windows Terminal_ | <Badge text="Sim" variant="success"></Badge> | <Badge text="Não" variant="note"></Badge>    | <Badge text="Não" variant="note"></Badge>    |

::: info Você sabia?
O CMD tem suas raizes desde o MS-DOS. Entretanto, a Microsoft tem dado maior atenção a utilização do Windows Terminal (janela) + PowerShell (interpretador).
:::

#### Windows Terminal como Emulador de Terminal <Badge text="Recomendado" variant="note"></Badge>

Recomendamos o uso do _Windows Terminal_ como _emulador de terminal_ para o sistema operacional _Windows_. A seguir, você receberá as instruções para a instalação em seu sistema.

::: tip Instalação do Windows Terminal
Para instalar o _Windows Terminal_, a _Microsoft_ recomenda a instalação oficial por meio da _Microsoft Store_, que pode ser acessada [neste link](https://aka.ms/terminal).
:::

> TODO: inserir foto do windows terminal na microsoft store.

- Instalar via _Microsoft Store_ (oficial e recomendado): [https://aka.ms/terminal](https://aka.ms/terminal).

::: info Curiosidade
Segundo a desenvolvedora, esse programa conta com "_várias guias, painéis, suporte a caracteres Unicode e UTF-8, um mecanismo de renderização de texto acelerado por GPU e temas, estilos e configurações personalizados_".
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

- <https://en.wikipedia.org/wiki/Comparison_of_command_shells>
- <https://pt.wikipedia.org/wiki/PowerShell>
- <https://en.wikipedia.org/wiki/Command-line_interface>
- <https://pt.wikipedia.org/wiki/Cmd.exe>
- <https://en.wikipedia.org/wiki/COMMAND.COM>
