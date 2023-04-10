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

console.log("----------------------------------");

var text = "A"
console.log("Fora do escopo da text", text)

{
  var text = "B"
  console.log("Dentro do escopo da text", text)
}

function escopovar() {
    var text = "C"
    return text
}
console.log("Dentro do escopo da função text", escopovar())