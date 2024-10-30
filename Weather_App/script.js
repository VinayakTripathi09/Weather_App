const apiKey = `abcd`; //Enter your API

function fetchWeather() {
    const location = document.getElementById('location').value;
    if (location) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter a location.');
    }
}

function displayWeather(data) {
    if (data.cod === 200) {
        document.getElementById('city').innerText = data.name;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('temp').innerText = data.main.temp;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('weatherDetails').style.display = 'block';
    } else {
        alert('Location not found.');
    }
}
