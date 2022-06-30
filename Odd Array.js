//odd elements from array that is given
var oddarr=[];
for(var i=0;i<array.length;i++)
{
    if(array[i]%2!=0)
    {
        oddarr.push(array[i]);
    }
}
console.log(oddarr);