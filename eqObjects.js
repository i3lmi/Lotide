const assertEqual = function(actual, expected) { 
    if (actual === expected) {
        console.log (`Assertion Passed: ${actual} === ${expected} `)
    } else {
        console.log (`Assertion Passed: ${actual} === ${expected} `)
    }

};

const eqObjects = (object1, object2) => {
    let object1Keys = Object.keys(object1);
    let object2Keys = Object.keys(object2);
  
    console.log(`${object1Keys}`);
    console.log(`${object2Keys}`);
  
    if (object1Keys.length !== object2Keys.length) {
      console.log(`Objects keys total are not the same`);
      return false;
    }
    
    for (let i = 0; i < object1Keys.length; i++) {
      if (!object2.hasOwnProperty(object1Keys[i]) || object1[object1Keys[i]] !== object2[object1Keys[i]]) {
        console.log(`Key ${object1Keys[i]} is not equal or currently in object`);
        return false;
      }
    }
  
    console.log(`Objects are exactly equal`);
    return true;
  };
  
  
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
  
  const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
  