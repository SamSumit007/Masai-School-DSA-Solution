//1234  4848
//5678  3737
//1234  2626
//5678  1515

for(var i=C-1;i>=0;i--)
{
    var bag="";
    for(var j=0;j<R;j++)
    {
        bag+=arr[j][i]+" ";
    }
    console.log(bag);
}