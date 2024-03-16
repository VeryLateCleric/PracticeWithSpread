// We can use the spread operator ... to expand elements of an array into another array.
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log("Test 1:", array2);
// Now contains [1, 2, 3, 4, 5, 6]

const arrayMerge1 = [1, 2, 3, 4];
const arrayMerge2 = [5, 6, 7, 8];
const mergedArrays = [...arrayMerge1, ...arrayMerge2];
console.log("Test 2:", mergedArrays)
// Here we concatenate the arrays together by spreading each element of each array into a new array.

// We can also use spread to make a shallow copy of an array.
const originalArray = [ 1, 2, 3, 4];
const copyOfArray = [...originalArray]; //Will make a copy of originalArray that read [1, 2, 3, 4]
console.log("Test 3: Original", originalArray);
console.log("Test 3: Copy", copyOfArray);
// A shallow copy creates a new obj or array and inserts references to the same elements found in the original.
// It duplicates the structure of original elements but not the actual elements themselves.
// Any nested objects or arrays within original will still be referenced in the copied object.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4, e: 5 };
const mergedObject = {...obj1, ...obj2};
console.log("Test 4: ", mergedObject)

// 

function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const result = sum(...numbers); // total is 6
  console.log(result)