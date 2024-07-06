let productCount = 1;

document.getElementById('addProduct').addEventListener('click', function() {
    productCount++;

    const productContainer = document.createElement('div');
    productContainer.className = 'product';
    productContainer.innerHTML = `
        <label for="product${productCount}">Selecciona un producto:</label>
        <select id="product${productCount}" class="product-select" name="products[]" required>
            <option value="" disabled selected>Selecciona un producto</option>
            <option value="Tacos" data-price="50">Tacos - $50</option>
            <option value="Burritos" data-price="70">Burritos - $70</option>
            <option value="Quesadillas" data-price="60">Quesadillas - $60</option>
            <option value="Nachos" data-price="40">Nachos - $40</option>
            <option value="Elote Loco" data-price="40" data-has-suboptions="true">Elote Loco - $40</option>
        </select>

        <div class="subOptionsContainer hidden">
            <label for="subOptions${productCount}">Selecciona la fritura:</label>
            <select id="subOptions${productCount}" class="sub-options" name="subOptions${productCount}[]" multiple>
                <option value="Takis">Takis</option>
                <option value="Chetos Flaming">Chetos Flaming</option>
                <option value="Doritos">Doritos</option>
                <option value="Ruffles">Ruffles</option>
            </select>
        </div>
    `;

    document.getElementById('productsContainer').appendChild(productContainer);
});

document.getElementById('productsContainer').addEventListener('change', function(e) {
    if (e.target.classList.contains('product-select')) {
        const productSelect = e.target;
        const subOptionsContainer = productSelect.nextElementSibling;
        const selectedOption = productSelect.selectedOptions[0];
        const price = Number(selectedOption.getAttribute('data-price'));

        // Show or hide sub-options based on the selected product
        if (selectedOption.getAttribute('data-has-suboptions') === 'true') {
            subOptionsContainer.classList.remove('hidden');
        } else {
            subOptionsContainer.classList.add('hidden');
        }

        // Recalculate total price
        let totalPrice = 0;
        const allProductSelects = document.querySelectorAll('.product-select');
        allProductSelects.forEach(select => {
            if (select.selectedOptions.length > 0) {
                totalPrice += Number(select.selectedOptions[0].getAttribute('data-price'));
            }
        });

        document.getElementById('totalPrice').textContent = totalPrice;
    }
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let productsContainer = document.getElementById('productsContainer');
    let totalPrice = document.getElementById('totalPrice').textContent;

    let message = `Hola, soy ${name}. Me gustaría ordenar: `;

    let allProductSelects = productsContainer.querySelectorAll('.product-select');
    allProductSelects.forEach(select => {
        let selectedOption = select.selectedOptions[0];
        let productName = selectedOption.value;
        if (productName === 'Elote Loco') {
            let subOptions = Array.from(select.nextElementSibling.querySelectorAll('.sub-options')[0].selectedOptions).map(option => option.value);
            message += `${productName} con fritura de ${subOptions.join(' y ')}, `;
        } else {
            message += `${productName}, `;
        }
    });

    message += `Total: $${totalPrice}.`;
    let encodedMessage = encodeURIComponent(message);

    window.open(`https://api.whatsapp.com/send?phone=5215549683833&text=${encodedMessage}`, '_blank');
});
