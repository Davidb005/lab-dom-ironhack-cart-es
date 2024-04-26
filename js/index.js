console.log("DOM Lab: Ironhack Cart")

// ITERATION 1

function updateSubtotal(product) {
  
  const quantity = (product.querySelector("input").value);
  const price = (product.querySelector(".price span").innerHTML);
  const subtotalValue = quantity * price;
  const subtotalElement = product.querySelector(".subtotal");
  subtotalElement.innerHTML = subtotalValue
  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);


  // ITERATION 2
  // preguntar sábado
  
 const products = document.querySelectorAll("tr");
  
 products.forEach(product => {
  updateSubtotal(product);
});
}

  // ITERATION 3
  //... your code goes here



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
