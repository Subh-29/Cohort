function getDetails(userid, cb) {
    setTimeout(() => {
        console.log(`Sending the request to Instagram....`)
    }, 1000);
    setTimeout(() => {
        console.log(`Fetching details of ${userid}`);
    },2000);
    setTimeout(() => {
        cb();
    }, 4000);
}

getDetails("Subh-29", () => {
    console.log("Photos saved in Calculator!");
});


//Call Back Hell

// function stepOne(cb) {
//     console.log("Step 1!");
//     cb();
// }
// function stepTwo(cb) {
//     console.log("Step 2!");
//     cb();
// }
// function stepThree(cb) {
//     console.log("Step 3!");
//     cb();
// }

// stepOne(() => {
//     console.log("Call back of Step 1");
//     stepTwo(() => {
//         console.log("Call back of Step 2");
//         stepThree(() => {
//             console.log("All Call backs Completed!! Call Back Hell!!!");
//         });
//     });
// });


// Promise

const prm = new Promise((res, rej) => {
    console.error("Error occured in Instagram.")
    console.error("Error 99910");
    rej()
});

setTimeout(() => {
    prm.then(() => {
        console.log("Resolved.");
    }).catch(() => {

        console.error("Error Occured");
    });
}, 5000);

//Call Back Hell Resolved

function stepOne() {
    return new Promise((res, rej) => {
        console.log("Step 1!");
        res()
    });
}
function stepTwo() {
    return new Promise((res, rej) => {
        console.log("Step 2!");
        res();
    });
    
}
function stepThree() {
    return new Promise((res, rej) => {
        console.log("Step 3!");
        res();
    });
}

stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(() => {
        console.log("All steps resolved");
});