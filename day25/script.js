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