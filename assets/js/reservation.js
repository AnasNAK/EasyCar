




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

 const tabTrie  =[{image:"assets/img/mercedes1.png",Type: "gammes",Carburation: "......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."}
    ,{image:"assets/img/brabus1.png",Type: "services",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/brabus1.png",Type: "services",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},

    {image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."}
    ,{image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/brabus1.png",Type: "services",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/brabus1.png",Type: "services",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},

    {image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."}
    ,{image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/brabus1.png",Type: "services",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/brabus1.png",Type: "services",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/mercedes1.png",Type: "gammes.",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/brabus1.png",Type: "services",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."},
    {image:"assets/img/6.png",Type: "bases",Carburation: ".......", Vitesse: "...........",Vitesse_en_10s: "...........",Prix: "..."}]





    const table  =[{image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"}
    ,{image:"assets/img/brabus1.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/brabus1.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},

    {image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"}
    ,{image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/brabus1.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/brabus1.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},

    {image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"}
    ,{image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/brabus1.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/brabus1.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/mercedes1.png",Type: "______.",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/brabus1.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"},
    {image:"assets/img/6.png",Type: "_______",Carburation: "_______", Vitesse: "_______",Vitesse_en_10s: "_______",Prix: "_____"}]






// pagination1
pagination1.addEventListener('click',()=>{

    for(i=0;i<8;i++){
        const id = document.querySelector(`#img${i%8}`)
        id.setAttribute("src",table[i].image)
        spans.forEach(function(span) {
              
          // Vérifiez le texte dans chaque balise <span>
          if (span.textContent === "Type:") {
            span.nextSibling.textContent = table[i].Type; 
          }  if (span.textContent === "Carburation:") {
            span.nextSibling.textContent = table[i].Carburation;
          }
           if (span.textContent === "Vitesse_en_10s:") {
            span.nextSibling.textContent = table[i].Vitesse_en_10s; 
          }
          
          if (span.textContent === "Vitesse:") {
            span.nextSibling.textContent = table[i].Vitesse; 
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
pagination2.addEventListener('click',()=>{

    for(i=8;i<17;i++){
        const id = document.querySelector(`#img${i%8}`)
        id.setAttribute("src",table[i].image)
        spans.forEach(function(span) {
              
          // Vérifiez le texte dans chaque balise <span>
          if (span.textContent === "Type:") {
            span.nextSibling.textContent = table[i].Type; 
          }  if (span.textContent === "Carburation:") {
            span.nextSibling.textContent = table[i].Carburation;
          }
           if (span.textContent === "Vitesse_en_10s:") {
            span.nextSibling.textContent = table[i].Vitesse_en_10s; 
          }
          
          if (span.textContent === "Vitesse:") {
            span.nextSibling.textContent = table[i].Vitesse; 
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
  pagination3.addEventListener('click',()=>{

    for(i=17;i<25;i++){
        const id = document.querySelector(`#img${i%8}`)
        id.setAttribute("src",table[i].image)
        spans.forEach(function(span) {
              
          // Vérifiez le texte dans chaque balise <span>
          if (span.textContent === "Type:") {
            span.nextSibling.textContent = table[i].Type; 
          }  if (span.textContent === "Carburation:") {
            span.nextSibling.textContent = table[i].Carburation;
          }
           if (span.textContent === "Vitesse_en_10s:") {
            span.nextSibling.textContent = table[i].Vitesse_en_10s; 
          }
          
          if (span.textContent === "Vitesse:") {
            span.nextSibling.textContent = table[i].Vitesse; 
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
  


  serv.addEventListener("click",  ()=>{
    tabTrie.sort(comparaisonS)
        for(i=0;i<8;i++){
            const id = document.querySelector(`#img${i%8}`)
            id.setAttribute("src",tabTrie[i].image)
            spans.forEach(function(span) {
              
              // Vérifiez le texte dans chaque balise <span>
              if (span.textContent === "Type:") {
                span.nextSibling.textContent = tabTrie[i].Type; 
              }  if (span.textContent === "Carburation:") {
                span.nextSibling.textContent = tabTrie[i].Carburation;
              }
               if (span.textContent === "Vitesse_en_10s:") {
                span.nextSibling.textContent = tabTrie[i].Vitesse_en_10s; 
              }
              
              if (span.textContent === "Vitesse:") {
                span.nextSibling.textContent = tabTrie[i].Vitesse; 
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

  gam.addEventListener("click",  ()=>{
    tabTrie.sort(comparaisonG)
        for(i=0;i<8;i++){
            const id = document.querySelector(`#img${i%8}`)
            id.setAttribute("src",tabTrie[i].image)
            
            spans.forEach(function(span) {
              
              // Vérifiez le texte dans chaque balise <span>
              if (span.textContent === "Type:") {
                span.nextSibling.textContent = tabTrie[i].Type; 
              }  if (span.textContent === "Carburation:") {
                span.nextSibling.textContent = tabTrie[i].Carburation;
              }
               if (span.textContent === "Vitesse_en_10s:") {
                span.nextSibling.textContent = tabTrie[i].Vitesse_en_10s; 
              }
              
              if (span.textContent === "Vitesse:") {
                span.nextSibling.textContent = tabTrie[i].Vitesse; 
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

  base.addEventListener("click",  ()=>{
    tabTrie.sort(comparaisonB)
        for(i=0;i<8;i++){
            const id = document.querySelector(`#img${i%8}`)
            id.setAttribute("src",tabTrie[i].image)
            spans.forEach(function(span) {
              
              // Vérifiez le texte dans chaque balise <span>
              if (span.textContent === "Type:") {
                span.nextSibling.textContent = tabTrie[i].Type; 
              }  if (span.textContent === "Carburation:") {
                span.nextSibling.textContent = tabTrie[i].Carburation;
              }
               if (span.textContent === "Vitesse_en_10s:") {
                span.nextSibling.textContent = tabTrie[i].Vitesse_en_10s; 
              }
              
              if (span.textContent === "Vitesse:") {
                span.nextSibling.textContent = tabTrie[i].Vitesse; 
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
all.addEventListener("click",  ()=>{
    
        for(i=0;i<8;i++){
            const id = document.querySelector(`#img${i%8}`)
            id.setAttribute("src",table[i].image)
            spans.forEach(function(span) {
              
              // Vérifiez le texte dans chaque balise <span>
              if (span.textContent === "Type:") {
                span.nextSibling.textContent = table[i].Type; 
              }  if (span.textContent === "Carburation:") {
                span.nextSibling.textContent = table[i].Carburation;
              }
               if (span.textContent === "Vitesse_en_10s:") {
                span.nextSibling.textContent = table[i].Vitesse_en_10s; 
              }
              
              if (span.textContent === "Vitesse:") {
                span.nextSibling.textContent = table[i].Vitesse; 
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


  list.addEventListener('click', function() {
    txt.forEach(function(texte){
      texte.style.color = 'black';
    })
    h3.forEach(function(texte){
      texte.style.display = 'none';

    })
    
    des.forEach(function(element) {
     
      element.style.marginLeft= '40vw';
      element.style.opacity= '1';
      element.style.width= '35VW';
      element.style.border= '2px solid black';
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
  boutonblock.addEventListener('click', function() {
    row1.style = 'initial';
    row2.style = 'initial';
    des.forEach(function(element) {
      element.style = 'initial';
    });
    txt.forEach(function(element) {
      element.style = 'initial';
    });
    h3.forEach(function(texte){
      texte.style = 'initial';
    })
  });



  // masquer btn-list
function masquerBouton() {
  if (window.innerWidth < 1200) {
    list.style.display = 'none'; 
    row1.style = 'initial';
    row2.style = 'initial';
    des.forEach(function(element) {
      element.style = 'initial';
    });
    txt.forEach(function(element) {
      element.style = 'initial';
    });
    h3.forEach(function(texte){
      texte.style = 'initial';
    })
  } else {
    list.style.display = 'block'; 
  }
}
masquerBouton();

window.addEventListener('resize', masquerBouton); 

