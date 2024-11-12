let products = [];

// Fetch products from the JSON file
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts();
    })
    .catch(error => console.error('Error fetching products:', error));

// Display products in the admin panel
function displayProducts() {
    const productListAdmin = document.getElementById('productListAdmin');
    productListAdmin.innerHTML = ''; // Clear the existing list
    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `
            ${product.name} - ${product.sku} - ${product.code} - $${product.price}
            <button onclick="deleteProduct(${product.id})">Delete</button>
            <button onclick="editProduct(${product.id})">Edit</button>
        `;
        productListAdmin.appendChild(productItem);
    });
}

// Handle product addition
document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value;
    const sku = document.getElementById('productSku').value;
    const code = document.getElementById('productCode').value;
    const price = parseFloat(document.getElementById('productPrice').value);

    const newProduct = {
        id: products.length + 1,
        name: name,
        sku: sku,
        code: code,
        price: price
    };

    products.push(newProduct);
    displayProducts();
});

// Delete a product
function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    displayProducts();
}

// Edit a product
function editProduct(productId) {
    const product = products.find(product => product.id === productId);
    const newName = prompt("Edit product name:", product.name);
    const newSku = prompt("Edit product SKU:", product.sku);
    const newCode = prompt("Edit product code:", product.code);
    const newPrice = parseFloat(prompt("Edit product price:", product.price));

    if (newName) product.name = newName;
    if (newSku) product.sku = newSku;
    if (newCode) product.code = newCode;
    if (newPrice) product.price = newPrice;

    displayProducts();
}
