let element = document.getElementById("random_hiragana") 
let points = document.getElementById("points")
let result
let hiragana


function displayFirsthiragana() {
    let element = document.getElementById("random_hiragana")
    let points = document.getElementById("points") 
    fetch("http://127.0.0.1:8000/random_hiragana")
    .then(Response => Response.json())
    .then(data => element.innerHTML = data)
    .then(data => hiragana = data)
    .catch(error => console.error("Ошибка", error))
    points.innerHTML = 0
}

function displayhiragana() {
    let element = document.getElementById("random_hiragana")
    fetch("http://127.0.0.1:8000/random_hiragana")
    .then(Response => Response.json())
    .then(data => element.innerHTML = data)
    .then(data => hiragana = data)
    .catch(error => console.error("Ошибка", error))
}

window.onload = displayFirsthiragana
function respon() {
    const points = document.getElementById("points");
    const userInput = document.getElementById("userInput").value;
    
    fetch('http://127.0.0.1:8000/hiragana_test', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            userinput: userInput,
            hiragana: hiragana
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Полный ответ сервера:", data);
        
        const currentPoints = parseInt(points.innerHTML) || 0;
        
        // Проверяем data.result, а не весь объект
        if (data.result === "true" || data.result === true) {
            points.innerHTML = currentPoints + 1;
            console.log("Правильно! +1 очко");
        } else {
            points.innerHTML = Math.max(0, currentPoints - 1);
            console.log("Неправильно! -1 очко");
        }
        
        displayhiragana(); // Загружаем новую хирагану
        document.getElementById("userInput").value = ""; // Очищаем поле ввода
    })
    .catch(error => {
        console.error('Ошибка запроса:', error);
    });
}
