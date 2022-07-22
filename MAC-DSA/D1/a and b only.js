
function runProgram(input) {
    input = input.trim().split("\n")
    var str = input[0].trim().split("")
    a_b_only(str);
   
}
function a_b_only(str){
    var res =""
    var end ="0"
    
    for(var i = 0; i<str.length; i++){
        if(str[i] == "?"){
            if([end] != "a" && str[i+1] != "a"){
                res+="a";
            }else{
                res+="b";
            }
        }else{
            res+=str[i];
        }
        end = res[res.length - 1];
    }
    console.log(res);
}

  if (process.env.USERNAME === "Ajit") {
      runProgram(`?ba??b`);
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

