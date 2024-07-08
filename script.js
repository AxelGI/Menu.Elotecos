document.getElementById('addProduct').addEventListener('click', function() {
    const productsContainer = document.getElementById('productsContainer');
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    const productCount = productsContainer.children.length + 1;
    newProduct.innerHTML = `
        <label for="product${productCount}">Selecciona un producto:</label>
        <select id="product${productCount}" class="product-select" name="products[]" required>
            <option value="" disabled selected>Selecciona un producto</option>
            <!-- Elotes -->
            <option value="Elote Natural" data-price="25">Elote Natural - $25</option>
            <option value="Elote Clásico" data-price="30">Elote Clásico - $30</option>
            <option value="Elote Loco" data-price="40" data-has-suboptions="true">Elote Loco - $40</option>
            <option value="Elote Volcano" data-price="50" data-has-suboptions="true">Elote Volcano - $50</option>
            <option value="Papalote" data-price="55" data-has-suboptions="true">Papalote - $55</option>
            <option value="Charola Eloteco Clásico" data-price="75" data-has-suboptions="true">Charola Eloteco Clásico - $75</option>
            <option value="Charola Eloteco Loco" data-price="80" data-has-suboptions="true">Charola Eloteco Loco - $80</option>
            <!-- Esquites -->
            <option value="Doriesquite" data-price="50">Doriesquite - $50</option>
            <option value="Tostiesquite" data-price="50">Tostiesquite - $50</option>
            <option value="Esquite Natural Chico" data-price="25">Esquite Natural (Chico) - $25</option>
            <option value="Esquite Natural Grande" data-price="45">Esquite Natural (Grande) - $45</option>
            <option value="Esquite Clásico Chico" data-price="30">Esquite Clásico (Chico) - $30</option>
            <option value="Esquite Clásico Grande" data-price="50">Esquite Clásico (Grande) - $50</option>
            <option value="Esquite Loco Chico" data-price="40" data-has-suboptions="true">Esquite Loco (Chico) - $40</option>
            <option value="Esquite Loco Grande" data-price="60" data-has-suboptions="true">Esquite Loco (Grande) - $60</option>
            <option value="Papa esquite Chico" data-price="55" data-has-suboptions="true">Papa esquite (Chico) - $55</option>
            <option value="Papa esquite Grande" data-price="70" data-has-suboptions="true">Papa esquite (Grande) - $70</option>
            <option value="Papa esquite Volcano Chico" data-price="65" data-has-suboptions="true">Papa esquite Volcano (Chico) - $65</option>
            <option value="Papa esquite Volcano Grande" data-price="80" data-has-suboptions="true">Papa esquite Volcano (Grande) - $80</option>
            <option value="Esquite Suadero Chico" data-price="55" data-has-suboptions="true">Esquite Suadero (Chico) - $55</option>
            <option value="Esquite Suadero Grande" data-price="75" data-has-suboptions="true">Esquite Suadero (Grande) - $75</option>
            <option value="Esquite Pastor Chico" data-price="55" data-has-suboptions="true">Esquite Pastor (Chico) - $55</option>
            <option value="Esquite Pastor Grande" data-price="75" data-has-suboptions="true">Esquite Pastor (Grande) - $75</option>
            <option value="Esquites Cambray Chico" data-price="50">Esquites Cambray (Chico) - $50</option>
            <option value="Esquites Cambray Grande" data-price="70">Esquites Cambray (Grande) - $70</option>
            <!-- Maruchan con Esquite -->
            <option value="Maruchan Clásica" data-price="55" data-has-suboptions="true">Maruchan Clásica - $55</option>
            <option value="Maruchan esquite y fritura" data-price="60" data-has-suboptions="true">Maruchan esquite y fritura - $60</option>
            <option value="Esquisopa loca" data-price="75" data-has-suboptions="true">Esquisopa loca - $75</option>
            <option value="Maruchan Suadero" data-price="80" data-has-suboptions="true">Maruchan Suadero - $80</option>
            <option value="Maruchan Pastor" data-price="80" data-has-suboptions="true">Maruchan Pastor - $80</option>
            <!-- Snacks -->
            <option value="Papas Locas" data-price="55" data-has-suboptions="true">Papas Locas - $55</option>
            <option value="Nachos Sencillos" data-price="50">Nachos Sencillos - $50</option>
            <option value="Nachos con suadero" data-price="70" data-has-suboptions="true">Nachos con suadero - $70</option>
            <option value="Nachos con pastor" data-price="70" data-has-suboptions="true">Nachos con pastor - $70</option>
            <option value="Nachos con chilli" data-price="75">Nachos con chilli - $75</option>
            <!-- Drinks -->
            <option value="Vaso Preparado" data-price="45" data-has-suboptions="true">Vaso Preparado - $45</option>
            <option value="Pati Bañera" data-price="80" data-has-suboptions="true">Pati Bañera - $80</option>
            <option value="Arizona Loco" data-price="70" data-has-suboptions="true">Arizona Loco - $70</option>
            <option value="Clamateco" data-price="50">Clamateco - $50</option>
            <option value="Coca cola" data-price="25">Coca cola (600 ml) - $25</option>
            <option value="Arizona" data-price="25" data-has-suboptions="true">Arizona (680 ml) - $25</option>
            <option value="Boing" data-price="20" data-has-suboptions="true">Boing (500 ml) - $20</option>
            <option value="Agua Natural" data-price="15">Agua Natural (600 ml) - $15</option>
        </select>
        <div class="subOptionsContainer hidden"></div>
        <button type="button" class="removeProduct">Eliminar producto</button>
    `;
    productsContainer.appendChild(newProduct);
    updateEventListeners();
});

