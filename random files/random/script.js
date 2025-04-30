// let container = document.querySelector('.container');

// let cursor = document.querySelector('.cursor');


const masked = document.querySelector('.para-2');
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX + 'px';
    const y = e.clientY + 'px';

    // Move the custom cursor
    cursor.style.top = y;
    cursor.style.left = x;

    // Update CSS variables to move the mask
    masked.style.setProperty('--x', x);
    masked.style.setProperty('--y', y);
});



//let cursorRect = cursor.getBoundingClientRect();

// document.addEventListener("mousemove", function (det) {
//     const cursorRect = cursor.getBoundingClientRect();
//     cursor.style.visibility = "visible";
//     gsap.to(cursor, {
//         y: det.clientY + "px",
//         x: det.clientX + "px",
//         duration: 0.4
//     });
//     // cursor.style.top = det.clientY - cursorRect.height / 2 + "px";
//     // cursor.style.left = det.clientX - cursorRect.width / 2 + "px";
//     console.log("mouse movin");
// });


// container.addEventListener("mouseenter", function() {
    
//     gsap.to(cursor, {
//         scale: 3,
//         duration: 0.5,
//         ease: "none"
//     });
//     //cursor.style.scale = 3;
//     console.log("mouse in");
    
// });

// container.addEventListener("mousemove", function() {
//     gsap.to(cursor, {
//         scale: 3,
//         duration: 4,
//         ease: "power1.out"
//     });
//     //cursor.style.scale = 3;
//     console.log("mouse mocingggg");
    
// });

// container.addEventListener("mouseleave", function() {
//     gsap.to(cursor, {
//         scale: 1,
//         duration: 4,
//         ease: "power1.out"
//     });
//     console.log("mouse leave");
//     //cursor.style.scale = 1;
// });
