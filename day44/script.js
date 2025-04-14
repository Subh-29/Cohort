let body = document.querySelector('body');
let button = document.querySelector('.button button');
let buttonDiv = document.querySelector('.button');

const btnRect = button.getBoundingClientRect();

let images = ["./images/image.png", "./images/image copy.png", "./images/image copy 2.png"];

let imageElement = document.createElement('img');

// Set default position and z-index for the image
imageElement.style.position = 'absolute';
imageElement.style.zIndex = 1;
imageElement.style.width = 200 + "px";  // Set initial width for the image
imageElement.style.objectFit = "cover"; // Ensures image fits inside the container


buttonDiv.style.zIndex = 10;

// Choose a random image at the start
let random = Math.floor(Math.random() * 3);
imageElement.src = images[random];
imageElement.style.width = 100 + "vw";
imageElement.style.height = 100 + "vh";

// Append the image to the button div
document.querySelector("main").appendChild(imageElement);




// Change the image on button click
button.addEventListener("click", function () {
    random = Math.floor(Math.random() * 3);
    imageElement.src = images[random];
});

body.addEventListener("mousemove", function (det) {
    const divRect = buttonDiv.getBoundingClientRect();
    const rect = button.getBoundingClientRect();
    console.log(`rect.top: ${rect.top}, rect.bot: ${rect.bottom}, divRect: ${divRect.top}`);
    console.log(`det.x: ${det.clientX}, det.y: ${det.clientY}`);
    
});
buttonDiv.addEventListener("mousemove", function (det) {
    console.log(`off.x: ${det.offsetX}, det.x: ${det.clientX}`);
    const divRect = buttonDiv.getBoundingClientRect();
    const rect = button.getBoundingClientRect();
    console.log(`rect.top: ${rect.top}, rect.bot: ${rect.bottom}, divRect: ${divRect.top}`);
    gsap.to(button, {
        top: det.clientY - divRect.top - rect.height / 2,
        left: det.clientX - divRect.left - rect.width / 2,
        // top: det.offsetY - rect.height / 2,
        // left: det.offsetX - rect.width / 2,
        duration: 0.1,
        ease: "none"
    });
});

buttonDiv.addEventListener("mouseleave", function () {
    console.log("Mouse leaving");
    gsap.to(button, {
        top: (buttonDiv.offsetHeight - btnRect.height) / 2,
    left: (buttonDiv.offsetWidth - btnRect.width) / 2,
        duration: 1,
        ease: "elastic.inOut(2,0.4)"
    });
});
body.addEventListener("mouseout", function () {
    console.log("Mouse out"); 
});



























// buttonDiv.addEventListener("mousemove", (det) => {
//     const rect = buttonDiv.getBoundingClientRect();
//     const btnRect = button.getBoundingClientRect();

//     let relativeX = det.clientX - rect.left;
//     let relativeY = det.clientY - rect.top;
//     gsap.to(button, {
//         top: relativeY + "px",
//         left: relativeX + "px",
//         delay: 0.1
//     });


//     console.log(`off.x: ${det.offsetX}, off.y: ${det.offsetY}`);
//     console.log(`det.x: ${det.clientX}, det.y: ${det.clientY}`);
//     console.log(`relativeX: ${relativeX}, relativeY: ${relativeY}`);
//     console.log(`rect.top: ${rect.top}, rect.left: ${rect.left}`);
//     // relativeX = Math.max(0, Math.min(relativeX, rect.width - btnRect.width));
//     // relativeY = Math.max(0, Math.min(relativeY, rect.height - btnRect.height));


//     // button.style.transform = `translate(${relativeX}px, ${relativeY}px)`;
//     // //buttonDiv.style.transform = `translate(${det.clientX}px, ${det.clientY}px)`;
//     // // button.style.top = relativeY + "px";
//     // // button.style.left = relativeX + "px";
//     // // buttonDiv.style.top = det.clientY + "px";
//     // // buttonDiv.style.left = det.clientX + "px";
// });


// buttonDiv.addEventListener("mouseleave", () => {
//     //button.style.transform = `translate(0, 0)`;

//     // button.style.top = "initial";
//     // button.style.left = "initial";
//     console.log("mouse left, easing back");

// });

// // Move the image relative to the button on mousemove
