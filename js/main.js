const timer = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let intervaloID;

function hora() {
    let relogio = 0;
    const intervalo = 1000; 

    intervaloID = setInterval(() => {
        relogio++;

        let horas = Math.floor(relogio / 3600)
        let minutos = Math.floor((relogio % 3600) / 60)
        let segundos = relogio % 60

        horas = horas.toString().padStart(2, '0')
        minutos = minutos.toString().padStart(2, '0')
        segundos = segundos.toString().padStart(2, '0')
        document.querySelector('.relogio').textContent = `${horas}:${minutos}:${segundos}`;
    }, intervalo);

}

iniciar.addEventListener('click', () => {
    hora()
})

pausar.addEventListener('click', () => {
    clearInterval(intervaloID)
    timer.classList.add('pausado')
})

zerar.addEventListener('click', () => {
    clearInterval(intervaloID);
    timer.innerHTML = '00:00:00'
    timer.classList.remove('pausado')
})
