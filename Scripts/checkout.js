function calculateSum() {
    let rows = table.getElementsByTagName('tr');
    let table = document.getElementById('productTable');
    let sum = 0;

    for (let i = 1; i < rows.length; i++) { // Starting from index 1 
        let priceCell = rows[i].getElementsByTagName('td')[3]; // Price column 
        if (priceCell) {
            const price = parseFloat(priceCell.innerText.replace('$', ''));
        if (!isNaN(price)) {
                sum += price;
             }
        }
    }
    return sum.toFixed(2);
}



// Calculate the sum and update the "Grand Total" input field //not displaying
totalInput.value = calculateSum();

// Get the Total input 
let totalInput = document.getElementById('total');


// event listener to the form
const addProductForm = document.getElementById('addProductForm');

addProductForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let nameInput = document.getElementById('name');
    let descriptionInput = document.getElementById('description');
    
    let imageInput = document.getElementById('image'); //fix
    let priceInput = document.getElementById('price');

    // addingg a new for added data
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
    <div class="checkoutCSS">
        <td>${nameInput.value}</td>
        <td><img src="${imageInput.value}" alt="${nameInput.value} ></td>
        <td>${descriptionInput.value}</td>
        <td>$${priceInput.value}</td>
        </div>
    `;

    // Append the new row to the table body
    let tableBody = document.querySelector('#productTable tbody');
    tableBody.appendChild(newRow);

    // Clear
    nameInput.value = '';
    imageInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';

    totalInput.value = calculateSum();
});
