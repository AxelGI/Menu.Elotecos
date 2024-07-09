
// Manejar las opciones de tamaño para Esquites y Papa Esquite
const esquiteOptions = {
    "Esquite Natural": [
        { text: "Chico", value: "Esquite Natural Chico", price: 25 },
        { text: "Grande", value: "Esquite Natural Grande", price: 45 }
    ],
    "Esquite Clásico": [
        { text: "Chico", value: "Esquite Clásico Chico", price: 30 },
        { text: "Grande", value: "Esquite Clásico Grande", price: 50 }
    ],
    "Esquite Loco": [
        { text: "Chico", value: "Esquite Loco Chico", price: 40 },
        { text: "Grande", value: "Esquite Loco Grande", price: 60 }
        
    ],
    "Papa esquite": [
        { text: "Chico", value: "Papa esquite Chico", price: 55 },
        { text: "Grande", value: "Papa esquite Grande", price: 70 }
    ],
    "Papa esquite Volcano": [
        { text: "Chico", value: "Papa esquite Volcano Chico", price: 65 },
        { text: "Grande", value: "Papa esquite Volcano Grande", price: 80 }
    ],
    "Esquite Suadero": [
        { text: "Chico", value: "Esquite Suadero Chico", price: 55 },
        { text: "Grande", value: "Esquite Suadero Grande", price: 75 }
    ],
    "Esquite Pastor": [
        { text: "Chico", value: "Esquite Pastor Chico", price: 55 },
        { text: "Grande", value: "Esquite Pastor Grande", price: 75 }
    ],
    "Esquites Cambray": [
        { text: "Chico", value: "Esquites Cambray Chico", price: 50 },
        { text: "Grande", value: "Esquites Cambray Grande", price: 70 }
    ]
};

