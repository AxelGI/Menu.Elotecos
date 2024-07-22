// data.js
export const frituraOptions = [
    { name: "Ruffles" },
    { name: "Takis" },
    { name: "Cheetos Flamin' Hot" },
    { name: "Doritos" }
];

export const papitasOptions = [
    { name: "Ruffles" },
    { name: "Takis" },
    { name: "Cheetos Flamin' Hot" },
    { name: "Doritos" },
    { name: "Sabritas Amarillas" }
];

export const papaslocasOptions = [
    { name: "Naturales" },
    { name: "Queso" },
    { name: "Chipotle" },
    { name: "Adobadas" }
];

export const maruchanOptions = [
    { name: "Habanero" },
    { name: "Piquin" },
    { name: "Pollo" },
    { name: "Camaron" },
    { name: "Res" }
];

export const carneOptions = [
    { name: "Suadero" },
    { name: "Pastor" },
    { name: "Mixto" },
];

export const verduraOptions = [
    { name: "Cebolla" },
    { name: "Cilantro" },
];

export const extrasOptions = [
    { name: "Volcano", price: 10.00 },
];

export const saborPreparadas = [
    { name: "Ameyal", description: "Escarchado de chamoy rosa y miguelito, fresas naturales y cereza" },
    { name: "Sangria preparada", description: "Limón, sal, tajín, escarchado de chamoy y miguelito" },
    { name: "Squirt Preparado", description: "Limón, sal, escarchado de chamoy y miguelito" },
    { name: "Agua Mineral Preparada", description: "Limón, sal, escarchado de chamoy y miguelito" }                
];

export const saborArizonaLoco = [
    { name: "Arizona Mango", description: "Escarchado de chamoy con miguelito, mango, cacahuates, gomitas y dulces de tamarindo" },
    { name: "Arizona Fresa", description: "Escarchado de chamoy con miguelito, fresa, cacahuates, gomitas y dulces de tamarindo" }
];

export const saborArizona = [
    { name: "Mango" },
    { name: "Kiwi-Fresa" },
    { name: "Sandía" },
    { name: "Té Verde" }
];

export const saborBoings = [
    { name: "Manzana" },
    { name: "Mango" },
    { name: "Uva" },
    { name: "Fresa" }
];

