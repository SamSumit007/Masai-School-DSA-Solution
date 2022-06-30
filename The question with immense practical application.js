// The solution to this question is a very popular algorithm used for:

// Spell correction and suggestion by search engines
// Computational Biology
// Machine Translation
// Information Extraction
// Speech Recognition
// NLP
// Needleman‐Wunsch Algorithm, etc. to name a few
// "Edit distance" (also known as Levenshtein distance) measures the minimum number of simple changes to move from one string to another. Possible changes include the insertion of a single character, the deletion of a single character, or the substitution from one character to another. Your program must calculate the edit distance between pairs of strings.

function runProgram(input){
    var input=input.split("\n");
    var tc=input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var [str1,str2]=[input[line++].trim(),input[line++].trim()];
        solve(str1,str2);
    }
    
}

function solve(str1,str2){
    // console.log(str1,str2)
   
    var dp=[];
    for(var i=0;i<=str1.length;i++){
        var a=new Array((str2.length+1)).fill(-1);
        dp.push(a);
    }
    
    console.log(answer(str1,str2,str1.length,str2.length,dp));
}


function answer(str1,str2,x,y,dp){
    if(x==0){
        return y;
    }
    if(y==0){
        return x;
    }
    if(dp[x][y]!=-1){
        return dp[x][y];
    }
    if(str1[x-1]==str2[y-1]){
        dp[x][y]=answer(str1,str2,x-1,y-1,dp);
    }
    else{
        dp[x][y]=1+Math.min(answer(str1,str2,x-1,y,dp),answer(str1,str2,x,y-1,dp),answer(str1,str2,x-1,y-1,dp))
    }
    return dp[x][y];
    
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