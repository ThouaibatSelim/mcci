function addition(a: number, b: number): number {
  return a + b;
};

function soustraction(a: number, b: number): number {
  return a - b;
};

function multiplication(a: number, b: number): number {
  return a * b;
};

function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division par zéro impossible !");
  }
  return a / b;
};

class Personne{
  
}