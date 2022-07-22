function runProgram(input) {
  let newInput = input.trim().split("\n");
  var t = Number(newInput[0]);
  let q1 = [];
  let q2 = [];
  let q3 = [];
  let q4 = [];
  let mq = [];

  for (let i = 1; i <= t; i++) {
    let options = newInput[i].trim().split(" ");


    if (options[0] == "E") {
      let cno = options[1]; //club number
      let rno = options[2]; //roll number
      switch (cno) {
        case '1':
          if (!mq.includes(cno))
            mq.push(cno);
          q1.push(rno);
          break;
        case '2':
          if (!mq.includes(cno))
            mq.push(cno);
          q2.push(rno);
          break;
        case '3':
          if (!mq.includes(cno))
            mq.push(cno);
          q3.push(rno);
          break;
        case '4':
          if (!mq.includes(cno))
            mq.push(cno);
          q4.push(rno);
          break;
      }
    } else if (options[0] == 'D') {
      switch (mq[0]) {
        case '1':
          console.log(mq[0] + " " + q1[0]);
          q1.shift();
          if (q1.length == 0)
            mq.shift();
          break;
        case '2':
          console.log(mq[0] + " " + q2[0]);
          q2.shift();
          if (q2.length == 0)
            mq.shift();
          break;
        case '3':
          console.log(mq[0] + " " + q3[0]);
          q3.shift();
          if (q3.length == 0)
            mq.shift();
          break;
        case '4':
          console.log(mq[0] + " " + q4[0]);
          q4.shift();
          if (q4.length == 0)
            mq.shift();
          break;

      }
    }

  }


}
if (process.env.USERNAME === "getsu") {
  runProgram(`5
  E 1 1
  E 2 1
  E 1 2
  D
  D`);
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