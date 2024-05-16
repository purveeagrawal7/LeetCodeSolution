/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let largestSum = nums[0]
    for(i=0;i<nums.length;i++){
        sum = sum + nums[i];
        if(sum > largestSum){
            largestSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return largestSum;
};
