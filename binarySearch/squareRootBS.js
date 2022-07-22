let N = 144;


function squarRoot(N){

    let low = 1;
    let high = N;


    while(low <= high){
        
        let mid = Math.floor(low+ (high -low)/2);

        if( mid * mid == N){
            return mid;

        }

        if( mid * mid > N){

            high = mid -1;

        }else{
            low = mid+1;
        }

    }
    return -1;


}

console.log( squarRoot(N));