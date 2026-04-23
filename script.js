import { fakultet } from './fakultet.js'; // Henter funksjonen fakultet fra fil
import { fizzBuzz } from './fizzbuzz.js'; // Henter funksjonen fizzBuzz fra fil
import { fibonacci } from './fibonacci.js'; // Henter funksjonen fibonacci fra fil

// FAKULTET
document.querySelector('#fakultet button') // Finner knappen i fakultet-seksjonen
.addEventListener('click', (e) => { // Når knappen klikkes
    e.preventDefault(); // Stopper siden fra å oppdatere (form)
    const input = document.querySelector('#fakultet input'); // Henter input-feltet
    const output = document.querySelector('#fakultet .resultat'); // Henter stedet resultat vises

    const tall = parseInt(input.value); // Gjør input til et tall
    output.textContent = fakultet(tall); // Viser svaret fra funksjonen
});

// FIZZBUZZ
document.querySelector('#fizzbuzz button') // Finner knappen i fizzbuzz-seksjonen
.addEventListener('click', () => { // Når knappen klikkes
    const input = document.querySelector('#fizzbuzz input'); // Henter input-feltet
    const output = document.querySelector('#fizzbuzz .resultat'); // Henter resultat-området

    const tall = parseInt(input.value); // Gjør input til et tall
    output.textContent = fizzBuzz(tall); // Viser fizzbuzz-resultat
});

// FIBONACCI
document.querySelector('#fibonacci button') // Finner knappen i fibonacci-seksjonen
.addEventListener('click', () => { // Når knappen klikkes
    const input = document.querySelector('#fibonacci input'); // Henter input-feltet
    const output = document.querySelector('#fibonacci .resultat'); // Henter resultat-området

    const tall = parseInt(input.value); // Gjør input til et tall
    output.textContent = fibonacci(tall); // Viser fibonacci-resultat
});