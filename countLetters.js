const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected} `);
  }
};

let sentace = "This is my sentace";

const countLetters = (input) => {
  let newObject = {};
  for (let letter of input) {
    
    if (letter !== " ") {
      
        if (newObject[letter]) {
        newObject[letter] = newObject[letter] + 1;
      
    } else {
        newObject[letter] = 1;
      }
    }
  }
  return newObject 
};

console.log(countLetters(sentace));
