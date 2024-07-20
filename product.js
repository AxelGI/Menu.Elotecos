import { products } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    
    // Encuentra el producto basado en el ID
    let foundProduct = null;
    for (const category in products.todos) {
        const product = products.todos[category].find(p => p.id === productId);
        if (product) {
            foundProduct = product;
            break;
        }
    }

    if (!foundProduct) {
        console.error('Product not found');
        return;
    }

    const productDetailContainer = document.querySelector('.product-detail');
    const { title, description, price, image, options, sizes } = foundProduct;

    // Mostrar información del producto
    const productImage = document.createElement('img');
    productImage.src = image;
    productImage.alt = title;
    productImage.classList.add('product-image');

    const productTitle = document.createElement('h1');
    productTitle.textContent = title;

    const productDescription = document.createElement('p');
    productDescription.textContent = description;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.appendChild(productTitle);
    productInfo.appendChild(productDescription);

    productDetailContainer.appendChild(productImage);
    productDetailContainer.appendChild(productInfo);

    if (sizes) {
        const sizesContainer = document.createElement('div');
        sizesContainer.classList.add('sizes');

        const sizesTitle = document.createElement('h2');
        sizesTitle.textContent = 'Tamaños';
        sizesContainer.appendChild(sizesTitle);

        sizes.forEach(size => {
            const sizeLabel = document.createElement('label');
            const sizeInput = document.createElement('input');

            sizeInput.type = 'radio';
            sizeInput.name = 'size';
            sizeInput.value = size.price;
            sizeLabel.appendChild(sizeInput);
            sizeLabel.append(` ${size.name} - $${size.price.toFixed(2)}`);

            sizesContainer.appendChild(sizeLabel);

            // Actualizar el precio del botón según el tamaño seleccionado
            sizeInput.addEventListener('change', () => {
                addToCartButton.textContent = `Añadir 1 por $${parseFloat(sizeInput.value).toFixed(2)}`;
            });
        });

        productDetailContainer.appendChild(sizesContainer);
    }

    // Mostrar opciones del producto
    if (options) {
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');
        
        options.forEach(optionGroup => {
            const optionGroupDiv = document.createElement('div');
            optionGroupDiv.classList.add('option-group');

            const optionGroupTitle = document.createElement('h3');
            optionGroupTitle.textContent = optionGroup.name;
            optionGroupDiv.appendChild(optionGroupTitle);

            optionGroup.options.forEach(option => {
                const optionLabel = document.createElement('label');
                const optionInput = document.createElement('input');
                
                optionInput.type = optionGroup.name === 'Extras' ? 'checkbox' : 'radio';
                optionInput.name = optionGroup.name;
                optionInput.value = option.name;  // Mostrar el nombre del objeto en lugar de [object Object]
                optionLabel.appendChild(optionInput);
                optionLabel.append(option.name);  // Mostrar el nombre del objeto en lugar de [object Object]

                optionGroupDiv.appendChild(optionLabel);
            });

            optionsContainer.appendChild(optionGroupDiv);
        });

        productDetailContainer.appendChild(optionsContainer);
    }


    // Botón para agregar al carrito
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart');
    addToCartButton.textContent = `Añadir 1 por $${price.toFixed(2)}`;

    addToCartButton.addEventListener('click', () => {
        // Aquí iría la lógica para agregar el producto al carrito
        console.log('Producto añadido al carrito');
        
        // Redirigir a index.html
        window.location.href = 'index.html';
    });

    productDetailContainer.appendChild(addToCartButton);
});
