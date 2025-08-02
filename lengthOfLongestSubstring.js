/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let i = 0;
        let longestSubStr = "";
        let longestSubStrLength = 0;
        while(i < s.length){
        for(let j=i; j<s.length;j++){
            if(!longestSubStr.includes(s.charAt(j))){
                longestSubStr = longestSubStr + s.charAt(j);
            }
            else{
                longestSubStr = s.substring(i,j);
                break;
            }
        }
        if(longestSubStr.length > longestSubStrLength){
            longestSubStrLength = longestSubStr.length;
        }
        longestSubStr = "";
        i++;
        }
        return Math.max(longestSubStrLength, longestSubStr.length);
};
