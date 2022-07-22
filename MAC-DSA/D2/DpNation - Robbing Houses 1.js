//https://oj.masaischool.com/contest/3322/problem/04

function runProgram(input) {
	input = input.split("\n")
	var tc= +input[0];
	var line = 1 ;
	for(var i = 0 ;i<tc;i++){
	    var n = +input[line++];
	    var arr = input[line++].split(" ").map(Number);
	    console.log(house(tc,arr))
	}
	
      
}
function house(tc,arr){
    var  num = 0 ;
    var curr = 0;
    var temp 
    
    for(var x of arr){
        temp = curr ;
        curr = Math.max(x+num,curr);
        num = temp ;
    }
    return curr
    
}
if (process.env.USERNAME === "Ajit") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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