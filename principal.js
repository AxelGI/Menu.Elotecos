let cart = [];

const frituraOptions = [
    { name: "Ruffles" },
    { name: "Takis" },
    { name: "Cheetos Flamin' Hot" },
    { name: "Doritos" }
];

const papitasOptions = [
    { name: "Ruffles" },
    { name: "Takis" },
    { name: "Cheetos Flamin' Hot" },
    { name: "Doritos" },
    { name: "Sabritas Amarillas" }
];

const maruchanOptions = [
    { name: "Habanero" },
    { name: "Piquin" },
    { name: "Pollo" },
    { name: "Camaron" },
    { name: "Res" }
];

const carneOptions = [
    { name: "Suadero" },
    { name: "Pastor" },
    { name: "Mixto" },
];

const extrasOptions = [
    { name: "Volcano", price: 10.00 },
    { name: "Cebolla" },
    { name: "Cilantro" }
];

const products = {
    "elotes": [
        {
            id: 1,
            title: "Elote Natural",
            description: "Elote tradicional preparado con sal y limón.",
            price: 25.00,
            image: "https://example.com/elote-natural.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 2,
            title: "Elote Clásico",
            description: "Elote tradicional preparado con mantequilla, mayonesa y queso rallado.",
            price: 30.00,
            image: "https://example.com/elote-clasico.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 3,
            title: "Elote Loco",
            description: "Elote preparado con mantequilla, mayonesa y cobertura de fritura a elegir: doritos nacho, takis fuego, ruffles queso o cheetos flamin' hot",
            price: 40.00,
            image: "https://example.com/elote-loco.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 4,
            title: "Elote Volcano",
            description: "Elote Loco bañado en queso amarillo líquido calientito.",
            price: 50.00,
            image: "https://example.com/elote-volcano.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 5,
            title: "Papalote",
            description: "Elote Loco acompañado de una camita de papas Sabritas a elegir.",
            price: 55.00,
            image: "https://example.com/papalote.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 6,
            title: "Charola Eloteco Clásico",
            description: "Charola con un elote y esquite clásicos acompañados de papas Sabritas a elegir.",
            price: 75.00,
            image: "https://example.com/charola-clasico.jpg",
            options: [
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 7,
            title: "Charola Eloteco Loco",
            description: "Charola con un elote y esquite loco acompañados de papas Sabritas a elegir.",
            price: 80.00,
            image: "https://example.com/charola-loco.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions },
            ]
        }
    ],
    "esquites": [
        {
            id: 8,
            title: "Doriesquite",
            description: "Doritos a elegir preparados con esquite, limón, sal, mayonesa y queso rallado.",
            price: 50.00,
            image: "https://example.com/doriesquite.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 9,
            title: "Tostiesquite",
            description: "Tostitos a elegir preparados con esquite, limón, sal, mayonesa y queso rallado.",
            price: 50.00,
            image: "https://example.com/tostiesquite.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 10,
            title: "Esquite Natural",
            description: "Esquite preparado con sal y limón.",
            sizes: [
                { size: "Chico", price: 25.00 },
                { size: "Grande", price: 45.00 }
            ],
            image: "https://example.com/esquite-natural.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 11,
            title: "Esquite Clásico",
            description: "Esquite preparado con sal y limón, mayonesa y queso rallado.",
            sizes: [
                { size: "Chico", price: 30.00 },
                { size: "Grande", price: 50.00 }
            ],
            image: "https://example.com/esquite-clasico.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 12,
            title: "Esquite Loco",
            description: "Esquite preparado con sal y limón, mayonesa, queso y cobertura de fritura: doritos nacho, takis fuego, ruffles queso o cheetos flamin' hot.",
            sizes: [
                { size: "Chico", price: 40.00 },
                { size: "Grande", price: 60.00 }
            ],
            image: "https://example.com/esquite-loco.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 13,
            title: "Papa Esquite",
            description: "Esquite Loco acompañado de una camita de papas Sabritas a elegir.",
            sizes: [
                { size: "Chico", price: 55.00 },
                { size: "Grande", price: 70.00 }
            ],
            image: "https://example.com/papa-esquite.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 14,
            title: "Papa Esquite Volcano",
            description: "Papa esquite bañado en queso amarillo líquido calientito.",
            sizes: [
                { size: "Chico", price: 65.00 },
                { size: "Grande", price: 80.00 }
            ],
            image: "https://example.com/papa-esquite-volcano.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 15,
            title: "Esquite Suadero o Pastor",
            description: "Esquite preparado con carne al gusto: suadero, pastor o mixto.",
            sizes: [
                { size: "Chico", price: 65.00 },
                { size: "Grande", price: 80.00 }
            ],
            image: "https://example.com/esquite-suadero-pastor.jpg",
            options: [
                { name: "Carne", options: carneOptions },
                { name: "Extras", options: extrasOptions },
            ]
        }
    ],
    "maruchan": [
        {
            id: 16,
            title: "Maruchan Sencilla",
            description: "Sopa Maruchan preparada con sal y limón.",
            price: 35.00,
            image: "https://example.com/maruchan-sencilla.jpg",
            options: [
                { name: "Sabor", options: maruchanOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 17,
            title: "Maruchan Clásica",
            description: "Sopa Maruchan preparada con sal y limón, mayonesa, queso rallado y Valentina.",
            price: 45.00,
            image: "https://example.com/maruchan-clasica.jpg",
            options: [
                { name: "Sabor", options: maruchanOptions },
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 18,
            title: "Maruchan Especial",
            description: "Sopa Maruchan preparada con sal y limón, mayonesa, queso rallado, Valentina y carne.",
            price: 55.00,
            image: "https://example.com/maruchan-especial.jpg",
            options: [
                { name: "Sabor", options: maruchanOptions },
                { name: "Carne", options: carneOptions },
                { name: "Extras", options: extrasOptions },
            ]
        }
    ],
    "snacks": [
        {
            id: 19,
            title: "Dorilocos",
            description: "Doritos Nacho preparados con limón, sal, Valentina, cueritos y verduras encurtidas.",
            price: 40.00,
            image: "https://example.com/dorilocos.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 20,
            title: "Tostilocos",
            description: "Tostitos preparados con limón, sal, Valentina, cueritos y verduras encurtidas.",
            price: 40.00,
            image: "https://example.com/tostilocos.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        },
        {
            id: 21,
            title: "Papalocas",
            description: "Sabritas Amarillas preparadas con limón, sal, Valentina, cueritos y verduras encurtidas.",
            price: 40.00,
            image: "https://example.com/papalocas.jpg",
            options: [
                { name: "Extras", options: extrasOptions },
            ]
        }
    ],
    "drinks": [
        {
            id: 22,
            title: "Agua de Horchata",
            description: "Refrescante agua de horchata preparada con arroz y canela.",
            price: 20.00,
            image: "https://example.com/agua-horchata.jpg",
            options: []
        },
        {
            id: 23,
            title: "Agua de Jamaica",
            description: "Refrescante agua de Jamaica preparada con flores de Jamaica naturales.",
            price: 20.00,
            image: "https://example.com/agua-jamaica.jpg",
            options: []
        }
    ],
    "refrescos": [
        {
            id: 24,
            title: "Coca-Cola",
            description: "Refresco Coca-Cola 355ml.",
            price: 18.00,
            image: "https://example.com/coca-cola.jpg",
            options: []
        },
        {
            id: 25,
            title: "Sprite",
            description: "Refresco Sprite 355ml.",
            price: 18.00,
            image: "https://example.com/sprite.jpg",
            options: []
        },
        {
            id: 26,
            title: "Fanta",
            description: "Refresco Fanta 355ml.",
            price: 18.00,
            image: "https://example.com/fanta.jpg",
            options: []
        }
    ]
};

function renderProduct(product) {
    const container = document.getElementById('product-container');
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('product-options');

    const optionInputs = product.options.map(option => {
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option.name;

        const optionSelect = document.createElement('select');
        option.options.forEach(opt => {
            const optionElement = document.createElement('option');
            optionElement.value = opt.name;
            optionElement.textContent = opt.name;
            if (opt.price) {
                optionElement.dataset.price = opt.price;
            }
            optionSelect.appendChild(optionElement);
        });

        optionLabel.appendChild(optionSelect);
        optionsDiv.appendChild(optionLabel);
        return optionSelect;
    });

    const sizesDiv = document.createElement('div');
    sizesDiv.classList.add('product-sizes');
    let price = product.price;
    if (product.sizes) {
        const sizesLabel = document.createElement('label');
        sizesLabel.textContent = "Tamaño";
        const sizesSelect = document.createElement('select');
        product.sizes.forEach(size => {
            const sizeOption = document.createElement('option');
            sizeOption.value = size.size;
            sizeOption.textContent = `${size.size} - $${size.price.toFixed(2)}`;
            sizeOption.dataset.price = size.price;
            sizesSelect.appendChild(sizeOption);
        });
        sizesLabel.appendChild(sizesSelect);
        sizesDiv.appendChild(sizesLabel);
        price = product.sizes[0].price;
    }

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Precio: $${price.toFixed(2)}</p>
    `;
    productDiv.appendChild(optionsDiv);
    productDiv.appendChild(sizesDiv);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Agregar al carrito';
    addToCartButton.addEventListener('click', () => {
        const selectedOptions = optionInputs.map(select => select.value);
        let finalPrice = product.price || price;
        if (product.sizes) {
            finalPrice = parseFloat(sizesDiv.querySelector('select').selectedOptions[0].dataset.price);
        }
        selectedOptions.forEach(option => {
            const selectedOption = optionInputs.find(opt => opt.value === option);
            if (selectedOption && selectedOption.selectedOptions[0].dataset.price) {
                finalPrice += parseFloat(selectedOption.selectedOptions[0].dataset.price);
            }
        });
        cart.push({
            ...product,
            selectedOptions,
            price: finalPrice
        });
        alert(`${product.title} agregado al carrito con un precio de $${finalPrice.toFixed(2)}`);
    });
    productDiv.appendChild(addToCartButton);
    container.appendChild(productDiv);
}

function renderProducts(category) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products[category].forEach(renderProduct);
}

document.getElementById('btn-todo').addEventListener('click', () => renderProducts('elotes'));
document.getElementById('btn-elotes').addEventListener('click', () => renderProducts('elotes'));
document.getElementById('btn-esquites').addEventListener('click', () => renderProducts('esquites'));
document.getElementById('btn-maruchan').addEventListener('click', () => renderProducts('maruchan'));
document.getElementById('btn-snacks').addEventListener('click', () => renderProducts('snacks'));
document.getElementById('btn-drinks').addEventListener('click', () => renderProducts('drinks'));
document.getElementById('btn-refrescos').addEventListener('click', () => renderProducts('refrescos'));

// Initialize with "Todos"
renderProducts('elotes');
