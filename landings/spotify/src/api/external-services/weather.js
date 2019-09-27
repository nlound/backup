const axios = require('axios').default;
const config = require('../config');
const P = require('bluebird');

const defaultLocationKey = config.accuWeather.locationKey;
let currentCondition = config.accuWeather.defaultCondition;


module.exports = {
    getCurrentConditionsCode: () => P.resolve(currentCondition),
    getWeatherCode: getWeatherCode
};

updateCurrentConditionsCode();
setInterval(updateCurrentConditionsCode, config.accuWeather.cacheTtl * 1000);


function updateCurrentConditionsCode(){
    return getCurrentConditions()
        .then(weatherData => {
            return getWeatherCode(weatherData.WeatherText);
        })
        .then(weatherCode => {
            console.log('weather update at ' + Date());
            currentCondition = weatherCode;
        })
        .catch(err => {
            console.log('Error getting current conditions', err);
        });
}

function getWeatherCode(weatherText){
    const sunny = "Sun";
    const clear = "Clear";
    const dreary = "Dreary";


    weatherText = weatherText.toLowerCase();
    if(
        weatherText.includes("snow") ||
        weatherText.includes("flurries") ||
        weatherText.includes("storms") ||
        weatherText.includes("showers") ||
        (weatherText.includes("cloudy") && weatherText != "partly cloudy") ||
        weatherText.includes("rain") ||
        weatherText.includes("sleet") ||
        weatherText.includes("ice") ||
        weatherText.includes("fog") ||
        weatherText.includes("dreary")
        ){
            return dreary;
    } else if(
        weatherText.includes("sunny") ||
        (weatherText == "hot")){
            return sunny;
    } else{
        return clear;
    }
}


function getCurrentConditions(locationKey=defaultLocationKey){
    return axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationKey, {
            params: {
                apikey: config.accuWeather.apiKey,
                details: "false"
            }
        })
        .then(response => {
            return response.data[0];
        });
}

