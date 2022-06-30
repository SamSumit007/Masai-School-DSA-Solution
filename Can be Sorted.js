// Given an array of distinct n integers. Check whether reversing one sub-array make the array sorted or not.

// If the array is already sorted or by reversing a subarray once make it sorted, print “YES”, else print “NO”.


function runProgram(input){
    var input=input.split("\n");
    var N= +input[0];
    var arr=input[1].split(" ").map(Number);
    solve(N,arr);
     
 }
 function solve(N,arr){
     var start;
     var end;
     for(var i=0;i<N-1;i++){
         if(arr[i+1]>=arr[i]){
             
             
         }
         else{
             if(start==undefined){
                 start=i;
             }
             
                 end=i+1;
             
         }
     }
     //console.log(start,end,arr[end])
     while(start<end){
         swap(arr,start,end);
         start++;
         end--;
     }
    // console.log(arr)
     var flag=true;
     for(var i=0;i<N-1;i++){
         if(arr[i]>=arr[i+1]){
              flag=false;
             console.log("NO");
             break;
         }
         
     }
     if(flag){
         console.log("YES")
     }
 }
 function swap(arr,start,end){
     temp=arr[start];
     arr[start]=arr[end];
     arr[end]=temp;
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