const arr1 = [1,2,3,4,5,6,7,8,1,3,6,5,9]
const duplicateArr = arr1.filter((item,index)=>arr1.indexOf(item) !== index)
console.log(duplicateArr)