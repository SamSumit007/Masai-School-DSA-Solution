//array and size n is given

//by object
var obj={};
for(var i=0;i<num.length;i++)
{
    if(obj[num[i]]==undefined) // (!obj[num[i]])
    {
        obj[num[i]]=1;
    }
    else
    {
        obj[num[i]]=obj[num[i]]+1;
    }
}
var max=0;
var element;
for(var key in obj)
{
    if(obj[key]>max)
    {
        element=key;
        max=obj[key];
    }
}
console.log(element);

//by map
var m=new Map();
for(var i=0;i<num.length;i++)
{
    if(!m.has(num[i]))  //m.has(num[i])==undefined
    {
        m.set(num[i],1);
    }
    else
    {
        m.set(num[i],m.get(num[i])+1);
    }
}
var max1=0;
var element1;
for(var[key,value] of m)
{
    if(m.get(key)>max1)
    {
        element1=key;
        max1=m.get(key);
    }
}
console.log(element1);