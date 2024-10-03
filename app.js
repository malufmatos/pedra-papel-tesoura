//PEDRA PAPEL TESOURA

const escolhas = ['pedra', 'papel', 'tesoura'];
const mostrarJogador = document.getElementById('mostrarJogador');
const mostrarComputador = document.getElementById('mostrarComputador');
const mostrarResultado = document.getElementById('mostrarResultado');
const mostrarPontuacaoJogador = document.getElementById('mostrarPontuacaoJogador');
const mostrarPontuacaoComputador = document.getElementById('mostrarPontuacaoComputador');
let pontuacaoComputador = 0;
let pontuacaoJogador = 0;


function jogar(escolhaJogador) {
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];
    let resultado = "";

    if(escolhaComputador === escolhaJogador){
        resultado = "EMPATE!";	
    } else{
        switch(escolhaJogador){
            case 'pedra':
                resultado = (escolhaComputador === 'tesoura') ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
            case 'papel':
                resultado = (escolhaComputador === 'pedra') ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
            case 'tesoura':
                resultado = (escolhaComputador === 'papel') ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
        }
    }

    mostrarJogador.textContent = `Você escolheu ${escolhaJogador}`;
    mostrarComputador.textContent = `O computador escolheu ${escolhaComputador}`;
    mostrarResultado.textContent = resultado;

    switch(resultado){
        case "VOCÊ GANHOU!":
            mostrarResultado.style.color = ("green");
            pontuacaoJogador++;
            mostrarPontuacaoJogador.textContent = pontuacaoJogador;
            break;
        case "VOCÊ PERDEU!":
            mostrarResultado.style.color = ("red");
            pontuacaoComputador++;
            mostrarPontuacaoComputador.textContent = pontuacaoComputador;
            break;
        case "EMPATE!":
            mostrarResultado.style.color = ("white");
            break;
    }
}