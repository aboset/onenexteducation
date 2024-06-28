alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
let chute ;
let intentos=1;
// se chute for igual ao número secreto

while(chute != numeroSecreto){
    let chute = prompt('Escolha um número entre 1 e 10');

    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} con estos intentos ${intentos}`);
    } else {
        if(chute> numeroSecreto){
            alert(`Numero secreto es menor que ${chute}`);
        }else{
            alert(`Numero secreto es mayor que ${chute}`);
        }
        intentos++;
    }
}
