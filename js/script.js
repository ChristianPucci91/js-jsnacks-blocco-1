//jsnack 1
//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// array
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// primo numero inserito da utente
var numeroUno = parseInt(prompt("inserisci un numero tra 0 e " + myArray.length));
//caso limite
while ((isNaN(numeroUno)) || (numeroUno < 0) || (numeroUno > myArray.length)) {
  numeroUno = parseInt(prompt("Per favore,inserisci un numero tra 0 e " + myArray.length));
}
//secondo numero inserito da utente
var numeroDue = parseInt(prompt("inserisci un secondo numero tra 0 e " + myArray.length));
//caso limite
while ((isNaN(numeroDue)) || (numeroDue < 0) || (numeroDue > myArray.length)) {
  numeroDue = parseInt(prompt("Per favore,inserisci un numero tra 0 e " + myArray.length));
}
console.log("numero 1: ",numeroUno);
console.log("numero 2: ",numeroDue);
