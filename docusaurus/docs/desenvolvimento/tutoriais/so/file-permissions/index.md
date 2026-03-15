# Permissões de Arquivos

Em sistemas baseados em Unix (Linux e macOS), cada arquivo e diretório possui permissões que controlam quem pode ler, escrever ou executar aquele recurso. Entender esse mecanismo é essencial para trabalhar com a linha de comando e configurar ambientes de desenvolvimento.

## Tipos de permissão

| Símbolo | Significado | Aplicado a arquivo | Aplicado a diretório |
|---------|------------|--------------------|--------------------|
| `r` | Leitura (read) | Ler o conteúdo | Listar o conteúdo |
| `w` | Escrita (write) | Modificar o conteúdo | Criar/remover arquivos dentro |
| `x` | Execução (execute) | Executar como programa | Acessar (entrar no diretório) |

## Níveis de acesso

As permissões são definidas para três níveis:

- **Dono (user)** — o usuário proprietário do arquivo;
- **Grupo (group)** — o grupo ao qual o arquivo pertence;
- **Outros (others)** — todos os demais usuários.

## Visualizar permissões

Use `ls -l` para ver as permissões de arquivos em um diretório:

```bash
ls -l
# -rwxr-xr-- 1 usuario grupo 1024 mar 15 10:00 script.sh
#  ↑↑↑↑↑↑↑↑↑
#  │├─┤├─┤├─┤
#  │ u   g  o   (user, group, others)
#  └ tipo de arquivo (- = arquivo, d = diretório)
```

## Alterar permissões

O comando `chmod` altera permissões. Pode ser usado de forma simbólica ou numérica:

```bash
# Simbólico: adicionar permissão de execução para o dono
chmod u+x script.sh

# Numérico: rwxr-xr-- = 754
chmod 754 script.sh
```

## Veja também

- [Permissões em Arquivos — Wiki UFPR](https://web.archive.org/web/20241229191033/https://wiki.inf.ufpr.br/maziero/doku.php?id=unix:permissoes_em_arquivos)
