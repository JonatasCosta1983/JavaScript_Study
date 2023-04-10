//Passando uma função para uma constante
const subitracao = function(a, b) {
    console.log(a - b);
}

subitracao(10, 8)


const retornandoSoma = function(a,b) {
    return a + b
}

console.log(retornandoSoma(10, 8));

//Exemplos de função anônima
const subitracaoAnonima = (a, b) => {
    console.log(a - b);
}

subitracaoAnonima(20, 10)


const somaAnonimaRetorno = (a, b) =>{
    return a + b;
}

console.log(somaAnonimaRetorno(100, 20));


const somaCurta = (a, b) => a + b


console.log(somaCurta(20, 30));