//variable for weather api key and url
var key = "53599ec288054906a0a203018222908";
var baseURL = "https://api.weatherapi.com/v1/";

//Retreive current date before retreiving weather stats
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullDate = `${year}-${day}-${month}`;
  console.log(fullDate);
  return fullDate;
}

//Retreive stats from weather api based on location
function getWeatherStats(location) {
  const currentDate = getCurrentDate();

  //Retreive api
  $.get(
    `${baseURL}current.json?key=${key}&q=${location}&aqi=no`,

    (data) => {
      console.log(data);

      //Adding data to page
      //Days of forecast
      const currentDay = document.getElementById("currentDay");

      //Last Updated time
      const lastUpdated = document.getElementById("lastUpdated");
      currentDay.innerHTML = `Days of Forecast: ${data.current.is_day} <br> Last Updated: ${data.current.last_updated}`;

      //Current Location
      const currentLocation = document.getElementById("currentLocation");
      currentLocation.innerHTML = `${data.location.name}, ${data.location.region}`;

      //Local Time & Condition
      const currentTime = document.getElementById("currentTime");
      currentTime.innerHTML = `Current Time: ${data.location.localtime}`;

      const tempF = document.getElementById("tempF");
      tempF.innerHTML = `${data.current.temp_f} 	&#8457;`;

      const currentCondition = document.getElementById("currentCondition");
      currentCondition.innerHTML = ` <img src="${data.current.condition.icon}" alt="Icon" style="height:70px;"/> ${data.current.condition.text}`;

      //Location points
      const latitude = document.getElementById("latitude");
      latitude.innerHTML = `Latitude: ${data.location.lat}`;
      const longitude = document.getElementById("longitude");
      longitude.innerHTML = `Longitude: ${data.location.lon}`;

      //Weather Statistics
      //Uv index
      const uvIndex = document.getElementById("uvIndex");
      uvIndex.innerHTML = `UV Index:<br>${data.current.uv}`;

      //wind - mph
      const windMph = document.getElementById("windMph");
      windMph.innerHTML = `Wind:<br>${data.current.wind_mph} mph`;

      //feels like - fahrenheit
      const feelsLikef = document.getElementById("feelsLikef");
      feelsLikef.innerHTML = `Feels like:<br>${data.current.feelslike_f} 	&#8457;`;

      //wind direction
      const windDirection = document.getElementById("windDirection");
      windDirection.innerHTML = `Wind Direction:<br>${data.current.wind_dir}`;

      //wind degree
      const windDegree = document.getElementById("windDegree");
      windDegree.innerHTML = `Wind Degree:<br>${data.current.wind_degree}`;

      //gust - mph
      const gustMph = document.getElementById("gustMph");
      gustMph.innerHTML = `Wind Gust:<br>${data.current.gust_mph} mph`;

      //humidity
      const humidity = document.getElementById("humidity");
      humidity.innerHTML = `Humidity:<br>${data.current.humidity}`;

      //precipitation - inches;
      const precipIn = document.getElementById("precipIn");
      precipIn.innerHTML = `Precipitation:<br>${data.current.precip_in} in`;

      //pressure - inches
      const pressure = document.getElementById("pressure");
      pressure.innerHTML = `Pressure:<br>${data.current.pressure_in}`;

      //visibility - miles
      const visMiles = document.getElementById("visMiles");
      visMiles.innerHTML = `Visibility:<br>${data.current.vis_miles} mi`;
    }
  ).fail(function (e) {
    alert("Sorry, the weather forecast is currently unavailable.");
  });
}

//Export Function to app.js
export { getWeatherStats };
