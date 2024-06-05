const buzo = { prenda: "buzo", color: "blanco", talle: "L", tela: "algodon", bolsillo: ["canguro", "individuales"], tipo: ["hoodie", "cuello redondo"], precio: 10 };
const remera = { prenda: "remera", color: "verde", talle: "L", tela: "algodon", tipo: ["oversize", "cuello redondo", "cuello en V"], precio: 20 }
const pantalon = { prenda: "pantalon", color: "negro", talle: "L", tela: "gabardina", bolsillo: true, tipo: ["cargo", "jogger"], precio: 15 };

let carrito = [

];

function agregarAlCarrito(prenda) {
    let indice = carrito.findIndex((elemento) => elemento.prenda == prenda.prenda)
    if (indice == -1) {
        prenda.cantidad = 1
        carrito.push(prenda)
    }
    else if (indice != -1) {
        let objetoDentroDeCarrito = carrito[indice]
        objetoDentroDeCarrito.cantidad = objetoDentroDeCarrito.cantidad + 1
    }
}

function cantidad(carrito) { return carrito.length }

let nombre = prompt(`Bienvenido,digame su nombre`)
let desicion = prompt(`${nombre}, Que desea comprar?\n1=buzo \n2=remera \n3=pantalon \n0=salir`)

while (desicion != 0) {
    if (desicion == "1") {
        let cantidad = parseInt(prompt("Cuantos articulos desea sumar?"))
        while (isNaN(cantidad)) cantidad = parseInt(prompt("Cuantos articulos desea sumar?"))
        for (let index = 0; index < cantidad; index++) {
            agregarAlCarrito(buzo)
        }
        console.log(carrito)
        desicion = parseInt(prompt("Desea comprar otra prenda?\n1=buzos\n2=remera\n3=pantalon\n4 = borrar carrito \n0=salir"))

    }
    else if (desicion == "2") {
        let cantidad = parseInt(prompt("Cuantos articulos desea sumar?"))
        while (isNaN(cantidad)) cantidad = parseInt(prompt("Cuantos articulos desea sumar?"))
        for (let index = 0; index < cantidad; index++) {
            agregarAlCarrito(remera)
        }
        console.log(carrito)
        desicion = parseInt(prompt("Desea comprar otra prenda?\n1=buzos\n2=remera\n3=pantalon\n0=finalizar compra"))
    }
    else if (desicion == "3") {
        let cantidad = parseInt(prompt("Cuantos articulos desea sumar?"))
        while (isNaN(cantidad)) cantidad = parseInt(prompt("Cuantos articulos desea sumar?"))
        for (let index = 0; index < cantidad; index++) {
            agregarAlCarrito(pantalon)
        }
        console.log(carrito)
        desicion = parseInt(prompt("Desea comprar otra prenda?\n1=buzos\n2=remera\n3=pantalon\n0=finalizar compra"))
    }
    else if (desicion == "4") {
        carrito = [];
        desicion = parseInt(prompt("Desea comprar otra prenda?\n1=buzos\n2=remera\n3=pantalon\n0=finalizar compra"))

    }
}
let revisionDeCompra = confirm(`Sr. ${nombre} su compra es de ${carrito.map(elemento => `${elemento.prenda}: por ${elemento.cantidad} `)}desea modificar su comrpra?`)
while (revisionDeCompra) {
    let desicionRevision = prompt(`Que articulo quiere borrar ${carrito.map((e, i) => `${i + 1}- ${e.prenda}`)}`)
    carrito = carrito.filter((e, i) => i != desicionRevision - 1)
    if (carrito.length == 0) {
        break
    }
    revisionDeCompra = confirm(`Sr. ${nombre} su compra es de ${carrito.map(elemento => `${elemento.prenda}: por ${elemento.cantidad} `)}desea modificar su compra?`)

}

let total = 0
for (let index = 0; index < carrito.length; index++) {
    const element = carrito[index];
    let subtotal = element.cantidad * element.precio
    total = total + subtotal

}
const totalCompra = document.getElementById(`total`)
carrito.map(elemento => {
    const parrafo = document.createElement(`p`)
    parrafo.innerText = `${elemento.cantidad} ${elemento.prenda} $ ${elemento.cantidad * elemento.precio} \n`   
    totalCompra.appendChild(parrafo)
})

const tituloTotal = document.getElementById(`total`)
const hCuatro = document.createElement (`h4`)
hCuatro.innerText = `Usted finalizo su compra con un total de: $ ${total}`
tituloTotal.appendChild (hCuatro)



