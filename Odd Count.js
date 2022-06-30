//odd count at odd position in array and also less then K

var count=0;
for(var i=0;i<array.length;i++)
{
    if(i%2!=0)
    {
        if(array[i]<K)
        {
            count++;
        }
    }
}
console.log(count);