/*

Palidroma:

Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

1. Chiedi all'utente di scrivere una parola (prompt);                                                  //OK
2. Prendi la parola inserita dall'utente;                                                              // OK 
3. Verifica che la stessa parola scritta al contrario sia uguale alla parola inserita dall'utente      // OK
    3a. Fai un ciclo for con la parola inserita all'inverso dall'utente
    3b. Stampa la parola inserita all'inverso dall'utente
    3c. Verifica se la parola inserita dall'utente è uguale alla parola invertita
    3d. Se le due parole sono uguali allora la parola è palindroma, se no non lo è.



*/

console.log('Tutto ok');

// Preparo la funzione
function parolaPalindroma (par1, par2) {


    for (let i = (par1.length - 1); i >= 0; i--) {

    console.log("Queste sono le lettere nell'ordine invertito: ", par1[i]);

    par2 = par2 + par1[i];

    }

    if (par1 == par2) {

        verifica = true;
        alert('La parola inserita è palindroma');
    }
    else {
        alert('La parola inserita NON è palindroma');
    }

    // Mancherebbe return ???

}


const parolaUtente = prompt('Scrivi una parola');
console.log(parolaUtente);

let parolaInvertita = '';

let verifica = true;

const risultato = parolaPalindroma(parolaUtente, parolaInvertita);
console.log(risultato);






// PROVA PRIMA DI SCRIVERE LA FUNZIONE

// // Scrivi ogni lettera della parola inserita dall'utente al contrario
// for (let i = (parolaUtente.length - 1); i >= 0; i--) {

//     console.log("Queste sono le lettere nell'ordine invertito: ", parolaUtente[i]);

//     parolaInvertita = parolaInvertita + parolaUtente[i];
    

// }

// // La variabile parola invertita restituisce la parola inserita dall'utente invertita
// console.log(parolaInvertita);

// // Se la parola inserita è uguale alla parola invertita allora è vero che la parola è palindroma

// if (parolaUtente == parolaInvertita) {

//     verifica = true;
//     alert('La parola inserita è palindroma');
// }
// else {
//     alert('La parola inserita NON è palindroma');
// }


