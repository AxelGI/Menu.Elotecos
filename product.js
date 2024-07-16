document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const products = {
        1: {
            title: "Elote Natural",
            description: "Elote tradicional preparado con sal y limón.",
            price: 25.00,
            image: "https://example.com/elote-natural.jpg",
            options: []
        },
        2: {
            title: "Elote Clásico",
            description: "Elote tradicional preparado con mantequilla, mayonesa y queso rallado.",
            price: 30.00,
            image: "https://example.com/elote-clasico.jpg",
            options: []
        },
        3: {
            title: "Elote Loco",
            description: "Elote preparado con mantequilla, mayonesa y cobertura de fritura a elegir: doritos nacho, takis fuego, ruffles queso o cheetos flamin' hot.",
            price: 40.00,
            image: "https://example.com/elote-loco.jpg",
            options: [
                { name: "Doritos Nacho" },
                { name: "Takis Fuego" },
                { name: "Ruffles Queso" },
                { name: "Cheetos Flamin' Hot" }
            ]
        },
        // Agrega más productos aquí siguiendo el mismo formato
    };

    if (products[productId]) {
        const product = products[productId];
        document.getElementById("product-title").textContent = product.title;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-image").src = product.image;
        document.querySelector(".add-to-cart").textContent = `Añadir 1 por $${product.price.toFixed(2)}`;

        // Opciones
        const optionsContainer = document.querySelector(".options");
        product.options.forEach(option => {
            const optionElement = document.createElement("div");
            optionElement.innerHTML = `
                <input type="checkbox" name="option" value="${option.name}">
                <label>${option.name}</label>
            `;
            optionsContainer.appendChild(optionElement);
        });
    } else {
        // Manejo de error si el producto no existe
        alert("Producto no encontrado");
        window.location.href = "index.html";
    }
});
