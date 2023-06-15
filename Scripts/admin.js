
//admin table
let tableBody = document.getElementById("adminTableBody");
let productDisplayed = JSON.parse(localStorage.getItem('data'));
let selectedRowIndex = -1;

let idInput = document.querySelector("#id")
let imgInput = document.querySelector("#imageofProduct")
let titleInput = document.querySelector("#name")
let descriptionInput = document.querySelector("#description")
let priceInput = document.querySelector("#price")
let btn = document.querySelector('#submit')

function showProducts() {
  tableBody.innerHTML = '';
  productDisplayed.forEach((data, index) => {
    tableBody.innerHTML +=
      `
      <tr>
        <td>${data.id}</td>
        <td><img id="picsForAdmin" src="${data.Image}" alt="${data.Title}"></td>
        <td>${data.Title}</td>
        <td>${data.Description}</td>
        <td>${data.price}</td>
        <td><button onclick="editRow(${index})" class="crud-btn">✍️</button></td>
        <td><button onclick="deleteRow(${index})" class="crud-btn">🗑️</button></td>
      </tr>
      `;
  });
}

function editRow(index) {
  alert("Ready for editing at the top")
  selectedRowIndex = index;
  let selectedProduct = productDisplayed[index];
  idInput.value = selectedProduct.id;
  imgInput.value = selectedProduct.Image;
  titleInput.value = selectedProduct.Title;
  descriptionInput.value = selectedProduct.Description;
  priceInput.value = selectedProduct.price;
}

function deleteRow(index) {
  alert("DATA DELETED!")
  productDisplayed.splice(index, 1);
  showProducts();
}

function addProduct() {
  let newProduct = {
    id: idInput.value,
    Image: imgInput.value,
    Title: titleInput.value,
    Description: descriptionInput.value,
    price: priceInput.value
  }

  productDisplayed.push(newProduct)
  localStorage.setItem('data', JSON.stringify(productDisplayed))
  showProducts()
}

showProducts();

btn.addEventListener('click', () => {
  if (selectedRowIndex !== -1) {
    const editedProduct = {
      id: idInput.value,
      Image: imgInput.value,
      Title: titleInput.value,
      Description: descriptionInput.value,
      price: priceInput.value
    };
    productDisplayed[selectedRowIndex] = editedProduct;
    showProducts();
    selectedRowIndex = -1;
  } else {
    addProduct();
  }
});