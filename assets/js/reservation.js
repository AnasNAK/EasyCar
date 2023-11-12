




// pagination

const pagination1 = document.querySelector("#pagination1")
const pagination2 = document.querySelector("#pagination2")
const pagination3 = document.querySelector("#pagination3")
const serv = document.querySelector("#services")
const gam = document.querySelector("#gammes")
const base = document.querySelector("#bases")
const all = document.querySelector("#all")
const img = document.querySelectorAll(".img")
const spans = document.querySelectorAll('.description p span');

const tabTrie = [{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" }
  , { image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },

{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" }
  , { image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },

{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" }
  , { image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes.", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" }]





const table = [{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" }
  , { image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },

{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" }
  , { image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },

{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" }
  , { image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/mercedes1.png", Type: "gammes", Toit: "Panoramique", Système: "Dolby", Station: "Ecran Tactile", Prix: "700" },
{ image: "assets/img/brabus1.png", Type: "services", Toit: "Electrique", Système: "ATMOS", Station: "RADIO", Prix: "600" },
{ image: "assets/img/6.png", Type: "bases", Toit: "Manuelle", Système: "Bose", Station: "CD", Prix: "500" }]






// pagination1
pagination1.addEventListener('click', () => {

  for (i = 0; i < 8; i++) {
    const id = document.querySelector(`#img${i % 8}`)
    id.setAttribute("src", table[i].image)
    spans.forEach(function (span) {

      // Vérifiez le texte dans chaque balise <span>
      if (span.textContent === "Type:") {
        span.nextSibling.textContent = table[i].Type;
      } if (span.textContent === "Toit:") {
        span.nextSibling.textContent = table[i].Toit;
      }
      if (span.textContent === "Station:") {
        span.nextSibling.textContent = table[i].Station;
      }

      if (span.textContent === "Système:") {
        span.nextSibling.textContent = table[i].Système;
      }
      if (span.textContent === "Prix:") {
        span.nextSibling.textContent = table[i].Prix;
      }

    });
  }
  pagination1.style.backgroundColor = "red";
  pagination2.style.backgroundColor = "";
  pagination3.style.backgroundColor = "";
})
// fin

// pagination2
pagination2.addEventListener('click', () => {

  for (i = 8; i < 17; i++) {
    const id = document.querySelector(`#img${i % 8}`)
    id.setAttribute("src", table[i].image)
    spans.forEach(function (span) {

      // Vérifiez le texte dans chaque balise <span>
      if (span.textContent === "Type:") {
        span.nextSibling.textContent = table[i].Type;
      } if (span.textContent === "Toit :") {
        span.nextSibling.textContent = table[i].Toit;
      }
      if (span.textContent === "Station:") {
        span.nextSibling.textContent = table[i].Station;
      }

      if (span.textContent === "Système:") {
        span.nextSibling.textContent = table[i].Système;
      }
      if (span.textContent === "Prix:") {
        span.nextSibling.textContent = table[i].Prix;
      }

    });
  }
  pagination1.style.backgroundColor = "";
  pagination2.style.backgroundColor = "red";
  pagination3.style.backgroundColor = "";
})
//   fin

// pagination3
pagination3.addEventListener('click', () => {

  for (i = 17; i < 25; i++) {
    const id = document.querySelector(`#img${i % 8}`)
    id.setAttribute("src", table[i].image)
    spans.forEach(function (span) {

      // Vérifiez le texte dans chaque balise <span>
      if (span.textContent === "Type:") {
        span.nextSibling.textContent = table[i].Type;
      } if (span.textContent === "Toit :") {
        span.nextSibling.textContent = table[i].Toit;
      }
      if (span.textContent === "Station:") {
        span.nextSibling.textContent = table[i].Station;
      }

      if (span.textContent === "Système:") {
        span.nextSibling.textContent = table[i].Système;
      }
      if (span.textContent === "Prix:") {
        span.nextSibling.textContent = table[i].Prix;
      }

    });
  }
  pagination1.style.backgroundColor = "";
  pagination2.style.backgroundColor = "";
  pagination3.style.backgroundColor = "red";
})
//   fin

/////////////////////////////////////////////////////////////// tri services//////////////////////////////////////////////////////////
function comparaisonS(a, b) {
  // Mettez les éléments avec "Type: 'service'" en premier
  if (a.Type === 'services' && b.Type !== 'services') {
    return -1;
  }
  if (a.Type !== 'services' && b.Type === 'services') {
    return 1;
  }
  return 0;
}



serv.addEventListener("click", () => {
  tabTrie.sort(comparaisonS)
  for (i = 0; i < 8; i++) {
    const id = document.querySelector(`#img${i % 8}`)
    id.setAttribute("src", tabTrie[i].image)
    spans.forEach(function (span) {

      // Vérifiez le texte dans chaque balise <span>
      if (span.textContent === "Type:") {
        span.nextSibling.textContent = tabTrie[i].Type;
      } if (span.textContent === "Toit :") {
        span.nextSibling.textContent = tabTrie[i].Toit;
      }
      if (span.textContent === "Station:") {
        span.nextSibling.textContent = tabTrie[i].Station;
      }

      if (span.textContent === "Système:") {
        span.nextSibling.textContent = tabTrie[i].Système;
      }
      if (span.textContent === "Prix:") {
        span.nextSibling.textContent = tabTrie[i].Prix;
      }

    });
  }
  pagination1.style.backgroundColor = "red";
  pagination2.style.backgroundColor = "";
  pagination3.style.backgroundColor = "";

})


/////////////////////////////////////////////////////////////// tri gammes//////////////////////////////////////////////////////////
function comparaisonG(a, b) {
  // Mettez les éléments avec "Type: 'service'" en premier
  if (a.Type === 'gammes' && b.Type !== 'gammes') {
    return -1;
  }
  if (a.Type !== 'gammes' && b.Type === 'gammes') {
    return 1;
  }
  return 0;
}

gam.addEventListener("click", () => {
  tabTrie.sort(comparaisonG)
  for (i = 0; i < 8; i++) {
    const id = document.querySelector(`#img${i % 8}`)
    id.setAttribute("src", tabTrie[i].image)

    spans.forEach(function (span) {

      // Vérifiez le texte dans chaque balise <span>
      if (span.textContent === "Type:") {
        span.nextSibling.textContent = tabTrie[i].Type;
      } if (span.textContent === "Toit :") {
        span.nextSibling.textContent = tabTrie[i].Toit;
      }
      if (span.textContent === "Station:") {
        span.nextSibling.textContent = tabTrie[i].Station;
      }

      if (span.textContent === "Système:") {
        span.nextSibling.textContent = tabTrie[i].Système;
      }
      if (span.textContent === "Prix:") {
        span.nextSibling.textContent = tabTrie[i].Prix;
      }

    });
  }
  pagination1.style.backgroundColor = "red";
  pagination2.style.backgroundColor = "";
  pagination3.style.backgroundColor = "";

})




//////////////////////////////////////////////////////////////// tri base//////////////////////////////////////////////////////////
function comparaisonB(a, b) {
  // Mettez les éléments avec "Type: 'service'" en premier
  if (a.Type === 'bases' && b.Type !== 'bases') {
    return -1;
  }
  if (a.Type !== 'bases' && b.Type === 'bases') {
    return 1;
  }
  return 0;
}

base.addEventListener("click", () => {
  tabTrie.sort(comparaisonB)
  for (i = 0; i < 8; i++) {
    const id = document.querySelector(`#img${i % 8}`)
    id.setAttribute("src", tabTrie[i].image)
    spans.forEach(function (span) {

      // Vérifiez le texte dans chaque balise <span>
      if (span.textContent === "Type:") {
        span.nextSibling.textContent = tabTrie[i].Type;
      } if (span.textContent === "Toit :") {
        span.nextSibling.textContent = tabTrie[i].Toit;
      }
      if (span.textContent === "Station:") {
        span.nextSibling.textContent = tabTrie[i].Station;
      }

      if (span.textContent === "Système:") {
        span.nextSibling.textContent = tabTrie[i].Système;
      }
      if (span.textContent === "Prix:") {
        span.nextSibling.textContent = tabTrie[i].Prix;
      }

    });
  }
  pagination1.style.backgroundColor = "red";
  pagination2.style.backgroundColor = "";
  pagination3.style.backgroundColor = "";

})


/////////all/////////////
all.addEventListener("click", () => {

  for (i = 0; i < 8; i++) {
    const id = document.querySelector(`#img${i % 8}`)
    id.setAttribute("src", table[i].image)
    spans.forEach(function (span) {

      // Vérifiez le texte dans chaque balise <span>
      if (span.textContent === "Type:") {
        span.nextSibling.textContent = table[i].Type;
      } if (span.textContent === "Toit :") {
        span.nextSibling.textContent = table[i].Toit;
      }
      if (span.textContent === "Station:") {
        span.nextSibling.textContent = table[i].Station;
      }

      if (span.textContent === "Système:") {
        span.nextSibling.textContent = table[i].Système;
      }
      if (span.textContent === "Prix:") {
        span.nextSibling.textContent = table[i].Prix;
      }

    });

  }
  pagination1.style.backgroundColor = "red";
  pagination2.style.backgroundColor = "";
  pagination3.style.backgroundColor = "";

})





////////////list///////////////
// Obtenez une référence vers le bouton et le conteneur

const list = document.getElementById('list');
const container = document.getElementById('container');
const boutonblock = document.getElementById('blok');
const row1 = document.getElementById('test1');
const row2 = document.getElementById('tes2');
const des = document.querySelectorAll('.description');
const txt = document.querySelectorAll('.description p');
const h3 = document.querySelectorAll('.description h3')


list.addEventListener('click', function () {
  txt.forEach(function (texte) {
    texte.style.color = 'black';
  })
  h3.forEach(function (texte) {
    texte.style.display = 'none';

  })

  des.forEach(function (element) {

    element.style.marginLeft = '40vw';
    element.style.opacity = '1';
    element.style.width = '35VW';
    element.style.border = '2px solid black';
    // element.style.flexDirection = 'row';
    element.style.backgroundColor = 'transparent';

  });
  row1.style.flexDirection = 'column';
  row1.style.alignItems = 'stretch';
  row1.style.gap = '3vw';
  row1.style.alignItems = 'stretch';
  row2.style.alignItems = 'stretch';
  row2.style.flexDirection = 'column';
  row2.style.gap = '3vw';
});

////////////block///////////////
boutonblock.addEventListener('click', function () {
  row1.style = 'initial';
  row2.style = 'initial';
  des.forEach(function (element) {
    element.style = 'initial';
  });
  txt.forEach(function (element) {
    element.style = 'initial';
  });
  h3.forEach(function (texte) {
    texte.style = 'initial';
  })
});



// masquer btn-list
function masquerBouton() {
  if (window.innerWidth < 1200) {
    list.style.display = 'none';
    boutonblock.style.display = 'none';
    row1.style = 'initial';
    row2.style = 'initial';
    des.forEach(function (element) {
      element.style = 'initial';
    });
    txt.forEach(function (element) {
      element.style = 'initial';
    });
    h3.forEach(function (texte) {
      texte.style = 'initial';
    })
  } else {
    list.style.display = 'block';
    boutonblock.style.display = 'block';
  }
}
masquerBouton();

window.addEventListener('resize', masquerBouton);

////////////////////////////////////////////////////////////////local storage part ///////////////////////////////////////////////////////////

// Function to save the cart to localStorage
function saveCartToLocalStorage(cartData) {
  // console.log("Saving to localStorage:", cartData);
  localStorage.setItem("cartItems", JSON.stringify(cartData));
  // console.log("Saved to localStorage:", JSON.stringify(cartData));
}

// Function to add the car data to the cart
function addToCart(carData) {
  // console.log("Adding to cart:", carData);

  // Load existing cart data from localStorage
  let existingCartData = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Add the new car data to the cart
  existingCartData.push(carData);

  // Save the updated cart data to localStorage
  saveCartToLocalStorage(existingCartData);

  // Update the cart display
  updateCartDisplay(existingCartData);
}

// Function to remove the car data from the cart
function removeFromCart(index) {
  // Load existing cart data from localStorage
  let existingCartData = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Remove the item at the specified index
  existingCartData.splice(index, 1);

  // Save the updated cart data to localStorage
  saveCartToLocalStorage(existingCartData);

  // Update the cart display
  updateCartDisplay(existingCartData);
}

// Function to update the cart display
function updateCartDisplay(cartData) {
  // Clear the existing content in the cartItems container
  let cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  // Create and append new cart items based on the updated cart data
  cartData.forEach(function (carData, index) {
    let cartItem = document.createElement("tr");
    cartItem.innerHTML = `
    <td><img src="${carData.image}" alt="${carData.name}" class="cart-image w-100"></td>
    <td><p>${carData.name}</p></td>
    <td><p>${carData.price}.00DH</p></td>
    <td><a href="../personalize.html" class="btn">Personalize</a></td>
    <td><span class="remove-icon btn" onclick="removeFromCart(${index})">&#128465;</span></td>
    `;

    // Append the item to the cart
    cartItemsContainer.appendChild(cartItem);
  });
}


// Load the cart from localStorage on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  let storedCartItems = localStorage.getItem("cartItems");
  let parsedCartItems = JSON.parse(storedCartItems) || [];

  // Update the cart display with the loaded items
  updateCartDisplay(parsedCartItems);
  // console.log("Loaded from localStorage:", parsedCartItems);
});

// Attach a click event listener to the container
document.getElementById('container').addEventListener('click', function (event) {
  // console.log('Button clicked');

  // Check if the clicked element is a reserve button or a child of the reserve button
  let reserveButton = event.target.closest('.reserve-button');
  if (reserveButton) {
    // console.log('Reserve button clicked');
    // Get the closest car container element
    let carElement = reserveButton.closest('.position-relative.img');

    // Check if the element exists
    if (!carElement) {
      console.error('Car element not found');
      return;
    }

    // Log the car element to verify

    // console.log('Car Element:', carElement);

    // Get the corresponding description element
    let descriptionElement = carElement.querySelector('.description');

    // Check if the description element exists
    if (!descriptionElement) {
      console.error('Description element not found');
      return;
    }

    // Log the description element to verify

    // console.log('Description Element:', descriptionElement);

    // Extracting relevant data from HTML elements

    let carData = {
      name: descriptionElement.querySelector('h3') ? descriptionElement.querySelector('h3').textContent.trim() : '',
      price: extractPrice(descriptionElement),
      image: carElement.querySelector('img').src,

    };


    // Function to extract the price from the description element
    function extractPrice(descriptionElement) {
      // Get the fifth child span (index 4)
      let priceSpan = descriptionElement.querySelector('p span:nth-child(9)');

      // If the span is found, get the next sibling text node
      if (priceSpan) {
        let priceNode = priceSpan.nextSibling;

        // If the text node is found, return its content
        if (priceNode && priceNode.nodeType === 3) {
          return priceNode.textContent.trim();
        }
      }

      // If the span or text node is not found, return a default value
      return 'Price not available';
    }

    // Log the extracted data to verify
    // console.log('Car Data:', carData);

    // Add the car data to the cart
    addToCart(carData);
  }
});
