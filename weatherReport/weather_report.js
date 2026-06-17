const city = document.getElementById('city').value;
const apiKey = '83eca546b3cb9da966ae1cb5a889f1b1'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


function showweatherDetails(event) {
    event.preventDefault();

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

