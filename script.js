// 1) Escreva uma função min(a,b) que retorna o menor número entre a e b

function min(a, b) {
  return a <= b ? a : b;
}

// 2) Crie uma função pow(X,Y) que retorna X elevado a Y.

function pow(x, y) {
  let result = 1;

  if (x == 0 && y == 0) {
    return undefined;
  }

  if (y < 0) {
    y *= -1;
    for (let i = 0; i < y; i++) {
      result *= x;
    }
    return 1 / result;
  }

  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

// console.log(pow(5, -6));

// 3) Crie uma página web que pergunta por dois números X e Y e retorna a
// potência do primeiro pelo segundo através de uma função pow(X,Y)

function calcula(x, y) {
  document.getElementById('resultado').innerHTML = pow(x, y);
}
// 4) Crie um código JavaScript que pergunta por dois números X e Y e retorna o
// maior entre os dois números através de uma função max (X,Y)

function maior(a, b) {
  console.log('A', a);
  console.log('B', b);

  if (a > b) {
    document.getElementById('resultado').innerHTML = a;
  } else {
    document.getElementById('resultado').innerHTML = b;
  }
}

// 5) Crie um objeto vazio Aluno
let Aluno = {};
console.log(Aluno);

// 1. Adicione a propriedade nome com o valor com o seu nome.
Aluno.nome = 'Lucas';

console.log(Aluno.nome);
// 2. Adicione a propriedade sobrenome com o valor do seu sobrenome

Aluno.sobrenome = 'Filipe';
console.log(Aluno.sobrenome);

// 3. Troque o nome para o nome de uma pessoa que você gosta muito

Aluno.nome = 'Anderson';
console.log(Aluno.nome);

// 4. Remova a propriedade nome

delete Aluno.nome;
console.log(Aluno);

// 5. Verifique se a propriedade “time” existe neste objeto.

// 6) Dado o objeto abaixo:

let salarios = {
  Neymar: 100,
  Ronaldinho: 160,
  Ronaldo: 130
};

function soma(obj) {
  alert(obj.Neymar + obj.Ronaldinho + obj.Ronaldo);
}

// Escreva uma função que some o salário de todos os jogadores e exiba em uma
// mensagem de alerta.
