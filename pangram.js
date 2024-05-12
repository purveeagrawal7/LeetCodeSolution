/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let obj = {};
    for (let index = 0; index < sentence.length; index++) {
        if(sentence.charAt(index) != " "){
            obj[sentence.charAt(index)] = obj[sentence.charAt(index)] ? obj[sentence.charAt(index)] + 1 : 1;
        }
    }
    if(Object.keys(obj).length == 26){
        return true;
    }
    return false;
};
