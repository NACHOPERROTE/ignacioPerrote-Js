const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

function random( min, max){
return Math.floor(Math.random() * (max - min) + min);
}


// function lanzar () {
//     let result1 = random(0,11);
//     let result2 = random(0,11);
//     let result3 = random(0,11);
//     let numeroFinal = `${result1}${result2}${result3}`
    
// } 


btn1.addEventListener('click', () => {
    const result1 = random(0,11)
    aparicion.innerHTML = result1
})



btn2.addEventListener('click', () => {
    const result2 = random(0,11)
    aparicionUno.innerHTML = result2
})



btn3.addEventListener('click', () => {
    const result3 = random(0,11)
    aparicionDos.innerHTML = result3
})




let numeroFinal = `${result1}${result2}${result3}`

console.log(numeroFinal)
