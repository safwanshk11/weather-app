async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const apiKey = "c7625b121515652669f721e0d6a6242c";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
      document.getElementById("weatherResult").innerHTML =
        `<p>${data.message}</p>`;
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    console.log(error);

    document.getElementById("weatherResult").innerHTML =
      "<p>Something went wrong</p>";
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}