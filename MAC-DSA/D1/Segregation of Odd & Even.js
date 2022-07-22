function seperationOfOddEven(N, arr,Q) {
    
    var Even = [];
    var Odd = [];
    for(var i = 0; i<N; i++){
        if(Q == 1){
            if(arr[i] % 2 === 0){
                Even.push(arr[i]);
            }else{
                Odd.push(arr[i]);
            }
        }
        if(Q == 2){
            if(arr[i] % 2 === 1){
                Even.push(arr[i]);
            }else{
                Odd.push(arr[i]);
            }
        }
    }
    console.log(Even.concat(Odd).join(" "));
}
