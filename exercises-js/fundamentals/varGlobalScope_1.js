let numero = 1
console.log("Fora do escopo", numero);

{
    let numero = 2
    console.log("Dentro da escopo", numero);
}

function escopoFuncion() {
    let numero = 3
    return numero
}

console.log("Escopo da função", escopoFuncion())

console.log("Fora do escopo", numero);

console.log("----------------------------------");

var letra = "A"
console.log("Fora do escopo da letra", letra)

{
  var letra = "B"
  console.log("Dentro do escopo da letra", letra)
}

function escopovar() {
    var letra = "C"
    return letra
}
console.log("Dentro do escopo da função letra", escopovar())

console.log("Fora do escopo da letra", letra)