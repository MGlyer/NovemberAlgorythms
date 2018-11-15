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






/* stolen code
var jump = function(nums) {
    var curr = 0;
    var jumps = 0;
    var maxReach = 0;
    var newIndex;
    var index = 0;
		
    if(length <=1) {
        return 0;
    }
    while(index < nums.length) {
        if(index + nums[index] > maxReach) {
            newIndex = index;
            maxReach = index + nums[index];
        } 
        if(index >= (curr + nums[curr])) {
           jumps++;
           curr = newIndex;
        } 
        if(curr + nums[curr]>= nums.length -1) {
            jumps++;
            break;
        }       
        index++;
    }    
    return jumps;
};
*/