const P = require('bluebird');
const config = require('../config');
const errors = require('../errors');
const geocodeService = require('../external-services/geocode');
const boroughService = require('./borough');
const daytimeService = require('./daytime');
const weatherService = require('../external-services/weather');
const playlistSpreadsheetService = require('../external-services/playlist-spreadsheet');


module.exports = {
    getClientInfo: getClientInfo,
    getPlaylist: getPlaylist,
    getPlaylistTest: getPlaylistTest
};

function getPlaylist(lat, long){
    let info = null;
    return getClientInfo(lat, long)
        .then(clientInfo => {
            info = clientInfo;
            return playlistSpreadsheetService.getPlaylistByCode(info.playlistCode);
        })
        .then(playlist => {
            info.playlistUrl = playlist;
            return info;
        });
}

function getClientInfo(lat, long){
    let info = {
        zipCode: null,
        borough: null,
        weekMoment: null,
        dayMoment: null,
        weather: null,
        playlistCode: config.playlist.defaultPlaylistCode
    };
    
    return geocodeService.getZipCode(lat, long)
        .then(zipCode => {
            // if(!zipCode)
            //     console.log(`Cannot get zip code of lat: ${lat}, long: ${long}`);
            
            info.zipCode = zipCode;
            return boroughService.getBorough(zipCode);
        })
        .then(borough => {
            info.borough = borough.name;
            info.playlistCode = borough.code;
            return daytimeService.getDateTimeInfo();
        })
        .then(dayTimeInfo => {
            info.weekMoment = dayTimeInfo.weekMoment;
            info.dayMoment = dayTimeInfo.dayMoment;
            info.playlistCode += '_' + dayTimeInfo.weekMomentCode + '_' + dayTimeInfo.dayMomentCode;
            return weatherService.getCurrentConditionsCode();
        })
        .then(weather => {
            info.weather = weather;
            info.playlistCode += '_' + weather;
            if(info.playlistCode.startsWith(config.borough.defaultBorough.code))
                info.playlistCode = config.playlist.defaultPlaylistCode;
            return info;
        })
        .catch(err => {
            if(err instanceof errors.UnknownLocationError){
                info.error = err.message;
                return info;
            }
            throw err;
        });
}

function getClientInfoTest(lat, long, timestamp, weatherText){
    let info = {
        zipCode: null,
        borough: null,
        weekMoment: null,
        dayMoment: null,
        weather: null,
        playlistCode: config.playlist.defaultPlaylistCode
    };
    
    return geocodeService.getZipCode(lat, long)
        .then(zipCode => {
            // if(!zipCode)
            //     console.log(`Cannot get zip code of lat: ${lat}, long: ${long}`);
            
            info.zipCode = zipCode;
            return boroughService.getBorough(zipCode);
        })
        .then(borough => {
            info.borough = borough.name;
            info.playlistCode = borough.code;
            return daytimeService.getDateTimeInfo(timestamp);
        })
        .then(dayTimeInfo => {
            info.weekMoment = dayTimeInfo.weekMoment;
            info.dayMoment = dayTimeInfo.dayMoment;
            info.playlistCode += '_' + dayTimeInfo.weekMomentCode + '_' + dayTimeInfo.dayMomentCode;
            return weatherService.getWeatherCode(weatherText);
        })
        .then(weather => {
            info.weather = weather;
            info.playlistCode += '_' + weather;
            if(info.playlistCode.startsWith(config.borough.defaultBorough.code))
                info.playlistCode = config.playlist.defaultPlaylistCode;
            return info;
        })
        .catch(err => {
            if(err instanceof errors.UnknownLocationError){
                info.error = err.message;
                return info;
            }
            throw err;
        });
}

function getPlaylistTest(lat, long, timestamp, weatherText){
    let info = null;
    return getClientInfoTest(lat, long, timestamp, weatherText)
        .then(clientInfo => {
            info = clientInfo;
            return playlistSpreadsheetService.getPlaylistByCode(info.playlistCode);
        })
        .then(playlist => {
            info.playlistUrl = playlist;
            return info;
        });
}