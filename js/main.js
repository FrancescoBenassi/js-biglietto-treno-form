// Costanti dell'esercizio

const price = 0.21;
const over = 65;
const under = 18;
const salesOver = 40 / 100;
const salesUnder = 20 / 100;

//1) Chiedere il numero di km da percorrere

const distance = prompt('Inserisci i km da percorre');
console.log(distance);

//2) Chiedere l'età del passeggero

const age = prompt('Inserisci la tua età');
console.log(age);

//3) Validare che il numero non sia NaN

if (isNaN(distance) || isNaN(age)) {
 alert('Errore');
} else {
 console.log('Sono stati inseriti numeri nelle aree richieste, si può procedere con il calcolo del prezzo');
}

//4) Trasformare la stringa della distanza in numero

const distanceNumber = Number(distance);
console.log(distanceNumber);

//5) Trasformare la stringa dell'età in numero

const ageNumber = Number(age);
console.log(ageNumber);

//6) Calcolare il prezzo del biglietto senza sconti (km * 0.21€)

const priceFull = distanceNumber * price;
console.log(priceFull);

/*7) Applicare lo sconto in base all'età
  8) Se il passeggero è minorenne avrà uno sconto del 20% altrimenti 
se è over 65 avrà uno sconto del 40% altrimenti se non è minorenne e neanche over 65 non avrà nessun sconto */

if (ageNumber > over) {
  const priceSalesOver = priceFull - (priceFull * salesOver);
  console.log(priceSalesOver);
  const costSalesOver = `Il costo del biglietto è ${priceSalesOver.toFixed(2)}`;
  console.log(costSalesOver);
} else if (ageNumber < under) {
  const priceSalesUnder = priceFull - (priceFull * salesUnder);
  console.log(priceSalesUnder);
  const costSalesUnder = `Il costo del biglietto è ${priceSalesUnder.toFixed(2)}`;
  console.log(costSalesUnder);
} else {
  const costFull = `Il costo del biglietto è ${priceFull.toFixed(2)}`;
  console.log(costFull);
}