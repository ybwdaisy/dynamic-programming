// 给定一个 m*n 网格，请找出从左上角 A 到右下角 B 一共有多少种走法？注意：只能往右或往下移动。

// 优化版本：空间复杂度变为 O(n)

/**
 * 格子跳
 * @param {Number} rows 行数
 * @param {Number} columns 列数
 */
var uniquePaths = (rows, columns) => {
    if (rows <= 0 || columns <= 0) {
        return 0;
    }

    // 初始化
    var dp = new Array(columns);
    // 上侧第 1 行
    for(var j = 0; j < columns; j++){
      dp[j] = 1;
    }
    
    // dp[i] = dp[i - 1] + dp[i]
    for (var m = 1; m < rows; m++) {
        dp[0] = 1;
        for (var n = 1; n < columns; n++) {
            dp[n] = dp[n - 1] + dp[n]
        }
    }

    return dp[columns - 1];
}

console.log(uniquePaths(4, 5))