let products = [];

// Fetch products from JSON file (simulating as we're not using PHP)
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts();
    })
    .catch(error => console.error('Error fetching products:', error));

// Display products on the store front
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the existing list
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>SKU: ${product.sku}</p>
            <p>Code: ${product.code}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Search function to filter products by name
function searchProducts() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayFilteredProducts(filteredProducts);
}

// Display filtered products in the store
function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear the existing list
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>SKU: ${product.sku}</p>
            <p>Code: ${product.code}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}
