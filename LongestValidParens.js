/*
Given a string containing just the characters '(' and ')', find the 
length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
*/

var longestValidParentheses = function(s) {
  //declare outside length
  //iterate thru
  
  const validParens = function(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
      const el = string[i];
      if (el === '(') {count ++}
      else {
        count--
        if (count < 0) {return false}
      }
    }
    return count === 0
  }

  if (validParens(s)) return s.length

  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j >= 0; j--) {
      var currentParens = s.slice(i, j)
      if (currentParens.length > longest && validParens(currentParens)) {
        longest = currentParens.length
      } 
    }
    if ((s.length-1 - i) < longest) break
  }

  return longest
};

let input1 = "(()"
let input2 = ")()())"
let input3 = ")()()()("
let input4 = ")(((((()())()()))()(()))("
console.log(longestValidParentheses(input4))