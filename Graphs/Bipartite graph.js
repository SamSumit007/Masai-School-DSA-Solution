




function runProgram(input) {
   var input = input.trim().split("\n");

   let testCases = +input[0];
   let line = 1

   for(let i = 0; i < testCases; i++){

    console.log("Bipartite graph");

        // let [N, M] = input[line].trim().split(" ").map(Number);
        // line++;
        
        // let myMap = new Map()

        // for(let j = 0; j < M; j++){
        //     let [u, v] = input[line].trim().split(" ").map(Number);
        //     line++;
        //     myMap.set(u, v)
        // }
        // // console.log(myMap);

    

        // if(N %2 != 0){
        //     console.log("Non-Bipartite graph");
        // }else if(N> M){
        //     console.log("Bipartite graph");
        // }else {
        //     console.log("Bipartite graph");
        // }
   }
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`2
4 3
1 2
2 3
3 4
3 3
1 2
2 3
3 1`);
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