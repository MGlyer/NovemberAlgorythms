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
  var currentAnswer = []

  const recurseAdd = () => {
    if (currentAnswer.length === nums.length) {
      answer.push(currentAnswer)
    }

    nums.forEach(num => {
      if (!currentAnswer.includes(num)) {
        currentAnswer.push(num)
        recurseAdd()
        currentAnswer = currentAnswer.slice(0, currentAnswer.length-1)
      }
    })
  }

  recurseAdd()

  return answer
}

let input1 = [1,2,3]

console.log(permute(input1))