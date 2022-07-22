function findit(array, l, h) {
if( l < h){
  let pivot = partition(array,l,h)
  findit(array,l , pivot-1)
  findit(array,pivot+1,h)
}
}
function partition(array, l, h) {
  let pivot = array[l];
  let i = l,
    j = h;
  while (i < j) {
    while (array[i] <= pivot) i++;
    while (array[j] > pivot) j--;
    if (i < j) {
      [array[j], array[i]] = [array[i], array[j]];
    }
  }
  [array[j], array[l]] = [array[l], array[j]];
  return j;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  findit(array, 0, 4)
  console.log(array);
}
if (process.env.USERNAME === "Ajit") {
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
