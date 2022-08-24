// // Variables
//         // Maquina
//         const num1 = document.querySelector('#num1');
//         const num2 = document.querySelector('#num2');
//         const num3 = document.querySelector('#num3');
//         let num1Value = 0;
//         let num2Value = 0;
//         let num3Value = 0;
//         const boton = document.querySelector('#boton');
    
//             // Contador de creditos
//         let ingreso = prompt('¿Cuanto dinero juegas?');
    
//         const creditos = document.querySelector('#creditos');
//         let cuenta = apuesta(ingreso);
//         let activo = true;
    
    
//         // Funciones
//         function apuesta(cantidad) {
//             const ingresado = parseFloat(cantidad);
//             creditos.innerHTML = cantidad;
//             return ingresado;
//         }
    
//         function numerosAleatorios() {
//             num1Value = _.random(0, 9);
//             num2Value = _.random(0, 9);
//             num3Value = _.random(0, 9);
//         }
    
//         function mostrarNumeros() {
//             num1.innerHTML = num1Value;
//             num2.innerHTML = num2Value;
//             num3.innerHTML = num3Value;
//         }
    
//         function restarDinero() {
//             cuenta = cuenta - 1;
//             ingreso = cuenta;
//             mostrar();
//         }
    
//         function sumarDinero() {
//             cuenta = cuenta + 10;
//             ingreso = cuenta;
//             mostrar();
//         }
    
//         function comprobar() {
//             activo = num1Value === num2Value && num2Value === num3Value;
//         }
    
//         function mostrar() {
//             creditos.innerHTML = cuenta;
//         }
    
//         function suerte() {
//             if (activo) {
//                 // Se suma el dinero
//                 sumarDinero();
//             } else {
//                 // Se resta el dinero
//                 restarDinero();
//             }
//             if (cuenta === 0) {
//                 alert('¡Has perdido!');
//                 ingreso = prompt('¿Cuanto dinero juegas?');
//                 cuenta = apuesta(ingreso);
//             }
//         }
    
//         function jugar() {
//             numerosAleatorios();
//             comprobar();
//             mostrarNumeros();
//             suerte();
//             console.log(''.concat(num1Value, num2Value, num3Value,' - ', activo, ' ---> cuenta: ',cuenta));
//         }
    
//         // Eventos
//         boton.addEventListener('click', jugar);
    
//         // Inicio



// PRUEBA FINAL
const cerrarModal = document.querySelector('#numeros__cerrarModal')   
const modalContainer = document.querySelector('#message')
const depositos = document.querySelector('#deposito');
const btnDeposito = document.querySelector('#btn-Deposito');
const monto = document.querySelector('#validacion');
const item1 = document.querySelector('#item1');
const item2 = document.querySelector('#item2');
const item3 = document.querySelector('#item3');
let num1 = 0;
let num2= 0;
let num3 = 0;
const btnStar = document.querySelector('#btnStart');  


const almacenar = JSON.parse( localStorage.getItem('depositos') ) || []

const guardarDeposito = () => {
    const valueDeposito = depositos.value

    almacenar.push({
        total: valueDeposito,       
    })

    localStorage.setItem('depositos', JSON.stringify(almacenar) )

    console.log(depositos.value)

    depositos.value = ''
}

let deposito = localStorage.getItem('depositos')
console.log(deposito)

btnDeposito.addEventListener('click', () =>{
    guardarDeposito()
    monto.innerHTML = deposito;

})



function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function ramdomNumber(){
    num1 = getRandomNumber(0,5);
    num2 = getRandomNumber(0,5);
    num3 = getRandomNumber(0,5);
}


function mostrasrNumemeros(){
    item1.innerHTML = num1;
    item2.innerHTML = num2;
    item3.innerHTML = num3;
}

function arranque(){
    getRandomNumber();
    ramdomNumber();
    mostrasrNumemeros();
}


btnStar.addEventListener('click', () => {
    arranque()
    if (num1 === num2 && num1 === num3) {
                        mostrarMensaje();
                        } else {
                        ocultarMensaje();
                    }


})

        function mostrarMensaje() {
            const msg = document.querySelector("#message");
            msg.classList.add("numeros__modalCajaActivado")
        }

        function ocultarMensaje() {
            const msg = document.querySelector("#message");
            msg.classList.remove("numeros__modalCajaActivado")
        }


cerrarModal.addEventListener('click', () => {
    modalContainer.classList.remove('numeros__modalCajaActivado')
})









// const btnStar = document.querySelector('#btnStart')     
// const cerrarModal = document.querySelector('#numeros__cerrarModal')   
// const modalContainer = document.querySelector('#message')
  

        
//         function getRandomNumber(min,max) {
//             return Math.floor(Math.random() * (max - min) + min);
//         }

//         let resultado = []
//         console.log(resultado);
//         const almacenar = localStorage.getItem('resultado')


//         btnStar.addEventListener('click', () => {
//             const item1 = document.getElementById('item1');
//             const item2 = document.getElementById('item2');
//             const item3 = document.getElementById('item3');

//             const num1 = getRandomNumber(0,5);
//             const num2 = getRandomNumber(0,5);
//             const num3 = getRandomNumber(0,5);

//             item1.innerHTML = `${num1}`;
//             item2.innerHTML = `${num2}`;
//             item3.innerHTML = `${num3}`;

//             if (num1 === num2 && num1 === num3) {
//                 mostrarMensaje();
//                 class numFinal {
//                     constructor(id){
//                       this.id = id;
//                       }
//                   }
                  
//                   resultado.push(new numFinal(`${num1}${num2}${num3}`));
//                   console.log(resultado);
//                   localStorage.setItem('resultado' , almacenar)
                  
//             } else {
//                 ocultarMensaje();
//             }
//         })

       
        
        


//         // let acumulado = []

//         // function variantes(numItems){
//         //         for (let i = 0; i < numItems; i++) {
//         //             acumulado.push({
//         //                 id: "",
//         //             });
//         //         }
//         //         return acumulado;
//         //     }
//         //     x =  new variantes(10);
//         //     x[0].id = `${num1}${num2}${num3}`;
//         //     console.log(x);




//         function mostrarMensaje() {
//             const msg = document.querySelector("#message");
//             msg.classList.add("numeros__modalCajaActivado")
//         }

//         function ocultarMensaje() {
//             const msg = document.querySelector("#message");
//             msg.classList.remove("numeros__modalCajaActivado")
//         }


// cerrarModal.addEventListener('click', () => {
//     modalContainer.classList.remove('numeros__modalCajaActivado')
// })