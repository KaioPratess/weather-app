import dom from './dom.js';
import d10 from './icons/01d.png';
import n10 from './icons/01n.png';
import d20 from './icons/02d.png';
import n20 from './icons/02n.png';
import d30 from'./icons/03d.png';
import n30 from'./icons/03n.png';
import d40 from './icons/04d.png';
import n40 from './icons/04n.png';
import d90 from './icons/09d.png';
import n90 from './icons/09n.png';
import d01 from './icons/10d.png';
import n01 from'./icons/10n.png';
import d11 from './icons/11d.png';
import n11 from './icons/11n.png';
import d31 from './icons/13d.png';
import n31 from './icons/13n.png';
import d05 from './icons/50d.png';
import n05 from './icons/50n.png';
import unknown from'./icons/unknown.png';
import events from './pubSub.js';

const icons = {
  d10,
  n10,
  d20,
  n20,
  d30,
  n30,
  d40,
  n40,
  n90,
  d90,
  d01,
  n01,
  d11,
  n11,
  d31,
  n31,
  d05,
  n05,
  unknown
}

export default function handleApp() {

  async function fetchWeatherData(city, unit) {
      const info = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=6764af51c72b89c3c46e05248d404751`, {
        mode: 'cors'
      });
      const data = await info.json();
      console.log(data)
      return data
  }

  function setValues(response, u) {
    const icon = response.weather[0].icon.split("").reverse().join("");
    console.log(icon)
    dom.select.cityName.textContent = response.name;
    dom.select.temperature.textContent = `${Math.floor(response.main.temp)}º${u}`;
    dom.select.mainIcon.setAttribute('src', icons[icon]);
    dom.select.min.textContent = `${Math.floor(response.main.temp_min)}º${u}`;
    dom.select.max.textContent = `${Math.floor(response.main.temp_max)}º${u}`;
    dom.select.description.textContent = response.weather[0].description;
  }

  function getWeatherData(city, unit, u) {
    const data = fetchWeatherData(city, unit);
    data.then((response) => {
      setValues(response, u);
    }).catch((error) => {
      alert("We didn't found you city, please try again!")
    })
  } 

  function searchCity() {
    const city = dom.select.cityInput.value;
    if(city === '') {
      alert('Write your city name!');
    } else {
        if(dom.select.celsius.classList.contains('active')) {
          getWeatherData(city, 'metric', 'C');
        } else if(dom.select.fahrenheit.classList.contains('active')) {
            getWeatherData(city, 'imperial', 'F');
        }
    }
    dom.select.cityInput.value = '';
  }

  function changeUnit() {
    dom.select.celsius.classList.toggle('active');
    dom.select.fahrenheit.classList.toggle('active');
    const city = dom.select.cityName.textContent;

    if(dom.select.celsius.classList.contains('active')) {
      getWeatherData(city, 'metric', 'C');
    } else if(dom.select.fahrenheit.classList.contains('active')) {
        getWeatherData(city, 'imperial', 'F');
    }
  }

  if(dom.select.celsius.classList.contains('active')) {
    getWeatherData('São Paulo', 'metric', 'C');
  } else if(dom.select.fahrenheit.classList.contains('active')) {
      getWeatherData('São Paulo', 'imperial', 'F');
  }


  dom.select.search.addEventListener('click', searchCity);
  dom.select.measurement.addEventListener('click', changeUnit);
}