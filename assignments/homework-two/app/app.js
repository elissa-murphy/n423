import * as MODEL from "./model.js";

function initListeners() {
  $("#gw").click((e) => {
    const location = $("#gwInput").val();

    if (location != "") {
      getWeather(location);
    } else {
      alert("Please input a location first.");
    }
  });
}

function getWeather(location) {
  console.log("Weather in: " + location);
  MODEL.getWeatherStats(location);
  $("#gwInput").val("");
}

$(document).ready(function () {
  initListeners();
});
