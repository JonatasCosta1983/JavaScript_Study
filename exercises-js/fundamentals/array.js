const valores = [1.1, 1.2, 1.3, 1.4]
valores[4] = 1.5
valores[9] = 1.9

valores.push(1.22)
console.log(valores);

valores.pop()
console.log(valores);

valores.unshift("Morango")
console.log(valores);