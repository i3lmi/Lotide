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
  const assertEqual = function(actual, expected) { 
    if (actual === expected) {
        console.log (`Assertion Passed: ${actual} === ${expected} `)
    } else {
        console.log (`Assertion Passed: ${actual} === ${expected} `)
    }

};

function middle(array) {
    let result = [];
    if (array.length <= 2) {
      return result;
    }
    let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      result.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      result.push(array[middleIndex]);
    }
    return result;
  }
  