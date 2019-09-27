const boroughZipCodes = require('../newyork.json');
const config = require('../config');

module.exports = {
    getBorough: getBorough
};

function getBorough(zipCode){
    zipCode = Number(zipCode);
    if(!zipCode || isNaN(zipCode))
        return config.borough.defaultBorough;
    let boroughs = boroughZipCodes.borough;
    for(let b of boroughs){
        if(b.zipCodes.find(zc => zc == zipCode))
            return {
                code: b.code,
                name: b.name
            };
    }
    return config.borough.defaultBorough;
}

