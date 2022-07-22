const ChiperString = (str,n)=>{
    let count = 0,res = "";
    for(let i = 0; i < n; i++){
        count++;
        if(str[i] !== str[i+1]){
            res += str[i] + count;
            count = 0;
        }
    }
    console.log(res);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for(let i = 0; i < cases; i++){
       let n = +input[line++],str = input[line++].trim()
       ChiperString(str,n)
   }
   
  }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`2
        5
        aabcc
        5
        aazaa`);
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