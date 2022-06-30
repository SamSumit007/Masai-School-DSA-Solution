//map characters with given numbers like num=3 then start from num till z :- a-3,b-4,c-5...till z
var alpha="abcdefghijklmnopqrstuvwxyz";
var obj={};
for(var i=0;i<alpha.length;i++)
{
    obj[alpha[i]]=num;
    num++;
}

for(var key in obj )
{
    console.log(key+"-"+obj[key]);
}
