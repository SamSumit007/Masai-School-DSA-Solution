var input = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var checkOdd = function(inp){
    if(inp % 2 == 1){
        return inp;
    }
}

var findLen = function(inp){
    return inp.length;
}

var doSum = function(el, ac){
    return el + ac ;
} 
console.log(input.map(findLen).filter(checkOdd).reduce(doSum));