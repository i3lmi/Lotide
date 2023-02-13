const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const result = callback(item, i, array);
    results.push(result);
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log("Map results:", results1);

const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log("The arrays are equal.");
    } else {
      console.log("The arrays are not equal.");
    }
  };
  
  const map = function(array, callback) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const result = callback(item, i, array);
      results.push(result);
    }
    return results;
  };
  
  const words = ["ground", "control", "to", "major", "tom"];
  const expected1 = ["g", "c", "t", "m", "t"];
  const results1 = map(words, word => word[0]);
  assertArraysEqual(results1, expected1);
  
  const numbers = [1, 2, 3, 4, 5];
  const expected2 = [2, 4, 6, 8, 10];
  const results2 = map(numbers, number => number * 2);
  assertArraysEqual(results2, expected2);
  
  const strings = ["hello", "world", "foo", "bar"];
  const expected3 = [5, 5, 3, 3];
  const results3 = map(strings, string => string.length);
  assertArraysEqual(results3, expected3);
  