//First way for timeout functions

function callBack() {
    console.log("Hey google after 3 seconds");
}

console.log("Not hey google");

setTimeout(callBack, 3000);


//Second way for timeout functions

function delayed(fun, delay) {
    setTimeout(fun, delay);
}

delayed(() => console.log("Heyyyyyyyy google after 2 seconds"), 2000);

//Custom Higher Order Functions

let arr = [200, 22, 1, 55, 2, 666];

console.log(arr);

function subhMap(arra, fun) {
    let result = [];

    for (let i = 0; i < arr.length; ++i) {
        result.push(fun(arra[i]));
    }
    return result;
}

let sap = subhMap(arr, (value) => {
    return value + 1;
});
console.log(sap);

//Custom Clousure function for counting function calls

function countCalls(fun, limit) {
    count = 0;
    return function() {
        if (count < limit) {
            ++count;
            fun();
        }
        else {
            console.log("Your trial has been exhausted");
        }
    }
}


function etaMax3BarCallHobe(value = 69) {
    console.log("Reeeeeee" + value);
}

let counting = countCalls(etaMax3BarCallHobe, 3);

for(let i = 0; i < 4; ++i) {
    counting();
}


