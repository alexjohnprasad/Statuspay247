function toggleMenu() {
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav ul');
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
