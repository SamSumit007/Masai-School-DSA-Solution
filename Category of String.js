//string and length N is given str=abcd and N=4 then output=1234;

var alpha="abcdefghijklmnopqrstuvwxyz";
var bag="";
for(var i=0;i<N;i++)
{
    for(var j=0;j<alpha.length;j++)
    {
        if(str[i]==alpha[j])
        {
            bag+=(i+1);
        }
    }
}
console.log(bag);