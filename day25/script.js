//Repeat a function after intervals

// function repeatFunction(fun, delay) {
//     setInterval(fun, delay);
// }

// repeatFunction(() => {
//     let arr = [1, 2, 4, 5, 5, 2, 4, 5, 2, 599, 1];
//     console.log(arr);
//     arr.sort();
//     console.log(arr);
// }, 2000);

function greetings(greet) {
    return function(name) {
        console.log(`${greet} ${name}`);
    }
}

let indianGreeter = greetings("Namaste");
indianGreeter("Subhradip");
indianGreeter("Lyagbyagournis");

let spanishGreeter = greetings("Hola!");

spanishGreeter("Natalie");


//Executing the function only once

function onceCaller(fun) {
    let called = false;
    return function(args) {
        if(!called) {
            called = true;
            return fun(args);
        }
        else {
            console.error("already called once");
        }
    }
}

let once = onceCaller((value) => {
    console.log(value)
})

once("hello");
once();

//Throtling a function

function throttlerFun(fun, delay) {
    let lastcall = 0;
    return function() {
        let current = Date.now();
        if (current - lastcall > delay) {
            lastcall = current;
            fun();
        }
    }
}

let helloThrottler = throttlerFun(() => console.log("Hello"), 10000);
