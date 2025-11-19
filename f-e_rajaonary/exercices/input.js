const input = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const name = input.value.trim();  // enlever les espaces
  if (name === "") return;          // empêcher d'ajouter du vide

  // créer un conteneur pour le prénom
  const div = document.createElement("div");

  // créer le span qui contient le prénom
  const span = document.createElement("span");
  span.textContent = name;

  // créer le bouton effacer
  const delBtn = document.createElement("button");
  delBtn.textContent = "Effacer";

  // quand on clique sur effacer → on supprime le div complet
  delBtn.addEventListener("click", () => {
    div.remove();
  });

  // assembler
  div.appendChild(span);
  div.appendChild(delBtn);
  list.appendChild(div);

  input.value = ""; // vider l'input
});
