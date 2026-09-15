
//! Funções Nativas JS

//! Função MAP
// Percorre uma lista e cria uma nova  lista com base na condição.
/*
let numeros = [1, 2, 3, 4];

let numerosDobrados = numeros.map(function (num) {
    return num * 2;
})

//* Retorno -> [2, 4, 6, 8]

console.log(numerosDobrados);

// Ou assim:
// Arrow function com retorno implicito

let numerosDobradosArrow = numeros.map(num => num * 2);

//? Quando eu preciso usar o return?
//* Quando a função tem mais de uma linha
// A setinha resume o function

numeros.map(num => {
    let resultado = num * 2;
    return resultado;
})

console.log("resultado " + resultado);
*/

//! Função FILTER
// Filtra elemontos com base em uma condição
/*
let numeros = [5, 10, 15, 20];

//* num -> palavrinha auxiliar

let maioresQueDez = numeros.filter(num => num > 10);
console.log(maioresQueDez); // Retorna -> [15, 20]
*/

//! Função REDUCE
// Reduz os valores de um array para um único valor
/*
let numeros = [1, 2, 3, 4];

//* Acumulador inicia em 0
// Variavel auxiliar é o num
// Acumulador inicia em zero e soma com o auxiliar até o último valor do array
let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

console.log(soma); // Retorna -> 10
*/

//! Função FIND
// Retorna o primeiro elemento que atende a condição
/*
let produtos = [
    {id: 1, nome: "Teclado", preco: 50 }, // produto
    {id: 2, nome: "Mouse", preco: 30 }, // produto
    {id: 3, nome: "Caderno", preco: 30 } // produto
]

//? Diferença de Find e Filter
// Find -> retorna o primeiro elemento que ele encontra que atende a condição
// Filter -> retorna todos os elementos que atendem a condição

//* find
let item = produtos.find(produto => produto.id === 2);
console.log(item);

//* filter
let itemfiltrado = produtos.filter(produto => produto.id === 2);
console.log("Usando filter: " + itemfiltrado);
*/

//! Função SPLIT
// Divide a string em partes, transformando num array
/*
let frase = "JS é top";

// Com espaço, separa as palavras pelo espaço
let palavras = frase.split(" ");
console.log(palavras);

// Sem espaço, separa todas as letras dentro do array
let letras = frase.split("");
console.log(letras);
*/

//! Função TRIM
// trim remove espaços no inicio e final de uma string
/*
let nome = "   Paulo   ";
let nomeLimpo = nome.trim();

console.log(nome);
console.log(nomeLimpo);
*/

//! Função INCLUDE
// Verifica se existe um valor dentro de uma lista e retorna um booleano
//* Booleano -> true ou false
/*
let frutas = ["maçã", "banana"];

let frutasInclude = frutas.includes("banana");
console.log(frutasInclude); // Retorna -> true
*/

//! toLowerCase -> transforma um texto em minúsculo
//! toUpperCase -> transforma um texto em maiúsculo
/*
let nome = "KESSIA";
let cargo = "instrutora";

console.log(nome.toLowerCase()); // Retorna -> kessia
console.log(cargo.toUpperCase()); // Retorna -> INSTRUTORA
*/
//! Função FOREACH
/*
let nomes = ["João", "Guilherme", "Maria"];

nomes.forEach(nome => console.log(`Seu nome é: ${nome}`));
*/

//! Função SOME e EVERY
/*
//* some
// Verifica se pelo menos um item atende a condição
// retorna booleano

let numeros = [1, 3, 5, 8];

let temPar = numeros.some(num => num % 2 === 0);
console.log(temPar); // Retorna -> true

//* every
// Verifica se TODOS os itens atendem a condição
// retorna booleano

let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); // Retorna -> false
*/

//! Função SORT
// Ordena os elementos do array
/*
let numeros = [3, 10, 5, 2, 4];
let letras = ["c", "a", "x", "h"];

//* para letras
letras.sort();
console.log(letras); // Retorna -> ["a", "c", "h", "x"]

//* para números
numeros.sort((a, b) => a - b);
console.log(numeros); // Retorna -> [2, 3, 4, 5, 10]
*/
//*REVERSE
//inverte a ordem dos elementos do array
//let numeros = [1. 2. 3]

//numeros.reverse()
//console.log(numeros) // [3, 2, 1]

