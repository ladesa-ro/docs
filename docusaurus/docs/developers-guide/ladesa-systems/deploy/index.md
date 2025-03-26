---
sidebar_position: 1
---

# Vamos Implantar

Olá, caro dev! Essa é a parte mais esperada por qualquer desenvolvedor: publicar o sistema e deixá-lo acessível para uso.

Esse processo é conhecido como deploy, que, em português, significa "implantar". Ele envolve etapas fundamentais, como realizar o _build_ da aplicação, empacotá-la, distribuí-la e executá-la em ambientes como o de produção, homologação ou até desenvolvimento, dependendo da necessidade.

## Ambientes

Falando em ambientes, é importante entender que os sistemas coexistem em diferentes configurações e são isolados entre si para garantir estabilidade e qualidade:

- **Ambiente de Desenvolvimento**: onde os programadores realizam testes e mudanças diretamente no código.
- **Ambiente de Homologação (ou staging)**: onde as funcionalidades são validadas por pessoas que não fazem parte do desenvolvimento, aproximando-se das condições reais de uso.
- **Ambiente de Produção**: o destino final, onde o sistema é disponibilizado aos usuários finais com alta segurança e confiabilidade.

Com essa organização, conseguimos proteger os usuários finais de problemas que possam surgir durante as etapas de desenvolvimento e validação.

Saiba mais em nossa seção sobre [Ambientes](../../tutorials/environments.md).

## Plataformas de Execução

Além dos ambientes, é importante compreender as plataformas nas quais o sistema será executado. Existem dois tipos principais:

- **Plataformas Interpretadas**: dependem de um interpretador que processa o código-fonte diretamente. Exemplos incluem linguagens como PHP, Python, JavaScript e Ruby. Para rodar um programa, utilizamos comandos como:

  ```bash
  node main.js
  python main.py
  ruby main.rb
  php -f index.php
  ```

- **Plataformas Compiladas**: requerem uma etapa de compilação, na qual o código-fonte é transformado em um artefato pronto para execução. Isso resulta em um sistema mais leve e eficiente, pois inclui apenas o necessário para a produção, sem ferramentas adicionais usadas durante o desenvolvimento, como inspeção ou recarregamento instantâneo (_hot reload_).

  ```bash
  gcc main.c -o programa
  ```

  ```bash
  ./programa
  ```

Saiba mais em nossa seção sobre [Plataformas de Execução](../../tutorials/source-code/runtime-platforms.md).

---

Pronto para implantar? Vamos nessa!
