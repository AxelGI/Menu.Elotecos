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
        <h2>${product.title} - ${priceInfo}</h2>
        <p>${product.description}</p>
    `;

    productDiv.addEventListener('click', () => {
        let finalPrice = product.price || 0;

        // Obtener el precio del tamaño seleccionado si existe
        if (product.sizes && product.sizes.length > 0) {
            const selectedSize = prompt(`Selecciona un tamaño:\n${product.sizes.map((size, index) => `${index + 1}. ${size.size} - $${size.price.toFixed(2)}`).join('\n')}`);
            if (selectedSize && product.sizes[selectedSize - 1]) {
                finalPrice = product.sizes[selectedSize - 1].price;
            }
        }

        // Sumar el precio de las opciones seleccionadas
        if (product.options && product.options.length > 0) {
            product.options.forEach(option => {
                const selectedOption = prompt(`Selecciona una opción para ${option.name}:\n${option.options.map((opt, index) => `${index + 1}. ${opt.name}${opt.price ? ` - $${opt.price.toFixed(2)}` : ''}`).join('\n')}`);
                if (selectedOption && option.options[selectedOption - 1] && option.options[selectedOption - 1].price) {
                    finalPrice += option.options[selectedOption - 1].price;
                }
            });
        }

        // Añadir el producto al carrito
        cart.push({
            ...product,
            price: finalPrice
        });
        alert(`${product.title} agregado al carrito con un precio de $${finalPrice.toFixed(2)}`);
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

// Event listeners para los botones de categorías
document.getElementById('btn-todo').addEventListener('click', renderAllProducts);
document.getElementById('btn-elotes').addEventListener('click', () => renderProducts('elotes'));
document.getElementById('btn-esquites').addEventListener('click', () => renderProducts('esquites'));
document.getElementById('btn-maruchan').addEventListener('click', () => renderProducts('maruchan'));
document.getElementById('btn-snacks').addEventListener('click', () => renderProducts('snacks'));
document.getElementById('btn-drinks').addEventListener('click', () => renderProducts('drinks'));

// Inicializar con la categoría "Todos" al cargar la página
renderAllProducts();
