const getCityName = document.querySelector('.getCityName');
const getWeatherBtn = document.querySelector('.getWeatherBtn');
const showWeather = document.querySelector('.showWeather');
const showError = document.querySelector('.showError');
const error = document.querySelector('#error');

const cityName = document.querySelector('#cityName');
const tempNow = document.querySelector('#tempNow');
const feelsLike = document.querySelector('#feelsLike');
const weatherDes = document.querySelector('#weatherDes');


const API_KEY = `2169d28cbb315f3b55d6b51417fbcd38`;
let city = 'Karchi';

async function getWeather() {
  const underInput = getCityName.value.trim();
  city = underInput.charAt(0).toUpperCase() + underInput.slice(1);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  
  showError.style.display = 'none';
  try{
    const res = await fetch(url);
    const data = await res.json();
    
    renderWeather(data);
  } catch (err){
    error.innerHTML = err;
    showError.style.display = 'block';
    showWeather.style.display = 'none';
  } finally {
    getCityName.value = '';
    getCityName.focus();
  }
}

function renderWeather(data){
  showWeather.style.display = 'block';

  cityName.textContent = data.name;
  feelsLike.textContent = data.main.feels_like;
  weatherDes.textContent = data.weather[0].main;
  tempNow.textContent = data.main.temp;
}

getWeatherBtn.addEventListener('click', async function() {
  await getWeather();
});
getCityName.addEventListener('keydown', async function(e){
  if(e.key === 'Enter'){
    await getWeather();
  }
});
