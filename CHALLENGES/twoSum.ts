/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
      
*/

function twoSum(nums: number[], target: number): number[] {
    const arrayLength: number = nums.length;
    if (arrayLength < 1) return [];
    const complementsMap: Map<number, number> = new Map<number, number>();
    for(let i=0;i < arrayLength; i++) {
        const num: number = nums[i];
        if (complementsMap.has(num)) return [complementsMap.get(num), i];
        complementsMap.set(target - num, i);
    }
    return [];
};
  
console.log('Does "[3,2,4]" has a pair that sum 6?', twoSum([3,2,4], 6));
  

/*
*********  COMPLEXITY: 
            Time complexity : The hash table reduces the look up time to O(1)O(1), 
            the time complexity is O(n)O(n).

            Space complexity : O(n)O(n). 
            The extra space required depends on the number of items stored in the hash table,
            which stores exactly nn elements. 
*/ 