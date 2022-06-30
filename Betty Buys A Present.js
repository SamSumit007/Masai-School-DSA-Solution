// Betty and Archie are best friends and since Archie's birthday is in one week, Betty wants to buy a present for him. She goes to the gift shop and selects a gift of price P. Betty has 9 coins each of value from 1 to 9 respectively. Find out the different in which Betty can pay for the gift such that she can only use K coins.

function runProgram(input){
    var input=input.split(" ").map(Number);
    var p=input[0];
    var k=input[1];
    solve(p,k);
    
}
function solve(p,k){
    var arr=[1,2,3,4,5,6,7,8,9];
    var array=[];
    function ways(arr,p,k,newarr,position){
        if(newarr.length==k&& sum(newarr)==p){
            var way=[];
            for(var a=0;a<newarr.length;a++){
                way.push(newarr[a]);
            }
            array.push(way);
            return;
        }
        if(sum(newarr)>p||newarr.length>k){
            return;
        }
        else{
            for(var i=position;i<arr.length;i++){
                newarr.push(arr[i]);
                ways(arr,p,k,newarr,i+1);
                newarr.pop();
            }
            return;
        }
        
    }
    
    ways(arr,p,k,[],0)
   // console.log(array)
   if(array.length==0){
       console.log(-1);
   }
   else{
       for(var i=0;i<array.length;i++){
       console.log(array[i].join(" "));
     }
   }
    
    
}
function sum(arr){
    var a=0;
    for(var i=0;i<arr.length;i++){
        a+=arr[i];
    }
    return a;
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