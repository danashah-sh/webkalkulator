import { fizzBuzz } from './fizzbuzz.js';
import test from 'node:test';
import assert from 'node:assert/strict';

test('1 -> "1"', () => {
    assert.strictEqual(fizzBuzz(1), "1");
});

test('3 -> "Fizz"', () => {
    assert.strictEqual(fizzBuzz(3), "Fizz");
});

test('5 -> "Buzz"', () => {
    assert.strictEqual(fizzBuzz(5), "Buzz");
});

test('15 -> "FizzBuzz"', () => {
    assert.strictEqual(fizzBuzz(15), "FizzBuzz");
});