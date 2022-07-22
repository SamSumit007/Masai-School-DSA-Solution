
function lowerBound( arr, K){

    let low = 0;

    let high = arr.length-1;

    let ans = -1;

    while( low <= high){

        let mid = Math.floor( low + (high - low)/2);

        if( arr[mid] == K){

            ans = mid;

            high = mid-1;

        }else if( arr[mid] > K ){

            high = mid -1;

        }else{
            low = mid +1;
        }

    }

    return ans;

}


function upperBound(arr, K, arr2){

    let low = 0;

    let high = arr.length-1;

    while( low <= high ){

        let mid = Math.floor(low + (high - low) / 2);
        
        
        if( arr[mid] > K){
            arr2.push(mid);
            high = mid - 1;
        }else{
            low = mid +1;
        }

    }

    if(arr2.length> 0){

        return Math.min(...arr2);

    }else{

        return -1;
    }

}




function runProgram(input) {
    var input = input.trim().split("\n");

    let arr1 = input[0].trim().split(" ").map(Number);

    let arr = input[1].trim().split(" ").map(Number)

    //    console.log(arr);
    let arr2 = [];
    let N = +arr1[0];
    let K = +arr1[1];

    let lb = lowerBound(arr, K);

    let ub = upperBound(arr, K, arr2);


    // console.log(lb);
    // console.log(ub);
    // NumbOLog(N, K, arr, ans);
    
    if( lb == -1 && ub == -1){

        console.log(0)

    }else if ( ub == -1){

        console.log(N - lb)

    }else if( lb == -1){

        console.log( N - ub)

    }else{

        console.log(ub - lb);
    }


}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`6 3
2 3 3 3 6 9`);
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