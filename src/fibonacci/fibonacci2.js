var fibonacci = (n) => {
    var arr = [0, 1, 1];
    if (n >= 3) {
        for(var i = 3; i <= n; i++){
            arr[i] = arr[i - 1] + arr[i - 2];
            console.log(Date.now(), arr[i]);
        }
    }
    return arr;
}

fibonacci(50)
