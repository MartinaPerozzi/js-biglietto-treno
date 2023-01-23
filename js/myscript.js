// Calcolare il prezzo totale del viaggio in treno

// Dati necessari: numero di km da percorrere e età del passeggero

// Chiedere all'utente il numero di km che deve percorrere
let myKm = parseInt(prompt("Numero di Km da percorrere:"));
console.log("myKm", myKm);

// Chiedere all'utente la sua età
let myAge = parseInt(prompt("Età passeggero:"));
console.log("myAge", myAge);

// CALCOLARE PREZZO
// Prezzo al km
let xKm = parseFloat(0.21);
console.log("xKm", xKm);
// calcolo
let kmPercorso = (myKm * xKm);
console.log("kmPercorso=", `(${myKm} * ${xKm})`, kmPercorso);
// Messaggio all'utente
document.getElementById("your_trip").innerHTML = "Il prezzo totale del biglietto è " + kmPercorso + "€";
