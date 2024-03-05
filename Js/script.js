let products = {
  data: [
    {
      productName: "Lotion body Rachi",
      category: "Body",
      price: "30",
      image: "body/b_1.jpg",
    },
    {
      productName: "Serum facial",
      category: "Face",
      price: "49",
      image: "face/p_1.jpg",
    },
    {
      productName: "Hair Serum Booster",
      category: "Hair",
      price: "99",
      image: "hair/f_1.jpg",
    },
    {
      productName: "N.5 Chanel",
      category: "Perfume",
      price: "29",
      image: "perfume/F_1.jpg",
    },
    {
      productName: "Lotion body oil",
      category: "Body",
      price: "30",
      image: "body/b_2.jpg",
    },
    {
      productName: "Cleanser Laroche-Posay",
      category: "Face",
      price: "49",
      image: "face/p_2.jpg",
    },
    {
      productName: "Nigo Hair Nutrient",
      category: "Hair",
      price: "99",
      image: "hair/f_2.jpg",
    },
    {
      productName: "Lattos Perfume",
      category: "Perfume",
      price: "29",
      image: "perfume/F_2.jpg",
    },{
      productName: "Lotion body Dior",
      category: "Body",
      price: "30",
      image: "body/b_3.jpg",
    },
    {
      productName: "Eucerin Spotless",
      category: "Face",
      price: "49",
      image: "face/p_3.jpg",
    },
    {
      productName: "Eucerin Dermo Capillaire",
      category: "Hair",
      price: "99",
      image: "hair/f_3.jpg",
    },
    {
      productName: "GUCCI GUILTY",
      category: "Perfume",
      price: "29",
      image: "perfume/F_3.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
