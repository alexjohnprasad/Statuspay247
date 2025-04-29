function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const burger = document.querySelector('.burger-menu');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
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
