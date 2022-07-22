const part = (array,l,h)=>{
    let pivot = array[l],i = l,j = h;
    while(i < j){
        while(array[i] <= pivot)i++;
        while (array[j] > pivot) j--;
        if(i < j)[array[i], array[j]] = [array[j], array[i]]
    }
    [array[j], array[l]] = [array[l], array[j]]
    return j;
}

const findMerge = (array,l,h)=>{
 if(l < h){
     let pivot = part(array, l, h)
     findMerge(array,l, pivot-1)
     findMerge(array,pivot + 1, h)
 }
}

const runProgram = (input) => {
    input = input.trim().split("\n");
    let array = input[1].trim().split(" ").map(Number);
    findMerge(array,0,array.length-1)
    console.log(array);
  };
  if (process.env.USERNAME === "Dharmesh") {
    runProgram(`5
      3 5 0 9 8`);
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
  
  