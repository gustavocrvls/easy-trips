# EasyTrips

O projeto EasyTrips foi desenvolvido numa atividade da disciplina de Sistemas Distribuidos.

## Equipe
- Gustavo Carvalho Silva

## Sobre o Backend

O backend funciona como um cliente rest, provendo funções de consulta e salvamento de
dados.

Para o backend foi utilizado três arquivos _json_:

- accommodations: salva os dados relativos à hospedagem, utilizado para os salvamentos
dos dados dos usuários;
- cities: relativo às cidades presentes no banco de dados. Os objetos cidades possuem os 
atributos *accommodation* que é relativo ao preço de hospedagem na cidade, e *tickets* que se refere 
ao preço da passagem para aquela cidade;

Essa estratégia de banco de dados foi utilizada pela necessidade do desenvolvimento
de uma base que fosse não relacional, mas em que não houvesse a necessidade de instalação de 
um banco de dados na máquina em que o servidor for executado.

As rotas presentes no sistema são:

- GET: cities: retorna todas as cidades presentes na base de dados;
- POST: tickets: adiciona um objeto com as informações de passagem na base de dados;
- POST: accommodations: adiciona um objeto com as informações de hospedagem na base de dados;

### Executar o Projeto

1. Instale as dependências:

```
  yarn
```
ou
```
  npm install
```

2. Inicie o projeto:

```
  yarn start
```
ou
```
  npm start
```
