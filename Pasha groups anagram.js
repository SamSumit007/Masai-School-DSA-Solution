// Given N strings , Pasha needs to group anagrams together.

// Note:- Sequence doesn't matter.

function runProgram(input){
    var input=input.split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n= +input[line++];
        var arr=[];
        for(var j=0;j<n;j++){
            arr.push(input[line++].trim());
        }
        solve(arr,n);
    }
    
    
}

function solve(arr,n){
    var map={};
    for(var i=0;i<n;i++){
        var arr1= arr[i].split("");
        var arr2= ""+arr1.sort();
        if(!map[arr2]){
            map[arr2]=[arr[i]];
        }
        else{
            map[arr2].push(arr[i]);
        }
    }
    
    // console.log(Object.values(map));
    //console.log(map)
    
    for(key in map){
        console.log(map[key].length);
        console.log(map[key].join("\n"));
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