// Regner fakultet av et tall
export function fakultet(tall) {
    if (tall < 2) return 1; // negative tall og 0 eller 1 = 1
    let resultat = 1;
    for (let i = 2; i <= tall; i++) {
        resultat *= i;
    }
    return resultat;
}