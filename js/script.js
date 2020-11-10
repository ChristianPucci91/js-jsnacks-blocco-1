//----------------------- JSNACK 1 ---------------------

//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara']; // array
var arrayUtente = []; // array inserimento dati utente

// primo numero inserito da utente
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

document.getElementById('numero_uno').innerHTML = "il primo numero scelto è: " + numeroUno;
document.getElementById('numero_due').innerHTML = "il secondo numero scelto è: " + numeroDue;

if (numeroDue < numeroUno) { // caso limite n.2
  // ciclo for dove pusho gli elementi dell'array scelti dall'utente nel caso l'utente inserisca il secondo numero minore del primo
  for (var i = numeroDue; i <= numeroUno; i++) {
    arrayUtente.push(myArray[i])
  } // fine ciclo for
} else {
  for (var i = numeroUno; i <= numeroDue; i++) { // nel caso l'utente inserisse il primo numero maggiore o uguale al secondo si verifica questo
    arrayUtente.push(myArray[i])
  } // fine ciclo for
}// fine condizione if


document.getElementById('array').innerHTML = "l'array uscito è: " + arrayUtente;

//----------------------- FINE JSNACK 1 ---------------------
