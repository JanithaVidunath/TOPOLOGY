function printPairs(arr)

{
    let res =[]
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            res.push( arr[i]
                 , arr[j] 
                 );
        }
    }
    return res; 
}



export default printPairs;