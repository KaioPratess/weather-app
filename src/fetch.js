export default async function getWeather() {
  const city = 'São Paulo';
  const info = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6764af51c72b89c3c46e05248d404751`, {
    mode: 'cors'
  });
  const data = await info.json();
  const {icon} = data.weather[0];
  
}