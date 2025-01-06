const container = document.querySelector('.container');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const searchBox = document.querySelector('.search-box input');
const button = document.querySelector('.search-box button');

button.addEventListener('click', () => {
    const city = searchBox.value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8df46a7ec234a457b3c4a5044ebcf108&units=metric`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                const container = document.querySelector('.container');
            const weatherBox = document.querySelector('.weather-box');
            const weatherDetails = document.querySelector('.weather-details');
            const error404 = document.getElementById('error404');
    
    // Set the container height for error state
            container.classList.add('error-404');
    
    // Hide weather information
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
    
    // Show the error message
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
    
            return; 
            }

            weatherBox.style.display = 'block';
            weatherDetails.style.display = 'flex';
            error404.style.display = 'none';
            container.style.height = '600px';

            const temperature = document.querySelector('.temperature');
            const description = document.querySelector('.description');
            const humidity = document.querySelector('.humidity span');
            const wind = document.querySelector('.wind span');
            const icon = document.querySelector('.weather-box img');

            temperature.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${Math.round(json.wind.speed)} km/h`;

            const weatherIcon = json.weather[0].icon;
            icon.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
        })
        .catch(error => {
            console.log(error);
        });
});
