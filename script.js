document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.addEventListener('change', function(event) {
        if (event.target.classList.contains('product-select')) {
            handleProductChange(event.target);
        }
    });

    document.getElementById('addProduct').addEventListener('click', function() {
        addNewProduct();
    });

    // Initial call to add the first product
    addNewProduct();
});

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

function addNewProduct() {
    const productsContainer = document.getElementById('productsContainer');
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.innerHTML = `
        <label for="product">Selecciona un producto:</label>
        <select class="product-select" name="products[]" required>
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
        <select class="subOptionsContainer hidden"></select>
        <button type="button" class="removeProduct">Borrar</button>
    `;
    productsContainer.appendChild(newProduct);

    newProduct.querySelector('.removeProduct').addEventListener('click', function() {
        newProduct.remove();
        updateTotalPrice();
    });
}

function handleProductChange(selectElement) {
    const productValue = selectElement.value;
    const subOptionsContainer = selectElement.nextElementSibling;
    
    // Clear previous sub-options
    subOptionsContainer.innerHTML = '';
    subOptionsContainer.classList.add('hidden');

    if (esquiteOptions[productValue]) {
        subOptionsContainer.classList.remove('hidden');
        esquiteOptions[productValue].forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.textContent = option.text;
            optionElement.value = option.value;
            optionElement.dataset.price = option.price;
            subOptionsContainer.appendChild(optionElement);
        });

        subOptionsContainer.addEventListener('change', function() {
            updateTotalPrice();
        });
    }

    updateTotalPrice();
}

function updateTotalPrice() {
    let totalPrice = 0;
    const productSelects = document.querySelectorAll('.product-select');
    
    productSelects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];
        if (selectedOption) {
            totalPrice += parseInt(selectedOption.dataset.price || 0);
        }
        const subOptionsContainer = select.nextElementSibling;
        if (subOptionsContainer && !subOptionsContainer.classList.contains('hidden')) {
            const subOption = subOptionsContainer.options[subOptionsContainer.selectedIndex];
            if (subOption) {
                totalPrice += parseInt(subOption.dataset.price || 0);
            }
        }
    });

    document.getElementById('totalPrice').textContent = totalPrice;
}
