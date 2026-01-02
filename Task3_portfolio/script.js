const navMenu = document.getElementById("nav-menu");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener('click', () => {
    navMenu.classList.add("show-nav");
})
navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-nav");
})

// SCroll Up Function

function scrollUp(){
    const scrollUp = document.getElementById('floating-btn');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Scroll Reveal

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.section-title`, {origin: 'left', delay: 600})
sr.reveal(`.btn, .form-fields, .form-label`, {delay: 700})
sr.reveal(`.home-img`, {delay: 900, origin: 'top'})
sr.reveal(`.skills-title, .footer-text`, {origin: 'top'})

sr.reveal(`.nav-item, .home-title, .home-description, .nav-title`, {origin: 'top', interval: 100})
sr.reveal(`.skills-item`, {interval: 100})
sr.reveal(`.project-title, .project-subtitle, .project-description`, {origin: 'left', interval: 100})
