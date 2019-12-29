const API_KEY = '9aa201ffe2e2c9cc2ad8aa5c63b1442e';
const weather = 'weather';
const isWeather = document.querySelector('.weather');

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        isWeather.innerText = `${temp} C 
                                ${place}`;
    });
}

function coordsSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const map = {
        latitude: latitude,
        longitude: longitude
    }
    saveWeather(map);
    getWeather(latitude, longitude);
}

function saveWeather(map) {
    localStorage.setItem(weather, JSON.stringify(map));
}

function coordsFail() {
    console.log('위치를 찾을 수 없습니다.');
}
function coords() {
    navigator.geolocation.getCurrentPosition(coordsSuccess, coordsFail);
}

function loadWeather() {
    const loadWeather = localStorage.getItem(weather);
    if (loadWeather === null) {
        coords();
    } else {
        const parsedWeather = JSON.parse(loadWeather);
        getWeather(parsedWeather.latitude, parsedWeather.longitude);

    }
}



function init() {
    loadWeather();
}

init();
