//You are given an arraymatrixofnrows andmcolumns which contains lower case English letters.
//saba

//s           s                       a
//a             a                   b
//b               b               a
//a                 a           s

 var count = 0 ;//keeps track of the number of instances where string formed is equal to "saba".
 for (var i=0;i<n;i++)
 {
	 for (var j=0;j<m;j++)
	 {
		if (j<m-3)
		{
			 var temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3] ;//horizontal traversal
			 if (temp == "saba"){ count++}
		}
		 if (i<n-3)
		 {
			 var temp = arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j] ;//vertical traversal
			if (temp == "saba") {count++}
		 }
		 if (i<n-3 && j<m-3)
		 {
			 var temp = arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3]; //diagonal traversal right and down
			 if (temp == "saba"){ count++}
		 }
		if (i>=3 && j<m-3)
	    {
			 var temp = arr[i][j] + arr[i-1][j+1] + arr[i-2][j+2] + arr[i-3][j+3] ;//diagonal traversal right and up
 		 if (temp == "saba"){ count++}
	    }
	 }	 
 }	 
 console.log(count);