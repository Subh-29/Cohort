function katla69(a){
    if (a == 0)
        return;
    console.log("A bhai katla er nich dekha");
    katla69(a - 1);
}

katla69(6);


//function statement

function ktlastmnt(){
    console.log("My katla in stmnt");   
}

ktlastmnt()

//function expression

let ktfun = function(){
    console.log("Ktla in exp");
}

ktfun();

//fat arrow function

let katla = ()=>{
    console.log("again fat arrow");
}

katla();

//fat arrow function with one parameter

let ktone = a =>{
    console.log(a);    
}

ktone(69);

//fat arrow fun with return

let allname = () => {
    return "allname + katla = lesbo";
}

console.log(allname());

//fat arrow fun with implicit return

let nich = () => "nicher ta dekha";

console.log(nich());

//anonymus fun
let abar = (()=>{
    console.log("anonymus hoa nich dekha");
})

abar();


//rest parameter

function again(a, b, c,...rest){
    console.log(a, b, c, rest)
}

again(1, 2, 3, 4, 5, 6, 7, 8, 9);

//hoisting

console.log(hoist);

var hoist = "69"; //only works with var, doesn't work with let & const

//IIFE[Immediately Invoked Function Expression]

(function IIFE(){
    console.log("It's IIFE baby");
})();

//IIFE();       //it will show error

let katolaa = (function katola() {
    return {
        oporDebo: function(){
            console.log("Katola er opor");
        },
        nichDebo: function() {
            console.log("Katola er nich");
        }
    }
})();

katolaa.oporDebo();

//Higher order function(which accepts a function either as parameter or return it)

function jhapsa() {
    return function jhapsa2() {
        console.log("Ebr sob hoche jhapsa 2");
    };
}

jhapsa()();


function bodai(tabla){              //this a higher order function(HOF)
    console.log(tabla);
    tabla();
}

bodai(() => {           //This inner fun(argument) is the Call back function(CBF)
    let a = 3, b = 5;
    console.log(`a = ${a} and b = ${b}`)
    a = a * b;
    b = a / b;
    a = a / b;
    console.log(`a = ${a} and b = ${b}`)
})