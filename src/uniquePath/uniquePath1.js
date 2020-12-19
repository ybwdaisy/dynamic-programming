// 给定一个 m*n 网格，请找出从左上角 A 到右下角 B 一共有多少种走法？注意：只能往右或往下移动。

// 空间复杂度变为 O(m*n)
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
    var dp = new Array(rows);
    for(var i = 0; i < dp.length; i++){
        dp[i] = new Array(columns);
    }   
    // 左侧列
    for(var j = 0; j < rows; j++){
      dp[j][0] = 1;
    }
    // 上侧行
    for(var k = 0; k < columns; k++){
      dp[0][k] = 1;
    }
    
    // dp[m-1][n-1]
    for (var m = 1; m < rows; m++) {
        for (var n = 1; n < columns; n++) {
            dp[m][n] = dp[m - 1][n] + dp[m][n - 1];
        }
    }

    return dp[rows - 1][columns - 1];
}

console.log(uniquePaths(4, 5))