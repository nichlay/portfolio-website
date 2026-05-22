// 1. Click button
const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "Hello! You clicked the button.";
});

// 2. Dark mode
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
}); // CSS: .dark-mode {property: value;}

// 3. Mobile Menu
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});