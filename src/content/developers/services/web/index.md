# Web

<!-- escolher um dos dois estilos de botão (flat ou for-the-badge) a seguir -->

<!-- flat -->
[![Repositório Aplicação Web][github-web-application-icon]][github-web-application-href]

[github-web-application-icon]: https://img.shields.io/badge/Ladesa--Ro/Web-black?style=flat&logo=GitHub&logoColor=white&labelColor=black&color=white
[github-web-application-href]: https://github.com/ladesa-ro/web

---

<!-- for-the-badge -->
[![Static Badge](https://img.shields.io/badge/GitHub-Ladesa--Ro/Web-black?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=black&color=white)](https://github.com/ladesa-ro/web)


<!-- ::: info GitHub
Veja o repositório no GitHub.
::: -->

A Aplicação Web consiste na interação entre dois sistemas: SISGHA e SISGEA.



## Ambientes

| Estágio         | Devops                                                       | URL                                                      |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| Produção        | [![CI: Production][action-ci-prod-src]][action-ci-prod-href] | `não disponível`.                                        |
| Desenvolvimento | [![CI: Development][action-ci-dev-src]][action-ci-dev-href]  | <https://luna.sisgha.com/>; <https://dev.ladesa.com.br/> |

## Configuração Local

### Obter o código fonte do projeto

```bash
git clone https://github.com/ladesa-ro/web.git
cd web
```

### Instalar as dependências do projeto

```bash
npm install
```

### Iniciar servidor de desenvolvimento local

Comece o servidor de desenvolvimento em [`http://localhost:3000`](http://localhost:3000):

```bash
npm run dev
```

## Colaboradores

- Anna Isabela B. Pontuschka
- Danilo Pereira Escudero
- Gabriel Guedes
- Gabriel R. Antunes
- Iury Fim da Silva
- Kauan Marques
- Vitor Melo

<!-- Badges -->

<!-- Badges / Actions / Production  -->

[action-ci-prod-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/web/ci.yml?style=flat&logo=github&logoColor=white&label=CI@production&branch=production&labelColor=18181B
[action-ci-prod-href]: https://github.com/ladesa-ro/web/actions/workflows/ci.yml?query=branch%3Aproduction

<!-- Badges / Actions / Development  -->

[action-ci-dev-src]: https://img.shields.io/github/actions/workflow/status/ladesa-ro/web/ci.yml?style=flat&logo=github&logoColor=white&label=CI@development&branch=main&labelColor=18181B
[action-ci-dev-href]: https://github.com/ladesa-ro/web/actions/workflows/ci.yml?query=branch%3Amain
