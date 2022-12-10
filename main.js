const togleBtn = document.querySelector('.navbar_togleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togleBtn.addEventListener('click',() => {
    menu.classList.togle('active');
    icons.classList.togle('active');
});