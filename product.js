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

// Función para obtener el parámetro 'id' de la URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
    print (params.get('id'));
}

// Función para renderizar los detalles del producto
function renderProductDetails(productId) {
    // Obtener todos los productos de todas las categorías
    const allProducts = Object.values(products.todos).flat();

    // Buscar el producto por ID
    const product = allProducts.find(prod => prod.id === productId);

    const productDetailsDiv = document.getElementById('product-details');
    const productOptionsDiv = document.getElementById('product-options');

    if (product) {
        let priceInfo = '';
        if (product.sizes && product.sizes.length > 0) {
            priceInfo = product.sizes.map(size => `$${size.price.toFixed(2)}`).join(', ');
        } else {
            priceInfo = `$${(product.price || 0).toFixed(2)}`;
        }

        productDetailsDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title} - ${priceInfo}</h2>
            <p>${product.description}</p>
        `;

        // Renderizar las opciones y tamaños si existen
        if (product.sizes && product.sizes.length > 0) {
            const sizesLabel = document.createElement('label');
            sizesLabel.textContent = 'Tamaños:';
            productOptionsDiv.appendChild(sizesLabel);
            
            const sizesSelect = document.createElement('select');
            product.sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size.size;
                option.textContent = `${size.size} - $${size.price.toFixed(2)}`;
                sizesSelect.appendChild(option);
            });
            productOptionsDiv.appendChild(sizesSelect);
        }

        if (product.options && product.options.length > 0) {
            product.options.forEach(option => {
                const optionLabel = document.createElement('label');
                optionLabel.textContent = option.name;
                const optionSelect = document.createElement('select');
                option.options.forEach(opt => {
                    const optOption = document.createElement('option');
                    optOption.value = opt.name;
                    optOption.textContent = `${opt.name}${opt.price ? ` - $${opt.price.toFixed(2)}` : ''}`;
                    optionSelect.appendChild(optOption);
                });
                productOptionsDiv.appendChild(optionLabel);
                productOptionsDiv.appendChild(optionSelect);
            });
        }

        // Botón para agregar al carrito
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Agregar al carrito';
        addToCartButton.addEventListener('click', () => {
            let finalPrice = product.price || 0;

            if (product.sizes && product.sizes.length > 0) {
                finalPrice = parseFloat(sizesSelect.selectedOptions[0].dataset.price);
            }

            if (product.options && product.options.length > 0) {
                product.options.forEach(option => {
                    const selectedOption = optionSelect.selectedOptions[0];
                    if (selectedOption.dataset.price) {
                        finalPrice += parseFloat(selectedOption.dataset.price);
                    }
                });
            }

            cart.push({
                ...product,
                price: finalPrice
            });
            alert(`${product.title} agregado al carrito con un precio de $${finalPrice.toFixed(2)}`);
        });
        productOptionsDiv.appendChild(addToCartButton);
    } else {
        productDetailsDiv.textContent = 'Producto no encontrado.';
    }
}

// Obtener el ID del producto de la URL y renderizar sus detalles
const productId = getProductIdFromURL();
renderProductDetails(productId);
