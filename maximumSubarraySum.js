/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let sum = 0;
    let subArrayObj = new Map();
    let max = 0;
    let i = 0;
    let j = 0;
    let len = nums.length;
    while(j < len){
        subArrayObj.set(nums[j], (subArrayObj.get(nums[j]) || 0) + 1);
        sum = sum + nums[j];
        if(j-i+1 == k){
            if(subArrayObj.size == k){
                max = Math.max(sum, max);
            }
            sum=sum-nums[i];
            if(subArrayObj.get(nums[i]) > 1){
                subArrayObj.set(nums[i], subArrayObj.get(nums[i]) - 1);
            }else{
                subArrayObj.delete(nums[i])
            }
            i++;
        }
        j++;
    }
    return max;
};
