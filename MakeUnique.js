function makeUniq(str){
    // console.log(str);

    var obj = {};

    for( var i = 0; i < str.length; i++){
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
        
    }

    console.log(obj);
    var out = "";
    for( key in obj){
        if(key != " "){
        out = out + key;
        }
    }

    console.log(out);
}


function runProgram(input) {
   var str = input.trim()
        makeUniq(str);
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`my name is ankush`);
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
      process.exit(0) ;
    });
  }