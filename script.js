let productCount = 1;

document.getElementById('addProduct').addEventListener('click', function() {
    productCount++;

    const productContainer = document.createElement('div');
    productContainer.className = 'product';
    productContainer.innerHTML = `
        <label for="product${productCount}">Selecciona un producto:</label>
        <select id="product${productCount}" class="product-select" name="products[]" required>
            <option value="" disabled selected>Selecciona un producto</option>
            <option value="Maruchan Suadero o Pastor" data-price="80">Maruchan Suadero o Pastor - $80</option>
            <option value="Papas Locas" data-price="55">Papas Locas - $55</option>
            <option value="Nachos Sencillos" data-price="50">Nachos Sencillos - $50</option>
            <option value="Nachos con suadero / pastor" data-price="70">Nachos con suadero / pastor - $70</option>
            <option value="Nachos con chilli" data-price="75">Nachos con chilli - $75</option>
            <option value="Esquite Natural" data-price="25">Esquite Natural (Chico) - $25</option>
            <option value="Esquite Clásico" data-price="30">Esquite Clásico (Chico) - $30</option>
            <option value="Esquite Loco" data-price="40" data-has-suboptions="true">Esquite Loco (Chico) - $40</option>
            <option value="Esquisopa Loca" data-price="75" data-has-suboptions="true">Esquisopa Loca - $75</option>
            <!-- Agrega los demás productos aquí -->
        </select>

        <div class="subOptionsContainer hidden">
            <label for="subOptions${productCount}">Selecciona las opciones:</label>
            <div class="sub-option-group">
                <label>Maruchan:</label>
                <select id="subOptionsMaruchan${productCount}" class="sub-options-maruchan" name="subOptionsMaruchan${productCount}[]">
                    <option value="Clásica">Clásica</option>
                    <option value="Limón">Limón</option>
                    <option value="Camaron">Camaron</option>
                    <option value="Res">Res</option>
                    <option value="Pollo">Pollo</option>
                    <option value="Piquin">Piquin</option>
                    <option value="Habanero">Habanero</option>
                </select>
            </div>
            <div class="sub-option-group">
                <label>Fritura:</label>
                <select id="subOptionsFritura${productCount}" class="sub-options-fritura" name="subOptionsFritura${productCount}[]">
                    <option value="Takis">Takis</option>
                    <option value="Chetos Flaming">Chetos Flaming</option>
                    <option value="Doritos">Doritos</option>
                    <option value="Ruffles">Ruffles</option>
                </select>
            </div>
            <div class="sub-option-group">
                <label>Bolsa de Papas:</label>
                <select id="subOptionsPapas${productCount}" class="sub-options-papas" name="subOptionsPapas${productCount}[]">
                    <option value="Sabritas">Sabritas</option>
                    <option value="Ruffles">Ruffles</option>
                </select>
            </div>
        </div>
    `;

    document.getElementById('productsContainer').appendChild(productContainer);
});

document.getElementById('productsContainer').addEventListener('change', function(e) {
    if (e.target.classList.contains('product-select')) {
        const subOptionsContainer = e.target.nextElementSibling;

        if (e.target.selectedOptions[0].getAttribute('data-has-suboptions') === 'true') {
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
        let subOptionsMessage = '';

        if (productName === 'Esquisopa Loca') {
            let maruchanOptions = Array.from(select.nextElementSibling.querySelector('.sub-options-maruchan').selectedOptions).map(option => option.value);
            let frituraOptions = Array.from(select.nextElementSibling.querySelector('.sub-options-fritura').selectedOptions).map(option => option.value);
            let papasOptions = Array.from(select.nextElementSibling.querySelector('.sub-options-papas').selectedOptions).map(option => option.value);
            
            subOptionsMessage = ` con Maruchan (${maruchanOptions.join(' y ')}), Fritura (${frituraOptions.join(' y ')}), Bolsa de Papas (${papasOptions.join(' y ')})`;
        }

        message += `${productName}${subOptionsMessage}, `;
    });

    message += `Total: $${totalPrice}.`;
    let encodedMessage = encodeURIComponent(message);

    window.open(`https://api.whatsapp.com/send?phone=5215549683833&text=${encodedMessage}`, '_blank');
});
