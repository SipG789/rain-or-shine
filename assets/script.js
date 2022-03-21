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
     mondayEl.classList = "monday";

     var monTempEl = document.createElement("span");
     mondayEl.textContent = monName;

     mondayEl.appendChild(monTempEl);
     mondays.appendChild(mondayEl);

    // mondays temp
  //  console.log(temp.daily[0].temp.day);
    var dayOneTemp = temp.daily[0].temp.day;

    var oneName = dayOneTemp;

    var dayOneTemp = document.createElement("div");
    dayOneTemp.classList = "monday";

    var dayOneEl = document.createElement("span");
    dayOneTemp.textContent = "Temp: " + Math.round(oneName) + " F"; 

    dayOneTemp.appendChild(dayOneEl);
    mondays.appendChild(dayOneTemp);

    // mondays wind speed 
  //  console.log(temp.daily[0].wind_speed);
    var windSpeedMon = temp.daily[0].wind_speed;

    var windMonName = windSpeedMon; 

    var windSpeedMon = document.createElement("div");
    windSpeedMon.classList = "monday";

    var speedEl = document.createElement("span");
    windSpeedMon.textContent = "Wind: " + windMonName + " MPH";

    windSpeedMon.appendChild(speedEl);
    mondays.appendChild(windSpeedMon);

    // mondays humidity
   // console.log(temp.daily[0].humidity);
    var humMon = temp.daily[0].humidity;
    var humOneName = humMon;
    var humMon = document.createElement("div");
    humMon.classList = "monday";
    var humOneEl = document.createElement("span");
    humMon.textContent = "Humidity: " + humOneName + " %";
    humMon.appendChild(humOneEl);
    mondays.appendChild(humMon);

    // Tuesdays date 
    var dateTues = temp.daily[1].dt;
    var dateName = dateTues;
    var dateTues = document.createElement("div");
    dateTues.classList = "tuesday";
    var dateTuesEl = document.createElement("span");
    dateTues.textContent = dateName;
    dateTues.appendChild(dateTuesEl);
    tuesday.appendChild(dateTues);

    // tuesdays temp 
    var tuesTemp = temp.daily[1].temp.day;
    var tuestempName = tuesTemp;
    var tuesTemp = document.createElement("div");
    tuesTemp.classList = "tuesday";
    var twoTempEl = document.createElement("span");
    tuesTemp.textContent = "Temp: " + Math.round(tuestempName) + " F";
    tuesTemp.appendChild(twoTempEl);
    tuesday.appendChild(tuesTemp);

    // tuesday wind speed 
    var windTues = temp.daily[1].wind_speed;
    var tuesWindName = windTues;
    var windTues = document.createElement("div");
    windTues.classList = "tuesday";
    var speedTuesEl = document.createElement("span");
    windTues.textContent = "Wind: " + tuesWindName + " MPH";
    windTues.appendChild(speedTuesEl);
    tuesday.appendChild(windTues);

    // tuesday humidity 
    var humTues = temp.daily[1].humidity;
    var tuesHumName = humTues;
    var humTues = document.createElement("div");
    humTues.classList = "tuesday";
    var humidityTuesdayEl = document.createElement("span");
    humTues.textContent = "Humidity: " + tuesHumName + " %";
    humTues.appendChild(humidityTuesdayEl);
    tuesday.appendChild(humTues);

    // wednesday date time 
    var dateWed = temp.daily[2].dt;
    var dayWedName = dateWed;
    var dateWed = document.createElement("div");
    dateWed.classList = "wednesday";
    var wedDateEl = document.createElement("span");
    dateWed.textContent = dayWedName;
    dateWed.appendChild(wedDateEl);
    weds.appendChild(dateWed);
    
    // wednesday temp 
    var wedTemp = temp.daily[2].temp.day;
    var tempNameWed = wedTemp;
    var wedTemp = document.createElement("div");
    wedTemp.classList = "wednesday";
    var tempWedEl = document.createElement("span");
    wedTemp.textContent = "Temp: " + Math.round(tempNameWed) + " F";
    wedTemp.appendChild(tempWedEl);
    weds.appendChild(wedTemp);

    //wednesday wind speed
    var wedsWind = temp.daily[2].wind_speed;
    var wedSpeedName = wedsWind;
    var wedsWind = document.createElement("div");
    wedsWind.classList = "wednesday";
    var windWedsEl = document.createElement("span");
    wedsWind.textContent = "Wind: " + wedSpeedName + " MPH";
    wedsWind.appendChild(windWedsEl);
    weds.appendChild(wedsWind);

    // wednesday humidity 
    var wedHum = temp.daily[2].humidity;
    var humWedsName = wedHum;
    var wedHum = document.createElement("div");
    wedHum.classList = "wednesday";
    var wedHumEl = document.createElement("span");
    wedHum.textContent = "Humidity " + humWedsName + " %";
    wedHum.appendChild(wedHumEl);
    weds.appendChild(wedHum);

    // thursay date time 
    var thursDay = temp.daily[3].dt;
    var thurName = thursDay;
    var thursDay = document.createElement("div");
    thursDay.classList = "thursday";
    var thDateEl = document.createElement("span");
    thursDay.textContent = thurName;
    thursDay.appendChild(thDateEl);
    thurs.appendChild(thursDay);

    // thursday temp 
    var thurTemp = temp.daily[3].temp.day;
    var thTempName = thurTemp;
    var thurTemp = document.createElement("div");
    thurTemp.classList = "thursday";
    var thTempEl = document.createElement("span");
    thurTemp.textContent = "Temp: " + thTempName + " F";
    thurTemp.appendChild(thTempEl);
    thurs.appendChild(thurTemp);

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