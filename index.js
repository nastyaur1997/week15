const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const temperaturesOfCities = [];

//Получение температур от пользователя
for (let city of cities) {
  const userInput = prompt(
    "Введите температуру для города " + city,
    "Например, 20"
  );
  const temperature = Number(userInput);
  temperaturesOfCities.push(temperature);
}

//Добавление информации о городах и температурах на страницу
const containerOfCities = document.querySelector(".cities");
for (let i = 0; i < cities.length; i++) {
  const cityElement = document.createElement("p");
  cityElement.textContent = `Температура в ${cities[i]} : ${temperaturesOfCities[i]}°C`;
  containerOfCities.appendChild(cityElement);
}

//Нахождение максимальной и минимальной температуры
const maxTemperature = Math.max(...temperaturesOfCities);
const minTemperature = Math.min(...temperaturesOfCities);

//Добавление максимальной и минимальной температуры на страницу
const containerOfTemperature = document.querySelector(".container_temperature");

const temperatureElement1 = document.createElement("p");
temperatureElement1.textContent = `Максимальная температура: ${maxTemperature}°C`;
containerOfTemperature.appendChild(temperatureElement1);
const temperatureElement2 = document.createElement("p");
temperatureElement2.textContent = `Минимальная темература: ${minTemperature}°C`;
containerOfTemperature.appendChild(temperatureElement2);
