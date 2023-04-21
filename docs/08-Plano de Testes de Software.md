# Plano de Testes de Software (API)

Nesta fase o plano de testes de software será dividido em três partes a seguir: teste de API, teste de integração de API/Front-end e API/Mobile, além do teste final cujo objetivo será avaliar o funcionamento integral do sistema distribuido como um todo. No teste de API, serão avaliadas as funcionalidades relacionadas à criação, atualização, recuperação e exclusão de dados das classes implementadas de acordo com o quadro abaixo.
Obs: Para a realização do teste o banco de dados foi "limpo".

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>


|Caso de Teste | CT -1 Criação de Fornecedor |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|**Requisitos Associados** |RF-008 - Gereciamento de Fornecedor |
|**Objetivo do Teste** | Avaliar funcionalidade de criação de fornecedor. |
|**Passos** | 1) Acessar a ferramenta de testes <br>2) Informar a URL: https://localhost:7163/api/fornecedores e o método POST <br>3) Como elemnto JSON, preencher os atributos.<br>4) Clicar no botão Send. |
|**Critérios de Êxito** | Será exibido no formato JSON o fornecedor criado, com os atributos preenchidos e o código 201 |

|Caso de Teste | CT -2 Atualização de Fornecedor |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|**Requisitos Associados** |RF-008 - Gereciamento de Fornecedor |
|**Objetivo do Teste** | Avaliar funcionalidade de atualização de dados do fornecedor. |
|**Passos** | 1) Acessar a ferramenta de testes <br>2) Informar a URL: https://localhost:7163/api/fornecedores/id e o método PUT <br>3) Como elemnto JSON, alterar os atributos (exceto Id).<br>4) Clicar no botão Send. |
|**Critérios de Êxito** | Será exibido no formato JSON o fornecedor criado, com os atributos alterados e o código 204 |

|Caso de Teste | CT -1 Exclusão de Fornecedor |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|**Requisitos Associados** |RF-008 - Gereciamento de Fornecedor |
|**Objetivo do Teste** | Avaliar funcionalidade de criação de fornecedor. |
|**Passos** | 1) Acessar a ferramenta de testes <br>2) Informar a URL: https://localhost:7163/api/fornecedores e o método POST <br>3) Como elemnto JSON, preencher os atributos.<br>4) Clicar no botão Send. |
|**Critérios de Êxito** | Será exibido no formato JSON o fornecedor criado, com os atributos preenchidos e o código 201 |

|Caso de Teste | CT -1 Recuperação de Fornecedor |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|**Requisitos Associados** |RF-008 - Gereciamento de Fornecedor |
|**Objetivo do Teste** | Avaliar funcionalidade de recuperação de dados dos fornecedores criados (GETALL). |
|**Passos** | 1) Acessar a ferramenta de testes <br>2) Informar a URL: https://localhost:7163/api/fornecedores e o método GET <br>3) Clicar no botão Send. |
|**Critérios de Êxito** | Será exibido no formato JSON com todos os fornecedores criados o código 200 |

|Caso de Teste | CT -1 Recuperação de Fornecedor |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|**Requisitos Associados** |RF-008 - Gereciamento de Fornecedor |
|**Objetivo do Teste** | Avaliar recuperação de dados de um único fornecedor de acordo com o ID (GETID). |
|**Passos** | 1) Acessar a ferramenta de testes <br>2) Informar a URL: https://localhost:7163/api/fornecedores/id e o método GET <br>3) Clicar no botão Send. |
|**Critérios de Êxito** | Será exibido no formato JSON com o fornecedor correspondente código 200 |


|Caso de Teste |CT-002 – Criação de Item |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|**Requisitos Associados** |RF-004 - Gereciamento de produtos |
|**Objetivo do Teste** | Avaliar funcionalidade de criação de produto. |
|**Passos** | 1) Acessar a ferramenta de testes <br>2) Informar a URL: https://localhost:7163/api/ e o método POST <br>3) Como elemnto JSON, preencher os atributos e assossiar o ID do fornecedor já criado. <br>4) Clicar no botão Send. |
|**Critérios de Êxito** | Será exibido no formato JSON o fornecedor criado, com os atributos preenchidos e o código 201 |


|Caso de Teste |CT-005 – Criação de Usuário |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|**Requisitos Associados** |RF-004 - Gereciamento de Usuários|
|**Objetivo do Teste** | Avaliar funcionalidade de criação de usuário. |
|**Passos** | 1) Acessar a ferramenta de testes <br>2) Informar a URL: https://localhost:7163/api/usuarios e o método POST <br>3) Como elemnto JSON, preencher os atributos. <br>4) Clicar no botão Send. |
|**Critérios de Êxito** | Será exibido no formato JSON o fornecedor criado, com os atributos preenchidos e o código 201 |




 
## Ferramentas de Testes (Opcional)

Para a realização dos testes, foram utilizadas as ferramentas Postman e Insonnia. 
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
