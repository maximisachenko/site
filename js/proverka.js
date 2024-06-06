document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('subscribeForm');
    var emailInput = document.getElementById('emailInput');
    var errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var email = emailInput.value;
        if (!validateEmail(email)) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Здесь можно добавить действия по отправке формы
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
