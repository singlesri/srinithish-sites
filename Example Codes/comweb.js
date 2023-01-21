// Example of how to add dynamic data to the product list
var productList = document.getElementById("product-list");
var products = [
  {name: "Product 1", price: "$50"},
  {name: "Product 2", price: "$75"},
  {name: "Product 3", price: "$100"}
];

for (var i = 0; i < products.length; i++) {
  var product = products[i];
  var productItem = document.createElement("li");
  productItem.innerHTML = product.name + " - " + product.price;
  productList.appendChild(productItem);
}
