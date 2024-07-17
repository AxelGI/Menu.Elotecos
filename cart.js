document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Precio: $${item.price}</p>
            ${item.option ? `<p>Opción: ${item.option.name} $${item.option.price}</p>` : ''}
            ${item.extras.map(extra => `<p>Extra: ${extra.name} $${extra.price}</p>`).join('')}
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    document.getElementById('checkout-button').addEventListener('click', function() {
        let message = 'Pedido:\n';
        cart.forEach(item => {
            message += `${item.name} $${item.price}\n`;
            if (item.option) {
                message += `  Opción: ${item.option.name} $${item.option.price}\n`;
            }
            item.extras.forEach(extra => {
                message += `  Extra: ${extra.name} $${extra.price}\n`;
            });
        });

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+5215549683833&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    });
});
