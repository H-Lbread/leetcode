
// ## 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
/**
 * param {number[]} nums
 * param {number} target
 * return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0;i<nums.length;i++){
        for(var j = i+1;j<nums.length+1;j++){
            if(target == nums[i] + nums[j]){
                return [i,j]
            }
        }
    }
    
};