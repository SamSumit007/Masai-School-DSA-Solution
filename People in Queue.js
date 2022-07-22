function peopleQueue( K, arr1, arr2){
    // console.log(K,arr1,arr2)
    let queue = [];

    for(var i = 0; i < arr1.length; i++){
      
            if(arr1[i] == "1"){
                if(queue.length < K){
                    queue.push(arr2[i]);
                    console.log(arr2[i]);
                }else{
                    console.log("-1");
                }
               
            } 
            
                if (arr1[i] == "2") {
                    if(queue.length > 0){
                        console.log(queue[0]);
                        queue.shift();
                    }else{
                        console.log("-1")
                    }
                   
                }
            
            

        

       
      
       
    }


}

function runProgram(input) {
   var input = input.trim().split("\n");
    var line = 0;
    var arrTest = input[line].trim().split(" ").map(Number);
    var K = arrTest[0];
    var N = arrTest[1];

    line++;
    var arr1 = [];
    var arr2 = [];

    for (var i = 0; i < N; i++) {
        var arr = input[line].trim().split(" ");
        line++;
        arr1.push(arr[0]);
        arr2.push(arr[1]);


    }

    peopleQueue(K,arr1, arr2);
   
  }
  if (process.env.USERNAME === "siddhesh") {
      runProgram(`2 6
1 1
1 2
1 3
2
2
2 `);
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