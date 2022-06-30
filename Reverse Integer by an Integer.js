//int is given

var rev=0;
while(int>0)
{
    var remainder=int%10;
    rev=(rev*10)+remainder;
    int=Math.floor(int/10);
}
console.log(rev);
