function eqArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }

  function assertArraysEqual(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log("The arrays are equal.");
    } else {
      console.log("The arrays are not equal.");
    }
  }

  assertArraysEqual([1, 2, 3], [1, 2, 3]); // logs "The arrays are equal."
assertArraysEqual([1, 2, 3], [3, 2, 1]); // logs "The arrays are not equal."
