//map  numbers from key 1 to N and value start from M 
var obj={};
for(var i=0;i<N;i++)
{
    obj[i]=M;
    M++;
}

for(var key in obj )
{
    console.log(key+"-"+obj[key]);
}