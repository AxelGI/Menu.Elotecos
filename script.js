document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("productsContainer");
    const addProductButton = document.getElementById("addProduct");
    const orderForm = document.getElementById("orderForm");
    const totalPriceElement = document.getElementById("totalPrice");
    let productCount = 1;

    addProductButton.addEventListener("click", () => {
        productCount++;
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <label for="product${productCount}">Selecciona un producto:</label>
            <select id="product${productCount}" class="product-select" name="products[]" required>
                <option value="" disabled selected>Selecciona un producto</option>
                <!-- Opciones de productos (Elotes, Esquites, etc.) -->
                <!-- Repetir las opciones del producto aquí como en el primer select -->
                <option value="Elote Natural" data-price="25">Elote Natural - $25</option>
                <option value="Elote Clásico" data-price="30">Elote Clásico - $30</option>
                <option value="Elote Loco" data-price="40" data-has-suboptions="true">Elote Loco - $40</option>
                <option value="Elote Volcano" data-price="50" data-has-suboptions="true">Elote Volcano - $50</option>
                <option value="Papalote" data-price="55" data-has-suboptions="true">Papalote - $55</option>
                <option value="Charola Eloteco Clásico" data-price="75" data-has-suboptions="true">Charola Eloteco Clásico - $75</option>
                <option value="Charola Eloteco Loco" data-price="80" data-has-suboptions="true">Charola Eloteco Loco - $80</option>
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
                <option value="Maruchan Clásica" data-price="55" data-has-suboptions="true">Maruchan Clásica - $55</option>
                <option value="Maruchan esquite y fritura" data-price="60" data-has-suboptions="true">Maruchan esquite y fritura - $60</option>
                <option value="Esquisopa loca" data-price="75" data-has-suboptions="true">Esquisopa loca - $75</option>
                <option value="Maruchan Suadero" data-price="80" data-has-suboptions="true">Maruchan Suadero - $80</option>
                <option value="Maruchan Pastor" data-price="80" data-has-suboptions="true">Maruchan Pastor - $80</option>
                <option value="Papas Locas" data-price="55" data-has-suboptions="true">Papas Locas - $55</option>
                <option value="Nachos Sencillos" data-price="50">Nachos Sencillos - $50</option>
                <option value="Nachos con suadero" data-price="70" data-has-suboptions="true">Nachos con suadero - $70</option>
                <option value="Nachos con pastor" data-price="70" data-has-suboptions="true">Nachos con pastor - $70</option>
                <option value="Nachos con chilli" data-price="75">Nachos con chilli - $75</option>
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
        productsContainer.appendChild(productDiv);

        const productSelect = productDiv.querySelector(".product-select");
        const subOptionsContainer = productDiv.querySelector(".subOptionsContainer");
        const removeProductButton = productDiv.querySelector(".removeProduct");

        productSelect.addEventListener("change", () => updateSubOptions(productSelect, subOptionsContainer));
        removeProductButton.addEventListener("click", () => {
            productsContainer.removeChild(productDiv);
            updateTotalPrice();
        });

        updateTotalPrice();
    });

    productsContainer.addEventListener("change", (event) => {
        if (event.target.classList.contains("product-select")) {
            updateSubOptions(event.target, event.target.nextElementSibling);
        }
        updateTotalPrice();
    });

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const productSelects = document.querySelectorAll(".product-select");
        let orderDetails = `Orden de ${name}:\n\n`;

        productSelects.forEach((select, index) => {
            const product = select.options[select.selectedIndex].text;
            orderDetails += `Producto ${index + 1}: ${product}\n`;
        });

        const totalPrice = totalPriceElement.textContent;
        orderDetails += `\nTotal a pagar: ${totalPrice}`;

        const encodedMessage = encodeURIComponent(orderDetails);
        window.open(`https://api.whatsapp.com/send?phone=+5215549683833&text=${encodedMessage}`, '_blank');
    });

    function updateSubOptions(selectElement, subOptionsContainer) {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const hasSubOptions = selectedOption.getAttribute("data-has-suboptions") === "true";

        subOptionsContainer.innerHTML = "";

        if (hasSubOptions) {
            const subOptions = document.createElement("div");
            subOptions.classList.add("subOption");
            subOptions.innerHTML = `
                <label>Elige una opción adicional:</label>
                <select>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <!-- Añadir más opciones aquí -->
                </select>
            `;
            subOptionsContainer.appendChild(subOptions);
            subOptionsContainer.classList.remove("hidden");
        } else {
            subOptionsContainer.classList.add("hidden");
        }

        updateTotalPrice();
    }

    function updateTotalPrice() {
        const productSelects = document.querySelectorAll(".product-select");
        let totalPrice = 0;

        productSelects.forEach((select) => {
            const selectedOption = select.options[select.selectedIndex];
            const productPrice = parseFloat(selectedOption.getAttribute("data-price")) || 0;
            totalPrice += productPrice;
        });

        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Inicializar subopciones para el primer producto
    const initialProductSelect = document.querySelector(".product-select");
    const initialSubOptionsContainer = initialProductSelect.nextElementSibling;
    updateSubOptions(initialProductSelect, initialSubOptionsContainer);
    updateTotalPrice();
});
