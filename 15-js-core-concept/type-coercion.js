/**
 * == এর বেইজ্জতি Type coercion
 */

function question1() {
    if (true == 1) {
        console.log("same");
    } else {
        console.log("different");
    };
}

function question2() {
    const object1 = {}
    const object2 = {}

    console.log(object1 === object2)

    // object1 and object2 are not same because they are non primitive so they are compared by their refference in memory.
}


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


function question6() {
    if (null === undefined) {
        console.log("equal")
    }
    else {
        console.log("not equal")
    }
}


function question7() {
    if (1 == '1') {
        console.log("equal")
    }
    else {
        console.log("not equal")
    }

    /**
     * 1 == '1' because first javascript will convert string '1' into a number and then it will copmare
     */
}
