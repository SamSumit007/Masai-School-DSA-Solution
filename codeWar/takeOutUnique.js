// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.


function arrayDiff(a, b) {

    var newArr = a.concat(b);
    // console.log(newArr);
var ans = [];

    for(var i = 0; i < newArr.length; i++){
        var count = 0;
        for(var j = i+1; j < newArr.length; j++){
            if( newArr[i] == newArr[j]){
               count++;
            }
            
        }
        if(count == 0){
            ans.push(newArr[i]);
        }
    }

    return ans;
   
}

console.log(arrayDiff([1,2,3,5,2], [1,4]));