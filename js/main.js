function toggleMenu() {
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav ul');
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

document.querySelector('.burger-menu').addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function() {
    const termsCheckbox = document.getElementById('terms-accept');
    const submitButton = document.getElementById('submit-btn');

    if (termsCheckbox && submitButton) {
        termsCheckbox.addEventListener('change', function() {
            submitButton.disabled = !this.checked;
        });
    }
});
