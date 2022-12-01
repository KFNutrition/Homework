function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.main.wind.speed
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
  let city = document.querySelector("#cityInput").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);

  //let cityElement = document.querySelector("#city");
  //let cityInput = document.querySelector("#cityInput");
  //cityElement.innerHTML = cityInput.value;
}

let todaysDate = document.querySelector("#date");
let currentTime = new Date();

let searchForm = document.querySelector("#searchCity");

searchForm.addEventListener("submit", search);

todaysDate.innerHTML = formatDate(currentTime);
