/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let sortedWords = words.sort()
    let wordMap = new Map();
    sortedWords.forEach((word)=>{
        if(word.length == 1){
            wordMap.set(word,word.length);
        }
        else{
            if(wordMap.get(word.substr(0,word.length-1))){
                wordMap.set(word,word.length);
            }
        }
    })
    let largestValue = 0;
    let largestValues = [];
    for(let [key,value] of wordMap){
       if(value > largestValue){
            largestValue = value;
        }
    }

    for(let [key,value] of wordMap){
       if(value == largestValue){
        largestValues.push(key);
       }
    }

    return largestValues[0] ? largestValues[0] : ""
};
