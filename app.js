

//ENTREGA 

// let tabla = Number( prompt('Ingrese el número deseado') )

// let tuNumero = tabla


//  for (let i = 1; i <= 10; i++) {

//     console.log(i * tabla)

//     if(i=== tuNumero){
//         alert("ESTE ES TU NUMERO DE LA SUERTE " + tabla * 5)
//     }
    
// }






// CONTROL K + CONTROL C PARA COMENTAR VARIAS LINEAS NO OLVIDAR
// CONTROL K + CONTROL U PARA DESCOMENTAR














let sku = prompt("Ingrese el SKU del Producto")
    
if (sku == 120) {
    alert("¡LAVARROPAS!")
} else if (sku == 240){
    alert("¡HORNO!")
} else if (sku == 320){
    alert("¡HELADERA!")
} else{
    alert("PRODUCTO NO ENCONTRADO")
}

console.log("El sku de tu producto es: " + sku)



class Producto{
    
    constructor (sku, nombre, stock, precio){
    this.sku= sku,
    this.nombre= nombre,
    this.stock= stock,
    this.precio= precio
    }


    calcularIva = () => {
        return this.precio *1.21

    }
}

const producto1= new Producto(120, "Lavarropas", 5, 65000)
const producto2= new Producto(240, "Horno", 5, 40000)
const producto3= new Producto(320, "Heladera", 5, 85000)


console.log(producto1)
console.log(producto1)
console.log( "El precio final de su producto es: " + producto1.calcularIva() )