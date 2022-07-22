function runProgram(input) {
	input = input.split("\n");
	var tc =+ input[0];
	var line = 1;
	for(var i=0; i<tc; i++){
	    var[n,k] = input[line].split(" ").map(Number);
	    line++;
	    var arr = input[line].split(" ").map(Number);
	    line++;
	    minSum(n,k,arr)
	}
}
function minSum(n,k,arr){
    var sum = 0;
    var min = 0;
    for(var i = 0; i<k; i++){
        sum += arr[i];
    }
    min = sum;
    for(var i = k; i<n; i++){
        sum += arr[i]-arr[i-k];
        min = Math.min(sum,min);
    }
    console.log(min);
}
    if (process.env.USERNAME === "Ajit") {
        runProgram(`2
        5 3
        9 9 -5 9 5 
        5 4
        2 7 6 2 -5 
        `);
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