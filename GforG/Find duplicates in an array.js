// Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.
var a =[13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4, 25, 14, 23, 14]

function duplicates(a){
        
    let obj ={};

    for(var i = 0; i < a.length; i++){

        if(obj[+a[i]] === undefined){
            obj[+a[i]] = 1;
        }else{
            obj[a[i]]++;
        }

    }

    // return obj;
    let str = ""

    for(key in obj){

        if( obj[key] > 1){
            str += key + " ";
        }

    }

    if(str == ""){
        return -1
    }else{
        return str;
    }
        
        
        
}
console.log( duplicates(a));