export const products = {
    "todos": {
    "elotes": [
        {
            id: 1,
            title: "Elote Natural",
            description: "Elote tradicional preparado con sal y limón.",
            price: 25.00,
            image: "img/elote-natural.png",
            options: [
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 2,
            title: "Elote Clásico",
            description: "Elote tradicional preparado con mantequilla, mayonesa y queso rallado.",
            price: 30.00,
            image: "img/elote-natural.png",
            options: [
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 3,
            title: "Elote Loco",
            description: "Elote preparado con mantequilla, mayonesa y cobertura de fritura a elegir: doritos nacho, takis fuego, ruffles queso o cheetos flamin' hot",
            price: 40.00,
            image: "img/elote-loco.png",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 4,
            title: "Elote Volcano",
            description: "Elote Loco bañado en queso amarillo líquido calientito.",
            price: 50.00,
            image: "img/elote-volcano.png",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 5,
            title: "Papalote",
            description: "Elote Loco acompañado de una camita de papas Sabritas a elegir.",
            price: 55.00,
            image: "img/papalote.png",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 6,
            title: "Charola Eloteco Clásico",
            description: "Charola con un elote y esquite clásicos acompañados de papas Sabritas a elegir.",
            price: 75.00,
            image: "img/charola-eloteco.PNG",
            options: [
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 7,
            title: "Charola Eloteco Loco",
            description: "Charola con un elote y esquite loco acompañados de papas Sabritas a elegir.",
            price: 80.00,
            image: "img/charola-eloteco.PNG",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Extras", options: extrasOptions},
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
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 9,
            title: "Tostiesquite",
            description: "Tostitos a elegir preparados con esquite, limón, sal, mayonesa y queso rallado.",
            price: 50.00,
            image: "https://example.com/tostiesquite.jpg",
            options: [
                { name: "Extras", options: extrasOptions},
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
                { name: "Extras", options: extrasOptions},
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
                { name: "Extras", options: extrasOptions},
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
                { name: "Extras", options: extrasOptions},
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
                { name: "Extras", options: extrasOptions},
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
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 15,
            title: "Esquite Suadero o Pastor",
            description: "Esquite preparado con carne al pastor, suadero o mixto y verdura encima.",
            sizes: [
                { size: "Chico", price: 55.00 },
                { size: "Grande", price: 75.00 }
            ],
            image: "https://example.com/esquite-suadero-pastor.jpg",
            options: [
                { name: "Carne", options: carneOptions},
                { name: "Verdura", options: verduraOptions},
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 16,
            title: "Esquites Cambray",
            description: "Esquite clásico acompañado con papas cambray preparadas con especias al horno.",
            sizes: [
                { size: "Chico", price: 50.00 },
                { size: "Grande", price: 70.00 }
            ],
            image: "https://example.com/esquites-cambray.jpg",
            options: [
                { name: "Verdura", options: verduraOptions},
                { name: "Extras", options: extrasOptions},
            ]
        }
    ],
    "maruchan": [
        {
            id: 17,
            title: "Maruchan Clásica",
            description: "Maruchan preparada con esquite, limón, sal, mayonesa y queso rallado.",
            price: 55.00,
            image: "https://example.com/maruchan-clasica.jpg",
            options: [
                { name: "Sabor", options: maruchanOptions },
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 18,
            title: "Maruchan esquite y fritura",
            description: "Maruchan-esquite con cobertura de fritura a elegir: Cheeto Flamin, Doritos, Takis o Ruffles.",
            price: 60.00,
            image: "https://example.com/maruchan-esquite-fritura.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Sabor", options: maruchanOptions },
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 19,
            title: "Esquisopa loca",
            description: "Maruchan-esquite, fritura y una bolsa de papas Sabritas a elegir.",
            price: 75.00,
            image: "https://example.com/esquisopa-loca.jpg",
            options: [
                { name: "Cubierta fritura", options: frituraOptions },
                { name: "Bolsa papitas", options: papitasOptions },
                { name: "Sabor", options: maruchanOptions },
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 20,
            title: "Maruchan Suadero o Pastor",
            description: "Maruchan-esquite con una porción de suadero, pastor o mixto y verdura encima.",
            price: 80.00,
            image: "https://example.com/maruchan-suadero-pastor.jpg",
            options: [
                { name: "Sabor", options: maruchanOptions },
                { name: "Carne", options: carneOptions},
                { name: "Verdura", options: verduraOptions},
                { name: "Extras", options: extrasOptions},
            ]
        }
    ],
    "snacks": [
        {
            id: 21,
            title: "Papas Locas",
            description: "Papas de hojuela estilo C&A (100 gramos), sabor a escoger: naturales, adobadas, queso o chipotle; preparadas con limón, sal, salsa maggi, salsa inglesa y queso amarillo derretido calientito, agrega gomitas y cacahuates sin costo.",
            price: 55.00,
            image: "https://example.com/papas-locas.jpg",
            options: [
                { name: "Papa", options: papaslocasOptions},
            ]
        },
        {
            id: 22,
            title: "Nachos sencillos",
            description: "Charola de nachos acompañado de chiles jalapeño y queso derretido líquido calientito.",
            price: 50.00,
            image: "https://example.com/nachos-sencillos.jpg",
            options: []
        },
        {
            id: 23,
            title: "Nachos con suadero o pastor",
            description: "Charola de nachos acompañado de chiles jalapeño, queso líquido derretido calientito y una porción de carne al pastor, suadero o mixto encima.",
            price: 70.00,
            image: "https://example.com/nachos-suadero-pastor.jpg",
            options: [
                { name: "Carne", options: carneOptions},
                { name: "Verdura", options: verduraOptions},
                { name: "Extras", options: extrasOptions},
            ]
        },
        {
            id: 24,
            title: "Nachos con chilli",
            description: "Charola de nachos acompañado de chiles jalapeño, queso líquido derretido calientito y una porción de chilli beans encima.",
            price: 75.00,
            image: "https://example.com/nachos-chilli.jpg",
            options: []
        }
    ],
    "drinks": [
        {
            id: 25,
            title: "Vaso Preparado",
            description: "500ml.",
            price: 45.00,
            image: "https://example.com/vaso-preparado.jpg",
            options: [
                { name: "Sabor", options: saborPreparadas},
            ]
        },
        {
            id: 26,
            title: "Pati Bañera",
            description: "Incluye la tina, pato y la bebida preparada. 500ml.",
            price: 80.00,
            image: "https://example.com/pati-banera.jpg",
            options: [
                { name: "Sabor", options: saborPreparadas},
            ]
        },
        {
            id: 27,
            title: "Pati Bebida",
            description: "Incluye la tina, pato y la bebida preparada. 500ml.",
            price: 80.00,
            image: "https://example.com/pati-banera.jpg",
            options: [
                { name: "Sabor", options: saborPreparadas},
            ]
        },
        {
            id: 28,
            title: "Arizona Loco",
            description: "680ml.",
            price: 70.00,
            image: "https://example.com/arizona-loco.jpg",
            options: [
                { name: "Sabor", options: saborArizonaLoco},
                { name: "Sabor", options: saborArizona},
            ]
        },
        {
            id: 29,
            title: "Clamateco",
            description: "500ml. Escarchado de chamoy, clamato preparado con limón, sal, salsa maggi, salsa inglesa y banderilla de tamarindo.",
            price: 50.00,
            image: "https://example.com/clamateco.jpg",
            options: []
        },
        {
            id: 31,
            title: "Coca Cola",
            description: "600ml.",
            price: 25.00,
            image: "https://example.com/coca-cola.jpg",
            options: []
        },
        {
            id: 32,
            title: "Arizona",
            description: "680ml. Sabores: Mango, Kiwi-Fresa, Sandía, Té Verde.",
            price: 25.00,
            image: "https://example.com/arizona.jpg",
            options: [
                { name: "Sabor", options: saborArizona},
            ]
        },
        {
            id: 33,
            title: "Boing",
            description: "500ml. Sabores: Mango, Fresa, Manzana, Uva.",
            price: 20.00,
            image: "https://example.com/boing.jpg",
            options: [
                { name: "Sabor", options: saborBoings},
            ]
        },
        {
            id: 34,
            title: "Agua Natural",
            description: "600ml.",
            price: 15.00,
            image: "https://example.com/agua-natural.jpg",
            options: []
        }
    ]
}
};
