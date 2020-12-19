var fibonacci = (n) => {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }

    var n1 = 1;
    var n2 = 1;
    var count = 3;
    while (count++ <= n){
        var tmp = n1;
        n1 = n2;
        n2 = tmp + n2;
    }
    return n2;
}

for(var i = 0; i < 50; i++){
    console.log(Date.now(), fibonacci(i))
}
