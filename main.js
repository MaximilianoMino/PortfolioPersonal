'use strict'


$(document).ready(function() {
    /*HREF DESLIZ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


});
/* ANIMACIONES */
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 6000,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.scroll-top', {
    duration: 4000,
    origin: 'bottom'
});
sr.reveal('.scroll-left', {
    origin: 'left'
});
sr.reveal('.scroll-right', {
    duration: 4000,
    origin: 'right'


});
sr.reveal('.scroll-bottom', {
    duration: 4000,
    origin: 'bottom'
});
sr.reveal('.logo', {
    duration: 6000,
    rotate: {
        x: 1,
        y: 100
    },
});