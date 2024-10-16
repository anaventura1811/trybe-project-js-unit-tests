/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const verifyConditions = (param) => {
  if (param === undefined || param.length === undefined) {
    return undefined;
  }
};

const average = (param) => {
  let list = param;
  verifyConditions(list);
  for (let key = 0; key < list.length; key += 1) {
    if (typeof list[key] !== 'number') {
      return undefined;
    }
  }
  if (list.length > 0) {
    const test = list.reduce((acc, curr) => acc + curr);
    return Math.round(test / list.length);
  }
};
module.exports = average;

// Desenvolvida com auxílio do plantão do instrutor Eliezer e com sugestões do colega Edmilson (muito obrigada pelos insights!);
// Sobre math.round:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// Sobre método reduce:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Sobre typeof:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
