// Given a sorted(increasing order) array of length n and is rotated by some value beforehand. 
// Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.


function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var k=size[1];
    var arr=input[1].split(" ").map(Number);
    
    solve(n,k,arr);
}
function solve(n,k,arr){
   var ans=search(arr,k);
   console.log(ans);
}
    
function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var n=size[0];
    var k=size[1];
    var arr=input[1].split(" ").map(Number);
    
    solve(n,k,arr);
}
function solve(n,k,arr){
   var ans=search(arr,k);
   console.log(ans);
}
    
function search (arr, target) {

    if(arr.length == 0 || arr == null){ return -1;};

    let low = 0;
    let high = arr.length-1;

    while(low < high){
        let mid = Math.floor(low+(high-low)/2);
        if(arr[mid]>arr[high]){
            low = mid+1;
        }else{
            high = mid;
        }
    }

    let mid = low;
    low = 0;
    high = arr.length-1;

    if(arr[mid]<=target && target <= arr[high]){
        low = mid;
    }else{
        high = mid;
    }

    while(low<=high){
        let mid = Math.floor(low+(high-low)/2);
        
        if(arr[mid] == target){
            return mid;
        }
        if(arr[mid]<target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;

};

 
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


//method 2
function runProgram(input){
    var input=input.split("\n");
    var s=input[0].split(" ").map(Number);
    var n=s[0];
    var k=s[1];
    var arr=input[1].split(" ").map(Number);
    solve(n,k,arr);
         
 
 }
 function solve(n,k,arr)
 {
    // var low=0;
    // var high=arr.length;
    
         
     function search(arr,k,low,high)
     {
         if(low>high)
         {
             console.log(-1);
             return;
         }
          var mid=Math.floor(low+(high-low)/2);
         if(arr[mid]==k){ 
        
         
             console.log(mid);
             return;
         }
         if(arr[low]<=arr[mid])
         {
             if(k>=arr[low] && k<=arr[mid])
             {
                 return search(arr,k,low,mid-1)
             }else
             {
                 return search(arr,k,mid+1,high);
             }
         }else
         {
             if(k>=arr[mid] && k<=arr[high])
             {
                 return search(arr,k,mid+1,high);
             }else
             {
                 return search(arr,k,low,mid-1);
             }
         }
     }
     search(arr,k,0,arr.length-1);
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