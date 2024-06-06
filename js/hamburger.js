document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.nav_item.dropdown');
    const dropdownMenu = document.querySelector('.dropdown_menu');
    let isHoveringDropdown = false;
    let isHoveringDropdownMenu = false;
    let timeoutId;

    function showDropdownMenu() {
        clearTimeout(timeoutId); // Очистить предыдущий таймаут, чтобы избежать мигания
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.display = 'block';
        setTimeout(() => {
            dropdownMenu.style.opacity = '1';
        }, 10);
    }

    function hideDropdownMenu() {
        timeoutId = setTimeout(function () {
            if (!isHoveringDropdown && !isHoveringDropdownMenu) {
                dropdownMenu.style.opacity = '0';
                // Задержка перед скрытием, чтобы анимация имела время завершиться
                setTimeout(function () {
                    dropdownMenu.style.display = 'none';
                }, 200);
            }
        }, 200);
    }

    dropdown.addEventListener('mouseenter', function () {
        isHoveringDropdown = true;
        clearTimeout(timeoutId); // Очистить предыдущий таймаут, чтобы избежать мигания
        showDropdownMenu();
    });

    dropdown.addEventListener('mouseleave', function () {
        isHoveringDropdown = false;
        hideDropdownMenu();
    });

    dropdownMenu.addEventListener('mouseenter', function () {
        isHoveringDropdownMenu = true;
        clearTimeout(timeoutId); // Очистить предыдущий таймаут, чтобы избежать мигания
    });

    dropdownMenu.addEventListener('mouseleave', function () {
        isHoveringDropdownMenu = false;
        hideDropdownMenu();
    });

    // Закрыть меню при клике вне его области
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.opacity = '0';
            setTimeout(function () {
                dropdownMenu.style.display = 'none';
            }, 200);
            isHoveringDropdown = false;
            isHoveringDropdownMenu = false;
        }
    });
});
