const search = document.getElementById('search-input');
const button = document.getElementById('search-button');
const images = document.getElementById('images');
// Variablat per te marre elementet  nga html
async function getWeather(city) {
let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75e30485004b377cb56aa79afd3e3336&units=metric`);
let data = await res.json();
console.log(data);
if (res.status === 404) {
    alert('City not found!');
    document.getElementById('error').innerText = 'Type a valid city name!'
}else {
    document.getElementById('error').innerText = '';
}
document.getElementById('city').innerHTML = data.name;
document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '°C';
document.getElementById('condition').innerHTML = data.weather[0].main;
document.getElementById('humidity').innerHTML = data.main.humidity + '%'; 
// pjesa e html qe do te ndryshoj, dhe qasja ne te dhenat nga API   
if(data.weather[0].main === 'Clouds') {
images.src = 'cloud.png';
} else if(data.weather[0].main === 'Rain') {
images.src = 'rain.png';
} else if(data.weather[0].main === 'Clear') {
images.src = 'sunny.png';
} else if(data.weather[0].main === 'Snow') {
images.src = 'snow.png';
}
}; 
// Funksioni per te marre te dhenat nga API
button.addEventListener('click', () => {
getWeather(search.value);
});