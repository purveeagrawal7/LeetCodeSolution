/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sortedIntervals = [];
    sortedIntervals = intervals.sort((a,b) => a[0] - b[0])
    let mergedIntervals = [sortedIntervals[0]]; 
    for(let i=1;i<sortedIntervals.length;i++){
        if(mergedIntervals[mergedIntervals.length - 1][1] >= sortedIntervals[i][0]){
            let tempInt = mergedIntervals.pop();
            mergedIntervals.push([tempInt[0], Math.max(sortedIntervals[i][1],tempInt[1])]);
        }
        else{
            mergedIntervals.push(sortedIntervals[i])
        }
    }
    return mergedIntervals;
};
