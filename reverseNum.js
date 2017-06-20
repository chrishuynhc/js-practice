/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/



var reverse = function(x) {
    
    x = x.toString();
    y = parseInt( x.split("").reverse().join(""));
    if (x >= 0){
        if (y > 2147483647 || y < -2147483647){
            return 0;
        } else {
            return y;
        }
    } 
    else if (x < 0){
        y = -y;
        if (y > 2147483647 || y < -2147483647){
            return 0;
        } else {
            return y;
        }
    }
};