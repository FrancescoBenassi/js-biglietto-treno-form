// Costanti dell'esercizio

// Prezzo al km 
const price = 0.21;
// Anni over 
const over = 65;
// Anni under 
const under = 18;
// Sconto 40%
const salesOver = 40 / 100;
// Sconto al 20%
const salesUnder = 20 / 100;


// Creare costante form 

const calculatedPrice = document.getElementById('calculated-price');

// Chiedere il numero di km da percorrere

const distance = document.getElementById('distance');

// Chiedere l'età del passeggero

const age = document.getElementById('age');


calculatedPrice.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('prova invio form');

  console.log('km ', distance.value);
  console.log('age ', age.value);
});
