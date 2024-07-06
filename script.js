document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let tableNumber = document.getElementById('tableNumber').value;
    let menuItems = Array.from(document.getElementById('menuItems').selectedOptions).map(option => option.value);

    let message = `Hola, soy ${name}. Me gustaría ordenar: ${menuItems.join(', ')}. Mesa número: ${tableNumber}.`;
    let encodedMessage = encodeURIComponent(message);

    window.open(`https://api.whatsapp.com/send?phone=TU_NUMERO_DE_WHATSAPP&text=${encodedMessage}`, '_blank');
});
