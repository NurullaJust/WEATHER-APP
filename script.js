let btn = document.querySelector(".btn");
let clickCount = 0;
btn.onclick = function () {
  if (clickCount === 0) {
    alert("WRITE INPUT!!!");
  } else if (clickCount === 1) {
    alert("GET OUT");
  }
  clickCount++;
};
async function getWeatherForecast() {
  const apiKey = "eb5e6b1286msh0f1e6b2306fb8c3p1555b7jsn561eb9277403";
  const cityInput = document.getElementById("cityInput").value;
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const weatherInfoElement = document.getElementById("weatherInfo");
    weatherInfoElement.innerHTML = `
      <h2>${result.location.name}</h2>
      <div class="p-container">
        <p>${result.current.temp_c} °C</p>
        <p>${result.current.condition.text}</p>
      </div>
    `;
    const box = document.querySelector(".idk");
    box.innerHTML = `
    <p> Humidity:${result.current.humidity}</p>
    <p> Wind:${result.current.wind_kph} km/h</p>
    `;
  } catch (error) {
    console.error(error);
  }
}
