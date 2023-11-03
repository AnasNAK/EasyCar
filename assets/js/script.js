var video = document.getElementById("myVideo");
video.playbackRate = 0.8;
// ---------------------

const items2 = document.querySelectorAll(' .slid');
const items3 = document.querySelectorAll(' .slidd');
const items1 = document.querySelectorAll(' .sli');
let currentItem1 = 0;
let currentItem2 = 0;
let currentItem3 = 0;

function showItem3(index) {

    items3.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function showItem1(index) {
    items1.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
  
}
function showItem2(index) {

    items2.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}
function nextItem1() {
    currentItem1 = (currentItem1 + 1) % items1.length;
    showItem1(currentItem1);
}
function nextItem2() {
    currentItem2 = (currentItem2 + 1) % items2.length;
    showItem2(currentItem2);
}
function nextItem3() {
    currentItem3 = (currentItem3 + 1) % items3.length;
    showItem3(currentItem3);
}


showItem1(currentItem1);
setInterval(nextItem1, 2000);
showItem2(currentItem2);
setInterval(nextItem2, 2000);
showItem3(currentItem3);
setInterval(nextItem3, 2000);

// --------------------
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "black"; 
    } else {
        navbar.style.backgroundColor = "transparent"; 
    }
});

// -----------------------
function redirectToSection(sectionId) {
    window.location.href = "#" + sectionId;
}
// ---------------------------
