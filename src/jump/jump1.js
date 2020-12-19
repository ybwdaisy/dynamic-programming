// 一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法？

var jump1 = (n) => {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    var n1 = 1;
    var n2 = 2;
    var count = 3;
    while (count++ <= n){
        var tmp = n1;
        n1 = n2;
        n2 = tmp + n2;
    }
    return n2;
}

for(var i = 0; i < 50; i++){
    console.log(Date.now(), jump1(i))
}
