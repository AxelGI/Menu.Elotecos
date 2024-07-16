// principal.js
document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        {
            id: 1,
            category: "Elotes",
            title: "Elote Natural",
            description: "Elote tradicional preparado con sal y limón.",
            price: 25.00,
            image: "https://example.com/elote-natural.jpg"
        },
        {
            id: 2,
            category: "Elotes",
            title: "Elote Clásico",
            description: "Elote tradicional preparado con mantequilla, mayonesa y queso rallado.",
            price: 30.00,
            image: "https://example.com/elote-clasico.jpg"
        },
        {
            id: 3,
            category: "Elotes",
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
    ];

    const contenedores = {
        "Elotes": document.querySelector('#elotes'),
        "Esquites": document.querySelector('#esquites'),
        "Maruchan con Esquite": document.querySelector('#maruchan-esquite'),
        "Snacks": document.querySelector('#snacks'),
        "Drinks": document.querySelector('#drinks')
        // Agrega más contenedores según tus categorías
    };

    productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product_card');
        productCard.setAttribute("data-product-id", producto.id);

        productCard.innerHTML = `
            <img class="product_card-image" alt="Producto" src="${producto.image}">
            <div class="product_card-item">
                <span class="product_card-item-title">${producto.title}</span>
                <span class="product_card-item-description">${producto.description}</span>
                <span class="product_card-item-price">$${producto.price.toFixed(2)}</span>
            </div>
        `;

        productCard.addEventListener('click', () => {
            window.location.href = `product.html?id=${producto.id}`;
        });

        // Añadir la tarjeta de producto a la categoría correspondiente
        if (contenedores[producto.category]) {
            contenedores[producto.category].appendChild(productCard);
        }
    });
});
