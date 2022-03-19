var apiKey = "412f552a2caae59cf70968b318d2f634";
var searchCities;
var searchBtn = document.querySelector(".btn");
var cityInput = document.querySelector("#city");

// TODO: display current weather data of a city on to page 

var getWeather = function () {
    fetch (
        "http://api.openweathermap.org/geo/1.0/direct?q=" + searchCities + "&appid=" + apiKey) 
    
        console.log (getWeather);
    }

var anyCitySearch = function () {
    searchCities = cityInput.value;
    getWeather(searchCities);
    console.log(anyCitySearch);
};
// TODO: UV index and have it display color code use if then statement 

// TODO: fetch api for 5 day forecast  

// TODO: convert data time 

// TODO: add search history to local storage-- build search history with moment/js


searchBtn.addEventListener("click", anyCitySearch);