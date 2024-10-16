/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  let name = nome;
  let age = idade;
  if (name === undefined && age === undefined) {
    return undefined;
  }
  const message = `Oi, meu nome é ${name}!\nTenho ${age} anos,`;
  const messageTwo = '\ntrabalho na Trybe e mando muito em programação!\n#VQV!';
  return message + messageTwo;
};

module.exports = vqv;

// Desenvolvida com auxílio do plantão do instrutor Eliezer (muito obrigada pelos insights!);
