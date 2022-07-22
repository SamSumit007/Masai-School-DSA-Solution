function BinaryS( K, arr, l, h ) {

  // arr.sort((a, b) => { return a - b });

  // console.log(N, K, arr);

  let low = l;

  let high = h;

  while (low <= high) {

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == K) {

      return mid;
    }

    if (arr[mid] > K) {

      high = mid - 1;


    } else {
      low = mid + 1;
    }

  }

  return -1;

}

function minSortArr(N, arr) {

  // console.log(N, arr);

  let low = 0;
  let high = N - 1;

  while (low <= high) {

    let mid = Math.floor((high + low) / 2);

    if (arr[mid] < arr[(mid + 1) % N] && arr[mid] < arr[(mid - 1 ) % N]) {

      return mid;

    }
    if (arr[low] <= arr[mid]) {
      low = mid;
    } else {
      high = mid;
    }

  }

}


function rotateArr(N, arr, K){

  let pivot = minSortArr(N, arr);
  let find;

  if( K >= arr[ pivot] && K <= arr[N -1]){

    find = BinaryS(K, arr, pivot, N - 1);


  }else{

     find = BinaryS( K, arr, 0, pivot-1);

  }

  return find;
   
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var arr1 = input[0].trim().split(" ").map(Number);

   var arr = input[1].trim().split(" ").map(Number);

   var N = +arr1[0];
   var K = +arr1[1];

//    arr.sort();
    
  console.log(  rotateArr(N, arr, K));
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`5 1
3 4 5 1 2`);
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