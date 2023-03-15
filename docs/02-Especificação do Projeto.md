# Especificações do Projeto

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
|Julia Reis |Compartilhar minha opinião acerca do profissional que contratei.| Mostrar para todos se de fato ele é bom como todos acreditam que seja. |
|Julia Reis |Poder negociar o preço com o prestador em uma conversa aberta e interativa. |Garantir o melhor negócio para ambas as partes.|
|Alberto Souza |Receber informações pessoais do cliente quando fecharmos o serviço. |Ter a segurança de que voltarei para a minha família sem problemas.|
| Mateus Kalliope |Poder gerir minha agenda de serviços. |Conseguir atender todos os clientes da melhor forma e dentro do prazo.|
|Alberto Souza |Ter controle do fluxo dos produtos |Facilitar o entendimento do que é mais necessário junto aos fornecedores|


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir que os usuários se cadastrem na plataforma | ALTA | 
|RF-002| O site deve permitir que os usuários façam login/ logout  | ALTA |
|RF-003| O site deve possuir filtros para parametrizar a busca |MÉDIA |
|RF-004| O site deve permitir o gerenciamento de produtos do almoxarifado  | ALTA |
|RF-005| O site deve permitir que os usuários tenham uma área de grenciamento de dados pessoais |MÉDIA |
|RF-006| O site deve permitir a geração de relatórios | BAIXA | 
|RF-007| O site deve permitir o gerencimaento de fornecedores | BAIXA | 


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada | BAIXA |
|RNF-003| O site deve ter um design simples e autoexplicativo, com bom nível de contraste entre os elementos da tela em conformidade | BAIXA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Safari) | MÉDIA |
|RNF-005| O site deve estar acessível 24/7 | MÉDIA | 
|RNF-006| O site deve testar a segurança e veracidade do usuário |  ALTA | 
|RNF-008| O site deve estar em conformidade com a LGPD | ALTA | 
|RNF-008| O sistema deve funcionar de forma distribuida, ficando acessivel nos formatos weB e mobile | ALTA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.
|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|O projeto deverá ser entregue no final do semestre letivo.|
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.|
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.|
|04| O projeto não deve ser feito por um único indivíduo.|
|05| As decisões pertinentes ao projeto devem ser tomadas por mais de 50% do grupo.|
|06| O projeto deve estar em conformidade com as leis vigentes.|

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

A partir da utilização da ferramenta acima, o projeto terá início em fevereiro, sendo finalizado em junho de 2023. O trabalho foi dividido em cinco etapas, sendo a primeira responsável epla definição do escopo do projeto, levantamento de requisitos e definição do plano de trabalho. Para a segunda, a implementação da API em C#, e as duas etapas seguintes a contrução das interfaces web e mobile, além da testagem dos sistemas junto à API. Na última etapa, pretende se realizar a entrega final do projeto, correções, documentação e discussão de possíveis melhorias. 

![Gráfico de Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/Gantt%20chart%20(1).png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

Para o projeto em destaque foi orçado com base nos gastos com pessoal e estrutura (serviços, equipamentos e licenças) para pleno funcionamento das atividades, além do item outros serviços que tem por objetivo cobrir urgências e compromissos não previstos inicialmente.

![[Orçamento](img/02-orcamento.png)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/tabela.png)
