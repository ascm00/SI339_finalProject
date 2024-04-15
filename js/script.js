document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.querySelector('nav');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});