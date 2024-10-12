# Boas vindas ao repositório do projeto ES6 Testes Unitários!

Projeto desenvolvido como requisito parcial para a conclusão do módulo Fundamentos do Desenvolvimento Web do curso de Desenvolvimento Web da Trybe. Este projeto tem como objetivo colocar em prática os conhecimentos e habilidades adquiridos com escrita de **testes unitários** para funções em **JavaScript**, conforme requisitos descritos a seguir. Para isso, utiliza-se o módulo **Assert** do **NodeJS** para validar o funcionamento adequado destas funções. Ademais, a partir de testes já implementados, também são implementadas funções que atendam aos requisitos dos testes propostos. Em resumo, a ideia central é utilizar uma abordagem de **desenvolvimento orientado a testes** (**Test Driven Development - TDD**)
 
---

## SUMÁRIO

- [Habilidades](#habilidades)
- [Data de entrega](#data-de-entrega)
- [Requisitos do projeto](#requisitos-do-projeto)
- [Lista de requisitos](#lista-de-requisitos)
  - [Implemente a função average](#implemente-a-função-average)
  - [Implemente os casos de teste para a função numbers](#implemente-os-casos-de-teste-para-a-função-numbers)
  - [Implemente a função vqv](#implemente-a-função-vqv)
  - [Implemente os casos de teste para a função circle](#implemente-os-casos-de-teste-para-a-função-circle)
  - [Implemente a função createStudent](#implemente-a-função-createStudent)
  - [Implemente os casos de teste para a função productDetails](#implemente-os-casos-de-teste-para-a-função-productDetails)
  - [Implemente a função objCalculator](#Implemente-a-função-objCalculator)
  - [Implemente a função myCounter](#implemente-a-função-myCounter)
  - [Implemente os casos de teste e a função createMenu](#implemente-os-casos-de-teste-e-a-função-createMenu)

---

## Habilidades

Nesse projeto, são trabalhadas as seguintes habilidades:

- Escrita de testes unitários para funções utilizando o módulo Assert do NodeJS para verificar o correto funcionamento dessas funções;
- A partir de testes já implementados, escrita de funções de forma que elas atendam aos testes propostos;
- Escrita de testes e funções utilizando uma abordagem de desenvolvimento orientado a testes (Test Driven Development - TDD).

---

## Data de entrega

  - Projeto individual;

  - Foi um dia de projeto;

  - O projeto tem até a seguinte data: `02/04/2021 - 14:00h` para ser entregue a avaliação final.

---

## Requisitos do projeto

Este repositório contém um _template_ de uma aplicação **NodeJS** (observe a existência do arquivo _package.json_).
Após clonar o projeto e instalar as dependências, você não precisará realizar nenhuma configuração adicional.
Todos os arquivos estritamente necessários para finalizar o projeto já estão criados, **não** sendo necessária a criação de outros arquivos.
Você deverá completar as funções e testes unitários de forma a satisfazer os requisitos listados na seção **Lista de requisitos**.

As funções a serem implementadas estão dentro da pasta `src` e seus respectivos testes estão na pasta `tests`.
O nome dos arquivos também seguem uma ordem definida. Basicamente, os arquivos de teste possuem o nome do arquivo alvo (arquivo da funcionalidade) acrescido do nome `.spec.js`.
Existirá um arquivo `src/exemplo.js` que conterá a implementação de uma função e um arquivo `tests/exemplo.spec.js` com os testes unitários referentes à função presente no arquivo `src/exemplo.js`.

Cada função possui um bloco de comentários em suas primeiras linhas explicando qual é o trabalho que a função deve realizar.

Você só deve alterar os arquivos indicados nos requisitos. **Os arquivos que não estão indicados nos requisitos não devem ser alterados, ou sua avaliação poderá ser comprometida.**

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório. Este _Pull Request_ deverá conter a implementação dos arquivos solicitados abaixo.

**⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️**. Apesar de não ser necessário para ser aprovado no projeto, você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure o time de instrução.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

### Durante o desenvolvimento

 ⚠ **PULL REQUESTS COM ISSUES NO ESLINT NÃO SERÃO AVALIADOS, ATENTE-SE PARA RESOLVÊ-LOS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

* Nos testes unitários que não estão implementados, vocês verão um `assert.fail();`. Esse código deve ser removido a partir do momento que vocês começarem a escrever o teste unitário. Ele só existe para fazer o teste falhar. Se o `assert.fail();` não estivesse nos blocos em que não há testes unitários implementados ainda, o teste iria passar com sucesso, pois não haveria nada para ser testado dentro.

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  6. `npm test` _(executa todos os testes presentes na aplicação)_
  7. `npm test path/to/file` _(executa apenas os testes presentes no arquivo path/to/file)_
    * exemplo: `npm test tests/average.spec.js`
  8. `jest path/to/file` _(executa apenas os testes presentes no arquivo path/to/file)_
    * exemplo: `jest tests/average.spec.js`

### ESLint

Seu projeto só será avaliado se estiver passando pelos _checks_ do **ESLint**.

---

### Lista de requisitos

### 1 - Implemente a função `average`

A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.  

### 2 - Implemente os casos de teste para a função `numbers`

 A função `numbers` recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário. Essa função já está implementada no arquivo `src/numbers.js`. Escreva os testes para essa função para garantir que a implementação de `numbers` está correta.

### 3 - Implemente a função `vqv`

Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

```javascript
`'Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!'`
```

Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

### 4 - Implemente os casos de teste para a função `circle`

A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência). Se não for especificado um raio, a função retorna `undefined`. Essa função já está implementada no arquivo `src/circle.js`. Escreva os testes para essa função para garantir que a implementação de `circle` está correta.

### 5 - Implemente a função `createStudent`

A função `createStudent` recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.
O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

### 6 - Implemente os casos de teste para a função `productDetails`

A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:

```javascript
productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
```

Essa função já está implementada no arquivo `src/productDetails.js`. Escreva os testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

### 7 - Implemente a função `objCalculator`
Desenvolva um objeto calculator que possui quatro chaves:
  - add;
  - mult;
  - div;
  - sub.

Para cada uma delas atribua uma função que realiza a respectiva operação. A função deve receber dois inteiros e retornar um inteiro. Os resultados das divisões devem sempre ser arredondados para baixo. O arquivo `objCalculator.spec.js` contém os testes para `objCalculator` já implementados. Implemente a função no arquivo `src/objCalculator.js` de forma que ela atenda aos testes propostos.

### 8 - Implemente a função `myCounter`
A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija a função `myCounter` para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos. 

### 9 - Implemente os casos de teste e a função `createMenu`

**Agora prepare-se! Esse último requisito vai te guiar através de um longo e rico processo de desenvolvimento orientado a testes (Test Driven Development, ou TDD). Dará trabalho, mas vale a pena!**

Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

A estrutura deste código e deste objeto já foi definida e você irá implementá-lo. Você encontrará mais detalhes sobre a estrutura a ser seguida e exemplos do retorno da função no arquivo `src/restaurant.js`. Você deverá seguir o passo-a-passo a seguir para garantir o bom desenvolvimento do sistema.

  1. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `createMenu()`, retorna um objeto que possui, mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
  2. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se, dado que a função `createMenu` foi chamada com o objeto: `{ food: {}, drink: {} }`, checa se `'objetoRetornado.fetchMenu()'` retorna um objeto cujas chaves são somente `food` e `drink`.
  3. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se o menu passado pra função `createMenu` é identico ao menu recuperado pela função `'objetoRetornado.fetchMenu()'`.
  4. No arquivo `src/restaurant.js`, crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: `{ fetchMenu: () => objetoPassadoPorParametro }`.
  5. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se `'objetoRetornado.consumption'`, após a criação do menu, retorna um array vazio.
  6. No arquivo `src/restaurant.js`, adicione ao objeto retornado por `createMenu` uma chave `consumption` que, como valor inicial, tem um array vazio.
  7. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption`
  8. No arquivo `src/restaurant.js`, crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro, adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função à chave `order`.
  9. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
  10. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
  11. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`.
  12. No arquivo `src/restaurant.js`, adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que varre todo os itens de `objetoRetornado.consumption`, soma o preço de todos checando-os no menu e retorna o valor somado acrescido de 10%. DICA: para isso, você precisará varrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

---
