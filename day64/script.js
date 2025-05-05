//Async n Sync
console.log("Hey 1");
setTimeout(() => {
    console.log("Hey 3");
}, 0);

Promise.resolve().then(() => {
    console.log("Hey 4");
});
console.log("Hey 2");

//Call Back functions

function abcd(cb) {
    setTimeout(() => {

        console.log("This is my Higher Order function!");
        cb();
    }, 3000);
    return (() => {
        console.log("Returned function!!");
    });
}

retFun = abcd(() => {
    console.log("My call back function!");
});

retFun();