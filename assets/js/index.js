const navbar = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