//*JOIN
//junta os elementos de um array em uma string
// let palavras = ["JS", "é", "top"]




//*PUSH
//*POP
//*SHIFT
//*UNSHIFT
//let lista = ["A", "B"]

//PUSH -> Adiciona elementos no final do array
//lista.push("C") //adiciona
//console.log(lista)


//lista.pop() //remove
//console.log(lista)


//lista.shift() //remove
//console.log(lista)


//lista.unshift("A") //adiciona
//console.log(lista)

//*SLICE
//Cria uma cópia de uma parte da lista

/**
 * *array.slice(inicial,final)
 * 
 * Inicial -> onde começa
 * Final -> onde termina (não inclui a posição/indice/index)
 */

//let numeros = [1, 2, 3, 4]

//let parte = numeros.slice(1, 3) //1 e 3 são as posições do array
//console.log(parte) // [2, 3]

//*SPLICE
//Remove ou adiciona elementos em QUALQUER POSIÇÃO

/**
 *  *array.splice(index, count, item1, ..., itemX)
 * 
 * index -> indice(posição do elemento no array)
 * count -> número de elementos a serem removidos
 * item1, ..., itemX -> itens a serem adicionados
 * */

//let numeros = [1, 2, 3, 4]

//numeros.splice(1, 1)
//console.log(numeros) // [1, 3, 4]


//let frutas = ["Banana", "Laranja", "Maçã", "Manga"]
//frutas.splice(0, 3, "Limão", "Kiwi")
//console.log(frutas) // ["Limão", "Kiwi", "Manga"]
//let frutas = ["Banana", "Laranja", "Maçã", "Manga"]

//frutas.splice(2, 0, "Limão", "Kiwi")
//console.log(frutas) // ["Banana", "Laranja", "Limão", "Kiwi", "Maçã", "Manga"]

//*REPLACE
//Substitui uma parte da string
//let texto = "olá mundo!"
//let novoTexto = texto.replace("mundo", "cliente")
//console.log(novoTexto) // "olá cliente!"

//!NOSSAS FUNÇÕES

//função comum
//function exibirMensagem() { 
//console.log("Bem vindo(a)!")
//}

//executando a função criada
//exibirMensagem()

//função com parâmetros

//todo


//função com mais de um parâmetro
//const somar = (numero1, numero2) => numero1 + numero2

//console.log(somar(1, 2))

//outra forma
//function somarNovo(numero1, numero2) {
//console.log(numero1 + numero2)

//let resultado = numero1 + numero2
//return resultado
//

//*PROMPT
//recebe/solicita informação do usuário
//let nome = prompt("Digite seu nome: ")
//console.log(nome)
//alert("olá, " + nome)

//recebendo um número e convertendo
//let idade = Number(prompt("Digite sua idade: "))

//idade = parseInt(prompt("Digite sua idade: "))

//idade = parseFloat(prompt("Digite sua idade: "))


//* O QUE VEREMOS NAS PROXIMAS AULAS
//* SPOILER.......
/*
let textoP = document.getElementById("texto")

let saudacao = prompt("Digite a saudação: ")

if (saudacao == "bom dia") {
    textoP.textContent = saudacao
}

else {
    textoP.textContent = "SEGUNDOUUUUUUU"
}
*/

//*===================================
//* NÍVEL BÁSICO
//*===================================

//* Exercício 1
/*
for (let i = 1; i <= 10; i++) {
console.log("Número:", i);
}
*/

//* Exercício 2

/*
let numero = Number(prompt("Digite um número: "));

for (let i = 1; i <= 10; i++) {
    console.log("Número:", i* numero);
}
*/

//* Exercício 3

/*
let N = Number(prompt("Digite um número: "));
let soma = 0;
let i = 1;

while (i <= N) {
    soma += i;
    i++;
}
console.log("Número:", soma)
*/

//todo================================
//todo NÍVEL INTERMEDIÁRIO
//todo================================

//todo Exercício 1

/*
let N = 50
for (let i = 0; i <= N; i++) {
    console.log("Número:", i++);
}
*/

//todo Exercício 2



//!===================================
//! NÍVEL AVANÇADO
//!===================================



//! Exercício 2

let N = prompt("Digite um número: ")
for (let i = 1; i <= 10; i++) {
   console.log(i + " x " + N + " = " + (i * N));
}

//?===================================
//? DESAFIO EXTRA
//?===================================


