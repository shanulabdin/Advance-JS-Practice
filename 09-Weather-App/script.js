const getCityName = document.querySelector('.getCityName');
const getWeatherBtn = document.querySelector('.getWeatherBtn');
const cityName = document.querySelector('#cityName');
const weatherNow = document.querySelector('.weatherNow');
const weekday = document.querySelectorAll('.weekday');


function getWeather(){
  const input = getCityName.value.trim();
}
getWeatherBtn.addEventListener('click', getWeather)