// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

/**
 * param {number[]} nums
 * param {number} target
 * return {number}
 */
var searchInsert = function(nums, target) {
    
    for(var i in nums){
        if(nums[i] == target){
            return i
        }else{
            nums.push(target)
            nums.sort((a,b)=>{return a-b})
        }
    }
    for(var i in nums){
        if(nums[i] == target){
            return i
        }
    }
};