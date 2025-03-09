//You can put any data types in an array of Javascript, unlike other languages where the array types are homogenious

let arr = ['arr', 1, 4, 12n, () => {
    console.log("Print Hello")
}, [1, 2, 3, 4, 5]]

console.log(arr[3]);

arr[4]();


//Object in JS is key value pairs

let ckm = {
    name: "Cheel ka Muut",
    colour: "White",
    price: 42069,
    isAvailable: false,
    isEdible: false,
    isUsable: true
};

// console.log(ckm);

let array = [[1, 2], [1, 3, 4, 5,2 ,4 ,5, 2, 4], [1, 2,24,]];
let u = array.length;

for(let i = 0; i < array.length; ++i) {
    for(let j = 0; j < array[i].length; ++j) {
        console.log(array[i][j], );
    }
    console.log("\n");
}