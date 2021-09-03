const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("header-toggle");
const closeMenu = document.getElementById("nav-close");

// SHOW NAV
toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle("show");
})
// HIDE NAV
closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove("show");
})