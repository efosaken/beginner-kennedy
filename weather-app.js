//apikey we are going to use the retrieve our data
const apiKey = "edbbe1b337c7a7357179cfb8ce0046a8";

//getting our html elements
const weatherData = document.getElementById("weather-data");
const cityInput = document.getElementById("city-input");
const form = document.querySelector("form");

//making our form dynamic by submitting it
form.addEventListener("submit", (event) => {
event.preventDefault();

const city = cityInput.value;
getWeatherData(city)
});

//an async function to get our weather since we are using an API
async function getWeatherData(city){
    //using a try catch statement to track errors in our codes
    try {
        //using await since we are using an async function and a fetch method to retrieve data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        //making sure our response is correct if not throw an error
        if(!response.ok) {
            throw new Error("Network response not ok")
        }
        //parsing our data using json method
        const data = await response.json();
        console.log(data);
        
//data we are getting from the site and want to use being stored in a variable
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        
        const details = [`Feels like: ${Math.round(data.main.feels_like)}°C`, `Humidity: ${data.main.humidity}%`, `Wind speed: ${data.wind.speed}m/s`];
        
//putting those data on our app 
        weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;

        weatherData.querySelector(".temperature").textContent = `${temperature}°C`;

        weatherData.querySelector(".description").innerHTML = description;

        weatherData.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("")
    } catch (error) {
        //incase there's an error e.g a user enters an incorrect city name, these are codes to manage it
        weatherData.querySelector(".icon").innerHTML = ""
        weatherData.querySelector(".temperature").textContent = ""

        weatherData.querySelector(".description").innerHTML = "City does not exist, please enter a correct city name"

        weatherData.querySelector(".details").innerHTML = ""
 
    }
}