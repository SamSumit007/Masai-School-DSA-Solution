function findWSum(afterArr, newArr, curr, sumArr){
    // console.log(afterArr, newArr, curr, sumArr)

    if(newArr.length > 0){
        // console.log(newArr);
        var sum = 0;
        for(var j = 0; j < newArr.length; j++){
            sum += newArr[j];
        }
        sumArr.push(sum);
        // console.log(sumArr);
    }
    if(curr > afterArr.length){
        return;
    }
    for(var i = curr; i < afterArr.length; i++){
        newArr.push(afterArr[i]);

        findWSum(afterArr,newArr,i+1,sumArr);

        newArr.pop();

    }
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];
   var line = 1;
    
   for(var i = 0; i < testCases; i++){
       var N = +input[line];
       line++;
       var arr = input[line].trim().split(" ").map(Number).sort((a, b) => { return a - b });
       line++;
       

        var sumArr = [];
        var newArr = [];
        var curr = 0;
        var K = arr.pop();
        var afterArr = arr;
        var count = 0;

        
       findWSum(afterArr,newArr,curr,sumArr);

        // console.log(sumArr)

        for(var k = 0; k < sumArr.length; k++){
            if(sumArr[k] == K){
                count++;
            }
        }

        if(count > 0){
            console.log("Yes")
        }else{
            console.log("No");
        }
   }
   
  }
    if (process.env.USERNAME === "Ajit") {
        runProgram(`3
        3
        1 2 3
        4
        0 1 2 3
        4
        2 3 6 10`);
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