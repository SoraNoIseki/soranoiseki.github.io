import 'flowbite';

document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button and sidebar
    const toggleButton = document.getElementById('menu-toggle');
    const closeButton = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');

    // Add click event listener
    toggleButton?.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-full');
    });

    closeButton?.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-full');
    });
});