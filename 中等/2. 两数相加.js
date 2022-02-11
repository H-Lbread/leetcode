// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。



// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807



// 思路：两个非空链表   ==>   两个非负整数      ====>     逆序

// 代码实现中用到一个链表的算法题中是很常见的「虚拟头结点」技巧，也就是 dummy 节点。你可以试试，如果不使用 dummy 虚拟节点，代码会稍显复杂，而有了 dummy 节点这个占位符，可以避免处理初始的空指针情况，降低代码的复杂性。
// 我们只需要两个同时前进，把把进位和当前俩节点的值相加，余数为当前新节点的值，除10的值作为下一次的进位

/**
 * param {ListNode} l1
 * param {ListNode} l2
 * return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 虚拟头结点（构建新链表时的常用技巧）
    let dummy = new ListNode(-1);
    // 指针 p 负责构建新链表
    let p = dummy;
    // 记录进位
    let carry = 0;
    // 开始执行加法，两条链表走完且没有进位时才能结束循环
    while (l1 != null || l2 != null || carry > 0) {
      // 先加上上次的进位
      let val = carry;
      if (l1 != null) {
        val += l1.val;
        l1 = l1.next;
      }
      if (l2 != null) {
        val += l2.val;
        l2 = l2.next;
      }
      // 处理进位情况
      carry = Math.floor(val / 10);
      val = val % 10;
      // 构建新节点
      p.next = new ListNode(val);
      p = p.next;
    }
    // 返回结果链表的头结点（去除虚拟头结点）
    return dummy.next;
  };