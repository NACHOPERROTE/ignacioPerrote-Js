
alert("Hola, bienvenido a Bodega Perrote!!!")



alert("A continuacion le mostraremos nuestra diversidad de Vinos")




const vinos = [
    {
        id: "01",
        tipo: "Rosado",
        Sabor: "Seco",
        precio: 3500,
        añejo: 3,
    },

    {
        id: "02",
        tipo: "Rosado",
        Sabor: "Dulce",
        precio: 1500,
        añejo: 1,
    },

    {
        id: "03",
        tipo: "Rosado",
        Sabor: "Extra Brut",
        precio: 2500,
        añejo: 2,
    },

    {
        id: "04",
        tipo: "Tinto",
        Sabor: "Seco",
        precio: 4500,
        añejo: 3,
    },

    {
        id: "05",
        tipo: "Tinto",
        Sabor: "Dulce",
        precio: 1500,
        añejo: 1,
    },

    {
        id: "06",
        tipo: "Tinto",
        Sabor: "Extra Brut",
        precio: 1000,
        añejo: 2,
    },

    {
        id: "07",
        tipo: "Blanco",
        Sabor: "Seco",
        precio: 1000,
        añejo: 3,
    },

    {
        id: "08",
        tipo: "Blanco",
        Sabor: "Dulce",
        precio: 1500,
        añejo: 1,
    },

    {
        id: "09",
        tipo: "Blanco",
        Sabor: "Extra Brut",
        precio: 1200,
        añejo: 2,
    }


]

for (const productos of vinos) {
    console.log(productos)
}

let tipo = prompt("Ingrese el tipo de vino que quiere buscar")

const busqueda = vinos.filter( (prod) => prod.tipo == tipo) 


console.log(busqueda)


// FIND

let id = Number(prompt("Ingrese Id de su tipo"))

const buscar = vinos.find((producto) => producto.id == id)

if(buscar.id == 08){
    alert("Vino Blanco Dulce")
}else if(buscar.id == 09){
    alert("Vino Blanco Extra Brut")
}else if(buscar.id == 07){
    alert("Vino Blanco Seco") 
}else if(buscar.id == 01){
    alert("Vino Rosado Seco")
}else if(buscar.id == 02){
    alert("Vino Rosado Dulce")
}else if(buscar.id == 03){
    alert("Vino Rosado Extra Brut")
}else if(buscar.id == 04){
    alert("Vino Tinto Seco")
}else if(buscar.id == 05){
    alert("Vino Tinto Dulce")
}else if(buscar.id == 06){
    alert("Vino Tinto Extra Brut")
}else{
    alert("Vino no encontrado")
}



// const buscarVino = (id) => {

//     for (let i = 0; i < vinos.length; i++) {
//         if (id === vinos[i]) {
//             alert("El vino se encuentra en la lista")
//             return 
//         }
//     }
    
//     alert("No se encontró en la lista")
// }

// buscarVino(02)


// Luna, me ayudarias dandome una idea como hacer funcionar esto? , creo que igualmente esta realizada la tarea sin esta parte



