//length of longest substr that start and end with 0  if 0 appear in str only 1 or less then output is 0

    var count=0;
    for(i=0;i<N;i++)
    {
        if(str[i]==0)
        {
            count++;
        }
    }
    
    if(count==1)
    {
        console.log(0)
    }
    else
    {
    var length=0;
    for(i=0;i<N;i++)
    {
        for(j=i;j<N;j++)
        {
            var temp="";
            for(k=i;k<=j;k++)
            {
                temp+=str[k];
            }
            if(temp[0]==0&&temp[temp.length-1]==0)
            {
                if(length<temp.length)
                {
                    length=temp.length;
                }
            }
        }
    }
    console.log(length);
    }