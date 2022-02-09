// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。


/**
 * param {string} s
 * return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    while( end >= 0 && s[end] == ' ') end--;
    if( end<0 ) return 0;
    let start = end;
    while( start >= 0 && s[start] != ' ') start--;
    return end - start;
};
