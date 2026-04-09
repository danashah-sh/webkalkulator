import { fakultet } from './fakultet.js';

function regnUt(evt) {
    evt.preventDefault(); 
    const input = document.querySelector('#fakultet input');
    const output = document.querySelector('#fakultet .resultat');
    const tall = parseInt(input.value);

    output.textContent = fakultet(tall);
}

// Kjør regnUt når knappen trykkes
document.querySelector('#fakultet button')
    .addEventListener('click', e => regnUt(e));