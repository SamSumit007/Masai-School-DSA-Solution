// Staircase detail

// This is a staircase of size n=4

// :

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to n

// . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n
// . 

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for(var i=n;i>=1;i--){
        var bag="";
        for(var j=1;j<=n;j++){
            if(j>=i){
                bag+="#"
            }
            else{
                bag+=" ";
            }
        }
        console.log(bag);
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
