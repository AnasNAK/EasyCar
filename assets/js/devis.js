// save as pdf 

document.getElementById('downloadPdf').addEventListener('click', function() {
    const element = document.getElementById('table-container-PDF');
    html2pdf()
        .from(element)
        .save('Devis.pdf');
});

// save as pdf 