// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed;
    if(x < 0){
        reversed = Number("-"+String(x).split("").slice(1,String(x).split("").length).reverse().join(""))
        if(reversed < Math.pow(-2,31)){
            return 0;
        }
        else{
            return reversed;
        }
    }
    else{
        reversed = x.toString().split("").reverse().join("");
        if(reversed > Math.pow(2,31)){
            return 0;
        }
        else{
            return reversed;
        }
    }
};
