const apiKey = "6cb1f5c9f30bd03bd46751cfc5321783";

const getWeatherFromServer = async (city) => {
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const weatherFromServer = result.data;
    console.log(weatherFromServer);
    displayWeatherDetails(weatherFromServer);
  } catch (error) {
    console.log(error);
  }
};

getWeatherFromServer();
//display weather container
const displayWeatherDetails = (weatherToDisplay) => {
  const outerContainer = document.getElementById("weather");
  outerContainer.classList.add("weather-section");

  const city = document.createElement("div");
  city.classList.add("weather-section__city");

  city.innerText = weatherToDisplay.name;

  const temp = document.createElement("div");
  temp.classList.add("weather-section__temperature");
  temp.innerText = "Temp: " + weatherToDisplay.main.temp + "";

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("weather-section__inner-container");

  const icon = document.createElement("img");
  icon.classList.add("weather-section__icon");

  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${weatherToDisplay.weather[0].icon}@2x.png`
  );

  const description = document.createElement("div");
  description.classList.add("weather-section__description");
  description.innerText = weatherToDisplay.weather[0].description;

  innerContainer.appendChild(icon);
  innerContainer.appendChild(description);

  const humidity = document.createElement("div");
  humidity.classList.add("weather-section__humidity");
  humidity.innerText = "Humidity: " + weatherToDisplay.main.humidity;

  const speed = document.createElement("div");
  speed.classList.add("weather-section__wind");
  speed.innerText = "Wind speed: " + weatherToDisplay.wind.speed + "km/hr";

  outerContainer.appendChild(city);
  outerContainer.appendChild(temp);
  outerContainer.appendChild(innerContainer);
  outerContainer.appendChild(humidity);
  outerContainer.appendChild(speed);

  return outerContainer;
};

const searchForWeather = document.getElementById("search");

searchForWeather.addEventListener("submit", function (event) {
  event.preventDefault();
  const displayWeather = document.getElementById("weather");
  displayWeather.innerHTML = "";
  getWeatherFromServer(event.target.cityInput.value);
});
