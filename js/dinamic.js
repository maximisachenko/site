document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.nav_item.dropdown');
    const dropdownMenu = document.querySelector('.dropdown_menu');

    dropdown.addEventListener('mouseenter', function () {
        dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', function () {
        setTimeout(function () {
            dropdownMenu.classList.remove('show');
        }, 300); // Задержка для плавного скрытия
    });
});
