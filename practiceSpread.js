// We can use the spread operator ... to expand elements of an array into another array.
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log("Test 1:", array2);
// Now contains [1, 2, 3, 4, 5, 6]

const arrayMerge1 = [1, 2, 3, 4];
const arrayMerge2 = [5, 6, 7, 8];
const mergedArrays = [...arrayMerge1, ...arrayMerge2];
console.log("Test 2:", mergedArrays)
