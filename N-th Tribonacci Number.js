// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    var dp= new Array(n+1).fill(-1);
    function tribo(n){
        if(n==0||n==1){
            return n;
        }
        if(n==2){
            return 1;
        }
        if(n<0){
            return 0;
        }
        if(dp[n]!=-1){
            return dp[n];
        }
        else{
            dp[n]=tribo(n-1)+tribo(n-2)+tribo(n-3);
            return dp[n];
        }
    }
    var ans=tribo(n);
    return ans;
};