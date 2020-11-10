//----------------------- INIZIO JSNACK 2 ---------------------

// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// Array iniziale
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

console.log(arrayObj);

// Array copia
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

// creo array di lettere dell'alfabeto per fare uscire in output una lettera casuale
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// ciclo for dove dico in ogni oggetto dell'array creami una proprietà position che sarà uguale a una lettera casuale
// data dal valore della variabile "min"
for (var variable in arrayObj) {
  min = alphabet[Math.floor(Math.random()*alphabet.length)];
  arrayObj[variable].position = min;
  console.log(arrayObj[variable]);
}

//----------------------- FINE JSNACK 2 ---------------------