document.getElementById('addProduct').addEventListener('click', function() {
    const productsContainer = document.getElementById('productsContainer');
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    const productCount = productsContainer.children.length + 1;
    newProduct.innerHTML = `
            <label for="product1">Selecciona un producto:</label>
            <select id="product1" class="product-select" name="products[]" required>
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
                <option value="Esquite Natural" data-has-suboptions="true" data-price="0">Esquite Natural</option>
                <option value="Esquite Clásico" data-has-suboptions="true" data-price="0">Esquite Clásico</option>
                <option value="Esquite Loco" data-has-suboptions="true" data-price="0">Esquite Loco</option>
                <option value="Papa esquite" data-has-suboptions="true" data-price="0">Papa esquite</option>
                <option value="Papa esquite Volcano" data-has-suboptions="true" data-price="0">Papa esquite Volcano</option>
                <option value="Esquite Suadero" data-has-suboptions="true" data-price="0">Esquite Suadero</option>
                <option value="Esquite Pastor" data-has-suboptions="true" data-price="0">Esquite Pastor</option>
                <option value="Esquites Cambray" data-has-suboptions="true" data-price="0">Esquites Cambray</option>
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
                <option value="Arizona Loca" data-price="70" data-has-suboptions="true">Arizona Loca - $70</option>
                <option value="Clamateco" data-price="50">Clamateco - $50</option>
                <option value="Coca cola" data-price="25">Coca cola (600 ml) - $25</option>
                <option value="Arizona" data-price="25" data-has-suboptions="true">Arizona (680 ml) - $25</option>
                <option value="Boing" data-price="20" data-has-suboptions="true">Boing (500 ml) - $20</option>
                <option value="Agua Natural" data-price="15">Agua Natural (600 ml) - $15</option>
            </select>
            <div class="subOptionsContainer hidden"></div>
            <button type="button" class="removeProduct">Eliminar producto</button>
        </div>
    </div>
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

        const options = esquiteOptions[product];
        if (options) {
            options.forEach(option => {
                subOptionsContainer.innerHTML += `
                    <div class="sub-option-group">
                        <label>${option.text} - $${option.price}</label>
                        <input type="radio" name="suboption_${product}" value="${option.value}" data-price="${option.price}">
                    </div>
                `;
            });

            // Escuchar cambios en las opciones de tamaño
            const sizeInputs = subOptionsContainer.querySelectorAll('input[type="radio"]');
            sizeInputs.forEach(input => {
                input.addEventListener('change', function() {
                    // Obtener el precio base del producto seleccionado
                    let basePrice = parseFloat(event.target.options[event.target.selectedIndex].dataset.price) || 0;
                    // Sumar el precio de la opción de tamaño seleccionada
                    const selectedPrice = parseFloat(this.dataset.price);
                    const totalPrice = basePrice + selectedPrice;
                    // Actualizar el data-price del select
                    event.target.dataset.price = totalPrice;
                    updateTotalPrice();
                });
            });
        }

        if (product.toLowerCase().includes('loco') || product.toLowerCase().includes('volcano') || product.toLowerCase().includes('papalote') || product.toLowerCase().includes('fritura') || product.toLowerCase() == 'esquisopa loca' || product.toLowerCase() == 'papa esquite') {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Fritura:</label>
                    <select multiple class="sub-options-fritura" name="subOptionsFritura[]">
                        <option value="Takis">Takis</option>
                        <option value="Chetos Flaming">Chetos Flaming</option>
                        <option value="Doritos">Doritos</option>
                        <option value="Fritos">Fritos</option>
                    </select>
                </div>
            `;
        }
        if (product.toLowerCase() == 'esquisopa loca' || product.toLowerCase() == 'papa esquite volcano' || product.toLowerCase() == 'papa esquite' || product.toLowerCase() == 'papalote' || product.toLowerCase().includes('charola eloteco')) {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Bolsa de papas:</label>
                    <select class="sub-options-bolsa" name="subOptionsBolsa[]">
                        <option value="Dorito">Dorito</option>
                        <option value="Ruffles">Ruffles</option>
                        <option value="Chetos Flamin hot">Chetos Flamin hot</option>
                        <option value="Takis">Takis</option>
                    </select>
                </div>
            `;
        }
        if (product.toLowerCase().includes('maruchan')) {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Sabor de Maruchan:</label>
                    <select class="sub-options-maruchan" name="subOptionsMaruchan[]">
                        <option value="Pollo">Pollo</option>
                        <option value="Res">Res</option>
                        <option value="Camaron">Camarón</option>
                        <option value="Piquin">Queso</option>
                        <option value="Habanero">Queso</option>
                    </select>
                </div>
            `;
        }

        if (product.toLowerCase() === 'boing') {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Sabor de Bebida:</label>
                    <select class="sub-options-bebida" name="subOptionsBebida[]">
                        <option value="Uva">Uva</option>
                        <option value="Mango">Mango</option>
                        <option value="Fresa">Fresa</option>
                        <option value="Manzana">Manzana</option>
                    </select>
                </div>
            `;
        }

        if (product.toLowerCase().includes('arizona')) {
            subOptionsContainer.innerHTML += `
                <div class="sub-option-group">
                    <label>Sabor de Bebida:</label>
                    <select class="sub-options-bebida" name="subOptionsArizona[]">
                        <option value="Sandía">Sandía</option>
                        <option value="Mango">Mango</option>
                        <option value="Fresa-kiwi">Fresa-Kiwi</option>
                        <option value="Té verde">Té verde</option>
                    </select>
                </div>
            `;
        }
    } else {
        subOptionsContainer.classList.add('hidden');
    }

    // Actualizar precio del producto seleccionado
    const price = parseFloat(event.target.options[event.target.selectedIndex].dataset.price) || 0;
    event.target.dataset.price = price;
    updateTotalPrice();
}

function updateTotalPrice() {
    const productSelects = document.querySelectorAll('.product-select');
    let totalPrice = 0;

    productSelects.forEach(select => {
        const price = parseFloat(select.dataset.price);
        totalPrice += price;
    });

    document.getElementById('totalPrice').textContent = `Total: $${totalPrice}`;
}

updateEventListeners();
