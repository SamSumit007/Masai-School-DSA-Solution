//You are given a strings, you have to find the count of all such substrings which start and ends with the same character.
var count=0;
for(var i=0;i<s.length;i++)
{
    for(var j=i;j<s.length;j++)
    {
        var bag="";
        for(var k=i;k<=j;k++)
        {
            bag+=s[k];
        }
        if(bag[0]==bag[bag.length-1])
        {
            count++;
        }
    }
}
console.log(count);