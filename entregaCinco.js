const btnStar = document.querySelector('#btnStart')        
        
        function getRandomNumber(min,max) {
            return Math.floor(Math.random() * (max - min) + min);
        }


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
            } else {
                ocultarMensaje();
            }
        })

    

        function mostrarMensaje() {
            const msg = document.getElementById("message");
            msg.style.display = "block";
            
        }

        function ocultarMensaje() {
            const msg = document.getElementById("message");
            msg.style.display = "none";
        }
   
        