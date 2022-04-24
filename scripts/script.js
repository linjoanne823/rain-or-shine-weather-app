// weather display container 

const outerContainer= document.getElementById("weather");
outerContainer.classList.add("weather-section")

const city = document.createElement('div');
city.classList.add("weather-section__city");
city.innerText = "Toronto"

const temperature = document.createElement('div');
temperature.classList.add("weather-section__temperature");
temperature.innerText = "20 °C"

const innerContainer = document.createElement('div');
innerContainer.classList.add("weather-section__inner-container");

const icon = document.createElement('img');
icon.classList.add("weather-section__icon");
icon.src = "https://www.seekpng.com/png/detail/133-1330400_weather-icon-png-image-transparent-background-weather-icon.png"


const description = document.createElement('div');
description.classList.add("weather-section__description");
description.innerText="Cloudy"


innerContainer.appendChild(icon);
innerContainer.appendChild(description)

const humidity = document.createElement('div');
humidity.classList.add("weather-section__humidity");
humidity.innerText="Humidity: 30%"

const wind = document.createElement('div');
wind.classList.add("weather-section__wind");
wind.innerText="Wind speed: 5.6 km/h";


outerContainer.appendChild(city);
outerContainer.appendChild(temperature);
outerContainer.appendChild(innerContainer);
outerContainer.appendChild(humidity);
outerContainer.appendChild(wind)