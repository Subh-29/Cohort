// //Math functions

// console.log(Math.floor(10.9));
// console.log(Math.ceil(10.1));
// console.log(Math.round(10.9));
// console.log(Math.round(10.4));
// console.log(Math.round(10.599));
// console.log(Math.abs(-89));
// console.log(Math.trunc(-9.944488334934));
// console.log(typeof Math);
// console.log(typeof Math.trunc());
// console.log(Math.pow(2, 4));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(82));
// console.log(Math.cbrt(729));
// console.log(Math.max(-3, 10, 4444, 2094));
// console.log(Math.min(-3, 10, 4444, 2094));
// for (let i = 0; i < 10; ++i) {
//     console.log(Math.random());
// }

// let ar = 24994.4992;
// console.log(ar.toFixed(3));
// console.log(ar.toPrecision(3));

// // Compound Interest Calculations

// let cap = Number(prompt("Enter the capital:"));
// let r = Number(prompt("Enter the interest:"));
// let time = Number(prompt("Enter the time:"));

// // let cap = 1000;
// // let r = 10;
// // let time = 3;

// let int = cap * Math.pow((1 + r / 100), time) - cap;
// console.log(`Compound interest: ${int.toFixed(3)}`);

// // OTP generation

// let otp = Math.floor(Math.random() * 10000);

// console.log(`OTP: ${otp}`);

// // Triangle Area

// let a = Number(prompt("Enter side a"));
// let b = Number(prompt("Enter side b"));
// let c = Number(prompt("Enter side c"));

// let s = (a + b + c) / 2; 

// if ( a + b <= c || b + c <= a || c + a <= b) {
//     alert("The triangle is not valid!!!");
// }
// else {
//     console.log(`Area of the triangle is: ${Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)}`);
// }

// // Area of a Circle

// let radius = Number(prompt("Enter the radius(cm):"));
// let area = (Math.PI * Math.pow(radius, 2)).toFixed(3);

// console.log("Area of the circle is: ", area, "cm2");

console.log(Math.trunc(4.9));