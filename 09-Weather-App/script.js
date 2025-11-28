const getCityName = document.querySelector('.getCityName');
const getWeatherBtn = document.querySelector('.getWeatherBtn');
const cityName = document.querySelector('#cityName');
const weatherNow = document.querySelector('.weatherNow');
const weekday = document.querySelectorAll('.weekday');


const API_KEY = `2169d28cbb315f3b55d6b51417fbcd38`;
let lat = 24.8607;
let lon = 67.0011;
let city = '';
const limit = 5;

async function getCityCoor() {
  const underInput = getCityName.value.trim();
  city = underInput.charAt(0).toUpperCase() + underInput.slice(1);

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  lat = data[0].lat;
  lon = data[0].lon;

  getCityName.value = '';
  getCityName.focus();
}
getWeatherBtn.addEventListener('click', getCityCoor);
getCityName.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    getCityCoor();
  }
});
