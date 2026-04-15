import { fakultet } from './fakultet.js';
import test from 'node:test';
import assert from 'node:assert/strict';

test('negative tall gir 1', () => {
    assert.strictEqual(fakultet(-5), 1);
});

test('0 gir 1', () => {
    assert.strictEqual(fakultet(0), 1);
});

test('1 gir 1', () => {
    assert.strictEqual(fakultet(1), 1);
});

test('2 gir 2', () => {
    assert.strictEqual(fakultet(2), 2);
});

test('3 gir 6', () => {
    assert.strictEqual(fakultet(3), 6);
});

test('5 gir 120', () => {
    assert.strictEqual(fakultet(5), 120);
});