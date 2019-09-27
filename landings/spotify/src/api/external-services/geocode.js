const axios = require('axios').default;
const config = require('../config');
const P = require('bluebird');

module.exports = {
    getZipCode: getZipCode
};

function getZipCode(lat, long){
    if(!lat || !long)
        return P.resolve(null);
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                latlng: lat + "," + long,
                key: config.google.apiKey
            }
        })
        .then(response => {
            return extractZipCode(response.data);
        })
        .catch(err => {
            console.log(err);
            return null;
        });
    
}

function extractZipCode(response){
    if(response.results){
        for(let r of response.results){
            if(r.address_components){
                for(let ac of r.address_components){
                    if(ac.types && ac.types && ac.types.find(t => t == 'postal_code')){
                        return ac.short_name
                    }
                }
            }
        }
    }
    return null;
}