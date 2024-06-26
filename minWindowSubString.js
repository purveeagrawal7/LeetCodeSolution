/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if(s.length == 0 || t.length == 0) return "";
    let patMap = {};
    let expectedCount = 0;
    let minLength = Infinity;
    let left = 0;
    let minLeft = 0;

    if(t.length <= s.length){
    for(let i = 0; i<t.length; i++){
        patMap[t.charAt(i)] = patMap[t.charAt(i)] ? patMap[t.charAt(i)] + 1 : 1;
    }
    
    expectedCount = Object.keys(patMap).length;
    for(let right = 0; right < s.length; right++){
        if(t.includes(s.charAt(right))){
            patMap[s.charAt(right)] = patMap[s.charAt(right)] -1;
            if(patMap[s.charAt(right)] == 0){
                expectedCount--;
            }
            while(expectedCount == 0 && left<=right){
                if((right-left)+1 < minLength){
                    minLength = (right - left )+ 1;
                    minLeft = left;
                }
                if(s.charAt(left) in patMap){ 
                        patMap[s.charAt(left)] ++;
                    if(patMap[s.charAt(left)] > 0){
                        expectedCount++;
                    }
                }
                left ++;
            }
        }
        else{
             if(expectedCount != 0 && right == s.length-1 && minLength == Infinity){
                return("")
            }
        }
    }
    return(minLength == Infinity ? "" : s.substr(minLeft, minLength))
    }
    else{
        return("")
    }

}

// console.log("output:::",minWindow("babb","baba"));
//console.log("output:::",minWindow("bc","b"));
