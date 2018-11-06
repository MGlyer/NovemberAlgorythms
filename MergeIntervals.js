/* 
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
*/

const merge = function(intervals) {
  let merged = []

  let temp

  for (var i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= merged[merged.length-1][1]) {
      merged[merged.length-1][1] = intervals[i][1]
      continue
    } else {
      merged.push(intervals[i])
    }
  }

  return merged
}