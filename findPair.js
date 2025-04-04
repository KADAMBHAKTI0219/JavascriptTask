function findPairs(arr, targetSum) {
    let pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

console.log(findPairs([2, 19, 7, -2, 19], 21)); // [[2, 19], [19, 2]]
