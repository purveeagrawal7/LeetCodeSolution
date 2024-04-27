const groupAnagrams = (strs) => {
    let map ={}
    let sortedStrs = strs.map((str)=>{
        return str.split("").sort().join("");
    })
    sortedStrs.forEach((ele,index)=>{
            if(!map[ele]){
               map[ele] = [strs[index]]
            } else{
                map[ele].push(strs[index]);
            }
    })
    return Object.values(map);
};
