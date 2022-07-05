// Pasha and Shasha are fighting over two strings, whether they are anagrams or not, help them.


// Input
// 1<=T<=10

// next 2T lines consists of strings s1 and s2 for each test case

// 1<=S1<=100000

// 1<=S2<=100000


// Output
// output True if they are anagrams else False;






function validAnagram(str1, str2) {
  if (!str1.length == str2.length) {
		console.log("False");
	} else {
		return str1.toLowerCase().split('').sort().join() == 
		str2.toLowerCase().split('').sort().join() 
		? console.log("True")  :console.log("False");
	}
 
}
