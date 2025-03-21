const RadixArray = (arr) => {
    let max = Math.max(...arr);
    let maxDigits = max.toString().length;
    for (let k = 0; k < maxDigits; k++) {
      let buckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k);
        buckets[digit].push(arr[i]);
      }
      arr = [].concat(...buckets);
    }
    return arr;
  };
  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };
  console.log(RadixArray([23, 345, 5467, 12, 2345, 9852]));
  