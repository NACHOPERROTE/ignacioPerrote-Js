const btnStar = document.querySelector('#btnStart')     
const cerrarModal = document.querySelector('#numeros__cerrarModal')   
const modalContainer = document.querySelector('#message')
        
        function getRandomNumber(min,max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        let resultado = []
        console.log(resultado);
        const almacenar = localStorage.getItem('resultado')


        btnStar.addEventListener('click', () => {
            const item1 = document.getElementById('item1');
            const item2 = document.getElementById('item2');
            const item3 = document.getElementById('item3');

            const num1 = getRandomNumber(0,5);
            const num2 = getRandomNumber(0,5);
            const num3 = getRandomNumber(0,5);

            item1.innerHTML = `${num1}`;
            item2.innerHTML = `${num2}`;
            item3.innerHTML = `${num3}`;

            if (num1 === num2 && num1 === num3) {
                mostrarMensaje();
                class numFinal {
                    constructor(id){
                      this.id = id;
                      }
                  }
                  
                  resultado.push(new numFinal(`${num1}${num2}${num3}`));
                  console.log(resultado);
                  localStorage.setItem('resultado' , almacenar)
                  
            } else {
                ocultarMensaje();
            }
        })

       
        
        


        // let acumulado = []

        // function variantes(numItems){
        //         for (let i = 0; i < numItems; i++) {
        //             acumulado.push({
        //                 id: "",
        //             });
        //         }
        //         return acumulado;
        //     }
        //     x =  new variantes(10);
        //     x[0].id = `${num1}${num2}${num3}`;
        //     console.log(x);




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