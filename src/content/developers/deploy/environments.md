# Ambientes

O processo de desenvolvimento de um software está sujeito a muitas mudanças durante toda a sua existência, desde novas funcionalidades a alterações de coisas já existentes.

Com isso, é muito comum que um sistema pare de funcionar a qualquer momento com qualquer modificação ou apresente funcionalidades incompletas. Esse ambiente caótico não é bom para os usuários finais.

Assim, é essencial garantir a coexistência de um ambiente estável para os usuários e um ambiente dinâmico e adaptável para a equipe de desenvolvimento.

:::tip Você sabia?
Os termos _alpha_, _beta_ e _release_ são popularmente usados para indicar a qual estágio uma versão de um programa se encontra.
:::

## Ambiente de Desenvolvimento

O primeiro ambiente que aparece durante a construção de um sistema é o ambiente de desenvolvimento. Esse é o ambiente com o qual os desenvolvedores interagem diretamente.

Nele, o programador inicia o sistema em seu próprio computador de trabalho e tem controle direto sobre o código, bem como pode ver em tempo real os efeitos de suas alterações. Dessa forma, o ambiente de desenvolvimento é o único ambiente no qual as mudanças no código surtem resultados imediatos no sistema.

Mediante a separação de camadas, desenvolvedores que atuam na camada do _front-end_ precisam de uma instância da camada de _back-end_ para o desenvolvimento de suas funcionalidades. Sendo assim, o ambiente local pode depender de uma instância de outra camada que já tenha sido compilada e esteja em execução.

## Ambiente de Homologação (ou staging)

A partir do momento em que uma funcionalidade esteja minimamente viável para a utilização, é comum que esses recursos sejam testados e validados antes de serem distribuídos aos usuários finais.

O recomendado é que, neste estágio, o sistema seja utilizado por pessoas que não fizeram parte do desenvolvimento. Aqui, quase sempre os bugs são identificados, pois os usuários não tem total conhecimento do fluxo que o desenvolvedor projetou.
Isso ocorre porque o desenvolvedor sempre sabe o fluxo correto que determinada funcionalidade atua. Entretanto, fluxos alternativos podem resultar em comportamentos indesejados, nos quais os utilizadores que não conhecem a fundo o sistema acabam deparando com maior facilidade.

Sendo assim, o Ambiente de Homologação deve aproximar ao máximo as mesmas caracterísicas do Ambiente de Produção, para que tudo funcione da mesma forma em que se espera chegar aos usuários finais.

## Ambiente de Produção (ou production)

Após o processo de desenvolvimento e de homologação - que inclui testes e validação de funcionalidades -, está na hora de disponibilizar o sistema aos usuários finais.

O Ambiente de Produção deve estar preparado para lidar com uma grande carga de trabalho, visto que a quantidade de utilizadores finais pode ser variável.

Aqui, o acesso aos recursos é mais restrito: o banco de dados tem seu acesso protegido e algoritmos de criptografia seguros (como o HTTPS) devem ser obrigatórios.
