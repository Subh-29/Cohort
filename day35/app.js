//Find the greatest element and it's index

function findGreatestElementAndIndex(arr) {
    // Write your logic here
    maxElement = [arr[0], 0];
    for (let i = 1; i < arr.length; ++i) {
        if (maxElement[0] < arr[i]) {
            maxElement[0] = arr[i];
            maxElement[1] = i;
        }
        // else
        //     continue;
    }
    console.log(maxElement);
}

//findGreatestElementAndIndex([10, 4, 22344, 50, 2345]);


//Find the second greatest element from an array

function findSecondGreatestElement(arr) {
    // Write your logic here
    let max = [-Infinity, 0], secondMax = [-Infinity, 0];

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max[0]) {
            secondMax = max;
            max = [arr[i], i];
        }
        else if (secondMax[0] < arr[i] && max[0] !== arr[i]) {
            secondMax = [arr[i], i];
        }
    }

    return secondMax;
}

//findSecondGreatestElement([23, 4444, 213, 54545, 29944, 23, 5543]);



//Reverse Array

function copyAndReverseArray(arr) {
    // Write your logic here
    let copyArr = new Array(arr.length);
    for (let i = 0; i < Math.ceil(arr.length / 2); ++i) {
        copyArr[i] = arr[arr.length - i - 1];
        copyArr[arr.length - i - 1] = arr[i];
    }

    return copyArr;
}

//console.log(copyAndReverseArray([12, 23, 545, 2234]));

//Reverse an array itself

function swap(val1, val2) {
    val1 = val1 + val2;
    val2 = val1 - val2;
    val1 = val1 - val2;
}

function reverseArrayInPlace(arr) {
    // Write your logic here
    for (let i = 0; i < Math.ceil(arr.length / 2); ++i) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
}

//reverseArrayInPlace([1, 3, 4, 5, 6, 9]);

//Move zero without extra space

function moveZerosInPlace(arr) {
    // Write your logic here

    let oneCount = 0;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 1) {
            ++oneCount;
        }
    }

    for (let i = 0; i < oneCount; ++i) {
        arr[i] = 1;
    }
    for (let i = oneCount; i < arr.length; ++i) {
        arr[i] = 0;
    }
}

//Array position shifting

function leftRotateByOne(arr) {
    // Write your logic here
    arr.push(arr[0]);
    arr.shift();
    console.log(arr);
}


leftRotateByOne([1, 3, 4, 5, 6, 7]);


