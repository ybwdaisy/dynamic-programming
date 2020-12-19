// dp(n) = dp(n - 1) + dp(n - 2) (n >= 2)

// 递归
var fibonacci = (n) => {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for(var i = 0; i < 50; i++){
    console.log(Date.now(), fibonacci(i))
}
