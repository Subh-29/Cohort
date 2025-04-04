// let A = 65;
// let n = 6;
// for (let i = 0; i < n; ++i) {
//     for (let j = 0; j <= i; ++j) {
//         process.stdout.write(`${String.fromCharCode(65 + j)} `);
//     }
//     console.log("");
// }

//Inverted right angle triangle

let n = 5
// for (let i = 0; i < n; ++i) {
//     for (let j = n - i - 1; j >= 0; --j) {
//         process.stdout.write("* ");
//     }
//     console.log("");
// }

//Mirror triangle

// for (let i = 0; i < n; ++i) {
//     for (let j = 0; j < n - i - 1; ++j) {
//         process.stdout.write("  ");
//     }
//     for (let j = 0; j <= i; ++j) {
//         process.stdout.write("* ");
//     }
//     console.log("");
// }

//V shaped pattern

// for (let i = 0; i < n; ++i) {
//     let j;
//     for (j = 0; j < i; ++j) {
//         process.stdout.write(" ");
//     }
    
//     for (let k = j; k < 2*n - i - 1; ++k) {
//         if (k === j || k === 2*n - i - 2)
//             process.stdout.write("*");
//         else 
//             process.stdout.write(" ");
//     }
//     console.log("");
// }

// X shape patter

// for (let i = 1; i <= n; i++) { 
//     // Loop for leading spaces
//     if (i <= Math.ceil(n / 2)) {
//         for (let j = 1; j < 2*Math.ceil(n / 2); j++) { 
//             if(i == j || i+j == 2*Math.ceil(n / 2))
//                 process.stdout.write("*"); 
//             else
//             process.stdout.write(" "); 
//         }
//     }
//     else {
//         for (let j = 2*Math.ceil(n / 2) - 1; j >= 0; --j) { 
//             if(i == j || i+j == 2*Math.ceil(n / 2))
//                 process.stdout.write("*"); 
//             else
//             process.stdout.write(" "); 
//         }
//     }
//     console.log();
// }

for (let i = 1; i <= n; i++) { 
    // Inner loop for columns
    for (let j = 1; j <= n; j++) { 
         // Check diagonal conditions
        if (j === i || i+j === n+1) {
            process.stdout.write("*"); 
        } else {
            process.stdout.write(" "); 
        }
    }
    // Move to the next line after each row
    console.log(); 
}