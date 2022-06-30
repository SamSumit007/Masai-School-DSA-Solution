//array contains onlt 0 and 1 sum of all indexs that contain only 0 indexing from 1

var sum=0;
for(var i=0;i<array.length;i++)
{
    if(array[i]==0)
    {
        sum+=i+1;
    }
}
console.log(sum);