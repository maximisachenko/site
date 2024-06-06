document.addEventListener('DOMContentLoaded', function () {
    // Функция для показа модального окна с увеличенным изображением
    function showModal(imageSrc) {
        var modal = document.createElement('div');
        modal.classList.add('modal');
        
        var modalContent = document.createElement('img');
        modalContent.classList.add('modal_content');
        modalContent.src = imageSrc;
        
        var closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.innerHTML = '&times;';
        
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            modal.remove();
        });
        
        modal.appendChild(closeButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        modal.style.display = 'block';
    }
    
    // Находим все изображения продуктов
    var productImages = document.querySelectorAll('.product_img');
    
    // Добавляем обработчик клика для каждого изображения
    productImages.forEach(function (img) {
        img.addEventListener('click', function () {
            showModal(img.src);
        });
    });
});
