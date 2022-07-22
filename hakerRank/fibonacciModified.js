
function fibonacciModified(t1, t2, n) {
    // Write your code here

    let dp = new Array(n+1).fill(-1);
    

    // console.log(dp)
    
    dp[0] = t1;
    dp[1] = t2;
    
    function fib(dp, n ){
        if(dp[n] != -1){
            return dp[n]
        }else{
            let x = fib(dp, n-1);
            let y = fib(dp, n-2);
             dp[n] = x**2  + y;
             return dp[n]
        }
    }
    fib(dp, n)
    return BigInt(dp[n-1]).toString();
}
 
console.log( fibonacciModified(0, 1, 10));