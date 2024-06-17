document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header__toggle');
    const navList = document.querySelector('.header__nav-list');

    toggleButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

    // Toggle Menu
const toggleButton = document.querySelector('.header__toggle');
const navList = document.querySelector('.header__nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.querySelector('.header__toggle').addEventListener('click', function () {
    document.querySelector('.header__nav-list').classList.toggle('active');
});