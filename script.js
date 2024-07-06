document.getElementById('menuItems').addEventListener('change', function() {
    let selectedOptions = Array.from(this.selectedOptions);
    let totalPrice = selectedOptions.reduce((total, option) => {
        return total + Number(option.getAttribute('data-price'));
    }, 0);

    document.getElementById('totalPrice').textContent = totalPrice;

    // Check if any selected option has suboptions
    let hasSubOptions = selectedOptions.some(option => option.getAttribute('data-has-suboptions') === 'true');
    document.getElementById('subOptionsContainer').classList.toggle('hidden', !hasSubOptions);
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let tableNumber = document.getElementById('tableNumber').value;
    let menuItems = Array.from(document.getElementById('menuItems').selectedOptions).map(option => option.value);
    let totalPrice = document.getElementById('totalPrice').textContent;

    let message = `Hola, soy ${name}. Me gustaría ordenar: `;

    menuItems.forEach(item => {
        if (item === 'Elote Loco') {
            let subOptions = Array.from(document.getElementById('subOptions').selectedOptions).map(option => option.value);
            message += `${item} con fritura de ${subOptions.join(' y ')}, `;
        } else {
            message += `${item}, `;
        }
    });

    message += `Mesa número: ${tableNumber}. Total: $${totalPrice}.`;
    let encodedMessage = encodeURIComponent(message);

    window.open(`https://api.whatsapp.com/send?phone=+5215549683833&text=${encodedMessage}`, '_blank');
});
