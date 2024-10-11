import React from "react";
import "./index.css";

const weatherData = {
  "New York": { temperature: 25, condition: "Sunny" },
  London: { temperature: 18, condition: "Cloudy" },
  Tokyo: { temperature: 30, condition: "Rainy" },
  Algiers: { temperature: 28, condition: "Clear" },
  Sydney: { temperature: 22, condition: "Partly Cloudy" },
  Paris: { temperature: 19, condition: "Foggy" },
  Cairo: { temperature: 32, condition: "Sunny" },
  Moscow: { temperature: 15, condition: "Snow" },
  Beijing: { temperature: 27, condition: "Sunny" },
  "Rio de Janeiro": { temperature: 23, condition: "Rainy" },
  Istanbul: { temperature: 29, condition: "Clear" },
  Mumbai: { temperature: 31, condition: "Sunny" },
  Lagos: { temperature: 27, condition: "Thunderstorms" },
  "Los Angeles": { temperature: 22, condition: "Sunny" },
  "Buenos Aires": { temperature: 24, condition: "Cloudy" },
  Toronto: { temperature: 20, condition: "Rainy" },
  Berlin: { temperature: 21, condition: "Clear" },
  Madrid: { temperature: 26, condition: "Sunny" },
  Jakarta: { temperature: 33, condition: "Thunderstorms" },
  Seoul: { temperature: 28, condition: "Sunny" },
  Lima: { temperature: 22, condition: "Cloudy" },
  Bangkok: { temperature: 34, condition: "Sunny" },
  Chicago: { temperature: 21, condition: "Rainy" },
  Nairobi: { temperature: 26, condition: "Clear" },
  "Hong Kong": { temperature: 29, condition: "Sunny" },
  Dubai: { temperature: 35, condition: "Clear" },
  Rome: { temperature: 24, condition: "Sunny" },
  "Kuala Lumpur": { temperature: 31, condition: "Thunderstorms" },
  Santiago: { temperature: 23, condition: "Cloudy" },
  Shanghai: { temperature: 30, condition: "Sunny" },
  "Cape Town": { temperature: 22, condition: "Clear" },
  Singapore: { temperature: 32, condition: "Sunny" },
  Amsterdam: { temperature: 20, condition: "Rainy" },
  Vienna: { temperature: 22, condition: "Clear" },
  Athens: { temperature: 25, condition: "Sunny" },
  Prague: { temperature: 21, condition: "Cloudy" },
  Warsaw: { temperature: 19, condition: "Rainy" },
  Stockholm: { temperature: 18, condition: "Clear" },
  Oslo: { temperature: 17, condition: "Sunny" },
  Helsinki: { temperature: 16, condition: "Cloudy" },
  Copenhagen: { temperature: 18, condition: "Rainy" },
  Dublin: { temperature: 17, condition: "Clear" },
  Brussels: { temperature: 19, condition: "Sunny" },
  Lisbon: { temperature: 22, condition: "Cloudy" },
  Budapest: { temperature: 23, condition: "Rainy" },
  Bucharest: { temperature: 24, condition: "Clear" },
  Zurich: { temperature: 20, condition: "Sunny" },
  Geneva: { temperature: 21, condition: "Cloudy" },
  Luxembourg: { temperature: 18, condition: "Rainy" },
  Monaco: { temperature: 23, condition: "Clear" },
  "San Marino": { temperature: 24, condition: "Sunny" },
  "Vatican City": { temperature: 25, condition: "Cloudy" },
  "Andorra la Vella": { temperature: 22, condition: "Rainy" },
  Valletta: { temperature: 26, condition: "Clear" },
  Vaduz: { temperature: 19, condition: "Sunny" },
  Tallinn: { temperature: 17, condition: "Cloudy" },
  Vilnius: { temperature: 16, condition: "Rainy" },
  Riga: { temperature: 15, condition: "Clear" },
  Bratislava: { temperature: 18, condition: "Sunny" },
  Ljubljana: { temperature: 20, condition: "Cloudy" },
  Zagreb: { temperature: 21, condition: "Rainy" },
  Sarajevo: { temperature: 22, condition: "Clear" },
  Skopje: { temperature: 23, condition: "Sunny" },
  Podgorica: { temperature: 24, condition: "Cloudy" },
  Pristina: { temperature: 25, condition: "Rainy" },
  Tirana: { temperature: 26, condition: "Clear" },
  Belgrade: { temperature: 27, condition: "Sunny" },
  Sofia: { temperature: 29, condition: "Rainy" },
  Nicosia: { temperature: 31, condition: "Sunny" },
  Ankara: { temperature: 32, condition: "Cloudy" },
  Kyiv: {
    temperature: 18,
    condition: "Rainy",
  },
  Minsk: {
    temperature: 17,
    condition: "Clear",
  },
  Chisinau: {
    temperature: 19,
    condition: "Sunny",
  },
  Tbilisi: {
    temperature: 20,
    condition: "Cloudy",
  },
};
const updateWeatherDashboard = (city) => {
  const cityInfo = weatherData[city];

  if (cityInfo) {
    document.getElementById("weather-city").textContent = city;
    document.getElementById(
      "weather-temp"
    ).textContent = `${cityInfo.temperature}°C`;
    document.getElementById("weather-condition").textContent =
      cityInfo.condition;
  } else {
    document.getElementById("weather-city").textContent = "City not found";
    document.getElementById("weather-temp").textContent = "";
    document.getElementById("weather-condition").textContent = "";
  }
};

function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const cityInput = event.target.elements.city.value;
    updateWeatherDashboard(cityInput);
  };

  return (
    <div className="app-container">
      <div className="content">
        <h1>Weather Dashboard</h1>
        <form onSubmit={handleFormSubmit} className="weather-form">
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter a city..."
            className="input-field"
          />
          <button type="submit" className="submit-btn">
            Get Weather
          </button>
        </form>

        <div className="weather-card">
          <h2 id="weather-city">City</h2>
          <p id="weather-temp" className="weather-temp">
            Temperature: --
          </p>
          <p id="weather-condition" className="weather-condition">
            Condition: --
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
