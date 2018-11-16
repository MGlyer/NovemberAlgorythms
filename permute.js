/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

I feel like the obvious solution is the worst one....but here goes
*/

const permute = (nums) => {
  let answer = []

  const recurse = (arr) => {
    for (var i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i])
        if (arr.length === nums.length) {
          answer.push(arr)
          return
        } else {
          recurse(arr)
          arr = arr.slice(0, arr.length-2)
        }
      }
    }
  }

  for (var i = 0; i < nums.length; i++) {
    let array = [nums[i]]
    recurse(array)
  }

  return answer
}

let input1 = [1,2,3]

console.log(permute(input1))