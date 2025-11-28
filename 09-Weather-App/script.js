const getCityName = document.querySelector('.getCityName');
const getWeatherBtn = document.querySelector('.getWeatherBtn');
const showWeather = document.querySelector('.showWeather');
const showError = document.querySelector('.showError');
const error = document.querySelector('#error');

const cityName = document.querySelector('#cityName');
const tempNow = document.querySelector('#tempNow');
const feelsLike = document.querySelector('#feelsLike');
const weatherDes = document.querySelector('#weatherDes');

// ADD A NEW API_KEY BEFORE RUNNING THE APP
const API_KEY = `2169d28cbb315f3b55d6b51417fbcd38`;
let city = 'Karachi';
getWeather();

async function getWeather() {
  const userInput = getCityName.value.trim();
  
  if(userInput === ''){
    error.textContent = 'Please Enter a City Name.';
    showError.style.display = 'block';
    showWeather.style.display = 'none';
    return;
  } else {
    city = userInput.charAt(0).toUpperCase() + userInput.slice(1);
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  
  showError.style.display = 'none';
  try{
    getWeatherBtn.disabled = true;

    const res = await fetch(url);
    const data = await res.json();

    if(data.cod == 404){
      error.textContent = 'City not found.';
      showError.style.display = 'block';
      showWeather.style.display = 'none';
      return;
    } else if (res.ok){
      renderWeather(data);
    }
    getCityName.value = '';
  } catch (err){
    error.textContent = err.message;
    showError.style.display = 'block';
    showWeather.style.display = 'none';
  } finally {
    getCityName.focus();
    getWeatherBtn.disabled = false;
  }
}

function renderWeather(data){
  showWeather.style.display = 'block';

  cityName.textContent = data.name;
  feelsLike.textContent = data.main.feels_like;
  weatherDes.textContent = data.weather[0].description;
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
