const request = require('request')
require('dotenv').config()

// This API is very lacking, New York is Australia, almost all are Australia.

// Old Way without callbacks
// request({url:geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to geocode service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log("Latitude: ", latitude)
//         console.log("Longitude: ", longitude)
//     }
// })

// adding callbacks
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?types=address&access_token=' + process.env.MAPBOX + '&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            // to allow error to be used different ways, use callback
            callback('Unable to connect to location services.')
        } else if (response.body.features.length === 0) {
            callback('Unable to find location.') // could put underfined for the second argument if desired
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode
