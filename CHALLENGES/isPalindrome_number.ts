/**
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.


Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
 

Constraints:
-2^31 <= x <= 2^31 - 1
  
*/

function isPalindrome(x: number): boolean {
    const limit: number = Math.pow(2, 31);
    if(x < 0 || x< -limit || x> limit) return false;
    const inverse: number = Number(String(x).split("").reverse().join(""));
    return x === inverse;
};
/*  COMPLEXITY ANALYSIS: 
        - Time complexity : O((n))
        - Space complexity : O(1)O(1).
*      
*/



//Follow up: Could you solve it without converting the integer to a string?


function isPalindromeWithoutStringConversion(x: number): boolean {
    if(x < 0 || (x % 10 == 0 && x != 0))  return false;
    let reverted: number = 0;
    while(x > reverted) {
       reverted =  reverted * 10 + x % 10;
       x = Math.floor(x / 10);
    }
   return x == reverted || x == Math.floor(reverted/10);
 };
 /*  COMPLEXITY ANALYSIS: 
        - Time complexity : O(\log_{10}(n))O(log10(n)). We divided the input by 10 for every iteration, 
        so the time complexity is O(\log_{10}(n))O(log 10(n))

        - Space complexity : O(1)O(1).
*      
*/