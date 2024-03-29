# Especificações do Problema

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local de trabalho e por meio de sugestões. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

| Julia Reis    |                                    |                |                  |              
|--------------------|------------------------------------|----------------------------------------|----------------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/PERSONA%2001.jpg)|**Idade:** 24 anos |**Ocupação:** Gestora de linha produtiva em empresa de eletrodomésticos.|**Aplicativos:** Instagram, Facebook, Twitter, Pinterest, LinkedIn|
|**Motivações:** Quer ter maior controle da linha de produção e insumos utilizados.|**Frustrações:** Embora esteja se programando, tem sido ineficiente no acompanhamento da linha produtiva.|**Hobbies, História:** Adora ler e passear com seu pet, meditar e busca ajudar e incentivar mulheres a se recolocar no mercado.|

| Alberto Souza   |                                    |                |                 |               
|--------------------|------------------------------------|----------------------------------------|----------------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/PERSONA%2002.jpg)|**Idade:** 41 anos|**Ocupação:** Auxiliar de Almoxarifado|**Aplicativos:** Facebook, Instagram e LinkedIn|
|**Motivação:** Gosta de manter produtos e itens organizados e de fácil acesso aos demais colaboradores da empresa.|**Frustrações:** Não consegue lidar de forma eficiente com grandes fluxos de entrada e saída e itens do almoxarifado, causando gargalo de requisições.|**Hobbies, História:** Atua no mercado há mais de 5 anos e tem vasto conhecimento, gosta de viajar com a família, mas não tem conseguido ultimamente.|

| Mateus Kalliope  |                                    |                |                  |              
|--------------------|------------------------------------|----------------------------------------|----------------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/PERSONA%2003.jpg)|**Idade:** 63 anos|**Ocupação:** Proprietário de Micro empresa.|**Aplicativos:** Facebook, Instagram, Twitter e LinkedIn|
|**Motivação:** Quer ver sua empresa crescer e alcançar novos mercados.|**Frustrações:** Embora empresa esteja indo bem, não tem boa gestão de insumos e gastos.|**Hobbies, História:** Adora Estudar, investidor Cripto.|

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| Quero/Desejo `O QUE` |PARA ... `POR QUE` |
|--------------------|------------------------------------|----------------------------------------|
|Julia Reis | Organizar as informações em um único lugar| Dimininuir a papelada e fazer uso de um único meio para gerir o almoxarifado|
|Julia Reis | Listar os fornecedores. | Saber quem são as empresas/ indivíduos que participam do processo.|
|Alberto Souza | Possibilitar que funcionários sejam autonomos o gestão dos processos. | Democratizar e agilizar a gestão dos processos.|
| Mateus Kalliope |Gerar documentação do que entrou e saiu no almoxarifado. | Gear conhecimento do que é mais necessário e tomar decisões mais assertivas.|
|Alberto Souza |Ter controle do fluxo dos produtos |Facilitar o entendimento do que é mais necessário junto aos fornecedores|


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente uma empresa quando deseja fazer um controle de estoque ela considera recorrer a uma planilha no Excel ou fazer busca na internet aonde é possível encontrar diversos tipos de planilhas, mas na maioria das vezes acaba se fustando por não entrar uma planilha do seu nincho 100% editavel de acordo suas demandas. Pensando nisso desenvolvemos este projeto para que as empresas obtenham o controle em tempo real das entradas e saídas do seu estoque. 

### Descrição Geral da Proposta

É uma aplicação especializada no controle de estoque, o projeto foi desenvolvido, onde o objetivo é o próprio usuário conseguir visualizar com mais clareza o estoque de sua empresa. Podendo obter relatorios, verificar entradas e saídas e etc. 

### Processo 1 – MODELAGEM AS IS

Atualmente o processos funcionam assim, sem realizar nenhuma análise crítica e sem discutir se o processo está bom ou ruim. 

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Modelagem%20do%20Processo%20de%20Neg%C3%B3cio%2001.jpeg)

### Processo 2 – MODELAGEM TO BE 

Este exemplo representa um processo mapeado sob a perspectiva da automação, em que o processo será executado e controlado através de um BPMS. O envio do email para o solicitante é enviado automaticamente pelo sistema.

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Modelagem%20do%20Processo%20de%20Neg%C3%B3cio%2002.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

