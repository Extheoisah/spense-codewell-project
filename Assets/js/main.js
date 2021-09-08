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

// REMOVE MENU WHEN NAVLINK IS ACTIVE
const navLink = document.querySelectorAll(".nav__link");

function linkAction () {
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove nav menu
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));