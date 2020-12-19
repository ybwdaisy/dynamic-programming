// 给定一个包含非负整数的 m*n 网格，请找出一条从左上角 A 到右下角 B 的路径，使得路径上的数字总和为最小。

var arr = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
];

/**
 * 最短路径
 * @param {Array} arr
 */
var uniquePaths = (arr) => {
    var rows = arr.length;
    var columns = arr[0].length;
    if (rows <= 0 || columns <= 0) {
        return 0;
    }

    // 初始化
    var dp = new Array(rows);
    for(var i = 0; i < dp.length; i++){
        dp[i] = new Array(columns);
    }
    
    dp[0][0] = arr[0][0];

    // 左侧列
    for(var j = 1; j < rows; j++){
        dp[j][0] = dp[j - 1][0] + arr[j][0];
    }
    // 上侧行
    for(var k = 1; k < columns; k++){
        dp[0][k] = dp[0][k - 1] + arr[0][k];
    }
    
    // dp[m-1][n-1]
    for (var m = 1; m < rows; m++) {
        for (var n = 1; n < columns; n++) {
            dp[m][n] = Math.min(dp[m - 1][n], dp[m][n - 1]) + arr[m][n];
        }
    }

    return dp[rows - 1][columns - 1];
}

console.log(uniquePaths(arr))