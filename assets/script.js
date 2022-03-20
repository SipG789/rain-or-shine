var apiKey = "412f552a2caae59cf70968b318d2f634";
var searchCities;
var searchBtn = document.querySelector(".btn");
var cityInput = document.querySelector("#city");
var weatherSearch = document.querySelector("#weather-results");
var tempContainerEl = document.querySelector("#weather-container");


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
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + value[0] + "&lon=" + value[1] + "&appid=" + apiKey)
                .then(function (response) {
                    //console.log(response);
                    return response.json();
                })
                .then(function (data) {
                  displayWeather(data, searchCities);
                });
        });
};

var displayWeather = function(temp, weatherResults) {
    //console.log(temp.main.temp);
    var temperatureEl = temp.main.temp;
   // console.log(weatherResults);
    tempContainerEl.textContent = "";
    weatherSearch.textContent = weatherResults;
        // format info name 
        var tempName = temperatureEl;
        // create container 
        var tempEl = document.createElement("div");
        tempEl.classList = "temp-";
        // create span name to hold 
        var titleEl = document.createElement("span");
        tempEl.textContent = "Temp: " + Math.round((tempName - 273.15) *1.8 + 32) + " F";
        
        // append to container 
        tempEl.appendChild(titleEl);

        // append container to DOM
        tempContainerEl.appendChild(tempEl);

    // var for wind
    var windEl = temp.wind.speed;
   // console.log(windEl);
    var windName = windEl; 

    var windEl = document.createElement("div");
    windEl.classList = "wind";

    var windSpeedEl = document.createElement("span");
    windEl.textContent = "Wind Speed: " + windName + " mph";

    windEl.appendChild(windSpeedEl);
    tempContainerEl.appendChild(windEl);


    // display humidity 
    var humEl = temp.main.humidity;
    console.log(humEl);

    var humName = humEl;

    var humEl = document.createElement("div");
    humEl.classList = "humidity";

    var humidityEl = document.createElement("span");
    humEl.textContent = "Humidity: " + humName + "%";

    humEl.appendChild(humidityEl);
    tempContainerEl.appendChild(humEl);
};



// search the city 
var anyCitySearch = function () {
    // get value from input
    searchCities = cityInput.value.trim();

    if (searchCities) {
    getWeather(searchCities);
    cityInput.value = "";
    } else {
        alert("Please enter a city");
    }
};
// TODO: UV index and have it display color code use if then statement 

// TODO: fetch api for 5 day forecast  

// TODO: convert data time 

// TODO: add search history to local storage-- build search history with moment/js

searchBtn.addEventListener("click", anyCitySearch);