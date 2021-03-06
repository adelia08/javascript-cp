// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let maxSum = 0,
    minSum = 0;
  arr.sort();

  for (let i = 0; i < arr.length - 1; ++i) {
    minSum += arr[i];
  }
  for (let i = 1; i < arr.length; ++i) {
    maxSum += arr[i];
  }
  return `${minSum} ${maxSum}`;
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result);
}

main(); // execute program

module.exports = miniMaxSum;
