document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu_btn');
    var navMenu = document.querySelector('nav ul');

    menuButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});