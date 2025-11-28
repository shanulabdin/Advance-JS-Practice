const getCityName = document.querySelector('.getCityName');
const getWeatherBtn = document.querySelector('.getWeatherBtn');
const cityName = document.querySelector('#cityName');
const weatherNow = document.querySelector('.weatherNow');
const weekday = document.querySelectorAll('.weekday');


const API_KEY = `2169d28cbb315f3b55d6b51417fbcd38`;
const lat = 24.8607;
const lon = 67.0011;

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  if(!response.ok){
    throw new Error('Something went wrong:', response.status)
  }
  const data = await response.json();
  console.log(data);
}

getWeatherBtn.addEventListener('click', getWeather);