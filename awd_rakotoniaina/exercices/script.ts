// Récupérer éléments
const BtnAjt = document.querySelector<HTMLButtonElement>("#ajt");
const BtnSupp = document.querySelector<HTMLButtonElement>("#supp");
const ElementListe = document.querySelector<HTMLUListElement>("#liste");

// Ajouter élément
BtnAjt?.addEventListener("click", () => {
  if (!ElementListe) return;

  const li = document.createElement("li");

  // Texte élément
  const count = ElementListe.children.length + 1;
  li.innerText = "Élément " + count;

  ElementListe.appendChild(li);
});

// Enlever élément
BtnSupp?.addEventListener("click", () => {
  if (!ElementListe) return;

  const last = ElementListe.lastElementChild;

  if (last) {
    ElementListe.removeChild(last);
  }
});
