// Longest Consecutive Sequence:
// Given an unsorted array of integers, find the length of the longest consecutive sequence of numbers.


function longestConsecutive(arr) {
    arr.sort((a, b) => a - b);
    let result = 1, count = 1;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i-1]){
            continue;
        }
         if(arr[i] === arr[i-1] + 1){
             count++;
         }
         else{
             count = 1;
         }
         
         result = Math.max(result,count)
    }
    return result
}

// Driver Code
const arr = [2, 6, 1, 9, 4, 5, 3];
console.log(longestConsecutive(arr));
