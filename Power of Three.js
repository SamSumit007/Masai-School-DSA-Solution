//return true if n is a integer that comes in power of 3 else flase

var isPowerOfThree = function(n) {
    for(var i=0;i<=31;i++){
        if(3**i==n){
            return true;
        }
        if(3**i>n){
            return false;
        }
    }
};