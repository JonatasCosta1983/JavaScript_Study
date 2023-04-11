const produc = []

for (let i = 0; i < 10; i++) {
    produc.push(function () {
        console.log(i);
    })
    
}
produc[0]()
produc[3]()
produc[6]()