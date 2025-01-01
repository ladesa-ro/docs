# Plataformas de Execulção

## Plataformas Interpretadas

As plataformas interpretadas possuem a característica de depender somente de um interpretador e do código-fonte a ser executado. Sendo assim, nenhum artefato é construído a partir do código-fonte, sendo esse lido e processado diretamente pela _máquina virtual_ da plataforma escolhida.

Você pode já ter visto algum os seguintes comandos:

```sh
node main.js
```

```sh
python main.py
```

```sh
ruby main.rb
```

```sh
php -f index.php
```

É caso de linguagens como PHP, JavaScript, Ruby, Python, dentre várias outras.

O que estamos fazendo com os comandos anteriores é utilizar um outro programa que roda sobre o sistema operacional nativo, sendo responsável por lidar com a correta execução dos códigos fornecidos.

### Shebang

Os sistemas operacionais baseados em Unix suportam uma estratégia chamada [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>). Com ela, é possível "chamar" o arquivo de código-fonte diretamente na linha de comando, sem precisar indicar o comando do interpretador diretamente:

```bash
./main.js
```

:::: details Como fazer

Para isso funcionar, duas coisas são necessárias:

1 - A primeira linha **deve** iniciar com `#!`. Logo em seguida, deve ser informado o binário que irá processar o restante do arquivo.

```js
#!/usr/bin/env node
console.log("Hello, world!");
```

2 - O arquivo deve possuir a [permissão](../tutorials/os/file-permissions/index.md) de execução.

```bash
chmod +x ./main.js
```

Assim, é possível executar `./nome-do-arquivo` diretamente pela linha de comando.

::::

## Plataformas Compiladas

Algumas plataformas de programação necessitam de uma etapa a qual o código-fonte escrito pelos desenvolvedores seja transformado para um artefato que a máquina entenda e possa executar.

Quando um projeto é _buildado_, apenas o necessário é incluído, e coisas como _ferramentas de inspeção_ e _recarregamento instantâneo (hot reload)_ são quase sempre removidas.

Dessa forma, o artefato final fica muito mais leve e requer menos recursos do que quando executado em um [Ambiente de Desenvolvimento](./environments.md).
