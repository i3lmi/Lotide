const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`Assertion failed: ${actual} === ${expected} `);
  }
};
const tail = function (array) {
  if (array === []) {
    return undefined;
  }

  return array.slice(1, array.length);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
//assertEqual(result, ["Lighthouse", "Labs"]); // => wil
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail([]));

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }

  return array.slice(1);
};

module.exports = tail;

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('should return [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('should return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('should not modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});
