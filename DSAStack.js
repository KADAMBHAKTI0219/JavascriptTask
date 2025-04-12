// DSA STACKS ADD
const array = [];
const addNumberInArray = (...arr) => {
  for (let i = 0; i < arr.length; i++) {
    array[array.length] = arr[i];
  }
  console.log("Array.Push", array);
  return array;
};
addNumberInArray(1, 2, 3, 45, 6, 78, 97);

// const addNumberInArrayOneByOne = (number) => {
//   array[array.length] = number;
//   console.log(array)  ;
// };
// addNumberInArrayOneByOne(1);
// addNumberInArrayOneByOne(16);
// addNumberInArrayOneByOne(24);
const removeNumberInArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1]) {
      arr.length = arr.length - 1;
    }
  }
  console.log("Array.Pop", arr);
};

removeNumberInArray(addNumberInArray());

const Position = (number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      console.log("Array.IndexOf", i);
    }
  }
};

Position(78);

const SizeStack = () => {
  console.log('Array.Size',array.length);
};
SizeStack()

const PeekStack = () => {
  for (let i = 0; i <= array.length; i++) {
    if (i == array.length - 1) {
      console.log("Array.Peek", array[i]);
    }
  }
};

PeekStack();

const isEmpty = () => {
  const arr = array;
  if (arr) {
    console.log("false");
  } else {
    console.log("true");
  }
};
isEmpty();
