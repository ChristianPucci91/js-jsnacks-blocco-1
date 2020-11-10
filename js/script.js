//jsnack 1
//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// array
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// primo numero inserito da utente
alert("Dovrai inserire 2 numeri da 0 a 5, il secondo numero non potrà essere minore del primo");
var numeroUno = parseInt(prompt("inserisci un numero tra 0 e " + (myArray.length - 1)));
//caso limite
while ((isNaN(numeroUno)) || (numeroUno < 0) || (numeroUno > (myArray.length - 1))) {
  numeroUno = parseInt(prompt("Per favore,inserisci un numero tra 0 e " + (myArray.length - 1)));
}
//secondo numero inserito da utente
var numeroDue = parseInt(prompt("inserisci un secondo numero tra 0 e " + (myArray.length - 1)));
//caso limite
while ((isNaN(numeroDue)) || (numeroDue < 0) || (numeroDue > (myArray.length - 1))) {
  numeroDue = parseInt(prompt("Per favore,inserisci un numero tra 0 e " + (myArray.length - 1)));
}
while (numeroDue < numeroUno) { // caso limite n.2
  alert("Il secondo numero non può essere più piccolo del primo");
  numeroDue = parseInt(prompt("Per favore,inserisci un numero tra 0 e " + (myArray.length - 1)));
}
console.log("numero 1: ",numeroUno);
console.log("numero 2: ",numeroDue);

var arrayUtente = []; // array inserimento dati utente

// ciclo for dove pusho gli elementi dell'array scelti dall'utente
for (var i = numeroUno; i <= numeroDue; i++) {
  arrayUtente.push(myArray[i])
}

console.log("il nuovo array sarà: ",arrayUtente);
