const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  hamburgerBtn.textContent = navMenu.style.display === "flex" ? "❌" : "☰";
});
