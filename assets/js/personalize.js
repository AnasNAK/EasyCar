document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    const toit = urlParams.get('toit');
    const system = urlParams.get('system');
    const station = urlParams.get('station');
    const image = urlParams.get('image');

    document.getElementById('index').textContent = index; // Set index in a hidden field
    document.getElementById('carImage').src = decodeURIComponent(image);

    // Set selected values in dropdowns
    document.getElementById('toitDropdown').value = toit;
    document.getElementById('systemDropdown').value = system;
    document.getElementById('stationDropdown').value = station;

    // If local storage is empty, initialize it with the current data
    if (!localStorage.getItem('cartItems')) {
        localStorage.setItem('cartItems', JSON.stringify([{ toit, system, station }]));
    }
});

function confirmChanges() {
    console.log('Confirm changes function called');

    // Retrieve index from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    console.log('Index:', index);

    // Get the confirmed values directly from the dropdowns
    const confirmedToit = document.getElementById('toitDropdown').value;
    const confirmedSystem = document.getElementById('systemDropdown').value;
    const confirmedStation = document.getElementById('stationDropdown').value;

    // Get the existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Update the data for the specific index
    const updatedData = existingData.map((item, i) => {
        if (i.toString() === index) {
            return {
                ...item,
                toit: confirmedToit,
                system: confirmedSystem,
                station: confirmedStation,
            };
        }
        return item;
    });

 const confirmationMessage = 'Are you sure you want to confirm the changes?';
 const userConfirmed = window.confirm(confirmationMessage);


 if (userConfirmed) {
  
     localStorage.setItem('cartItems', JSON.stringify(updatedData));

 
     const reservationPageURL = '../reservation.html'; 
     window.location.href = reservationPageURL;
 }
}