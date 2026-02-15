const burger = document.getElementById('menu-burger')

const menu = document.getElementById('menu-items')

const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
})

function closeMenu() {
    menu.classList.remove('active');
    burger.classList.remove('active');
}

menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        closeMenu();
    }
})

overlay.addEventListener('click', () => {
    closeMenu();
})
