const findElement = (arr, target) => {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
  };
  const array = [1, 2, 3, 4, 5];
  const target = 3;
  const result = findElement(array, target);
  console.log(result);