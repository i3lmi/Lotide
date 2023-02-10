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

function assertArraysEqual(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log("The arrays are equal.");
    } else {
      console.log("The arrays are not equal.");
    }
  }

const letterPositions = (sentance) => {
    let newObject = {}
    for (let i = 0; i < sentance.length; i++){
        if (sentance[i] !== ' ') {
            if (newObject[sentance[i]]) {
                newObject [sentance[i]].push(i)
            } else {
                newObject [sentance[i]]= [i]
            }

        } 
    } 
    return newObject

} 
assertArraysEqual(letterPositions("hello").e, [1]);
