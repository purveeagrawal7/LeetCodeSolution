/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let j = height.length -1;
    let i = 0;
    let area = 0;
    let maxArea = 0;
    while(i<j){
        area = Math.min(height[i],height[j])*(j-i);
        if(area > maxArea){
            maxArea = area;
        }
        if(height[i] < height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return maxArea;
};
