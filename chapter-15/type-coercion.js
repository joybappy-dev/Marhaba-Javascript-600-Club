/**
 * == এর বেইজ্জতি Type coercion
 */

// question 1
if (true == 1) {
    // console.log("same");
} else {
    // console.log("different");
};

// question 2
const object1 = {}
const object2 = {}

console.log(object1===object2)
// object1 and object2 are not same because they are non primitive so they are compared by their refference in memory.
