
// function checkPali(arr){
        
//     // console.log(arr);

//     let left = 0;
//     let right = arr.length-1;

//     while(left <= right){


//         if(arr[left] != arr[right]){
//             return false;
//         }

//         right--;
//         left++;

//     }

//     return true;
    
// }

function checkPali(arr, left, right){

    
    if(arr[left] != arr[right]){
        
        return "No";
        
    }
    
    if(left > right){
        return "Yes";
    }

    return checkPali(arr, left+1, right-1)

}

function runProgram(input) {
  
    let arr = input.trim().split("").map(Number);

    let left = 0;
    let right = arr.length-1;

   
   console.log(checkPali(arr, left, right));
   
}

/*

f1=> left = 0 , right = 5 , arr[l] = 1, arr[r] =1
f2=> left = 1, right= 4, arr[l] = 2, arr[r] = 2
f3=> left = 2, right = 3, arr[l] = 4, arr[r] = 5



*/




  if (process.env.USERNAME === "Ajit") {
    runProgram(`124421`);
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
      process.exit(0) ;
    });
  }
var str = 'hello';
