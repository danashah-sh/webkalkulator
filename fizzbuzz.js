export function fizzBuzz(n) { // Lager en funksjon som heter fizzBuzz med input n
    if (n % 15 === 0) return "FizzBuzz"; // Hvis n kan deles på 15 → returner "FizzBuzz"
    if (n % 3 === 0) return "Fizz"; // Hvis n kan deles på 3 → returner "Fizz"
    if (n % 5 === 0) return "Buzz"; // Hvis n kan deles på 5 → returner "Buzz"
    return n.toString(); // Hvis ingen av delene → gjør tallet om til tekst og returner
}