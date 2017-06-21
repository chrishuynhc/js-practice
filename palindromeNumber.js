/*
Determine whether an integer is a palindrome. Do this without extra space.
*/


var isPalindrome = function(x) {
    
    x = x.toString();
    
    var y = x.split("").reverse().join("");
    if (x == y){
        return true;
    } else {
        return false;
    }
};