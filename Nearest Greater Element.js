function isEmpty(array) {
    return array.length == 0 ? true : false;
}


function nearestGreaterElement(arr, size) {

    var left = [];
    var right = [];
    var ans = [];
    var stack = [];
    var i = 0;

 
    while (i < size) {

        while (!isEmpty(stack) && arr[stack[stack.length - 1]] <= arr[i]) {
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
    // console.log(left);


    i = size - 1;
    while (i >= 0) {

        while (!isEmpty(stack) && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (isEmpty(stack)) {
            right[i] = -1;
        } else {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);

        i--;
    }
    // console.log(right);

  
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
