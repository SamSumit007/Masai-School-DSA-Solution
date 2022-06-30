// Virat and Rohit don't like each other though they have many similarities. You are given 2 texts (strings) written by Virat and Rohit. Your task is to write a program that calculates the length of the longest similar characters in the text written by both.

// If string written by Virat is “AGGTAB” and that by Rohit is “GXTXAYB”, then the longest set of similar characters is “GTAB”, which is of length 4.

// Please note that the longest set of similar characters need not be continuous.

function runProgram(input){
    var input=input.split("\n")
    var str1=input[0].trim();
    var str2=input[1].trim();
    solve(str1,str2);
}
function solve(str1,str2){
    //console.log(str1,str2)
    //var len=0;
    function common(str1,str2,n,m){
        if(n==str1.length||m==str2.length){
            return 0;
        }
        else if(str1[n]==str2[m]){
            
            return 1+common(str1,str2,n+1,m+1);
           
        }
        else{
            
            return Math.max(common(str1,str2,n,m+1),common(str1,str2,n+1,m));
        }
    }
    
   var len= common(str1,str2,0,0);
    console.log(len);
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