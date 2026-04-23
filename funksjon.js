export function fakultet(tall) { // Lager en funksjon som regner fakultet av et tall
    if (tall < 2) return 1; // Hvis tallet er mindre enn 2 → returner 1
    let resultat = 1; // Lager en variabel som starter på 1
    for (let i = 2; i <= tall; i++) { // Går gjennom alle tall fra 2 til tallet
        resultat *= i; // Ganger resultat med i hver gang
    }
    return resultat; // Returnerer det ferdige resultatet
}