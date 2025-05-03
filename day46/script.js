    // 1. How to show JSON data in frontend
    // 2. How to do Event Bubbling

let arr = [
    {
        userID: "Aloo",
        price: 20,
        pic: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
        inStock: true
    },
    {
        userID: "Piyaz",
        price: 40,
        pic: "https://5.imimg.com/data5/PC/PK/CH/ANDROID-46557037/product-jpeg-500x500.jpg",
        inStock: false
    },
    {
        userID: "Fulkopi",
        price: 15,
        pic: "https://img.thecdn.in/224989/1658806838409_SKU-0094_0.jpeg?width=600&format=webp",
        inStock: true
    }
]

let sum = ``;

arr.forEach(function(elem) {
    sum += `<div class="card">
                        <div class="image">
                            <img src=${elem.pic} alt=${elem.userID}>
                        </div>
                        <div class="details">
                            <h1>
                                ${elem.userID}
                            </h1>
                            <h4>
                                $${elem.price} / kg
                            </h4>
                            <h3>
                                Instock: 
                                <span class="stock" style="color: rgb(0, 228, 49);">${elem.inStock ? "Yes" : "No"}</span>
                            </h3>
                        </div>
                    </div>`
});

document.querySelector(".container").innerHTML = sum;

//Event Bubbling

/*You click on a button inside a card inside a container inside the body.
The event fires on the button first, then bubbles up to the card, then the container, then the body, and so on.*/

let cards = document.querySelectorAll(".card");
//console.log(cards);
cards.forEach(function(card) {

    stock = card.querySelector(".stock");
    console.log( stock.style.color = stock.textContent === "Yes" ? "lime" : "red");
  // Add a transition so the scale doesn't look choppy
  card.style.transition = "transform 0.2s ease";

  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

