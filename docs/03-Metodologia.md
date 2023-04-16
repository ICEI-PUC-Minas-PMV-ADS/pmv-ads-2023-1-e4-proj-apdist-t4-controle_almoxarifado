
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

### Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

### Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)


## Gerenciamento de Projeto

### Divisão de Papéis

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:

- Hugo Kioshi - Desenvolvedor

- Luiz Felipe – Desenvolvedor  

- Naiara Mafra – Design e Desenvolvedor 

- Samuel Fonseca - Product Owner e Desenvolvedor 

- Thiago Fraga - Scrum Master e Desenvolvedor


Para organização e distribuição de tarefas do projeto, utilizaremos o Project do GitHub estruturado da seguinte forma: 

- `Backlog`: Nessa parte fica todas as tarefas que vão ser desenvolvidas no projeto. Novas tarefas serão direcionada nessa parte. 

- `To do` (Sprint Backlog)`: São as tarefas da sprint que temos a realizar. 

- `In Progress`: Quando a tarefas foi iniciada, estando em trabalho. 

- `Done`: Quando a tarefa for finalizada.



O quadro de do grupo, no estilo "kanban", visa o acompanhamento nativo do GitHub, na visão de Projects, disponível em: https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/391, na imagem abaixo mostra como ele está no momento desta etapa.

![Quadro Kanban](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Quadro%20Kanban%20project.png)


> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)


### Processo

Para a gerenciar as issues e asssegurar o cumprimento e responsabilidades das entregas do projeto, nossa está fazendo uso do GitHub projects, com estrutura simples, flexível para o desenvolvimento de status:

- **Documentação:** Nessa "etiqueta", há indicativo de melhorias, acréscimos nas documentações de contexto para subsequência do projeto.

- **Questionamento:** Nessa "etiqueta", há necessidade de informações, podendo ser adicionar, links e informações para auxilio.

- **Procura-se ajuda:** Nessa "etiqueta", solicita-se ajuda para item de atenção extra. 

- **Bug:** Nessa "etiqueta", há indicativos de bug e/ou problemas na aplicação.

- **Fase de teste:** Nessta "etiqueta", as tarefas iniciadas e finalizadas no processo de desenvolvimento de software, visam a validação de correto funcionamento de acordo com os requisitos especificados.

- **Concluído:** Nessa "etiqueta" Tarefas concluídas e aprovadas no teste de qualidade.

O quadro do tipo, "kanban" de processos, encontra-se no GitHub projects, disponível em: https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/391, a seguir, temos a imagem para visualização:

![]()
 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

# Ferramentas

A seguir temos as ferramentas empregadas no projeto: 

- **Editor de Código:** O editor de código escolhido foi o _Visual Studio_ pela integração com outras ferramentas utilizadas no projeto como _GitHub_ e o _NoSQL Server_.
- **Ferramentas de comunicação:** A ferramenta de comunicação escolhida foi o _Microsoft Teams_ devido à facilidade de comunicação, reuniões em vídeo, compartilhamento de arquivos.
- **Ferramentas de desenho de tela (wireframing):** A ferramenta escolhida para a elaboração dos wireframes foi o _Figma_. A escolha se deu dado a sua capacidade de geração de wireframes interativos detalhados.
- **Ferramentas de elaboração de diagramas:** Para a elaboração dos diversos diagramas do projeto (diagramas de fluxo, diagramas de classes, modelo ER e esquema relacional), a ferramenta _Lucidchart_ foi escolhida visando praticidade e versatilidade,permitindo  aos usuários colaborar visualmente no desenho, revisão e compartilhamento de gráficos e diagramas e melhorar processos, sistemas e estruturas organizacionais na elaboração de diagramas de diversos tipos.
- **Ferramentas de controle de versão:** A ferramenta de controle de versão escolhida foi o _Git_, cuja utilização se deu através da integração com o editor de código _Visual Studio_, para a hospedagem do repositório será utilizado o _GitHub_. Essa escolha foi feita devido à robustez dessas ferramentas e a familiaridade dos membros da equipe com as elas.
- **Ferramenta de gerenciamento de projeto:** A ferramenta _Github projects_ foi escolhida para a organização e distribuição das tarefas seguindo o modelo Scrum, conforme descrito na subseção “Processo”. A ferramenta foi escolhida dada sua facilidade de uso e sua compatibilidade com a metodologia Scrum, com diversos materiais disponíveis sobre sua integração com esta.


> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Visual studio](https://visualstudio.microsoft.com/)
> - [Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software)
> - [Figma](https://www.figma.com/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Git](https://git-scm.com/)
> - [Github](https://github.com/)
