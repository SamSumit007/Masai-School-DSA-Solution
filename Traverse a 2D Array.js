//N row, M column
// 1 2 3
// 4 5 6
// 7 8 9
// output 7 4 1 8 5 2 9 6 3

var bag="";
for(var i=0;i<M;i++)
{
    for(var j=N-1;j>=0;j++)
    {
        bag+=arr[j][i];
    }
}
console.log(bag);