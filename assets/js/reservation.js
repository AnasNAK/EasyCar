// const navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
// const navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
// const navbarDataFilter = (value) => {
//   return navbarData.filter((item) => {
//     return item.toLowerCase().startsWith(value.toLowerCase());
//   });
// };

// new mdb.Autocomplete(navbarAutocomplete, {
//   filter: navbarDataFilter,
// });




// pagination

const pagination1 = document.querySelector("#pagination1")
const pagination2 = document.querySelector("#pagination2")
const pagination3 = document.querySelector("#pagination3")

var imgTable1 = ['<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/4.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: service<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/mercedes1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: zeufevbzbc<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/mercedes1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: zeufevbzbc<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/mercedes1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: zeufevbzbc<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',
]
var imgTable12 = ['<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/porch3.png" alt="" class="w-100" id="img4">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: zeufevbzbc<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/4.png" alt="" class="w-100" id="img5">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: service<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/porch3.png" alt="" class="w-100" id="img6">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: service<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/porch3.png" alt="" class="w-100" id="img7">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: zeufevbzbc<br>' +
'Carburation: dgfko<br>' +
'Vitesse: 250km/h<br>' +
'Vitesse en 10s: 120km/h<br>' +
'Prix: 1000dh<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',
]
var imgTable2 = ['<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/mazerati1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/mazerati1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/mazerati1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/mazerati1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',
]
var imgTable22 = ['<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/brabus1.png" alt="" class="w-100" id="img4">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/brabus1.png" alt="" class="w-100" id="img5">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/brabus1.png" alt="" class="w-100" id="img6">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/brabus1.png" alt="" class="w-100" id="img7">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',
]
var imgTable3 = ['<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/ferrari1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: service<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/ferrari1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/ferrari1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/ferrari1.png" alt="" class="w-100" id="img0">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',
]
var imgTable32 = ['<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/classique1.png" alt="" class="w-100" id="img4">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/classique1.png" alt="" class="w-100" id="img5">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: service<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/classique1.png" alt="" class="w-100" id="img6">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',

'<div class="position-relative img col-xl-3 col-lg-6  col-md-6 col-sm-10" >' +
'<img src="./img/classique1.png" alt="" class="w-100" id="img7">' +
'<div class="description">' +
'<h3>description</h3>' +
'<p>' +
'Type: ...........<br>' +
'Carburation: ...........<br>' +
'Vitesse: ...........<br>' +
'Vitesse en 10s: ...........<br>' +
'Prix: ...........<br>' +
'</p>' +
'<button onclick="openPopup()" class="btn" style="vertical-align:middle"><span>Reservez</span></button>' +
'</div>' +
'</div>',
]



pagination1.addEventListener('click',()=>{

    const cont1= document.querySelector('#test')
    const cont2= document.querySelector('#tes')
    cont1.innerHTML = imgTable1.join('');
    cont2.innerHTML = imgTable12.join('');

  // Modifier la couleur des boutons à l'intérieur de cet événement
  pagination1.style.backgroundColor = "red"; 
  pagination2.style.backgroundColor = ""; 
  pagination3.style.backgroundColor = ""; 
})
pagination2.addEventListener('click',()=>{

  const cont1= document.querySelector('#test')
  const cont2= document.querySelector('#tes')
  cont1.innerHTML = imgTable2.join('');
  cont2.innerHTML = imgTable22.join('');

// Modifier la couleur des boutons à l'intérieur de cet événement
pagination1.style.backgroundColor = ""; 
pagination2.style.backgroundColor = "red"; 
pagination3.style.backgroundColor = ""; 
})
pagination3.addEventListener('click',()=>{

  const cont1= document.querySelector('#test')
  const cont2= document.querySelector('#tes')
  cont1.innerHTML = imgTable3.join('');
  cont2.innerHTML = imgTable32.join('');

// Modifier la couleur des boutons à l'intérieur de cet événement
pagination1.style.backgroundColor = ""; 
pagination2.style.backgroundColor = ""; 
pagination3.style.backgroundColor = "red"; 
})

// filtrage

var nouveauTableau = [];
var tableaux = [imgTable1, imgTable12, imgTable2, imgTable22, imgTable3, imgTable32];

for (var i = 0; i < tableaux.length; i++) {
    var tableau = tableaux[i];
    
    for (var j = 0; j < tableau.length; j++) {
        var element = tableau[j];
        
        if (element.includes('Type: service')) {
            nouveauTableau.push(element);
        }
    }
}

console.log(nouveauTableau);

var services = document.getElementById('services')
var paginationContainer = document.getElementById("container");

services.addEventListener("click",function(){
  var cartesPagination = paginationContainer.querySelectorAll(".img");

// Remplacez les 4 premières cartes par les 4 cartes de "nouveauTableau".
  for (var i = 0; i < nouveauTableau.length; i++) {
      if (i < cartesPagination.length && i < nouveauTableau.length) {
          cartesPagination[i].innerHTML = nouveauTableau[i];
      }
}
});







// ===========GHOLLAM PART==================
const itemList = document.querySelector('.item-list');
const gridViewBtn = document.getElementById('grid-active-btn');
const detailsViewBtn = document.getElementById('details-active-btn');

gridViewBtn.classList.add('active-btn');

gridViewBtn.addEventListener('click', () => {
    gridViewBtn.classList.add('active-btn');
    detailsViewBtn.classList.remove('active-btn');
    itemList.classList.remove('details-active');
});

detailsViewBtn.addEventListener('click', () => {
    detailsViewBtn.classList.add('active-btn');
    gridViewBtn.classList.remove("active-btn");
    itemList.classList.add("details-active");
});
