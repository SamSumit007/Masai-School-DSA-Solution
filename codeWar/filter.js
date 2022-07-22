// In this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
    var ans = [];
    var arr = [];
    for (var i = 0; i < l.length; i++) {
            arr.push(typeof(l[i]));
    }

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "number"){
            ans.push(l[i]);
        }
    }

    return ans;
}

// Together Each Accomplishes More