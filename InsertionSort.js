const InsertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] > current) {
          arr[j + 1] = arr[j];
          arr[j] = current;
        }
      }
    }
    return arr;
  };
  
  const arr = [7, 12, 9, 11, 3];
  console.log(InsertionSort(arr));
  