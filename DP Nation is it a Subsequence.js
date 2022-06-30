// Given two strings, s1 and s2, you need to print YES if s1 is a subsequence of s2 else NO.


//done but memory limit exceed
function runProgram(input){
    var input=input.split("\n");
    var tc=input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var str1=input[line++].trim();
        var str2=input[line++].trim();
        solve(str1,str2);
    }
    
}

function solve(str1,str2){
    var flag=false;
    function subseq(str1,str2,position,str)
    {
       if(str==str1){
           flag=true;
           return;
       }

      if(position==str2.length)
      {
          return;
      }
      else
      {
         return (subseq(str1,str2,position+1,str+str2[position])||subseq(str1,str2,position+1,str));
      }
    }
    
    subseq(str1,str2,0,"");
    //console.log(flag);
    if(flag){
        console.log("YES");
        
    }
    else{
        console.log("NO");
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

//method 2
function runProgram(input){
  var input=input.split("\n");
  var tc=input[0];
  var line=1;
  for(var i=0;i<tc;i++){
      var str1=input[line++].trim();
      var str2=input[line++].trim();
      solve(str1,str2);
  }
  
}

function solve(str1,str2){
  var i=0;
  var j=0;
  while(i<str1.length && j<str2.length)
  {
      if(str1[i]==str2[j])
      {
          i++;
      }
      else
      {
          j++;
      }
  }
  if(i==str1.length)
  {
      console.log("YES");
  }
  else
  {
      console.log("NO");
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