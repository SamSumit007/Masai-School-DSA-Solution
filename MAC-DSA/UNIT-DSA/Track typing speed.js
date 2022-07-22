
   function runProgram(input) {
    let inp = input.trim().split("\n");
    let keyboard = inp[0].trim();
    let word = inp[1].trim();
    let sum =keyboard.indexOf(word[0]);
    for(let j=0;j<word.length-1;j++){
        let ind = Math.abs(keyboard.indexOf(word[j])-keyboard.indexOf(word[j+1]));
        sum+=ind
    }
    console.log(sum);
}
    if (process.env.USERNAME === "Ajit") {
        runProgram(`pqrstuvwxyzabcdefghijklmno
        hello`);
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