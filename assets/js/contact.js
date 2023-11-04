const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const sendButton = document.getElementById("send-button");


// const nameRegex = /^[A-Za-z\s]{5,10}( [A-Za-z\s]{5,10})?$/;
// const nameRegex = /^[A-Za-z\s]{5,10}( [A-Za-z\s]{5,10})?$/;
const nameRegex = /^[A-Za-z\s]{5,10} [A-Za-z\s]{5,10}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-zA-Z]{2,3}$/; 
const phoneRegex =  /^0[5-6]+[0-9]{8}$/;


function validateInput(input, regex) {
  if (regex.test(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}


nameInput.addEventListener("input", () => {
  validateInput(nameInput, nameRegex);
});

emailInput.addEventListener("input", () => {
  validateInput(emailInput, emailRegex);
});

phoneInput.addEventListener("input", () => {
  validateInput(phoneInput, phoneRegex);
});


sendButton.addEventListener("click", () => {
  
  if (nameRegex.test(nameInput.value) && emailRegex.test(emailInput.value) && phoneRegex.test(phoneInput.value)) {
    
    alert("Formulaire valide. Vous pouvez l'envoyer.");
  } else {
    alert("Le formulaire contient des données non valides. Veuillez corriger les erreurs.");
  }
});