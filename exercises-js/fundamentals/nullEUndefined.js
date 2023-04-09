//tipo referência
const a = {}
a.name = "text"

const b = a

b.name = "love"

//console.log( a, b);

//tipo valor
let c = 3

let d = c

d++

console.log(c,d);


//Variável declarada, mas não inializada
//Conceito de undefined
let valor 
console.log(valor);

//Ausência de valor
valor = null

console.log(valor);

//is not defined
//console.log(valor2);

//Error
//console.log(valor.toString());

const produto = {}

//Conceito de undefined
console.log(produto.nome);

/*
Resumo do conceito de referência ou valor  

*Quando você faz uma passagem por valor, uma atribuição por valor, você faz uma cópia do valor
e cada constante ou variável vai ter um comportamento independente. 

*Quando você faz uma passagem por referência, uma atribuição por referência, as variáveis ou 
constantes passam a apontar para o mesmo lugar.
*/