const arr1 = [1,2,3,[4,5]]
console.log(arr1.flat())

const arr2 = [1,2,3,[4,5,[6,[7,8]]]]
console.log(arr2.flat(3))

const arr3 =[1,2,[3,4,[5,[6,7,[8,9,[10,11]]]]]]
console.log(arr3.flat(Infinity))