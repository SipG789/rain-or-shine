var apiKey = "412f552a2caae59cf70968b318d2f634";
var searchCities;
var searchBtn = document.querySelector(".btn");
var cityInput = document.querySelector("#city");



var getWeather = function () {
    fetch (
        "http://api.openweathermap.org/geo/1.0/direct?q=" + searchCities + "&appid=" + apiKey) 
    
        console.log (getWeather);
    }

var anyCitySearch = function () {
    searchCities = cityInput.value;
    getWeather(searchCities);
};


searchBtn.addEventListener("click", anyCitySearch);