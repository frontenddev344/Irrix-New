const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");

  // Toggle icon between ☰ and ✕
  if (mobileMenu.classList.contains("open")) {
    hamburger.innerHTML = "&times;"; // ✕
  } else {
    hamburger.innerHTML = "&#9776;"; // ☰
  }
});


