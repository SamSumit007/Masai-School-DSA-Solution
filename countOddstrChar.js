var s = ["masai", "school", "is", "a", "coding", "school"];

function oddChar(el,i)   // to excess the indexes
{
      
    return  (i % 2 == 1);
      
}

var temp = s.filter(oddChar);
// console.log(temp);
var count = 0;
 
for (let i = 0; i < temp.length;i++)
{
    for (let j = 0; j < temp[i].length;j++ )
    {
        count++;
    }
}
console.log(count);