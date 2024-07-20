import { products } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const productId = parseInt(new URLSearchParams(window.location.search).get('id'), 10);

    let product = null;

    for (const category in products.todos) {
        product = products.todos[category].find(p => p.id === productId);
        if (product) break;
    }

    if (product) {
        const productDetails = document.getElementById('product-details');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add('product-image');

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productInfo.innerHTML = `
            <h1>${product.title}</h1>
            <p>${product.description}</p>
        `;

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');
        optionsContainer.innerHTML = `<h2>Opciones</h2>`;

        product.options.forEach(optionGroup => {
            const optionGroupElement = document.createElement('div');
            optionGroupElement.classList.add('option-group');
            const optionGroupTitle = document.createElement('h3');
            optionGroupTitle.textContent = optionGroup.name;
            optionGroupElement.appendChild(optionGroupTitle);

            optionGroup.options.forEach(option => {
                const optionLabel = document.createElement('label');
                optionLabel.innerHTML = `
                    <input type="${optionGroup.name === 'Extras' ? 'checkbox' : 'radio'}" name="${optionGroup.name}" value="${option.name}">
                    ${option.name}
                `;
                optionGroupElement.appendChild(optionLabel);
            });

            optionsContainer.appendChild(optionGroupElement);
        });

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart');
        addToCartButton.textContent = `Añadir 1 por $${product.price.toFixed(2)}`;
        addToCartButton.onclick = () => {
            // Funcionalidad para añadir al carrito
        };

        productDetails.appendChild(productImage);
        productDetails.appendChild(productInfo);
        productDetails.appendChild(optionsContainer);
        productDetails.appendChild(addToCartButton);
    } else {
        console.error('Product not found');
    }
});
