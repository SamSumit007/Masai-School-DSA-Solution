function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].split(" ").map(Number)

    var odd_sum = 0
    var even_sum = 0

    for(var i = 0; i < array.length; i++)
    {
        if(i%2 == 0)
        {
            even_sum += array[i]
        }
        else
        {
            odd_sum += array[i]
        }
    }

    if(odd_sum == even_sum)
    {
        console.log("YES")
    }
    else
    {
        console.log("NO")
    }
}
    if (process.env.USERNAME === "") {
        runProgram(`2
        2 2`);
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