|Indicador|	Objetivos|	Descrição| Cálculo|	Fonte dados | Perspectiva|
|---------|------------------------------------------------|--------------------------------------------------------------------|--------|--------|--------|
|Cadastros de usuários|	Avaliar a aceitação do aplicativo |	 Medir a aceitação do aplicativo atráves da quantidade de cadastros de novos usuários |Percentual de novos usuários  | Tabela de cadastro de usuários  | Clientes  |
|Cadastros de Produto|	Avaliar aceitação do aplicativo entre os responsaveis  |	 Medir a aceitação do aplicativo atráves da quantidade de novos produtos  | Percentual de novos produtos  | Tabela de cadastro de estoque  | Clientes  |
|Percentual de Reclamações|	Avaliar quantidades de avaliações negativas da aplicação|	 Calcular a quantidade de avaliações negativas para o aplicativo por usuários  | Percentual de feedbacks negativos pelo total  | Dados da play store  | Processos Internos  |
|Índice de avalição dos usuários|	Verificar a aceitação do aplicativo móvel |	 Número de estrelas | Medir a média das avaliações | Play Store e Apple Store | Qualidade do produto  |
|Taxa de download do aplicativo|	Verificar a quantidade de downloads do aplicativo|	 Avaliar a quantidade de pessoas que baixaram e utilizaram | Número de downloads | Play Store e Apple Store  | Processos Internos  |
|Número de acessos ao site|Verificar a quantidade de pessoas que acessam a versão Web|	 Avaliar a quantidade de acessos | Acessos únicos | Web Analytics  | Processos Internos  |


Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir que os usuários se cadastrem na plataforma | ALTA | 
|RF-002| A aplicação  deve permitir que os usuários façam login/logout  | ALTA |
|RF-003| A aplicação deve permitir que o usuário faça consultas |MÉDIA |
|RF-004| O app deve permitir o gerenciamento de produtos do almoxarifado | ALTA |
|RF-005| O webaplicativo deve permitir que os usuários tenham uma área de gerenciamento de dados pessoais |MÉDIA |
|RF-006| A aplicação dever permitir que o usuário gere relatório de contabilidade | BAIXA | 
|RF-007| A aplicação deve permitir que o admnistrador consulte e gere relatórios gerenciais | BAIXA | 
|RF-008| A aplicação deve permitir o gerenciamento de fornecedores | BAIXA | 


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | ALTA | 
|RNF-002| A aplicação deverá ser responsivo permitindo a visualização em um celular de forma adequada | BAIXA |
|RNF-003| A aplicação deve ter um design simples e autoexplicativo, com bom nível de contraste entre os elementos da tela em conformidade | BAIXA | 
|RNF-004| A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Safari) | MÉDIA |
|RNF-005| A aplicação deve estar acessível 24/7 | MÉDIA | 
|RNF-006| A aplicação deve testar a segurança e veracidade do usuário |  ALTA | 
|RNF-008| A aplicação deve estar em conformidade com a LGPD | ALTA | 
|RNF-008| A aplicaçãodeve funcionar de forma distribuida, ficando acessivel nos formatos weB e mobile | ALTA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.
|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo.|
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.|
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.|
|04| O projeto não deve ser feito por um único indivíduo.|
|05| As decisões pertinentes ao projeto devem ser tomadas por mais de 50% do grupo.|
|06| O projeto deve estar em conformidade com as leis vigentes.|

## Diagrama de Casos de Uso

Na Linguagem de modelagem unificada (UML), o diagrama de caso de uso resume os detalhes dos usuários do seu sistema (também conhecidos como atores) e as interações deles com o sistema.

Características dos Diagramas de Casos de Uso:
<br> ●Mostram um conjunto de casos de uso, atores e seus relacionamentos.
<br> ●Modelam aspectos dinâmicos do sistema.
<br> ●Proporcionam uma representação contextual do sistema (fronteira explícita).
<br> ●Indicam a forma como o sistema interage com as entidades externas (atores).

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Controle-alfa.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/MatrizdeRastreabilidade.png)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

A partir da utilização da ferramenta acima, o projeto terá início em fevereiro, sendo finalizado em junho de 2023. O trabalho foi dividido em cinco etapas, sendo a primeira responsável epla definição do escopo do projeto, levantamento de requisitos e definição do plano de trabalho. Para a segunda, a implementação da API em C#, e as duas etapas seguintes a contrução das interfaces web e mobile, além da testagem dos sistemas junto à API. Na última etapa, pretende se realizar a entrega final do projeto, correções, documentação e discussão de possíveis melhorias. 

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Project%20Alfa%20Control.PNG)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Gerenciamento%20de%20Equipe.png)

## Gestão de Orçamento

Para o projeto em destaque foi orçado com base nos gastos com pessoal e estrutura (serviços, equipamentos e licenças) para pleno funcionamento das atividades, além do item outros serviços que tem por objetivo cobrir urgências e compromissos não previstos inicialmente.

![Orçamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Gerenciamento%20de%20Custo.png)
