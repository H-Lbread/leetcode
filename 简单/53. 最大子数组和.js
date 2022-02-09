// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

/**
 * param {number[]} nums
 * return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0
    var ans =nums[0]
        
            for(var i of nums){
                if(sum>0){
                    sum+=i
                }else{
                    sum = i
                }
                ans = Math.max(ans,sum)
            }
            return ans
        }