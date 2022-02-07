// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
/**
 * param {string} s
 * return {boolean}
 */
var isValid = function(s) {
    // 用到了栈 （有关对称的题目都可以用栈） s="{([])}"
    if(s % 2 == 1) return false
    const stack = [],
        map = {
            "(":")",
            "{":"}",
            "[":"]",
        };
    for(const x of s){
        if(x in map){
            stack.push(x)
            continue;
        };
        if(map[stack.pop()] !==x ) return false;
    }
    return !stack.length

};