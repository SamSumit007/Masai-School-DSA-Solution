You are given a list of unique integersnumsthat is sorted in ascending order and is rotated at some pivot point. Find the maximum number in the rotated list.

Solve it in O(logN)

              
https://binarysearch.com/problems/Find-the-Largest-Number-in-a-Rotated-List
You are given a list of unique integers nums that is sorted in ascending order and is rotated at some pivot point. Find the maximum number in the rotated list.
Constraints
n ≤ 100,000 where n is the length of nums.

Note: Using Linear Search or inbuilt Sorting algorithms will lead to disqualification


Sample Input 1                        Sample Output 1
5                                          5
6 7 8 1 4                         



function findMax(arr,n){
 if (arr.length === 1) return arr[0];

    let max = -Infinity;
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        if (arr[start] > max) {
            max = arr[start]
        }

        if (arr[end] > max) {
            max = arr[end]
        }

        start++;
        end--;
    }
    return max;
        
}
function runProgram(input) {
 input = input.split("\n");
  var n = +input[0];
      var arr = input[1].split(" ").map(Number);
     
     console.log(findMax(arr,n ));  
}
if (process.env.USER === "") {
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
