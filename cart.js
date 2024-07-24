document.addEventListener('DOMContentLoaded', () => {
    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalContainer = document.getElementById('cart-total');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if (cartItemsContainer && cartTotalContainer) {
            cartItemsContainer.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                
                // Formatear opciones
                const optionsText = item.options ? formatOptions(item.options) + '\n' : '';
                // Convertir saltos de línea a <br>
                const formattedOptionsText = optionsText.replace(/\n/g, '<br>');
                
                itemElement.innerHTML = `
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-size">${item.size ? `Tamaño: ${item.size}` : ''}</div>
                    <div class="cart-item-options">${formattedOptionsText}</div>
                    <button class="remove-item" data-index="${index}">Borrar</button>
                `;
                cartItemsContainer.appendChild(itemElement);
                total += item.price * item.quantity;
            });
            cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
            
            // Añadir event listeners a los botones de borrar
            const removeButtons = document.querySelectorAll('.remove-item');
            removeButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const index = e.target.getAttribute('data-index');
                    removeFromCart(index);
                });
            });
        }
    }

    function formatOptions(options) {
        let formattedOptions = 'Opciones:\n';
        for (const [key, value] of Object.entries(options)) {
            formattedOptions += `${key}:\n`;
            if (Array.isArray(value)) {
                value.forEach(opt => {
                    const optObj = JSON.parse(opt);
                    formattedOptions += `  - ${optObj.name} ${optObj.price ? `- $${optObj.price.toFixed(2)}` : ''}\n`;
                });
            } else {
                const optObj = JSON.parse(value);
                formattedOptions += `  - ${optObj.name} ${optObj.price ? `- $${optObj.price.toFixed(2)}` : ''}\n`;
            }
            formattedOptions += '\n'; // Añadir un salto de línea extra entre cada grupo de opciones
        }
        return formattedOptions.trim();
    }
    
    function removeFromCart(index) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    function sendWhatsAppOrder() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('No tienes productos en tu carrito.');
            return;
        }

        let message = 'Hola, quiero hacer una orden:\n\n';
        cart.forEach(item => {
            message += `- ${item.title} ${item.size ? `(Tamaño: ${item.size})` : ''} x${item.quantity}\n`;
            if (item.options) {
                message += `  Opciones:\n${formatOptions(item.options)}\n`;
            }
            message += `  Precio: $${(item.price).toFixed(2)}\n\n`;
        });

        const total = cart.reduce((sum, item) => sum + (item.price), 0);
        message += `Total: $${total.toFixed(2)}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=+5215549683833&text=${encodedMessage}`, '_blank');
    }

    // Añade los event listeners al cargar el DOM
    document.querySelector('button[onclick="sendWhatsAppOrder()"]').addEventListener('click', sendWhatsAppOrder);

    // Llama a la función para actualizar la visualización del carrito al cargar el DOM
    updateCartDisplay();
});
