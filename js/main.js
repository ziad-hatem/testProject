const btn = document.getElementById("toggleDarkMode");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  updateImagesForDarkMode();
});
function updateImagesForDarkMode() {
  const images = document.querySelectorAll(".themeImage"); // Select all elements with the class
  const isDarkMode = document.body.classList.contains("dark");

  images.forEach((image) => {
    if (isDarkMode) {
      // Use dark mode image
      image.src = image.getAttribute("data-dark-src");
    } else {
      // Revert to light mode image
      image.src = image.getAttribute("data-light-src");
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector('button[aria-label="Menu"]');
  const navbar = document.getElementById("navbar");

  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("hidden"); // Use 'hidden' if using Tailwind, or 'active' if you have custom CSS
  });
});
document.addEventListener("DOMContentLoaded", updateImagesForDarkMode());
