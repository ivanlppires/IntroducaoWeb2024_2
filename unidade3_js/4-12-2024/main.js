/* Declaração de variáveis 

var nome = "João"; // var é destinado a variaveis globais
var preco = 45; // var é destinado a variaveis globais

let idade = 20; // let é destinado a variaveis locais ou de escopo
let confirmado = false; // let é destinado a variaveis locais ou de escopo

const altura = 1.80; // const é destinado a constantes
const sobrenome = "PIRES"; // const é destinado a constantes
*/
/* statement de variáveis1

  declaracao-da-variavel nome-da-variavel = valor-da-variavel;

*/

/* Tipos de variáveis */
/*
    String: "texto" // TEXTO
    Number: 1, 2, 3, 4 // NÚMEROS (INTEIRIO, DECIMAL)
    Boolean: true, false // BOOLEANO (VERDADEIRO, FALSO)
    Undefined: undefined // NÃO ESTÁ DEFINIDO
    Null: null // FOI ATRIBUÍDO NULO
    Object: {} // OBJETO
    Array: [] // VETOR
*/
/* Exemplo de uso de variáveis com operadores aritméticos */
/*
const nome = "Ivan";
const idade = 41;
const anoNascimento = 2024 - idade;
const mensagem = `Olá \` ${nome}, você nasceu em ${anoNascimento} `;
const mensagem2 = "Olá " + nome + ", você nasceu em " + anoNascimento;

console.log("Olá " + nome); // concatenação de strings usando o símbolo +
console.log(`Ola ${nome}`); // concatenação de strings usando template string
console.log(nome + ", sua idade é " + idade); // concatenação de strings usando o símbolo +

console.log(mensagem);
console.log(mensagem2);
*/

// parseInt() e parseFloat() são funcões que convertem strings em números
/*
const num1 = parseInt("14");
const num2 = parseInt("10");
const resultado = num1 + num2;
console.log(resultado);
*/
/* OBJETOS PRINCIPAIS 
window // janela do navegador
document // acessa a DOM (Document Objetct Model) -> os elementos HTML
*/
/*
window.alert('Seja bem-vindo à minha calculadora online!');
const num1 = parseFloat(window.prompt('Digite o primeiro número'));
const num2 = parseFloat(window.prompt('Digite o segundo número'));
*/
//const soma = num1 + parseFloat(num2);
/*
var op = null;
do{
    op = window.prompt('Digite a operação desejada: +, -, *, /');
    let resultado = null;
    switch(op){
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': resultado = num1 / num2; break;
        default: resultado = 'Operação inválida'; break;
    }
    window.alert(`O resultado da operação é: ${resultado}`);
}while(op != '+' && op != '-' && op != '*' && op != '/');
*/
/* TRABALHAR COM O OBJETO DOCUMENT */

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const op = document.querySelector('#op');
const divResultado = document.querySelector('#divResultado');

divResultado.style.display = 'none';

function calcular(){
    let resultado = null;
    if(num1.valueAsNumber && num2.valueAsNumber){ 
        switch(op.value){
            case '+': resultado = num1.valueAsNumber + num2.valueAsNumber; break;
            case '-': resultado = num1.valueAsNumber - num2.valueAsNumber; break;
            case '*': resultado = num1.valueAsNumber * num2.valueAsNumber; break;
            case '/': resultado = num1.valueAsNumber / num2.valueAsNumber; break;
            default: resultado = 'Operação inválida'; break;
        }
    }else{
        resultado = 'Digite um número válido';
    }

    divResultado.innerHTML = 'O resultado é: ' + resultado;
    divResultado.style.display = 'block';
}