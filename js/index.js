console.log('DOM Lab: Ironhack Cart');

// ITERATION 1

function updateSubtotal(product) {
  const quantity = product.querySelector('input').value;
  const price = product.querySelector('.price span').innerHTML;
  const subtotalValue = quantity * price;
  const subtotalElement = product.querySelector('.subtotal');
  subtotalElement.innerHTML = subtotalValue.toFixed(2);
  console.log('Calculating subtotal, yey!');
}

// ITERATION 2

function calculateAll() {
  const products = document.querySelectorAll('.product');
  products.forEach((item) => {
    updateSubtotal(item);
  });

  // ITERATION 3

  let total = 0;
  products.forEach((item) => {
    total += parseFloat(item.querySelector('.subtotal').innerHTML);
  });

  const calculatePricesBtn = document.querySelector('#total-value');
  calculatePricesBtn.innerHTML = `Total: $${total.toFixed(2)}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productRemove = target.closest('.product');
  if (productRemove) {
    productRemove.parentNode.removeChild(productRemove);
  }
}
const removeButtons = document.querySelectorAll('.btn.btn-remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
});

// ITERATION 5

function createProduct() {
 
  const productNameInput = document.querySelector(".product-name-input");
  const productPriceInput = document.querySelector(".product-price-input");
  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;
  const createdProductName = document.createElement("td");
  createdProductName.textContent = productName;
  const createdProductPrice = document.createElement("td")
  createdProductPrice.textContent = `$${parseFloat(productPrice).toFixed(2)}`;
  const trElem = document.createElement("tr")
  trElem.appendChild(createdProductName) 
  trElem.appendChild(createdProductPrice)
  const table = document.querySelector ("tbody")
  table.appendChild(trElem)
  };


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);})

  const createButton = document.querySelectorAll('.create-product');
  createButton.forEach((cButton) => {
    cButton.addEventListener('click', createProduct);
  })