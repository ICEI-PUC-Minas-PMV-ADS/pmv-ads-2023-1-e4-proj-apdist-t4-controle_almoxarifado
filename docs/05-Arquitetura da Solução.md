# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Diagrama%20em%20branco.png" width=800 height=750 />

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
 <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-apdist-t4-controle_almoxarifado/blob/main/docs/img/Diagrama%20em%20branco%20(1).png" width=700 height=650/>

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

O Serviço de Aplicativo do Azure fornece um serviço de hospedagem na Web altamente escalonável atualmente será utilizado.
### Azure SQl Database
### Microsoft Azure Cosmos DB
### Azure API Management
### Azure Firewall


## Qualidade de Software
Qualidade de Software seguira normas segundo Pressman que são relacionadas a
Funcionalidade, Confiabilidade,Usabilidade, Eficiência, Manutenibilidade e Portabilidade.

### Funcionalidade:
Um conjunto de atributos que satisfazem necessidades implícitas e explícitas.
Os subconjuntos de requisitos de qualidade funcionais são:
- adequabilidade;
- exatidão;
- interoperabilidade;
- conformidade;
- segurança.


### Confiabilidade:
Um conjunto de atributos relacionados à capacidade do
software de manter seu nível de desempenho, conforme as condições estabelecidas
por um período de tempo estabelecido.
Subconjuntos de requisitos de qualidade de confiabilidade são:
- maturidade;
- tolerância a falhas;
- capacidade de recuperação.


### Usabilidade:
Um conjunto de atributos relacionados ao esforço para usar o
software ou na avaliação individual de tal uso, por um ou mais usuários.
Subconjuntos de requisitos de qualidade de usabilidade são:
- facilidade de entendimento;
- facilidade de aprendizagem;
- facilidade de operação.


### Eficiência:
Um conjunto de atributos que dizem respeito à relação entre o
nível de desempenho do software e à quantidade de recursos usada, sob condições
estabelecidas.
Subconjuntos de requisitos de qualidade de eficiência são:
- comportamento do tempo;
- comportamento de recursos.

### Facilidade de manutenção:
Um conjunto de atributos relacionados ao
esforço necessário para realizar modificações específicas.
Subconjuntos de requisitos de qualidade de facilidade de manutenção são:
- facilidade de análise;
- facilidade de mudança;
- estabilidade;
- facilidade de teste.

### Portabilidade:
Um conjunto de atributos de software relacionados à
habilidade do software ser transferido de um ambiente para outro.
Subconjuntos de requisitos de qualidade de portabilidade são:
- capacidade de adaptação;
- facilidade de instalação;
- nível de conformidade;
- facilidade de substituição
