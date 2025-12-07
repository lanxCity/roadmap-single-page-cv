const navbar = document.querySelector("nav");
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  if (main.scrollTop > 50) {
    navbar.style.backgroundColor = "#000000df";
    navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.backgroundColor = "#000000a9";
    navbar.style.boxShadow = "none";
  }
});
console.log("JavaScript is linked successfully.");
