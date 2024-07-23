function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTotal = 0;

    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const optionsText = Object.entries(item.options).map(([key, values]) => {
            if (!Array.isArray(values)) {
                values = [values];
            }
            return `${key}: ${values.join(', ')}`;
        }).join(' | ');

        // Manejar el caso en el que el precio no está definido
        const price = item.price !== undefined ? item.price : 0;

        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div>
                <strong>${item.title}</strong><br>
                ${optionsText}<br>
                Precio: $${price.toFixed(2)} x ${item.quantity}
            </div>
            <button class="remove-item" data-index="${index}">Eliminar</button>
        `;
        
        cartTotal += price * item.quantity;

        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            removeCartItem(index);
        });
    });
}


function removeCartItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartButton();
}

function sendWhatsAppOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let orderMessage = "Orden:\n";
    cart.forEach(item => {
        const optionsText = Object.entries(item.options).map(([key, values]) => {
            if (!Array.isArray(values)) {
                values = [values];
            }
            return `${key}: ${values.join(', ')}`;
        }).join(' | ');

        orderMessage += `${item.title}\n${optionsText}\nPrecio: $${item.price.toFixed(2)} x ${item.quantity}\n\n`;
    });

    orderMessage += `Total: $${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}`;

    const encodedMessage = encodeURIComponent(orderMessage);
    window.open(`https://api.whatsapp.com/send?phone=5215549683833&text=${encodedMessage}`, '_blank');
}

document.addEventListener("DOMContentLoaded", updateCartDisplay);
