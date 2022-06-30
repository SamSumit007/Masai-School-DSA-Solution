// You are given n strings indexed from 1,2,..,n each having length not more than 10. A string is strong if the first and the last characters of the string is a vowel.

// You are very curious and so you have q queries each having two integers - start index and end index [si,ei].

// You have to answer the number of strings that are strong in that given interval for each query.

function runProgram(input){
    var input=input.split("\n");
    var n= +input[0];
    var strs=input[1].split(" ");
    var dp=[];
    for(var j=0;j<n;j++){
        dp.push(-1);
    }
    for(var a=0;a<n;a++){
        if(vowel(strs[a][0])&&vowel(strs[a][strs[a].length-1])){
            dp[a]=1;
        }
    }
    //console.log(dp)
    var q= +input[2];
    var line=3;
    for(var i=0;i<q;i++){
        var size=input[line++].split(" ").map(Number);
        var si=size[0]-1;
        var ei=size[1]-1;
        solve(dp,si,ei);
    }
//     function vowel(ele){
//     if(ele=="a"||ele=="e"||ele=="i"||ele=="o"||ele=="u"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
    
}

function solve(dp,si,ei){
    //console.log(n,strs,si,ei)
    var count=0;
    // for(var i=si;i<=ei;i++){
    //     if(vowel(strs[i][0])&&vowel(strs[i][strs[i].length-1])){
    //         count++;
    //     }
    // }
    for(var i=si;i<=ei;i++){
        if(dp[i]==1){
            count++;
        }
    }
    
    
    console.log(count);
    
    
}
function vowel(ele){
    if(ele=="a"||ele=="e"||ele=="i"||ele=="o"||ele=="u"){
        return true;
    }
    else{
        return false;
    }
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