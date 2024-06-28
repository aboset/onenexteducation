let numeroSecreto = 7;
let tentativas =1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute== numeroSecreto){
        exibirTextoNaTela('h1','Acetou');
        let palabraTentativa = tentativas >  1? 'tentativa' : 'temtativas';
        let mensagemTentativas = `Voce descubrio con el numero de $(tentativas) temtativas`;
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','o numero secreto e menor')
        }else{
            exibirTextoNaTela('p','o numero secreto e maior')
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












