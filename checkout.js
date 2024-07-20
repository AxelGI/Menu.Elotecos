// checkout.js
document.querySelector('.checkout-button').addEventListener('click', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

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
