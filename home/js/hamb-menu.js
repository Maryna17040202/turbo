let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector("ul");
console.log(navMenu);

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active")
    console.log(navMenu);
}