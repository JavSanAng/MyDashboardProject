const apiKey = "4ea4595c21424726abd63707240804";
        const city = "Lliria";
        const link = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;
        const meteoContainer = document.getElementById("container-meteo");
        const forecastList = document.getElementById('forecast-list');

        getDataWeather(link);

        function getDataWeather(link) {
            fetch(link)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Unable to fetch data!");
                    }
                    return response.json();
                })
                .then(data => {
                    updateWeatherData(data);
                    renderDataWeather();
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        }

        const weatherObjectData = {
            city: '',
            country: '',
            weather: '',
            img: '',
            temperature: '',
            precipitations: '',
            humidity: '',
            wind: '',
            forecast: {}
        }

        function updateWeatherData(data) {
            weatherObjectData.city = data.location.name;
            weatherObjectData.country = data.location.country;
            weatherObjectData.weather = data.current.condition.text;
            weatherObjectData.img = data.current.condition.icon;
            weatherObjectData.temperature = data.current.temp_c;
            weatherObjectData.precipitations = data.current.precip_mm;
            weatherObjectData.humidity = data.current.humidity;
            weatherObjectData.wind = data.current.wind_kph;
            weatherObjectData.forecast = data.forecast.forecastday[0].hour;
        }

        function renderDataWeather() {
            meteoContainer.innerHTML = `
                <p>Country: ${weatherObjectData.country}</p>
                <p>City: ${weatherObjectData.city}</p>
                <p>Weather: ${weatherObjectData.weather}</p>
                <img src='${weatherObjectData.img}'/>
                <p>Temperature: ${weatherObjectData.temperature} ºC</p>
                <p>Precipitations: ${weatherObjectData.precipitations} MM</p>
                <p>Humidity: ${weatherObjectData.humidity} %</p>
                <p>Wind: ${weatherObjectData.wind} KM/H</p>`;

                const dataForecast = weatherObjectData.forecast;
                dataForecast.forEach(element => {
                    const target = document.createElement('li');
                    const hourForecast = document.createElement('p');
                    const imageForecast = document.createElement('img');
                    const temperature = document.createElement('p');

                    hourForecast.textContent = element.time.slice(-5); //Extraigo los ultimos 5 digitos del time
                    imageForecast.src = element.condition.icon;
                    temperature.textContent = element.temp_c + ' ºC';
        
                    target.append(hourForecast, imageForecast, temperature);
                    forecastList.appendChild(target);
                    meteoContainer.appendChild(forecastList);
                });
        }


        const meteoMenuItem = document.querySelector('.item span[title="Meteo"]');
        meteoMenuItem.addEventListener('click', toggleMeteoVisibility);

        function toggleMeteoVisibility() {
            if (meteoContainer.style.display === "" || meteoContainer.style.display === "none") {
                meteoContainer.style.display = "block";
                localStorage.setItem('meteoVisibility', 'pin');
            } else {
                meteoContainer.style.display = "none";
                localStorage.setItem('meteoVisibility', 'unnpin');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const meteoVisibility = localStorage.getItem('meteoVisibility');
            if (meteoVisibility === 'pin') {
                meteoContainer.style.display = "block";
            } else if (meteoVisibility === 'unnpin') {
                meteoContainer.style.display = "none";
            }
        });