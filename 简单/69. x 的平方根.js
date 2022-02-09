// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。


/**
 * param {number} x
 * return {number}
 */
var mySqrt = function(x) {
    var left = 0
    var right = x
    while(left <= right){
        let mid = left + ((right - left)>>1)
        if(mid*mid<=x){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return right
};