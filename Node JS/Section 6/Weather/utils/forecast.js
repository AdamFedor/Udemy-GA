const request = require('request')
require('dotenv').config()

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find weather.')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.')
//     }
// })

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/" + process.env.DARKSKY + "/" + latitude + "," + longitude
    request({url:url, json:true},(error, response) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (response.body.error) {
            callback('Unable to find weather.')
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.')
        }
    })
}

module.exports = forecast