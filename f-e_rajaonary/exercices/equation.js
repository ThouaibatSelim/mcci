let a = parseFloat(prompt("Entrez la valeur de a :"));
let b = parseFloat(prompt("Entrez la valeur de b :"));
let c = parseFloat(prompt("Entrez la valeur de c :"));

let delta = b*b - 4*a*c;
let resultDiv = document.getElementById("result");

if(a === 0){
    resultDiv.textContent = "Ce n'est pas une équation du 2nd degré.";
} else if(delta > 0){
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);
    resultDiv.textContent = `La solution est x1=${x1}, x2=${x2}`;
} else if(delta === 0){
    let x = -b/(2*a);
    resultDiv.textContent = `La solution est x=${x}`;
} else {
    resultDiv.textContent = "Pas de solution réelle";
}
