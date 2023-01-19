// ITERATION 1

function updateSubtotal(product) {
  let priceElement = product.querySelector(".price span").innerText;
  let quantityElement = product.querySelector(".quantity input").value;
  let subtotalElement = product.querySelector(".subtotal span").innerText;
  console.log('Calculating subtotal, yey!',
  priceElement, quantityElement, subtotalElement);

  //... your code goes here
  product.querySelector(".subtotal span").innerText = priceElement * quantityElement;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test
/*   let total = document.querySelector("#total-value span").innerText;
 */
  // ITERATION 2
  let allProducts = document.querySelectorAll(".product")
  
  allProducts.forEach((element) => {updateSubtotal(element)})
 
  // ITERATION 3
  const subtotal = document.querySelectorAll(".subtotal span");
  let sum = 0
  subtotal.forEach((element) => {sum += parseInt(element.innerText)});

  document.querySelector("#total-value span").innerText = sum
  
}

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
