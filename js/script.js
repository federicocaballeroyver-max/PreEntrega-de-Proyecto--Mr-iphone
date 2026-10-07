// guardo el nombre de la marca en una constante
const nombreMarca = "Mr iPhone";
console.log("Bienvenido a " + nombreMarca);

// array de objetos con los iPhone que se venden (los mismos de las cards)
const productos = [
    {
        nombre: "iPhone 14",
        almacenamiento: 128,
        bateria: 86,
        garantiaMeses: 3,
        disponible: true
    },
    {
        nombre: "iPhone 15 Pro",
        almacenamiento: 128,
        bateria: 91,
        garantiaMeses: 3,
        disponible: true
    },
    {
        nombre: "iPhone 15",
        almacenamiento: 256,
        bateria: 100,
        garantiaMeses: 3,
        disponible: true
    }
];

console.log("Productos:", productos);

// con length veo cuantos productos hay
console.log("Cantidad de productos:", productos.length);

// accedo al primero (indice 0) y al ultimo (length - 1)
console.log("Primer producto:", productos[0].nombre);
console.log("Último producto:", productos[productos.length - 1].nombre);

// promedio de bateria: sumo las tres y divido por la cantidad
const sumaBateria = productos[0].bateria + productos[1].bateria + productos[2].bateria;
const promedioBateria = sumaBateria / productos.length;
console.log("Promedio de bateria:", promedioBateria);

// reviso si el primer producto esta disponible
if (productos[0].disponible) {
    console.log(productos[0].nombre + " está disponible.");
} else {
    console.log(productos[0].nombre + " no está disponible.");
}