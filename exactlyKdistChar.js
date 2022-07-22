function kDistChar(N, K, str){

    var obj = {};
    var i = 0,
        j = 0;
    var count = 0;

    while( j < K ){
        if( obj[str[j]] === undefined){
            obj[str[j]] = 1;
        } else{
            obj[str[j]]++;
        }
        j++;
    }

    var len = Object.keys(obj).length;

    if(len == K){
        count++;
    }

    while( j < N ){
        if( obj[str[i]] > 1 ){
            obj[str[i]]--;
        }else{
             delete obj[str[i]]; 
        }

        if( obj[str[j]] === undefined){
            obj[str[j]] = 1;
        } else{
            obj[str[j]]++;
        }

        var len = Object.keys(obj).length;
        if( len == K){
            count++;
        }
        i++;
        j++;
    }
    console.log(count);
}


function runProgram(input) {
    
    var input = input.trim().split("\n");

    var arr1 = input[0].trim().split(" ").map(Number);
    var str = input[1].trim();

    var N = +arr1[0];
    var K = +arr1[1];
        
    kDistChar(N, K, str);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`4 2
abcc`);
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