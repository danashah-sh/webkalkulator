import { fibonacci } from './fibonacci.js'; // Henter fibonacci-funksjonen fra fil
import test from 'node:test'; // Henter test-verktøy fra Node.js
import assert from 'node:assert/strict'; // Henter verktøy for å sjekke svar

test('fibonacci(1) = 1', () => { // Lager en test med navn
    assert.strictEqual(fibonacci(1), 1); // Sjekker at fibonacci(1) er lik 1
});

test('fibonacci(2) = 1', () => { // Ny test
    assert.strictEqual(fibonacci(2), 1); // Sjekker at fibonacci(2) er lik 1
});

test('fibonacci(3) = 2', () => { // Ny test
    assert.strictEqual(fibonacci(3), 2); // Sjekker at fibonacci(3) er lik 2
});

test('fibonacci(5) = 5', () => { // Ny test
    assert.strictEqual(fibonacci(5), 5); // Sjekker at fibonacci(5) er lik 5
});

test('fibonacci(10) = 55', () => { // Ny test
    assert.strictEqual(fibonacci(10), 55); // Sjekker at fibonacci(10) er lik 55
});