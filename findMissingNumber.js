function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let totalSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return totalSum - actualSum;
}


console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
