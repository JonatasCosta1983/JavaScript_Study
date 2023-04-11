const produt = []

for (var i = 0; i < 10; i++) {
    produt.push(function() {
        console.log(i);
    })
}

produt[2]()
produt[5]()