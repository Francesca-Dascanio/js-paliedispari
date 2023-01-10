/*


Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

1. Chiedi all'utente di scegliere tra pari e dispari (checkbox pari o dispari)  OK
2. Chiedi all'utente di scrivere un numero da 1 a 5 (input)                     OK
3. Genera un numero del pc random da 1 a 5 (tramite funzione)                   OK
4. Somma il numero dell'utente con il numero del pc (evoca la funzione)         OK
5. Verifica se la somma è pari (somma % 2 == 0) o dispari                       OK

6. Se utente ha scelto pari e la somma è uguale a pari, allora l'utente ha vinto
    Se utente ha scelto dispari e la somma è dispari, allora l'utente ha vinto
    Se utente ha scelto pari e la somma è dispari, allora l'utente ha perso
    Se utente ha scelto dispari e la somma è pari, allora l'utente ha perso


*/

console.log('Tutto ok');

// // Prendi la scelta dell'utente dal DOM
// const inputRadioP = document.getElementById('pari');
// console.log(inputRadioP);

// const inputRadioD = document.getElementById('dispari');
// console.log(inputRadioD);

// const submitUno = document.getElementById('bottone-1');
// console.log(submitUno);

// let sceltaUtente;

// let flag = true;

// submitUno.addEventListener ('click',

// function () {

//     if (inputRadioP) {
//         console.log(inputRadioP);
//     }
//     else {
//         console.log(inputRadioD);
//     }
   
// }

// )

// Genera un numero random attraverso una funzione
function generaNumeroRandom (num1) {

    const numeroRandom = Math.floor(Math.random() * 5 + 1);

    return numeroRandom;
}

// Genera un numero random da 1 a 5 del pc
const numeroRandomPc = generaNumeroRandom ();
console.log('Il numero random del pc è: ', numeroRandomPc, typeof numeroRandomPc);


// Crea funzione di verifica se numero è pari o dispari
function verificaPariDispari (numUno) {

    if ((numUno % 2) == 0) {
        console.log('Il numero è pari');
    }
    else {
        console.log('Il numero è dispari');
    }
}



// Prendi il numero selezionato dall'utente dal DOM
const inputTextDue = document.getElementById('numero');

const submitDue = document.getElementById('bottone-2');

let numeroUtente;

let verificaSomma;

submitDue.addEventListener ('click',

    function () {

        numeroUtente = parseInt(inputTextDue.value);
        console.log('Il numero inserito da utente è: ', numeroUtente, typeof numeroUtente);

        // Somma il numero utente con il numero random del pc
        somma = numeroUtente + numeroRandomPc;
        console.log('La somma del numero utente e del numero random è: ', somma);

        verificaSomma = verificaPariDispari(somma);
       
    }
)


// Prendi la scelta tra pari o dispari
const inputTextUno = document.getElementById('scelta');

const submitUno = document.getElementById('bottone-1');

let sceltaUtente;

submitUno.addEventListener ('click',

    function () {

        sceltaUtente = inputTextUno.value;
        console.log('La scelta è: ', sceltaUtente);

    
       
    }
)