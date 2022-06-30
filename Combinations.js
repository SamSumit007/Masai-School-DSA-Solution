// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

// You may return the answer in any order.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    var arr=[];
     for(var i=1;i<=n;i++){
         arr.push(i);
     }
     var ans=[];
     function solve(newarr,position,k){
         if(newarr.length==k){
             var bag=[];
             for(var i=0;i<newarr.length;i++){
                 bag.push(newarr[i]);
             }
             ans.push(bag);
             return;
         }
         for(var i=position;i<n;i++){
             newarr.push(arr[i]);
             solve(newarr,i+1,k);
             newarr.pop();
         }
     }
     var newarr=[];
     solve(newarr,0,k);
     return ans;
     
 };