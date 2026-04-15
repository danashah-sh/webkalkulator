export function fibonacci(n) {
    if (n <= 2) return 1;

    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}