'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */



function plusMinus(arr){
    var len = arr.length;
    var p = 0;
    var m = 0;
    var z = 0;
    for(var i = 0; i < len; i++){
        if(arr[i] == 0){
            z++;
        }else if(arr[i] > 0){
            p++;
        }else if(arr[i] < 0){
            m++;
        }
         
    }

    
    return ((p/arr.length).toFixed(6) + "\n" +(m/arr.length).toFixed(6) + '\n' +(z/arr.length).toFixed(6)  )

}
 

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}















// console.log( plusMinus([1, 1, 0, -1, -1]));