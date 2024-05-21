const showAllProductsBtn = document.getElementById('showAllProductsBtn');
const urlAllProducts = 'https://dummyjson.com/products';

function getAllProducts(urlAllProducts) {
    fetch(urlAllProducts)
    .then(res => res.json())
    .then(console.log);
    return products;
}

showAllProductsBtn.addEventListener('click', () => {
    showAllProducts(urlAllProducts);
});




