// *****
//     *
//     *
//     *
// ***** 
// N=5 ///till N

for(var i=0;i<=N;i++)
{
    var bag="";
    for(var j=0;j<=N;j++)
    {
        if(i==1||i==N)
        {
            bag+="*"+" ";
        }
        else if(j==N)
        {
            bag+="*";
        }
        else
        {
            bag+=" ";
        }
    }
    console.log(bag);  
}