# PostgreSQL

PostgreSQL é um sistema gerenciador de banco de dados relacional de código aberto, conhecido por sua estabilidade, conformidade com o padrão SQL e suporte a funcionalidades avançadas como tipos de dados customizados, busca full-text e JSONB.

## Por que usamos PostgreSQL no Ladesa

O Ladesa utiliza PostgreSQL 15 como banco de dados principal do `management-service`. As razões incluem:

- **Confiabilidade:** amplamente usado em produção, desde pequenas aplicações até sistemas de grande escala;
- **Suporte a JSONB:** permite armazenar e consultar dados semi-estruturados, usado por exemplo nos campos `requisicao_gerador` e `resposta_gerador` da tabela `gerar_horario`;
- **Extensibilidade:** suporte a extensões como PostGIS, pg_trgm e outras;
- **Ecossistema maduro:** integração nativa com TypeORM (usado no backend NestJS do Ladesa).

## Como começar

### Instalação local

Consulte a documentação oficial em [postgresql.org](https://www.postgresql.org/download/) para instruções de instalação no seu sistema operacional.

### Usando com Docker

No contexto do Ladesa, o PostgreSQL é executado via Docker. Consulte a seção de [ambiente de desenvolvimento](../../../../ambiente/) para instruções de como subir os serviços localmente.

### Ferramentas de administração

- **psql** — cliente de linha de comando oficial do PostgreSQL;
- **pgAdmin** — interface gráfica web para administração;
- **DBeaver** — cliente universal de banco de dados com suporte a PostgreSQL.
