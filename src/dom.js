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
    fahrenheit: document.querySelector('.f'),
    weekForecast: document.querySelector('.week-forecast')
  }

  function createDayBox(day, icon, date, min, max) {
    const container = document.createElement('div');
    const daySpan = document.createElement('span');
    const imgBox = document.createElement('div');
    const iconImg = new Image;
    const minMax = document.createElement('div');
    const minSpan = document.createElement('span');
    const maxSpan = document.createElement('span');
    const dateSpan = document.createElement('span');

    daySpan.textContent = day;
    daySpan.classList.add('day');
    iconImg.src = icon;
    imgBox.classList.add('img');
    iconImg.classList.add('icon');
    dateSpan.textContent = date;
    dateSpan.classList.add('date');

    minMax.classList.add('temp');
    minSpan.textContent = min;
    maxSpan.textContent = max;

    minMax.append(minSpan, maxSpan);
    imgBox.append(iconImg);
    container.append(daySpan, imgBox, minMax, dateSpan);

    select.weekForecast.append(container);
  }

  return {select, createDayBox}
})();