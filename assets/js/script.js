const burger = document.getElementById('menu-burger')

const navBar = document.getElementById('navbar')

const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    navBar.classList.toggle('active');
    burger.classList.toggle('active');
})

function closeMenu() {
    navBar.classList.remove('active');
    burger.classList.remove('active');
}

navBar.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        closeMenu();
    }
})

overlay.addEventListener('click', () => {
    closeMenu();
})
