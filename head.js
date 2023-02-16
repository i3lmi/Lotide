const head = function(array) {
  if (array === undefined || array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;


const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 6 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 6);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), "Hello");
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

});
