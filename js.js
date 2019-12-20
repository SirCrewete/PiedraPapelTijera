let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('usuario-score');
const compScore_span = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('resultado');
const result_div = document.querySelector('.resultado p');
const piedra_div = document.getElementById('piedra');
const papel_div = document.getElementById('papel');
const tijera_div = document.getElementById('tijera');


function movidaComp(){
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random() * 3);
    const movida = opciones[random];
    return (movida);
}

function ganar(movidaPc){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "GANASTE <br> PC " + movidaPc;
}

function perder(movidaPc){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "PERDISTE <br> PC " + movidaPc ;
}

function empate(movidaPc){
    result_div.innerHTML = "EMPATE <br> PC " + movidaPc;
}

function game(opcion){
    const movidaPc = movidaComp();
    const movidaUsuario = opcion;
    switch (movidaUsuario+movidaPc){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            ganar(movidaPc);
        break;
        case 'piedrapapel':
        case 'papeltijera':
        case 'tijerapiedra':
            perder(movidaPc);
        break;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            empate(movidaPc);
        break;
    }

}

function main(){
    piedra_div.addEventListener('click', () => game("piedra"));
    papel_div.addEventListener('click', () => game("papel"));
    tijera_div.addEventListener('click', () => game("tijera"));
}
main();