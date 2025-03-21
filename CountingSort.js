const CountSort = (arr) => {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    for (let i = 0; i < arr.length; i++) {
      count[arr[i] - min]++;
    }
    let index = 0;
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        arr[index] = i + min;
        index++;
        count[i]--;
      }
    }
    return arr;
  };
  
  let arr = [1, 4, 1, 2, 7, 5, 2];
  let sortedArr = CountSort(arr);
  console.log(sortedArr);
  