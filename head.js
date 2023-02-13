const assertEqual = require('./assertEqual');
if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected} `);
  } 
};

let array = ["first", "second", "third", "fourth", "fifth"];
const head = function (array) {
  if (array === []) {
    return undefined;
  }
  let firstIndex = array[0];
  return firstIndex;
};

assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 6);