['1','2','3'].map(parseInt)   // [1, NaN, NaN]

// ==>  parseInt(1,0);  parseInt(2,1);  parseInt(3,2)
// ==>      1                 nan            nan



// arseInt() 函数可解析一个字符串，并返回一个整数。

// 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

// 当忽略参数 radix , JavaScript 默认数字的基数如下:

// 如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
// 如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。
// 如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。


// 语法:
// parseInt(string, radix)