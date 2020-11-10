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

var stampa = ""; // stampo in HTML
for (var key in arrayObj) { // stampo l'array originale senza nuova proprietà
  console.log("array iniziale ",arrayObj[key]);
  stampa += arrayObj[key].name + " , " + arrayObj[key].type + " , " + arrayObj[key].color + "<br>";
}
document.getElementById('array_base').innerHTML = stampa;
// Array copia vuoto
var arrayObjCopia = [];
var x = 0;

// uso un ciclo for per copiare l'array
for (var i = 0; i < arrayObj.length; i++) {
  arrayObjCopia[x] = arrayObj[i];
  x++;
} // fine ciclo for

var stampa2 = ""; // stampo in HTML
for (var key in arrayObjCopia) { // stampo l'array copia senza nuova proprietà
 console.log("array copia",arrayObjCopia[key]);
 stampa2 += arrayObjCopia[key].name + " , " + arrayObjCopia[key].type + " , " + arrayObjCopia[key].color + "<br>";
}
document.getElementById('array_copia').innerHTML = stampa2;

// creo array di lettere dell'alfabeto per fare uscire in output una lettera casuale
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var stampa3 = "";
// ciclo for dove dico in ogni oggetto dell'array creami una proprietà position che sarà uguale a una lettera casuale
// data dal valore della variabile "min"
for (var variable in arrayObjCopia) {
  min = alphabet[Math.floor(Math.random()*alphabet.length)];
  arrayObjCopia[variable].position = min;
  console.log("array nuova proprietà",arrayObjCopia[variable]);
  stampa3 += arrayObjCopia[variable].name + " , " + arrayObjCopia[variable].type + " , " + arrayObjCopia[variable].color + " , " + arrayObjCopia[variable].position + "<br>";
}
document.getElementById('stampa_obj').innerHTML = stampa3;
//----------------------- FINE JSNACK 2 ---------------------
