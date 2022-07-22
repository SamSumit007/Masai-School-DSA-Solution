function uniqueGift(arr) {
  // console.log(arr);

  var queue = [];
  var obj = {}
  let name = "abcdefghijklmnopoqrstuvwxyz";
  

  var str = "";

  for (var i = 0; i < name.length; i++) {
    var x = name[i];
    if (obj[x] === undefined) {
      obj[x] = 0;
    }


  }

  for (i = 0; i < arr.length; i++) {
    queue.push(arr[i]);
    temp = arr[i];
    obj[temp] = obj[temp] + 1;
    while (queue.length != 0) {
      if (obj[queue[0]] > 1) {
        queue.shift();
      }
      else {
        str = str + (queue[0]);
        break;
      }
    }
    if (queue.length == 0) {
      str = str + "#";
    }
  }
  return str;
  //   console.log(obj)
  //  console.log(ans)



}

function runProgram(input) {
  var input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;

  for (var i = 0; i < testCases; i++) {
    var arr = input[line].trim();

    line++;

    console.log(uniqueGift(arr));
  }



}
if (process.env.USERNAME === "siddhesh") {
  runProgram(`2
abadbc
abcabc`);
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