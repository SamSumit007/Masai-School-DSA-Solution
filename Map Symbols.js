//map symbols as key and values start from N and with difference of 2

var symbols="!@#$%^&*";
var obj={};
for(var i=0;i<symbols.length;i++)
{
    obj[symbols[i]]=N;
    N+=2;
}
for(var key in obj)
{
    console.log(key+"-"+obj[key]);
}