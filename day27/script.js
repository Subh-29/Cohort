// let a = 20;
// console.log(a++ + ++a);

// let b = true;
// b--;
// console.log(Boolean(b));

// let x;
// console.log(typeof NaN);


// let str = "Hello Javascript";
// console.log(str.includes("java"));

// let i = 0;
// while(i < 3) {

//     console.log(i) ;
//     i++;
// }


// console.log(hoistedFun());

// function hoistedFun() {
//     return "hello world!";
// }

// const greet = function() {
//     console.log("Hello");
// }
// greet();
// greet = function() {
//     console.log("hey");
// }


function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();