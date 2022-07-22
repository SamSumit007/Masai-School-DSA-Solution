// You are going to be given an array of integers.Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.If there is no index that would make this happen, return -1.


function findEvenIndex(arr) {
    //Code goes here!

    var leftStack = [];
    var rightStack = [];

    for(var i = 0; i < arr.length; i++){
        if(i == 0){
            leftStack.push(0);
        }
        else{
            var sum = 0;

            for(var j = 0; j < i; j++){
                sum = sum + arr[j];
            }
            leftStack.push(sum);
        }
    }

    // return leftStack;

    var N = arr.length;

    for (var i = N-1; i >= 0; i--) {
        if (i == N-1) {
            rightStack.push(0);
        }
        else {
            var sum = 0;

            for (var j = N-1; j > i; j--) {
                sum = sum + arr[j];
            }
            rightStack.push(sum);
        }
    }

    // return rightStack.reverse();

    rightStack.reverse();
    // return rightStack;

var count = 0;
    for(var i = 0; i < rightStack.length; i++){
        if(rightStack[i] == leftStack[i]){
            return i;

        }else{
            count++;
        }
    }

    if(count> 0){
        return -1;
    }
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));