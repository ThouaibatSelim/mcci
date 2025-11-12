const title = document.getElementById("title");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const list = document.getElementById("list");

// title.style.color = "#323232"; // ta couleur principale
title.setAttribute("title", "Ceci est un titre dynamique");

// Ajouter un élément
addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Élément ${list.children.length + 1}`;
  list.appendChild(newItem);
});

// Supprimer le dernier élément
removeBtn.addEventListener("click", () => {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});

// Effet hover sur le titre
title.addEventListener("mouseover", () => {
  title.classList.add("highlight");
});

title.addEventListener("mouseout", () => {
  title.classList.remove("highlight");
});
