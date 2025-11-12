const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
const main = document.getElementById("main");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  main.classList.toggle("full"); // ← Ajout

  if (sidebar.classList.contains("hidden")) {
    toggleBtn.textContent = ">";
  } else {
    toggleBtn.textContent = "<";
  }
});

