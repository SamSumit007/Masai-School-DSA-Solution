var arr1 = [0,2,4];
var arr2 = [1,3,5];
function merging(arr1,arr2) {
    let array = [];
    let a = 0;
    let b = 0
    while (a < arr1.length && b < arr2.length){
        if(arr1[a] < arr2[b]){
            array.push(arr1[a]);
            a++;
        }
        else{
            array.push(arr2[b]);
            b++;
        }
    }
    while(a<arr1.length){
        array.push(arr1[a]);
        a++;
    }
    while(b<arr2.length){
        array.push(arr2[b]);
        b++;
    }
    return array;
}
console.log(merging(arr1,arr2))