
You are given an array A of size N. For each element, in the array find the closest element with a smaller value, than the current value. If no such element exists, print -1. If two values are equidistant to the current value, print the one that occurs to the left of it. Refer the sample I/O for better understanding.


Input
The first line contains T, the number of test cases. The first line of each test case contains N, the size of the array.

Next line contains N space separated integers denoting the closest smaller values, or -1, if no such values exist.

Constraints

1 <= T <= 10

1 <= N <= 10^5

1 <= A[i] <= 10^4


Output
For each test case, print N space separated integers, denoting the nearest smaller elements, or -1 if it does not exists, on a new line.


Sample Input 1 

1
8
39 27 11 4 24 32 32 1
Sample Output 1

27 11 4 1 4 24 1 


function isEmpty(array) {
    return array.length === 0 ? true : false;
}


function nearestGreaterElement(arr, size) {

    var left = [];
    var right = [];
    var ans = [];
    var stack = [];
    var i = 0;
   
 
    while (i < size) {

        while (!isEmpty(stack) && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (isEmpty(stack)) {
            left[i] = -1;
        }
        else {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);

        i++;
    }
    
     
     i= size-1;

 while (i >= 0) {

        while (!isEmpty(stack) && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (isEmpty(stack)) {
            right[i] = -1;
        }
        else {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);

        i--;
    }
    
     
    i = 0;
    while (i < size) {

        if (left[i] == -1 && right[i] == -1) {
            ans.push(-1);
        }
        else if (left[i] == -1 && right[i] != -1) {
            ans.push(arr[right[i]]);
        }
        else if (right[i] == -1 && left[i] != -1) {
            ans.push(arr[left[i]]);
        }
        else {

            let temp1 = Math.abs(i - left[i]);

            let temp2 = Math.abs(i - right[i]);
            ans.push(temp1 > temp2 ? arr[right[i]] : arr[left[i]]);
        }

        i++;
    }

    // console.log(left);
    // console.log(right);
   // console.log(ans);
    console.log(ans.join(' '));


}


function runProgram(input){
 input= input.split("\n");
 var tc = +input[0];
 var line= 1;
 for(var i=0; i<tc; i++){
     var size =+input[line++];
var arr = input[line++].trim().split(" ").map(Number);

 //console.log(size, arr);

  nearestGreaterElement(arr, size);
 }
}
  
if (process.env.USER === "Sumit") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
