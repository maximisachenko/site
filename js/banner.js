document.addEventListener('DOMContentLoaded', function () {
    // Создаем элемент баннера
    var banner = document.createElement('div');
    banner.classList.add('banner');
    banner.innerHTML = '<p>Новые товары!</p>';
    
    // Создаем элемент кнопки закрытия
    var closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = '×';

    // Добавляем обработчик события клика на кнопку закрытия
    closeBtn.addEventListener('click', function () {
        banner.classList.add('hide');
        setTimeout(function() {
            banner.style.display = 'none';
        }, 500); // Задержка должна быть равна времени анимации в CSS
    });

    // Добавляем кнопку закрытия в баннер
    banner.appendChild(closeBtn);

    // Добавляем баннер на страницу
    document.body.appendChild(banner);

    // Показываем баннер с анимацией
    setTimeout(function() {
        banner.classList.add('show');
    }, 100); // Задержка перед появлением баннера
});
