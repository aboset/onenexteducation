//´´ Las comillas asi sirven para colocar una variable y que se muestren sin necesidad de concatenar
alert('Numeros secretos')
let ns=5;
let ng= prompt('Escoga un numero del 1 al 10');

if (ng==ns){
    alert(`Correcto, el numero ganador es :${ns}`);
    // La variable tiene que estar dentro de las llaves y llevar $ al iniciar
}
else{

    alert('No es el correcto')
}
