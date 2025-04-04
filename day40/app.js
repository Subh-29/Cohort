// var lim = 23, k = 6;
// let arr = new Array(lim);

// for (let i = 0; i < lim; ++i) {
//     arr[i] = Math.floor(Math.random() * 11);
// }

// console.log(arr);


// let i = arr.length - 1;
// let j = i - k;

// while (j >= arr.length % k) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     --i;
//     --j;
//     console.log(arr);
// }

// let pivot = arr.length % k;

// console.log(arr);
// console.log(arr.slice(0,arr.length % k));
// arr = [...arr.slice(pivot, pivot + k + 1), ...arr.slice(0, pivot - 1), ...arr.slice(pivot + k + 2, arr.length)];
// console.log(arr);


let arr = [7, 6, 5, 4, 3, 2, 1];

let left = 0, right = arr.length - 1;

// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }



// let n = arr.length;
// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i + 1]," ", i);
//     arr[i] = arr[i + 1];
// }

// arr.length = n - 1;

// console.log(arr);



function bubbleSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 1; j < arr.length - i; ++j) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
        console.log(arr);
    }
}

//bubbleSort(arr);

function selectionSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let small = i;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[small]) {
                small = j;
            }
        }

        if (small !== i) {
            [arr[i], arr[small]] = [arr[small], arr[i]];
        }
    }
}

// console.log(`Before sorting: ${arr}`);
// selectionSort(arr);
// console.log(`After sorting: ${arr}`);


function insertionSort(arr) {
    // Write your logic here
    for (let i = 1; i < arr.length; ++i) {
        let j = i - 1;
        let key = arr[i];
        while (arr[j] > key && j >= 0) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;
    }
}

console.log(`Before sorting: ${arr}`);
insertionSort(arr);
console.log(`After sorting: ${arr}`);