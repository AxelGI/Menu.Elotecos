import {
    products
} from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    // Obtener el parámetro 'id' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Mostrar el ID en el HTML
    document.getElementById("product-id").textContent = `ID: ${productId}`;

    // Buscar el producto con el ID obtenido
    const product = findProductById(productId);
    if (product) {
        // Actualizar la información del producto en la página
        document.getElementById("product-title").textContent = product.title;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-image").src = product.image;

        // Agregar opciones del producto
        const optionsContainer = document.querySelector(".options");
        if (product.options) {
            product.options.forEach(option => {
                const optionGroup = document.createElement("div");
                optionGroup.classList.add("option-group");

                const optionTitle = document.createElement("h3");
                optionTitle.textContent = option.name;
                optionGroup.appendChild(optionTitle);

                option.options.forEach(opt => {
                    const optionLabel = document.createElement("label");
                    optionLabel.classList.add("option-label");

                    const optionInput = document.createElement("input");
                    optionInput.type = option.name === "Bolsa de Papitas" || option.name === "Sabor" ? "radio" : "checkbox";
                    optionInput.name = option.name;
                    optionInput.value = opt.name;

                    optionLabel.appendChild(optionInput);
                    optionLabel.appendChild(document.createTextNode(`${opt.name} (+$${opt.price ? opt.price.toFixed(2) : 0.00})`));
                    optionGroup.appendChild(optionLabel);
                });

                optionsContainer.appendChild(optionGroup);
            });
        }

        // Configurar el botón "Añadir al carrito"
        updateAddToCartButton(product);

        // Agregar evento al botón "Añadir al carrito"
        document.querySelector(".add-to-cart").addEventListener("click", () => {
            const selectedOptions = Array.from(document.querySelectorAll(".option-group input:checked"))
                .map(input => ({
                    group: input.name,
                    value: input.value,
                    price: product.options.find(o => o.name === input.name).options.find(o => o.name === input.value).price || 0
                }));

            const finalPrice = calculateFinalPrice(product.price, selectedOptions);
            addToCart(product, selectedOptions, finalPrice);
        });
    } else {
        // Mostrar mensaje si no se encuentra el producto
        document.querySelector(".product-info").innerHTML = "<p>Producto no encontrado.</p>";
    }
});

// Función para encontrar el producto por ID
const findProductById = (id) => {
    for (let category in products) {
        for (let product of products[category]) {
            if (product.id == id) {
                return product;
            }
        }
    }
    return null;
};

// Función para calcular el precio final
const calculateFinalPrice = (basePrice, options) => {
    let finalPrice = basePrice;
    options.forEach(option => {
        finalPrice += option.price;
    });
    return finalPrice;
};

// Función para actualizar el botón "Añadir al carrito"
const updateAddToCartButton = (product) => {
    const addToCartButton = document.querySelector(".add-to-cart");
    addToCartButton.textContent = `Añadir 1 por $${product.price.toFixed(2)}`;
};

// Función para agregar el producto al carrito
const addToCart = (product, options, finalPrice) => {
    const cartItem = {
        ...product,
        options: options,
        price: finalPrice
    };
    // Suponiendo que 'cart' es una variable global o en almacenamiento local
    cart.push(cartItem);
    alert(`Producto añadido al carrito con un precio de $${finalPrice.toFixed(2)}`);
    updateCartTotal();
};

// Función para actualizar el total del carrito
const updateCartTotal = () => {
    // Suponiendo que 'cart' es una variable global o en almacenamiento local
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
};
