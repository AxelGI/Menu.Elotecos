document.addEventListener("DOMContentLoaded", () => {
    const optionRadios = document.querySelectorAll('input[name="option"]');
    const salsaAparteRadios = document.querySelectorAll('input[name="salsa-aparte"]');
    const addToCartButton = document.querySelector(".add-to-cart");

    function updatePrice() {
        let selectedOption = document.querySelector('input[name="option"]:checked').value;
        let selectedSalsaAparte = document.querySelector('input[name="salsa-aparte"]:checked');
        let salsaApartePrice = selectedSalsaAparte ? parseFloat(selectedSalsaAparte.value) : 0;
        
        let totalPrice = parseFloat(selectedOption) + salsaApartePrice;
        addToCartButton.textContent = `Añadir 1 por $${totalPrice.toFixed(2)}`;
    }

    optionRadios.forEach(radio => {
        radio.addEventListener("change", updatePrice);
    });

    salsaAparteRadios.forEach(radio => {
        radio.addEventListener("change", updatePrice);
    });

    addToCartButton.addEventListener("click", () => {
        alert("Producto añadido al carrito!");
        // Aquí puedes agregar lógica para manejar la acción de agregar al carrito.
    });

    // Inicializar el precio en la carga de la página
    updatePrice();
});
