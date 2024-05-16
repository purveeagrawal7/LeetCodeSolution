const consecutivePotholes = (S, B) =>{
    let pothoolesArr = [];
    let potholesCount = 0;
    let potholestoBeFixed = 0;
    let remainingB = B;
    let maxpotholestoBeFixed = 0;
    for (let index = 0; index < S.length; index++) {
        if(S.charAt(index) == 'x'){
            potholesCount++;
        }
        else if (potholesCount > 0) {
            pothoolesArr.push(potholesCount)
            potholesCount = 0;
        }
        
    }
    if(potholesCount > 0){
        pothoolesArr.push(potholesCount)
    }
    pothoolesArr.sort((a,b)=>b-a)
    pothoolesArr.forEach((num)=>{
        remainingB = remainingB - (num+1); 
        if(num+1 < B ){
            if(remainingB < B && remainingB > 0){
                potholestoBeFixed += num;
            }
            else{
                potholestoBeFixed = ( potholestoBeFixed + num + remainingB);
            }
        }
        else{
            potholestoBeFixed = ( potholestoBeFixed + num + remainingB);
        }
        if(maxpotholestoBeFixed < potholestoBeFixed){
            maxpotholestoBeFixed = potholestoBeFixed
        }
    })
    return maxpotholestoBeFixed;
}


console.log(consecutivePotholes("...xxx..x....xxx.", 7)) // ans = 5
 console.log(consecutivePotholes("..xxxxx", 4))  // ans  = 3
 console.log(consecutivePotholes("x.x.xxx...x", 14)) // ans = 6
 console.log(consecutivePotholes("..", 5)) // ans = 0
