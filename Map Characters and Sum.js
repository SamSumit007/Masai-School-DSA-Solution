//Num,K,Str is given like 30,3,abc then outpput is 93
//k length of str

var alpha="abcdefghijklmnopqrstuvwxyz";
var obj={};
for(var i=0;i<alpha.length;i++)
{
    obj[alpha[i]]=num;
    num++;
}

var sum=0;
for(var i=0;i<K;i++)
{
    sum+=obj[str[i]];
}
console.log(sum);

