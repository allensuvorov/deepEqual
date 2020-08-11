// Best case: O(n)
// Worst case: O(2^n)

// Mansur's solution
function deepEqual(lhs, rhs) {
    if (typeof lhs === 'object' && typeof rhs === 'object' && lhs !== null && rhs !== null) {
        let lhsKeys = Object.keys(lhs), rhsKeys = Object.keys(rhs);
        if (lhsKeys.length === rhsKeys.length) {
            let result = true;
            for(let i = 0; result && i < lhsKeys.length; i++) {
                result = (lhsKeys[i] === rhsKeys[i]) && deepEqual(lhs[lhsKeys[i]], rhs[rhsKeys[i]]);
            }
            return result;
        }
        return false
    }
    return lhs === rhs;
}

// Rules:
// 1. Both obj1 and obj2 are of object type and are not null
// 2. All keys and value of obj1 and obj2 are equal

// Pseudo code:
// 1. If 1 or 2 is either null or not an object, return 1 === 2
// 2. else, if number of keys of 1 and 2 is not equal, return false
// 3. else, compare corresponding keys and values of 1 and 2, return false if any comparision fails
// 4. otherwise return true

// Allen's solution

function deepEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null || typeof(obj1) !== 'object' || typeof(obj2) !== 'object') { 
    return obj1 === obj2;
  } else { 
    const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
    if (keys1.length === keys2.length) {
      for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i] || !deepEqual(obj1[keys1[i]], obj2[keys2[i]])) {
          return false; 
        }
      }
      return true;
    }
    return false;
  }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true