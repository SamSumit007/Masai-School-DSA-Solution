//Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. 
//You may return the combinations in any order.
//The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

var combinationSum = function (candidates, target) {

    var res = [];
    function recur(remain, idx, cur) {
        if (remain < 0) {
            return;
        }
        if (remain == 0) {
            res.push(cur.slice());
        }
        for (var i = idx; i < candidates.length; i++) {
            cur.push(candidates[i]);
            recur(remain - candidates[i], i, cur);
            cur.pop();
        }
    };
    recur(target, 0, []);
    return res;

};


//new method
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