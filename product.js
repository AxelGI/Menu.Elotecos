import { products } from './data.js';

// Función para obtener el producto por ID
function getProductById(productId) {
    for (const category in products.todos) {
        const product = products.todos[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Función para crear los elementos de las opciones
function createOptionElement(option, groupName) {
    const container = document.createElement('div');
    container.classList.add('option-container');

    if (option.name === 'Extras' || option.name === 'Cubierta fritura' || option.name === 'Verdura') {
        option.options.forEach(opt => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = groupName;
            checkbox.value = JSON.stringify({ name: opt.name, price: opt.price || 0 });
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(opt.price ? `${opt.name} - $${opt.price.toFixed(2)}` : opt.name));
            container.appendChild(label);
        });
    } else {
        const select = document.createElement('select');
        select.name = groupName;
        
        // Set the 'required' attribute for non-'Extras' select elements
        if (option.name !== 'Extras') {
            select.required = true;
        }
        
        option.options.forEach(opt => {
            const optionElement = document.createElement('option');
            optionElement.value = JSON.stringify({ name: opt.name, price: opt.price || 0 });
            optionElement.textContent = opt.price ? `${opt.name} - $${opt.price.toFixed(2)}` : opt.name;
            select.appendChild(optionElement);
        });
        container.appendChild(select);
    }

    return container;
}

function addToCart(product, size, options) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.id === product.id && item.size === size && JSON.stringify(item.options) === JSON.stringify(options));
    
    let basePrice = size ? size.price : product.price; // Verifica que basePrice tenga el valor correcto
    let extrasCost = 0;

    // Calcula el costo total de las opciones seleccionadas
    for (const groupName in options) {
        const selectedOptions = options[groupName];
        if (Array.isArray(selectedOptions)) {
            selectedOptions.forEach(opt => {
                const option = JSON.parse(opt);
                extrasCost += option.price;
            });
        } else {
            const option = JSON.parse(selectedOptions);
            extrasCost += option.price;
        }
    }

    const totalPrice = basePrice + extrasCost;

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: totalPrice,
            size: size ? size.name : null,
            options: options,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartButton();
}

function updateCartButton() {
    const cartTotalElement = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

function validateOptions(options) {
    for (const groupName in options) {
        // Solo verifica que no esté vacío si no es 'Extras'
        if (groupName !== 'extras' && options[groupName].length === 0) {
            return false;
        }
    }
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'), 10);
    const product = getProductById(productId);

    if (!product) return;

    const productTitle = document.querySelector('.product-info h1');
    const productDescription = document.querySelector('.product-info p');
    const productPrice = document.querySelector('.product-info .price');
    const productImage = document.querySelector('.product-image');
    const optionsContainer = document.querySelector('.options');
    const errorMessageElement = document.createElement('div');
    errorMessageElement.classList.add('error-message');
    document.body.insertBefore(errorMessageElement, document.querySelector('#cart-button'));

    productTitle.textContent = product.title;
    productDescription.textContent = product.description;
    productPrice.textContent = product.price ? `$${product.price.toFixed(2)}` : 'Precio no disponible';
    productImage.src = product.image;

    let selectedSize = null;
    if (product.sizes && product.sizes.length > 0) {
        const sizeSelect = document.createElement('select');
        sizeSelect.name = 'size';
        product.sizes.forEach(size => {
            const sizeOption = document.createElement('option');
            sizeOption.value = size.size; // Cambiado a size.size
            sizeOption.textContent = `${size.size} - $${size.price.toFixed(2)}`;
            sizeSelect.appendChild(sizeOption);
        });
        optionsContainer.appendChild(sizeSelect);

        selectedSize = product.sizes[0];

        // Actualiza el precio al cambiar el tamaño
        sizeSelect.addEventListener('change', (event) => {
            selectedSize = product.sizes.find(size => size.size === event.target.value); // Cambiado a size.size
            productPrice.textContent = selectedSize ? `$${selectedSize.price.toFixed(2)}` : 'Precio no disponible';
        });
    }

    const options = {};
    product.options.forEach(option => {
        const groupName = option.name.replace(/\s+/g, '-').toLowerCase();
        const optionGroup = document.createElement('div');
        optionGroup.classList.add('option-group');
        const optionGroupTitle = document.createElement('h3');
        optionGroupTitle.textContent = option.name;
        optionGroup.appendChild(optionGroupTitle);

        const optionElement = createOptionElement(option, groupName);
        optionGroup.appendChild(optionElement);

        optionsContainer.appendChild(optionGroup);

        options[groupName] = [];
        optionElement.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('change', () => {
                if (input.type === 'checkbox') {
                    if (input.checked) {
                        options[groupName].push(input.value);
                    } else {
                        const index = options[groupName].indexOf(input.value);
                        if (index !== -1) {
                            options[groupName].splice(index, 1);
                        }
                    }
                } else {
                    options[groupName] = input.value;
                }
            });
        });
    });

    document.querySelector('.add-to-cart').addEventListener('click', () => {
        if (validateOptions(options)) {
            addToCart(product, selectedSize, options);
            alert('¡Producto añadido :3!');
            window.location.href = 'index.html';
        } else {
            alert('Por favor selecciona al menos una opción de cada grupo.');
        }
    });

    // Actualizar el botón del carrito flotante al cargar la página
    updateCartButton();
});
