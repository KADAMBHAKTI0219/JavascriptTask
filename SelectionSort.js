const SelectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
    return arr;
  };
  const arr = [11, 3, 5, 2, 5, 12, 45, 6, 7];
  console.log(SelectionSort(arr));
  