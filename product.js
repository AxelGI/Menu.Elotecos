document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = findProductById(productId);
    if (product) {
        document.getElementById("product-title").textContent = product.title;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-image").src = product.image;

        const optionsContainer = document.querySelector(".options");
        product.options.forEach(option => {
            const optionGroup = document.createElement("div");
            optionGroup.classList.add("option-group");

            const optionTitle = document.createElement("h3");
            optionTitle.textContent = option.name;
            optionGroup.appendChild(optionTitle);

            option.options.forEach(opt => {
                const optionLabel = document.createElement("label");
                optionLabel.classList.add("option-label");

                const optionCheckbox = document.createElement("input");
                optionCheckbox.type = option.name === "Bolsa de Papitas" || option.name === "Sabor" ? "radio" : "checkbox";
                optionCheckbox.name = option.name;
                optionCheckbox.value = opt.name;

                optionLabel.appendChild(optionCheckbox);
                optionLabel.appendChild(document.createTextNode(`${opt.name} (+$${opt.price ? opt.price.toFixed(2) : 0.00})`));
                optionGroup.appendChild(optionLabel);
            });

            optionsContainer.appendChild(optionGroup);
        });

        updateAddToCartButton(product);

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
    }
});

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

const calculateFinalPrice = (basePrice, options) => {
    let finalPrice = basePrice;
    options.forEach(option => {
        finalPrice += option.price;
    });
    return finalPrice;
};

const updateAddToCartButton = (product) => {
    const addToCartButton = document.querySelector(".add-to-cart");
    addToCartButton.textContent = `Añadir 1 por $${product.price.toFixed(2)}`;
};

const addToCart = (product, options, finalPrice) => {
    const cartItem = {
        ...product,
        options: options,
        price: finalPrice
    };
    cart.push(cartItem);
    alert(`Producto añadido al carrito con un precio de $${finalPrice.toFixed(2)}`);
    updateCartTotal();
};

const updateCartTotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
};
