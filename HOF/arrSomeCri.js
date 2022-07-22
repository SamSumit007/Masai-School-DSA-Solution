var input = [2, 4, 5, 3, 6, 8];

var checkEvn= function(inp){
 return inp % 2 == 0;
}

var checkInd = function(inp, i){
    return i % 2 == 0;
}

console.log(input.filter(checkInd).filter(checkEvn))