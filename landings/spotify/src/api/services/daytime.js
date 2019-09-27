const moment = require('moment-timezone');
const timeZoneName = "America/New_York";

module.exports = {
    getDateTimeInfo: getDateTimeInfo
}

function getDateTimeInfo(timestamp=undefined){
    let now = getDateTime(timestamp);

    let hour = now.hour();
    let dayOfWeek = now.day();

    let info = {};

    if(hour >= 5 && hour < 17){
        info.dayMoment = "Day";
        info.dayMomentCode = "Day";
    } else if(hour >= 17 && hour < 22){
        info.dayMoment = "Evening";
        info.dayMomentCode = "Eve";
    } else{
        info.dayMoment = "Late Night";
        info.dayMomentCode = "Late";
    }

    if(dayOfWeek == 0 || dayOfWeek == 6){
        info.weekMoment = "Weekend";
        info.weekMomentCode = "WE";
    } else{
        info.weekMoment = "Weekday";
        info.weekMomentCode = "WD";
    }

    return info;
}

function getDateTime(timestamp){
    return moment(timestamp).tz(timeZoneName);
}