// Given a sorted array containing only 0s and 1s, find the transition point.

let arr = [0,0,0,1,1]

for(var i = 0; i <arr.length; i++){

    if(arr[i] != arr[i+1]){
        return i;
    }

}

return -1;