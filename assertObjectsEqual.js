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

  const assertObjectsEqual = function(actual, expected) {
    const convertToString = (obj) => JSON.stringify(obj);
  
    const actualString = convertToString(actual);
    const expectedString = convertToString(expected);
  
    if (actualString === expectedString) {
      console.log(`✅ Assertion Passed: ${actualString} === ${expectedString}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actualString} !== ${expectedString}`);
    }
  };
  


  