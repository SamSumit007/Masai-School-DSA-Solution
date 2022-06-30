//map characters with given numbers like num=3 then start from 1 till num a-1,b-2,c-2
var alpha="abcdefghijklmnopqrstuvwxyz";
var obj={};
for(var i=0;i<num;i++)
{
    obj[alpha[i]]=i+1;
}

for(var key in obj )
{
    console.log(key+"-"+obj[key]);
}
