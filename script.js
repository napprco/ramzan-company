const menuBar = document.getElementById("menu-icon-container");
const mobileMenu = document.getElementById("mobile-menu");

menuBar.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
