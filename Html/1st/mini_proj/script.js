const url = "https://dummyjson.com/products";

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const maxlen= data.products.length;
  console.log(maxlen)
  const products = data.products.slice(0, maxlen); // first 10 products

  const container = document.getElementById("product-container");

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    productDiv.innerHTML = `
  <img src="${product.thumbnail}" alt="${product.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px;"/>
  <div class="product-details">
    <span><strong>Name:</strong> ${product.title}</span><br>
    <span><strong>Price:</strong> $${product.price}</span><br>
    <span><strong>Rating:</strong> ${product.rating}</span>
  </div>
  <div class="cart_div"><button class="cart">Add To Cart</button></div>
`;

    container.appendChild(productDiv);
  });
};

getData();
