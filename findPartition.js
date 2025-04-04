function canPartition(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);

    // If total sum is odd, we cannot partition it into two equal parts
    if (totalSum % 2 !== 0) return false;

    let leftSum = 0;
    let target = totalSum / 2;

    for (let num of arr) {
        leftSum += num;
        if (leftSum === target) return true;
    }

    return false;
}

console.log(canPartition([2,19,23,2])); // true
console.log(canPartition([1, 4, 19, 5])); // false
