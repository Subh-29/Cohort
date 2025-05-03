// ===== Element Selectors =====
const body = document.querySelector('body');
const button = document.querySelector('.button button');
const buttonDiv = document.querySelector('.button');
const dbl = document.querySelector('.dbl-clk .card');

// ===== Image Setup =====
const images = [
  "./images/image.png",
  "./images/image copy.png",
  "./images/image copy 2.png"
];

const imageElement = document.createElement('img');
imageElement.style.position = 'absolute';
imageElement.style.zIndex = 1;
imageElement.style.width = "100%";
imageElement.style.objectFit = "cover";

buttonDiv.style.zIndex = 10;

// Load a random image initially
let random = Math.floor(Math.random() * images.length);
imageElement.src = images[random];

// Add the image to the .btn section
document.querySelector(".btn").appendChild(imageElement);

// ===== Button Image Change on Click =====
button.addEventListener("click", () => {
  random = Math.floor(Math.random() * images.length);
  imageElement.src = images[random];
});

// ===== Button Follows Mouse Within .button =====
buttonDiv.addEventListener("mousemove", (e) => {
  const divRect = buttonDiv.getBoundingClientRect();
  const rect = button.getBoundingClientRect();

  gsap.to(button, {
    top: e.clientY - divRect.top - rect.height / 2,
    left: e.clientX - divRect.left - rect.width / 2,
    duration: 0.01,
    ease: "none"
  });
});

// ===== Button Recenters Smoothly on Mouse Leave =====
buttonDiv.addEventListener("mouseleave", () => {
  const btnRect = button.getBoundingClientRect();

  gsap.to(button, {
    top: (buttonDiv.offsetHeight - btnRect.height) / 2,
    left: (buttonDiv.offsetWidth - btnRect.width) / 2,
    duration: 1,
    ease: "elastic.inOut(2, 0.4)"
  });
});

// ===== Double Click Heart Animation =====
const heart = document.createElement('img');
heart.src = "https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png";
heart.style.width = "80px";
heart.style.position = "absolute";
heart.style.zIndex = 10;
heart.style.top = "50%";
heart.style.left = "50%";
heart.style.transform = "translate(-50%, -50%)";
heart.style.opacity = 0;
heart.style.pointerEvents = "none";
heart.style.transition = "0.2s ease-in";

dbl.appendChild(heart);

dbl.addEventListener("dblclick", () => {
  console.log("Doubleee");
  heart.style.opacity = 1;

  setTimeout(() => {
    heart.style.opacity = 0;
  }, 3000);
});

// ===== Debug Events (optional) =====
body.addEventListener("mouseout", () => {
  console.log("Mouse out");
});


// ===== Scrolling effects =====

let lastY = window.scrollY;
let nav = document.querySelector('.nav');

window.addEventListener("scroll", function(det) {
    // console.log(det);
    // console.log("hello");
    const currY = window.scrollY;
    
    if(currY < lastY) {
        console.log("Scrolling up");
        nav.style.top = 10 + "px";

    }
    else {
        console.log("Scrolling down");
        nav.style.top = -10 + "%";
    }
    lastY = currY;
});