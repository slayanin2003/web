document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector('form[name="second"]');
    const numbers = /^\d+$/;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll("input[type='text'], input[type='tel'], input[type='datetime-local'], input[type='number']");
        let formIsValid = true;
        let formData = {};

        inputs.forEach(function(input) {
            const value = input.value.trim();
            const errorMessage = input.parentElement.querySelector('.error-message');

            errorMessage.textContent = "";

            switch(input.type) {
                case "text":
                case "tel":
                case "datetime-local":
                case "number":
                    formData[input.id] = value;
                    break;
                default:
                    break;
            }

            switch(input.type) {
                case "text":
                    if (value === "") {
                        errorMessage.textContent = "Заполните поле";
                        formIsValid = false;
                    } else if (!/^[А-ЯЁа-яё]+$/.test(value)) {
                        errorMessage.textContent = "Введите только русские буквы";
                        formIsValid = false;
                    }
                    break;
                case "tel":
                    if (value === "" || /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(value)) {
                        errorMessage.textContent = "Введите корректный номер телефона";
                        formIsValid = false;
                    }
                    break;
                case "datetime-local":
                    if (value === "") {
                        errorMessage.textContent = "Введите дату и время";
                        formIsValid = false;
                    }
                    break;
                case "number":
                    if (value === "") {
                        errorMessage.textContent = "Заполните поле";
                        formIsValid = false;
                    } else if (parseInt(value) <= 0) {
                        errorMessage.textContent = "Введите число больше 0";
                        formIsValid = false;
                    }
                    break;
                default:
                    break;
            }
        });

        if (formIsValid) {
            let alertText = "Вы собираетесь отправить следующие данные:\n\n";
            for (const key in formData) {
                alertText += `${key}: ${formData[key]}\n`;
            }
            const result = confirm(alertText + "\n\nХотите отправить эти данные?");
            
            if (result) {
                form.submit();
            }
        }
    });

    form.querySelectorAll("input[type='text'], input[type='tel'], input[type='datetime-local'], input[type='number']").forEach(function(input) {
        input.addEventListener("input", function() {
            const errorMessage = input.parentElement.querySelector('.error-message');
            errorMessage.textContent = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const headerImg = document.querySelector(".header_img");
    let rotated = false;
    headerImg.addEventListener("click", function() {
        const currentRotation = rotated ? "rotate(0deg)" : "rotate(360deg)";
        headerImg.style.transition = "transform 1s ease";
        headerImg.style.transform = currentRotation;
        
        rotated = !rotated;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".blocks");

    blocks.forEach(function(block) {
        let enlarged = false;
        block.addEventListener("click", function() {
            if (enlarged) {
                block.style.transition = "transform 0.5s ease";
                block.style.transform = "scale(1)";
            } else {
                block.style.transition = "transform 0.5s ease";
                block.style.transform = "scale(1.5)";
            }
            enlarged = !enlarged;
        });
    });
});
