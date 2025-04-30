// let cards = document.querySelectorAll(".card");
// const maxWords = 11;
// cards.forEach(card => {
//     let toggle = false;
//     let content = card.querySelector(".about-card p");
//     //console.log(content.textContent);

//     let words = content.textContent.split(" ");
//     //console.log(words);
//     if (words.length > maxWords) {
//         content.innerText = words.slice(0, maxWords).join(" ") + "...";
        
//     }
//     card.addEventListener("click", function () {
//         if (toggle) {
//             card.style.height = 110 + "px";
//             content.innerText = words.slice(0, maxWords).join(" ") + "...";
//             toggle = false;
//             card.style.backgroundSize = "230% auto";
//         }
//         else {

//             //console.log("hello");
//             // card.style.transition = "1s linear";
//             content.innerText = words.slice(0, words.length).join(" ");
//             card.style.height = card.scrollHeight + 10 + "px";
//             toggle = true;
//             card.style.backgroundSize = "cover";
//         }
//     });
// });


let cards = document.querySelectorAll(".card");
const maxWords = 15;
let currentlyOpenCard = null; // track which card is open

cards.forEach(card => {
    //let toggle = false;
    let content = card.querySelector(".about-card p");
    let words = content.textContent.split(" ");

    if (words.length > maxWords) {
        content.innerText = words.slice(0, maxWords).join(" ") + ".......";
        console.log(content.innerText);
        
    }

    card.addEventListener("click", function () {
        // 🔙 Close previously open card (if it's not the one we're clicking now)
        if (currentlyOpenCard && currentlyOpenCard !== card) {
            let prevContent = currentlyOpenCard.querySelector(".about-card p");
            let prevWords = prevContent.textContent.split(" ");

            // Reset previous card
            currentlyOpenCard.style.height = "115px";
            prevContent.innerText = prevWords.slice(0, maxWords).join(" ") + "...";
            currentlyOpenCard.dataset.katla = "false";
            currentlyOpenCard.querySelector(".title").style.writingMode = "vertical-lr";
            currentlyOpenCard.style.flexDirection = "row-reverse";
        }

        // Check current card's expanded state
        let isExpanded = card.dataset.katla === "true";

        if (isExpanded) {
            // Collapse this one
            card.style.height = "115px";
            content.innerText = words.slice(0, maxWords).join(" ") + "...";
            card.dataset.katla = "false";
            currentlyOpenCard.querySelector(".title").style.writingMode = "vertical-lr";
            currentlyOpenCard.style.flexDirection = "row-reverse";
            currentlyOpenCard = null;
        } else {
            // Expand this one
            content.innerText = words.join(" ");
            card.style.height = card.scrollHeight + 20 + "px";
            card.dataset.katla = "true";
            currentlyOpenCard = card;
            currentlyOpenCard.querySelector(".title").style.writingMode = "horizontal-tb";
            currentlyOpenCard.style.flexDirection = "column";
        }
    });
});
