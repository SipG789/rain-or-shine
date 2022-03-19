var apiKey = "412f552a2caae59cf70968b318d2f634";
var searchCities;
var searchBtn = document.querySelector(".btn");
var cityInput = document.querySelector("#city");

// TODO: display current weather data of a city on to page 
var getWeather = function () {
// fetch api request by city/location name 
    fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" + 
        searchCities + 
        "&appid=" + 
        apiKey
        ).then(function (data) {
           console.log("this is working");
            // return rsponse.json();
        });
        // .then(function (data) {
        //     var latitude = data[0].lat;
        //     var longitude = data[0].lon;
        //     return [latitude, longitude];
        // })
        // .then(function (value) {    
        //     fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + value[0]+ "&lon=" + value[1] + "&appid=" + apiKey)
        //     .then(function(response) {
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     });
        // });
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