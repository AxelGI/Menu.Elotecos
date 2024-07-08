document.getElementById('addProduct').addEventListener('click', function() {
    const productsContainer = document.getElementById('productsContainer');
    const productCount = productsContainer.querySelectorAll('.product').length + 1;

    const newProduct = document.createElement('div');
    newProduct.className = 'product';
    newProduct.innerHTML = `
        <label for="product${productCount}">Selecciona un producto:</label>
        <select id="product${productCount}" class="product-select" name="products[]" required>
            <option value="" disabled selected>Selecciona un producto</option>
            <!-- Elotes -->
            <option value="Elote Natural" data-price="25">Elote Natural - $25</option>
            <option value="Elote Clásico" data-price="30">Elote Clásico - $30</option>
            <option value="Elote Loco" data-price="40" data-has-suboptions="true">Elote Loco - $40</option>
            <option value="Elote Volcano" data-price="50">Elote Volcano - $50</option>
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
            <option value="Esquite Suadero o Pastor Chico" data-price="55" data-has-suboptions="true">Esquite Suadero o Pastor (Chico) - $55</option>
            <option value="Esquite Suadero o Pastor Grande" data-price="75" data-has-suboptions="true">Esquite Suadero o Pastor (Grande) - $75</option>
            <option value="Esquites Cambray Chico" data-price="50">Esquites Cambray (Chico) - $50</option>
            <option value="Esquites Cambray Grande" data-price="70">Esquites Cambray (Grande) - $70</option>
            <!-- Maruchan con Esquite -->
            <option value="Maruchan Clásica" data-price="55">Maruchan Clásica - $55</option>
            <option value="Maruchan esquite y fritura" data-price="60" data-has-suboptions="true">Maruchan esquite y fritura - $60</option>
            <option value="Esquisopa loca" data-price="75" data-has-suboptions="true">Esquisopa loca - $75</option>
            <option value="Maruchan Suadero o Pastor" data-price="80" data-has-suboptions="true">Maruchan Suadero o Pastor - $80</option>
            <!-- Snacks -->
            <option value="Papas Locas" data-price="55" data-has-suboptions="true">Papas Locas - $55</option>
            <option value="Nachos Sencillos" data-price="50">Nachos Sencillos - $50</option>
            <option value="Nachos con suadero o pastor" data-price="70" data-has-suboptions="true">Nachos con suadero o pastor - $70</option>
            <option value="Nachos con chilli" data-price="75">Nachos con chilli - $75</option>
            <!-- Drinks -->
            <option value="Vaso Preparado" data-price="45">Vaso Preparado - $45</option>
            <option value="Pati Bañera" data-price="80">Pati Bañera - $80</option>
            <option value="Arizona Loco" data-price="70" data-has-suboptions="true">Arizona Loco - $70</option>
            <option value="Clamateco" data-price="50">Clamateco - $50</option>
            <option value="Coca cola" data-price="25">Coca cola (600 ml) - $25</option>
            <option value="Arizona" data-price="25" data-has-suboptions="true">Arizona (680 ml) - $25</option>
            <option value="Boing" data-price="20" data-has-suboptions="true">Boing (500 ml) - $20</option>
            <option value="Agua Natural" data-price="15">Agua Natural (600 ml) - $15</option>
        </select>
        <div class="subOptionsContainer hidden"></div>
    `;

    productsContainer.appendChild(newProduct);
    updateEventListeners();
});

function updateEventListeners() {
    const productSelects = document.querySelectorAll('.product-select');
    productSelects.forEach(select => {
        select.removeEventListener('change', handleProductChange);
        select.addEventListener('change', handleProductChange);
    });
}

function handleProductChange(event) {
    const select = event.target;
    const subOptionsContainer = select.closest('.product').querySelector('.subOptionsContainer');

    if (select.selectedOptions[0].dataset.hasSuboptions) {
        subOptionsContainer.classList.remove('hidden');
        populateSubOptions(subOptionsContainer, select.value);
    } else {
        subOptionsContainer.classList.add('hidden');
        subOptionsContainer.innerHTML = '';
    }

    calculateTotalPrice();
}

function populateSubOptions(container, product) {
    container.innerHTML = '';

    if (product.includes('Elote Loco') || product.includes('Esquite Loco') || product.includes('Maruchan esquite y fritura') || product.includes('Esquisopa loca') || product.includes('Maruchan Suadero o Pastor') || product.includes('Nachos con suadero o pastor') || product.includes('Papalote') || product.includes('Charola Eloteco Clásico') || product.includes('Charola Eloteco Loco')) {
        const frituraOptions = `
            <label>Fritura:</label>
            <select name="fritura[]">
                <option value="Doritos nacho">Doritos nacho</option>
                <option value="Takis fuego">Takis fuego</option>
                <option value="Ruffles queso">Ruffles queso</option>
                <option value="Cheetos flamin' hot">Cheetos flamin' hot</option>
            </select>
        `;
        container.innerHTML += frituraOptions;
    }

    if (product.includes('Maruchan Suadero o Pastor') || product.includes('Esquite Suadero o Pastor') || product.includes('Nachos con suadero o pastor')) {
        const carneOptions = `
            <label>Carne:</label>
            <select name="carne[]">
                <option value="Suadero">Suadero</option>
                <option value="Pastor">Pastor</option>
                <option value="Mixto">Mixto</option>
            </select>
        `;
        container.innerHTML += carneOptions;
    }

    if (product.includes('Papalote') || product.includes('Charola Eloteco Clásico') || product.includes('Charola Eloteco Loco') || product.includes('Esquisopa loca')) {
        const papasOptions = `
            <label>Bolsa de Papas:</label>
            <select name="papas[]">
                <option value="Sabritas">Sabritas</option>
                <option value="Ruffles">Ruffles</option>
            </select>
        `;
        container.innerHTML += papasOptions;
    }

    if (product.includes('Arizona') || product.includes('Boing')) {
        const saborOptions = `
            <label>Sabor:</label>
            <select name="sabor[]">
                <option value="Mango">Mango</option>
                <option value="Fresa">Fresa</option>
                <option value="Manzana">Manzana</option>
                <option value="Uva">Uva</option>
            </select>
        `;
        container.innerHTML += saborOptions;
    }

    if (product.includes('Arizona Loco')) {
        const arizonaOptions = `
            <label>Arizona:</label>
            <select name="arizona[]">
                <option value="Mango">Mango</option>
                <option value="Fresa">Fresa</option>
                <option value="Kiwi-fresa">Kiwi-fresa</option>
                <option value="Sandía">Sandía</option>
                <option value="Te verde">Te verde</option>
            </select>
        `;
        container.innerHTML += arizonaOptions;
    }
}

function calculateTotalPrice() {
    const productSelects = document.querySelectorAll('.product-select');
    let totalPrice = 0;

    productSelects.forEach(select => {
        const price = parseInt(select.selectedOptions[0].dataset.price);
        totalPrice += price;
    });

    document.getElementById('totalPrice').textContent = totalPrice;
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch('your-server-endpoint', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

updateEventListeners();
