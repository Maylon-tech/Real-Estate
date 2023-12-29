'use strict';

/*
    navbar toggle in mobile
*/

const /** NodeEleement  **/ $navbar = document.querySelector("[data-navbar]")
const /** NodeEleement  **/ $navToggler = document.querySelector("[data-nav-toggler]")

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"))


/*
   Header Scroll State
*/

const /** NodeEleement  **/ $header = document.querySelector("[data-header]")

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})