// - EXERCÍCIOS HTML JAVASCRIPT -
// 1. Exiba no console apenas o texto da tag com id=paragrafo (sem tags).

String.prototype.stripHTML = function() {
  return this.replace(/<.*?>/g, '');
};

let x = document.getElementById('paragrafo').innerHTML;
x = x.stripHTML();
console.log(x);

// 2. Exiba no console o conteudo dentro das tags <span>.

let s = document.getElementsByTagName('SPAN');

for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}

// 3. Obtenha o elemento li com o texto Item 9 dentro dele e exiba esse valor

let lista = document.getElementsByTagName('UL')[0];
let itens = document.getElementsByTagName('LI');
let novoElem = document.createElement('li');
let texto = document.createTextNode('Item ' + (itens.length + 1));
novoElem.appendChild(texto);
lista.insertBefore(novoElem, itens[itens.length]);

console.log(itens[itens.length - 1]);

// 4. Crie uma função chamada exibirInnerHTML que receberá 1 parametro (um
// elemento) e dentro da função escreverá o innerHTML no console.

function inner(el) {
  if (el.inner == undefined) {
    for (let i = 0; i < el.length; i++) {
      console.log(el[i].innerHTML);
    }
    console.log('aqui');
  } else console.log('esse', el.innerHTML);
}
// 5. Repita essa ação para as tags <p>, <strong>, e <li> com id=item.

let p = document.getElementsByTagName('P');
inner(p);

// console.log(p);

let str = document.getElementsByTagName('strong');

// inner(str);

let li = document.getElementById('item');
// console.log(li.length);
// console.log(li.innerHTML);

inner(li);
