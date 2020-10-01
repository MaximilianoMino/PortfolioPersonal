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
    duration: 4000,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.scroll-top', {
    duration: 2000,
    origin: 'bottom',
    distance: '-500px'
});
sr.reveal('.scroll-left', {
    duration: 2000,
    origin: 'left',
    distance: '500px'
});
sr.reveal('.scroll-right', {
    duration: 2000,
    origin: 'right',
    distance: '500px'


});
sr.reveal('.scroll-bottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '500px'
});
sr.reveal('.logo', {
    duration: 4000,
    rotate: {
        x: 1,
        y: 100
    },
});