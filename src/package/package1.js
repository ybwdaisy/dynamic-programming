/**
 * @desc 01背包问题
 * @param {Number} w 背包的重量
 * @param {Array} weightArr 每个物品的重量
 * @param {Array} valueArr 每个物品的价值
 */
var package = function (w, weightArr, valueArr) {
  // 物品数量，从0开始
  let n = weightArr.length - 1;
  // 保存结果的二维数组
  let tmpArr = [[]];
  // 只有一个物品的情况
  for (let a = 0; a <= w; a++) {
    // 这个物品装不进去（边界情况）
    if (a < weightArr[0]) {
        tmpArr[0][a] = 0;
    } else {
        // 这个物品可以装进去（边界情况）
        tmpArr[0][a] = valueArr[0];
    }
  }

  // 有好几个物品的情况
  for (let j = 0; j <= w; j++) {
    // 循环物品个数
    for (let i = 1; i <= n; i++) {
        // 创建新行
        if (!tmpArr[i]) {
            tmpArr[i] = [];
        }
        // 最后一个装不进去，所以最大值为前i-1个的最大值
        if (j < weightArr[i]) {
            tmpArr[i][j] = tmpArr[i - 1][j];
        } else {
            // 最后一个能装进去，找装与不装的最大值
            tmpArr[i][j] = Math.max(
                tmpArr[i - 1][j],
                tmpArr[i - 1][j - weightArr[i]] + valueArr[i]
            );
        }
    }
  }
  console.log(tmpArr[n][w]);
};

package(10, [2, 2, 6, 5, 4], [6, 3, 5, 4, 6])
