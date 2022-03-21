var apiKey = "412f552a2caae59cf70968b318d2f634";
var searchCities;
var searchBtn = document.querySelector(".btn");
var cityInput = document.querySelector("#city");
var weatherSearch = document.querySelector("#weather-results");
var tempContainerEl = document.querySelector("#weather-container");
var mondays = document.querySelector("#mondays");
var tuesday = document.querySelector("#tuesdays");
var weds = document.querySelector("#wednesdays");
var thurs = document.querySelector("#thursdays");
var friday = document.querySelector("#fridays");




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
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + value[0] + "&lon=" + value[1] + "&units=imperial&appid=" + apiKey)
                .then(function (response) {
                 //   console.log(response);
                    return response.json();
                })
                .then(function (data) {
                    displayWeather(data, searchCities);
                });
        });
};

// TODO: fetch api for 5 day forecast  

// this is old code that i dont think I will need 
// var weeklyForecast = function () {
//     var weeklyUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCities + "&appid=" + apiKey;
//     fetch(weeklyUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
            //  var lats = data[0].lat;
            //  var longs = data[0].lon;
            // console.log(lats, longs);
            // return [lats, longs];
  //     });
//         .then(function (value) {
//             fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + value[0] + "&lon=" + value[1] + "&appid=" + apiKey)
//                 .then(function (response) {
//                     console.log(response);
//                     return response.json();
//                 })
//                 .then(function (data) {
//                     weeklyForecast(data, searchCities);
//                 });
//         });
 //};

// var displayForecast = function () {

// };



var displayWeather = function (temp, weatherResults) {
    console.log(temp);
    var temperatureEl = temp.current.temp;
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
    tempEl.textContent = "Temp: " + Math.round(tempName) + " F";

    // append to container 
    tempEl.appendChild(titleEl);

    // append container to DOM
    tempContainerEl.appendChild(tempEl);

    // var for wind
    var windEl = temp.current.wind_speed;
    // console.log(windEl);
    var windName = windEl;

    var windEl = document.createElement("div");
    windEl.classList = "wind";

    var windSpeedEl = document.createElement("span");
    windEl.textContent = "Wind Speed: " + Math.round(windName) + " mph";

    windEl.appendChild(windSpeedEl);
    tempContainerEl.appendChild(windEl);


    // display humidity 
    var humEl = temp.current.humidity;
    //console.log(humEl);

    var humName = humEl;

    var humEl = document.createElement("div");
    humEl.classList = "humidity";

    var humidityEl = document.createElement("span");
    humEl.textContent = "Humidity: " + humName + "%";

    humEl.appendChild(humidityEl);
    tempContainerEl.appendChild(humEl);

    // display UV Index
    var uvEl = temp.current.uvi;

    var uvName = uvEl;

    var uvEl = document.createElement("div");
    uvEl.classList = "UVI";

    var uIndexEl = document.createElement("span");
    uvEl.textContent = "UV-Index: " + uvName;

    uvEl.appendChild(uIndexEl);
    tempContainerEl.appendChild(uvEl);


    // display weekly forecast 
   // console.log(temp.daily[0].dt);
    // mondays current date (need to convert with moment.js)
     var mondayEl = temp.daily[0].dt

     var monName = mondayEl;

     var mondayEl = document.createElement("div");
     mondayEl.classList = "mondays";

     var monTempEl = document.createElement("span");
     mondayEl.textContent = monName;

     mondayEl.appendChild(monTempEl);
     mondays.appendChild(mondayEl);

    // mondays temp
  //  console.log(temp.daily[0].temp.day);
    var dayOneTemp = temp.daily[0].temp.day;

    var oneName = dayOneTemp;

    var dayOneTemp = document.createElement("div");
    dayOneTemp.classList = "mondays";

    var dayOneEl = document.createElement("span");
    dayOneTemp.textContent = "Temp: " + Math.round(oneName) + " F"; 

    dayOneTemp.appendChild(dayOneEl);
    mondays.appendChild(dayOneTemp);

    // mondays wind speed 
  //  console.log(temp.daily[0].wind_speed);
    var windSpeedMon = temp.daily[0].wind_speed;

    var windMonName = windSpeedMon; 

    var windSpeedMon = document.createElement("div");
    windSpeedMon.classList = "mondays";

    var speedEl = document.createElement("span");
    windSpeedMon.textContent = "Wind: " + windMonName + " MPH";

    windSpeedMon.appendChild(speedEl);
    mondays.appendChild(windSpeedMon);

    // mondays humidity
   // console.log(temp.daily[0].humidity);
    var humMon = temp.daily[0].humidity;
    var humOneName = humMon;
    var humMon = document.createElement("div");
    humMon.classList = "mondays";
    var humOneEl = document.createElement("span");
    humMon.textContent = "Humidity: " + humOneName + " %";
    humMon.appendChild(humOneEl);
    mondays.appendChild(humMon);

    // Tuesdays date 
    var dateTues = temp.daily[1].dt;
    var dateName = dateTues;
    var dateTues = document.createElement("div");
    dateTues.classList = "tuesdays";
    var dateTuesEl = document.createElement("span");
    dateTues.textContent = dateName;
    dateTues.appendChild(dateTuesEl);
    tuesday.appendChild(dateTues);

    // tuesdays temp 
    var tuesTemp = temp.daily[1].temp.day;
    var tuestempName = tuesTemp;
    var tuesTemp = document.createElement("div");
    tuesTemp.classList = "tuesdays";
    var twoTempEl = document.createElement("span");
    tuesTemp.textContent = "Temp: " + Math.round(tuestempName) + " F";
    tuesTemp.appendChild(twoTempEl);
    tuesday.appendChild(tuesTemp);


};



// search the city 
var anyCitySearch = function () {
    // get value from input
    searchCities = cityInput.value.trim();

    if (searchCities) {
       getWeather(searchCities);
      // weeklyForecast(searchCities);
        cityInput.value = "";
    } else {
        alert("Please enter a city");
    }
};
// TODO: UV index and have it display color code use if then statement 

// TODO: convert data time 

// TODO: add search history to local storage-- build search history with moment/js

searchBtn.addEventListener("click", anyCitySearch);