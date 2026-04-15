import { fakultet } from './fakultet.js';
import { fizzBuzz } from './fizzbuzz.js';
import { fibonacci } from './fibonacci.js';

// FAKULTET
document.querySelector('#fakultet button')
.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#fakultet input');
    const output = document.querySelector('#fakultet .resultat');

    const tall = parseInt(input.value);
    output.textContent = fakultet(tall);
});

// FIZZBUZZ
document.querySelector('#fizzbuzz button')
.addEventListener('click', () => {
    const input = document.querySelector('#fizzbuzz input');
    const output = document.querySelector('#fizzbuzz .resultat');

    const tall = parseInt(input.value);
    output.textContent = fizzBuzz(tall);
});

// FIBONACCI
document.querySelector('#fibonacci button')
.addEventListener('click', () => {
    const input = document.querySelector('#fibonacci input');
    const output = document.querySelector('#fibonacci .resultat');

    const tall = parseInt(input.value);
    output.textContent = fibonacci(tall);
});