function updateEventListeners() {
    const productSelects = document.querySelectorAll('.product-select');
    productSelects.forEach(select => {
        select.addEventListener('change', handleProductChange);
    });

    const removeButtons = document.querySelectorAll('.removeProduct');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
            updateTotalPrice();
        });
    });
}

function handleProductChange(event) {
    const product = event.target.value;
    const subOptionsContainer = event.target.nextElementSibling;
    const hasSuboptions = event.target.options[event.target.selectedIndex].dataset.hasSuboptions === 'true';

    subOptionsContainer.innerHTML = '';
    if (hasSuboptions) {
        subOptionsContainer.classList.remove('hidden');
        if (product.toLowerCase().includes('loco') || product.toLowerCase().includes('volcano')) {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Fritura:</label>
                    <select multiple class="sub-options-fritura" name="subOptionsFritura[]">
                        <option value="Takis">Takis</option>
                        <option value="Chetos Flaming">Chetos Flaming</option>
                        <option value="Doritos">Doritos</option>
                        <option value="Ruffles">Ruffles</option>
                    </select>
                </div>
            `;
        }
        if (product.toLowerCase().includes('vaso preparado') || product.toLowerCase().includes('pati bañera')) {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Bebida:</label>
                    <select class="sub-options-bebida" name="subOptionsBebida[]">
                        <option value="Ameyal">Ameyal</option>
                        <option value="Sangría">Sangría</option>
                        <option value="Squirt">Squirt</option>
                        <option value="Agua Mineral">Agua Mineral</option>
                    </select>
                </div>
            `;
        }
        if (product.toLowerCase().includes('maruchan')) {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Maruchan:</label>
                    <select class="sub-options-maruchan" name="subOptionsMaruchan[]">
                        <option value="Res">Res</option>
                        <option value="Pollo">Pollo</option>
                        <option value="Piquín Habanero">Piquín Habanero</option>
                        <option value="Camarón">Camarón</option>
                    </select>
                </div>
            `;
        }
        if (product.toLowerCase().includes('suadero') || product.toLowerCase().includes('pastor')) {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Extras:</label>
                    <select multiple class="sub-options-extras" name="subOptionsExtras[]">
                        <option value="Cilantro">Cilantro</option>
                        <option value="Cebolla">Cebolla</option>
                    </select>
                </div>
            `;
        }
    } else {
        subOptionsContainer.classList.add('hidden');
    }

    updateTotalPrice();
}

function updateTotalPrice() {
    const productSelects = document.querySelectorAll('.product-select');
    let total = 0;
    productSelects.forEach(select => {
        if (select.value) {
            const price = parseInt(select.selectedOptions[0].dataset.price);
            total += price;
        }
    });
    document.getElementById('totalPrice').innerText = total;
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    let orderDetails = 'Orden:\n';
    let total = 0;

    formData.getAll('products[]').forEach((product, index) => {
        const price = parseInt(document.querySelector(`#product${index + 1} option[value="${product}"]`).dataset.price);
        total += price;
        orderDetails += `${product} - $${price}\n`;

        const subOptionsFritura = formData.getAll('subOptionsFritura[]');
        if (subOptionsFritura.length > 0) {
            orderDetails += `  Fritura: ${subOptionsFritura.join(', ')}\n`;
        }

        const subOptionsBebida = formData.getAll('subOptionsBebida[]');
        if (subOptionsBebida.length > 0) {
            orderDetails += `  Bebida: ${subOptionsBebida.join(', ')}\n`;
        }

        const subOptionsMaruchan = formData.getAll('subOptionsMaruchan[]');
        if (subOptionsMaruchan.length > 0) {
            orderDetails += `  Maruchan: ${subOptionsMaruchan.join(', ')}\n`;
        }

        const subOptionsExtras = formData.getAll('subOptionsExtras[]');
        if (subOptionsExtras.length > 0) {
            orderDetails += `  Extras: ${subOptionsExtras.join(', ')}\n`;
        }
    });

    orderDetails += `Total: $${total}`;

    const encodedMessage = encodeURIComponent(orderDetails);
    window.open(`https://api.whatsapp.com/send?phone=+5215549683833&text=${encodedMessage}`, '_blank');
});

updateEventListeners();
