// function printArr(n, arr, i) {
//     if (i == n) {
//         return;
//     }

//     console.log(arr[i]);

//     return printArr(n, arr, i + 1);
// }

// printArr(5, [1, 2, 3, 8, 5], 0);

var out = "";
function printArrREV(arr, i){
    if ( i < 0){
        return;
    }
    out = out + arr[i];
    
    return printArrREV(arr, i-1);
    
}
printArrREV([1, 2, 3, 8, 5], 4);
console.log( out);