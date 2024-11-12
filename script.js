// Function to load products from localStorage
function loadProducts() {
    const menu = document.getElementById('menu') || document.getElementById('currentProducts');
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    // Clear previous content
    menu.innerHTML = '';

    // Display each product
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('menu-item');
        productDiv.innerHTML = `
            <h4>${product.product_name}</h4>
            <img src="${product.product_image}" alt="${product.product_name}" width="100">
            <p>${product.product_description}</p>
            <p><strong>Price:</strong> PHP ${product.product_price}</p>
        `;
        menu.appendChild(productDiv);
    });
}

// Call loadProducts when the page loads
document.addEventListener('DOMContentLoaded', loadProducts);

// Function to handle the form submission for adding a product
document.getElementById('addProductForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    const newProduct = {
        product_name: productName,
        product_description: productDescription,
        product_price: productPrice,
        product_image: productImage
    };

    // Get existing products from localStorage or initialize an empty array
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);

    // Save the new products array to localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Reset form and reload the product list
    document.getElementById('addProductForm').reset();
    loadProducts();
});
