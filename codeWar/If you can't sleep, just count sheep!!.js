// Given a non - negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".Input will always be valid, i.e.no negative

function countSheep(num){
    var str = "";
    for(var i = 1; i <= num; i++){
        str = str + `${i} sheep...`;
    }
    return str;
}
console.log(countSheep(2));