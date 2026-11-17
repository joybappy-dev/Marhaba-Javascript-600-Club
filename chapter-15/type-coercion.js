/**
 * == এর বেইজ্জতি Type coercion
 */

// question 1
function question1() {
    if (true == 1) {
        console.log("same");
    } else {
        console.log("different");
    };
}


// question 2
function question2() {
    const object1 = {}
    const object2 = {}

    console.log(object1 === object2)

    // object1 and object2 are not same because they are non primitive so they are compared by their refference in memory.
}


// question 3
function question3() {
    const arr = ['a', 'b', 'c']
    const arr2 = arr

    console.log(arr === arr2, 'q3')
}


function question4(num, bool) {
    console.log(num == bool)
}

function question5() {
    console.log('' == false)
}

function question6(){
    if(null === undefined){
        console.log("equal")
    }
    else{
        console.log("not equal")
    }
}
