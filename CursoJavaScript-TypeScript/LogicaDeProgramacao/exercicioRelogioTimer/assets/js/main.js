const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function criaHoraSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT',
    });
}

let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
   iniciaRelogio();
});
pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
});

