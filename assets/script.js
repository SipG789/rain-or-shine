var apiKey = "412f552a2caae59cf70968b318d2f634";
var searchCities;
var searchBtn = document.querySelector(".btn");
var cityInput = document.querySelector("#city");

// TODO: display current weather data of a city on to page 
var getWeather = function () {
// fetch api request by city/location name 
var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchCities + "&appid=" + apiKey; 

fetch(apiUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    var latitude = data[0].lat;
    var longitude = data[0].lon;
    return [latitude, longitude];
})
.then(function (value) {
    console.log(value);
});
};





// search the city 
var anyCitySearch = function () {
    searchCities = cityInput.value;
    getWeather(searchCities);
};
// TODO: UV index and have it display color code use if then statement 

// TODO: fetch api for 5 day forecast  

// TODO: convert data time 

// TODO: add search history to local storage-- build search history with moment/js


searchBtn.addEventListener("click", anyCitySearch);