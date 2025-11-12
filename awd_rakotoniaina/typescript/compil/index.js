function addition(a, b) {
    return a + b;
}
function soustraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro impossible !");
    }
    return a / b;
}
// Exemple d’utilisation :
console.log("Addition :", addition(4, 2));
console.log("Soustraction :", soustraction(4, 2));
console.log("Multiplication :", multiplication(4, 2));
console.log("Division :", division(4, 2));
