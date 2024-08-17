// Замените на ваш токен Gismeteo API
const gismeteoToken = '56b30cb255.3443075';
// Замените на нужный вам город
const locationId = 4368; // Пример: Москва

// URL для API Gismeteo
const gismeteoApiUrl = `https://api.gismeteo.net/v2/weather/current/${locationId}/`;

// Функция для получения погоды
async function fetchWeather() {
    try {
        const response = await fetch(gismeteoApiUrl, {
            headers: {
                'X-Gismeteo-Token': gismeteoToken
            }
        });

        if (!response.ok) {
            throw new Error('Ошибка получения данных');
        }

        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        document.getElementById('weather').innerText = 'Ошибка: ' + error.message;
    }
}

// Функция для отображения погоды на странице
function displayWeather(data) {
    const temperature = data.response.temp.C;
    const description = data.response.description.full;

    document.getElementById('weather').innerHTML = `
        <p>Температура: ${temperature}°C</p>
        <p>Описание: ${description}</p>
    `;
}

// Вызов функции для получения и отображения погоды
fetchWeather();
