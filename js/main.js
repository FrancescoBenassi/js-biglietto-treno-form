// 1) Costanti dell'esercizio

// - Prezzo al km 
const price = 0.21;
// - Anni over 
const over = 65;
// - Anni under 
const under = 18;
// - Sconto 40%
const salesOver = 40 / 100;
// - Sconto al 20%
const salesUnder = 20 / 100;


// 2) Creare variabile form 

const calculatedPrice = document.getElementById('calculated-price');

// 3) Chiedere il numero di km da percorrere

const distance = document.getElementById('distance');

// 4) Chiedere l'età del passeggero

const age = document.getElementById('age');

// 5) Variabili risultato

const resultConainer = document.getElementById('result-container');
const result = document.getElementById('result');

// 6) Aggiungere evento al 'submit'

calculatedPrice.addEventListener('submit', function (event) {
  event.preventDefault();

  // - Trasformare la stringa in numero

  const distanceNumber = parseFloat(distance.value);
  const ageNumber = parseFloat(age.value);

  // - Stampare i numeri sulla console 

  console.log('km ', distanceNumber);
  console.log('age ', ageNumber);

  // - Calcolare il prezzo intero 

  let priceTicket = distanceNumber * price;
  console.log('prezzo intero ', priceTicket);

  // - Calcolare il prezzo scontato se ha i requisiti

  if (ageNumber > over) {
    priceTicket = priceTicket - (priceTicket * salesOver);
    console.log(priceTicket);
  } else if (ageNumber < under) {
    priceTicket = priceTicket - (priceTicket * salesUnder);
    console.log(priceTicket);
  }

  // - Prezzo finale

  const priceEnd = `Il costo del biglietto è ${priceTicket.toFixed(2)}`;
  console.log(priceEnd);

  // - Reset dei campi input

  distance.value = '';
  age.value = '';

  // - Modifica al DOM con l'aggiunta del prezzo finale

  result.innerHTML = `Il costo del biglietto è ${priceTicket.toFixed(2)} `;
  resultConainer.classList.remove('d-none');
});