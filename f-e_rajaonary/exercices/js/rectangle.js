const rectangle = document.getElementById("rectangle");
const btnGauche = document.getElementById("btn-gauche");
const btnDroite = document.getElementById("btn-droite");

let interval; // stocke le setInterval

function move(direction) {
  interval = setInterval(() => {
    const current = getComputedStyle(rectangle).transform;

    // Récupère la position X actuelle
    const matrix = new DOMMatrix(current);
    let x = matrix.m41;

    // Ajoute/diminue 2px à chaque frame
    rectangle.style.transform = `translateX(${x + direction}px)`;
  }, 5);
}

function resetPosition() {
  clearInterval(interval);
  rectangle.style.transform = "translateX(0px)";
}

// Clic maintenu droite
btnDroite.addEventListener("mousedown", () => move(2));
btnDroite.addEventListener("mouseup", resetPosition);
btnDroite.addEventListener("mouseleave", resetPosition);

// Clic maintenu gauche
btnGauche.addEventListener("mousedown", () => move(-2));
btnGauche.addEventListener("mouseup", resetPosition);
btnGauche.addEventListener("mouseleave", resetPosition);
