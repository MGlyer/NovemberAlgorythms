/*
Given an array of non-negative integers, you are initially positioned
 at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
*/

const jump = (nums) => {
  let target = nums.length-1
  let least = target

  const recurse = (numOfJumps, ind) => {
    let currentMaxJump = ind + nums[ind]
    if (currentMaxJump >= target) {
      if (numOfJumps + 1 < least) {
        least = numOfJumps+1
      }
      return
    } else {
      let indToJump = 1
      while (indToJump <= nums[ind]) {
        recurse(numOfJumps+1, ind + indToJump++)
      }
    }
  }

  recurse(0, 0)
  return least
}

let input1 = [2,3,1,1,4]
console.log(jump(input1))