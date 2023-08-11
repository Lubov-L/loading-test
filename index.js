document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.querySelector(".content");
    const mainContainer = document.querySelector(".wrapper");
    const resultText = document.createElement("p");

    const textsToShow = [
        "Обрабатываем ваши данные",
        "Оцениваем правильность ответов",
        "Готовим результат"
    ];

    function showTextWithDelay(text, delay) {
        setTimeout(function () {
            const textNode = document.createElement("p");
            textNode.textContent = text;
            contentDiv.appendChild(textNode);
        }, delay);
    }

    let delay = 1000;

    textsToShow.forEach(function (text) {
        showTextWithDelay(text, delay);
        delay += Math.floor(Math.random() * 2000) + 1000;
    });

    setTimeout(function () {
        contentDiv.classList.add('hidden');
        resultText.textContent = "Поздравляем! Вы прошли тест!";
        resultText.classList.add("result-text");
        mainContainer.appendChild(resultText);
    }, delay + 1000);
});
