
let arr = [0, 1, 0];
let N = arr.length;
function sort012(arr, N){
        //your code here
        
        
        let countZ = 0;
        let countO = 0;
        let countT = 0;
        
        for(let i = 0; i < N; i++){
            
            if(arr[i] == 0){
                arr[countZ] = arr[i];
                countZ++;
                countO++;
            }else if(arr[i] == 1){
                arr[countZ] = 1
                countO++;
            }else if( arr[i] == 2){
                arr[countO] = 2 
            }
            
        }
        
        return arr;
        
}

console.log(sort012(arr, N))



