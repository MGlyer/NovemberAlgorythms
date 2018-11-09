/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

var firstMissingPositive = function(nums) {
   let lowest = 1;
   //left pass right pass?
   for (var i = 0; i < nums.length; i++) {
     if (nums[i] === lowest) {
       lowest++
     }
   }

   for (var i = nums.length-1; i <= 0; i--) {
     if (nums[i] === lowest) {
       lowest++
     }
   }

   return lowest
};

let input1 = [1,2,0]
let input2 = [3,4,-1,1]
let input3 = [7,8,9,11,12]
let input4 = [2,4,1]
let input5 = [2,3,4,1]