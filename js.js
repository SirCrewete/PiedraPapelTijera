let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('usuario-score');
const compScore_span = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('.marcador p');
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


function ganar(){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "GANASTE";
   
}

function perder(){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "PERDISTE";
}

function empate(){
    result_div.innerHTML = "EMPATE";

}


function game(opcion){
    const movidaPc = movidaComp();
    const movidaUsuario = opcion;
    switch (movidaUsuario+movidaPc){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            ganar(movidaUsuario, movidaPc);
        break;
        case 'piedrapapel':
        case 'papeltijera':
        case 'tijerapiedra':
            perder(movidaUsuario, movidaPc);
        break;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            empate(movidaUsuario, movidaPc);
        break;
    }
}

function main(){
    piedra_div.addEventListener('click', () => game("piedra"));
    papel_div.addEventListener('click', () => game("papel"));
    tijera_div.addEventListener('click', () => game("tijera"));
}
main();