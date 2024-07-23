import {
    frituraOptions,
    papitasOptions,
    papaslocasOptions,
    maruchanOptions,
    carneOptions,
    extrasOptions,
    saborPreparadas,
    saborArizonaLoco,
    saborArizona,
    saborBoings,
    products
} from './data.js';

let cart = [];
const container = document.getElementById('product-container');

// Función para renderizar un producto con opciones y tamaños
function renderProduct(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // Renderizar el resto de la información del producto
    let priceInfo = '';
    if (product.sizes && product.sizes.length > 0) {
        priceInfo = product.sizes.map(size => `$${size.price.toFixed(2)}`).join(', ');
    } else {
        priceInfo = `$${(product.price || 0).toFixed(2)}`;
    }

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}${priceInfo ? ` - ${priceInfo}` : ''}</h2>
        <p>${product.description}</p>
    `;

    productDiv.addEventListener('click', () => {
        // Redirigir a product.html con el ID del producto en la URL
        window.location.href = `product.html?id=${product.id}`;
    });

    container.appendChild(productDiv);
}

// Función para renderizar productos de una categoría específica
function renderProducts(category) {
    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar nuevos productos

    if (products.todos.hasOwnProperty(category)) {
        products.todos[category].forEach(product => {
            renderProduct(product);
        });
    } else {
        console.error(`No se encontraron productos en la categoría "${category}"`);
    }
}

// Función para renderizar todos los productos de todas las categorías
function renderAllProducts() {
    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar nuevos productos

    Object.keys(products.todos).forEach(category => {
        products.todos[category].forEach(product => {
            renderProduct(product);
        });
    });
}

function updateCartButton() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartButton = document.getElementById('cart-button');
    const cartTotalElement = document.getElementById('cart-total');

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    cartTotalElement.textContent = total.toFixed(2);
}

// Event listeners para los botones de categorías
document.getElementById('btn-todo').addEventListener('click', renderAllProducts);
document.getElementById('btn-elotes').addEventListener('click', () => renderProducts('elotes'));
document.getElementById('btn-esquites').addEventListener('click', () => renderProducts('esquites'));
document.getElementById('btn-maruchan').addEventListener('click', () => renderProducts('maruchan'));
document.getElementById('btn-snacks').addEventListener('click', () => renderProducts('snacks'));
document.getElementById('btn-drinks').addEventListener('click', () => renderProducts('drinks'));

// Inicializar con la categoría "Todos" al cargar la página
renderAllProducts();
updateCartButton();
