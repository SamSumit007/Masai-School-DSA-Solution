// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    var s=s.trim();
    var count=0;
    for(var i=s.length-1;i>=0;i--){
        if(s[i]!=" "){
            count++;
        }
        else{
            break;
        }
    }
    return count;
    
};