//c1 is the number of elements in the array divisible by 4
//c2 is the number of elements in the array divisible by 2
//c3 is the number of elements in the array divisible by 3
//c4 is the number of elements in the array which are not divisible by 4,2 and 3
//arr and N is length

    var c1=0;
	var c2=0;
	var c3=0;
	var c4=0;
	for(i=0;i<N;i++)
	{
	    if(arr[i]%4==0)
	    {
	        c1++;
	    }
	    if(arr[i]%2==0)
	    {
	        c2++;
	    }
	    if(arr[i]%3==0)
	    {
	        c3++;
	    }
	    if(arr[i]%2!=0&&arr[i]%3!=0&&arr[i]%4!=0)
	    {
	        c4++;
	    }
	}
