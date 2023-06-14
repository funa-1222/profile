"use strict";
//コード130000：東京
const WEATHER_FORECAST = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

function addforecast(tenki) {
    const h2 = document.createElement("h2");
    h2.textContent = tenki;
    document.getElementById('header').appendChild(h2);
}

fetch(WEATHER_FORECAST)
  .then(res => res.json())
  .then(data => data[0].timeSeries[0].areas[0].weathers[1])
  .then(tenki => addforecast(tenki));