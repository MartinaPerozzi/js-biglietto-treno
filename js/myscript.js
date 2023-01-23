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

// Applicare SCONTI

// Se l'utente è minorenne Age<18
if (myAge < 18) {
    let kmPercorso = (myKm * xKm) - (((myKm * xKm) * 20) / 100);
    console.log(kmPercorso, "con sconto del 20%");

    let fixedNumber = kmPercorso.toFixed(2);

    document.getElementById("your_trip").innerHTML = "Il prezzo totale del biglietto è " + fixedNumber + "€ con uno sconto applicato del 20%!";
} else if (myAge >= 65) { //Se l'età dell'utente è >=65
    let kmPercorso = (myKm * xKm) - (((myKm * xKm) * 40) / 100);
    console.log(kmPercorso, "con sconto del 40%");

    let fixedNumber = kmPercorso.toFixed(2);

    document.getElementById("your_trip").innerHTML = "Il prezzo totale del biglietto è " + fixedNumber + "€ con uno sconto applicato del 40%!";
}