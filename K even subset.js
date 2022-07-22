var ans = 0;
function kEvenSub(K, arr, curr, newArr) {

    if (newArr.length > 0) {

        // console.log(newArr);
        var count = 0;
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] % 2 == 0) {
                count++;
            }
        }
        if (count >= K) {
            ans++;
        }
        // console.log(ans);
    }

    if (curr == arr.length) {
        return;
    }

    for (var i = curr; i < arr.length; i++) {
        newArr.push(arr[i]);
        kEvenSub(K, arr, i + 1, newArr);
        newArr.pop();
    }


}



function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];
   
   var line = 1;

   for(var i = 0; i < testCases; i++){
       var curr = 0;
       var newArr = [];
       ans = 0;

        var arr1 = input[line].trim().split(" ").map(Number);
        line++;
       var arr = input[line].trim().split(" ").map(Number);
       line++;

    //    var N = +arr1[0];
       var K = +arr1[1];

       kEvenSub(K,arr,curr,newArr);
       console.log(ans);

    // console.log("------")
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2
4 2
4 3 2 1
2 1
2 3`);
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