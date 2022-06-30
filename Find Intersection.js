//array of 2 strings is given find intersection in both of of strings
//intersection is not availble then return false

function FindIntersection(strArr) {

    // code goes here 
    var arr = strArr[0].split(",").map(Number);
    var str = strArr[1].split(",").map(Number);
    var bag = [];
    var flag = false;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (arr[i] == str[j]) {
                bag.push(arr[i]);
                flag = true;
            }
        }
    }
    if (flag) {
        return "" + bag;
    }
    else {
        return flag;
    }

}

// keep this function call here 
console.log(FindIntersection(readline()));