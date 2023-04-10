{{{{{ var sera = "Será que é acessível ?"}}}}}

console.log(sera);


function escopoLocal() {
  var sera2 = "Será que essa varíavel vai ser acessivel fora do escopo local ?"
  return sera2
}

//escopoLocal()
//console.log(sera2);// Error 

//console.log(escopoLocal());
