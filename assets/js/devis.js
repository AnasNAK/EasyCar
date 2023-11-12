// Function to generate PDF
function generatePDF() {
    // Get cart data from localStorage
    let storedCartItems = localStorage.getItem("cartItems");
    let parsedCartItems = JSON.parse(storedCartItems) || [];

    // Get the table body where cart items will be added
    let cartTableBody = document.getElementById('cartTableBody');

    // Clear existing content in the table body
    cartTableBody.innerHTML = '';

    // Loop through the cart items and add them to the table
    parsedCartItems.forEach(function (carData) {
        let cartItem = document.createElement("tr");
        cartItem.innerHTML = `
            <td class="w-25 "><img src="${carData.image}" alt="${carData.name}" class=" w-50 m-auto"></td>
            <td><p class="text-center fw-bold fs-5 ">${carData.name}</p></td>
            <td><p>${carData.price}.00DH</p></td>
            <td><p class="text-center fw-bold fs-5 ">${carData.price}.00DH</p></td>
            
        `;

        // Append the item to the cart table body
        cartTableBody.appendChild(cartItem);
    });

    // Calculate total price
    let totalPrice = parsedCartItems.reduce((total, carData) => total + parseFloat(carData.price), 0);

    // Calculate total TTC (Total price + 20%)
    let totalTTC = totalPrice * 1.2;

    // Display the total price and total TTC in the table
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2) + 'DH';
    document.getElementById('totalTTC').textContent = totalTTC.toFixed(2) + 'DH';


    document.getElementById('downloadPdf').addEventListener('click', function () {
        const element = document.getElementById('myTable');
        html2pdf()
            .from(element)
            .save('Devis.pdf');
    });
}

// Call the generatePDF function when the page loads
generatePDF();



///////////////////////////////////////////////////////////////////////

// Function to format the date in a specific way
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Function to calculate the deadline date after 7 days
function calculateDeadline() {
    const currentDate = new Date();
    const deadlineDate = new Date(currentDate);
    deadlineDate.setDate(currentDate.getDate() + 7);

    // Display the current date and deadline date on the page
    document.getElementById('currentDate').textContent = formatDate(currentDate);
    document.getElementById('deadlineDate').textContent = formatDate(deadlineDate);
}

// Call the calculateDeadline function when the page loads
document.addEventListener('DOMContentLoaded', calculateDeadline);
