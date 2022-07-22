var l = 15;
var b = 10;
for (let i = 1; i <= l;i++)
{
    var temp = "";
    for (j = 1; j <= b;j++)
    {
        if (i == 1 || i == l || j == 1 || j == b)
            temp += "*";
        else
            temp += " ";
    }
    console.log(temp);
}