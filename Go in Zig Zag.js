//1 2 3 4
//5 6 7 8
//4 5 7 2
//output 4 3 2 1 5 6 7 8 2 7 5 4 N/M arr given

var bag="";
for(var i=0;i<N;i++)
{
    if(i%2==0)
    {
        for(var j=M-1;j>=0;j--)
        {
            bag+=arr[i][j]+" ";
        }
    }
    else
    {
        for(var j=0;j<M;j++)
        {
            bag+=arr[i][j]+" ";
        }
    }
}
console.log(bag);