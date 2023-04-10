// Exemplo de função sem retorno
//Passando dados por argumento
function imprimeSoma(a,b) {
    console.log( a + b);
}
imprimeSoma(10,11)

// Exemplo de função com retorno
//Passando dados por argumento
function retornaSoma(a, b = 1) {
    return a + b;
}


console.log(retornaSoma(2,4));
console.log(retornaSoma(2));
console.log(retornaSoma()); //Não retorna nada