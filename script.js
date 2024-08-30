const copyButton = document.querySelector('.copy');
const excelButton = document.querySelector('.excel');
const pdfButton = document.querySelector('.pdf');
const searchInput = document.querySelector('#searchInput');
const tableRows = document.querySelectorAll('tbody tr');

copyButton.addEventListener('click', () => {
    // Implement copy functionality
    // You can use the Clipboard API or other library to copy table data
    console.log('Copy button clicked');
});

excelButton.addEventListener('click', () => {
    // Implement export to Excel functionality
    // You can use a library like SheetJS to export table data to Excel
    console.log('Excel button clicked');
});

pdfButton.addEventListener('click', () => {
    // Implement export to PDF functionality
    // You can use a library like jsPDF to export table data to PDF
    console.log('PDF button clicked');
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let match = false;

        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                match = true;
            }
        });

        if (match) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
});