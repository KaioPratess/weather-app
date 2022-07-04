export default  (function dom() {
  const select = {
    cityInput: document.querySelector('.city input'),
    search: document.querySelector('.search'),
    cityName: document.querySelector('.city-name'),
    mainIcon: document.querySelector('.main-icon'),
    temperature: document.querySelector('.temperature'),
    min: document.querySelector('.min'),
    max: document.querySelector('.max'),
    description: document.querySelector('.description'),
    measurement: document.querySelector('.measurement'),
    celsius: document.querySelector('.c'),
    fahrenheit: document.querySelector('.f')
  }

  return {select}
})();