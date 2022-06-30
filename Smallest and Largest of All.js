//array is given

var min=array[0];
var max=array[0];
for(var i=0;i<array.length;i++)
{
    if(array[i]<min)
    {
        min=array[i];
    }
    if(array[i]>max)
    {
        max=array[i];
    }
}
console.log(min);
console.log(max);