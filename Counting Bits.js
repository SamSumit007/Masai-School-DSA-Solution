/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    var ans=[];
    for(var i=0;i<=n;i++){
       ans.push(binary(i));
    }
    
    return ans;
    
    function binary(num){
        if(num==0 || num==1){
            return num;
        }
    
        if(num%2==0){
            return binary(Math.floor(num/2));
        }
        else{
            return 1+binary(Math.floor(num/2));
        }
    }
        
        
    };