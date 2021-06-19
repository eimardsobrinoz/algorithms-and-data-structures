/**
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:
-2^31 <= x <= 2^31 - 1   
*/


function reverse(x: number): number {
    const limit:number = Math.pow(2, 31);
    const result: number = x< 0 ? -Number(String(Math.abs(x)).split("").reverse().join("")) : Number(String(Math.abs(x)).split("").reverse().join(""));
    return (result < -limit || result >= limit) ? 0 : result;
};
 /*  COMPLEXITY ANALYSIS: 
        - Time complexity : O((n))
        - Space complexity : O(1)O(1).
*      
*/

//Follow up: Could you solve it without converting the integer to a string?
function reverseWithoutStringConversion(x: number): number {
    const isNegative: boolean = x < 0;
    const limit:number = Math.pow(2, 31);
    x = Math.abs(x);
    let reverted: number = 0;
    while(x > 0) {
       reverted =  reverted * 10 + x % 10;
       x = Math.floor(x / 10);
    }
   if (reverted < -limit || reverted >= limit) return 0;
   return isNegative ? -reverted : reverted;
 };



 /*  COMPLEXITY ANALYSIS: 
        - Time complexity : O(\log_{10}(n))O(log10(n)). We divided the input by 10 for every iteration, 
        so the time complexity is O(\log_{10}(n))O(log 10(n))

        - Space complexity : O(1)O(1).
*      
*/