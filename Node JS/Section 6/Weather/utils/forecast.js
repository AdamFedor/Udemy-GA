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
    request({url, json:true},(error, {body}) => { // removed url: url and used url instead as property shorthand, removed 'response' since we are using body and replaced it with destructuring as {body}
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find weather.')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.') // removed response.body since I used destructuring above
        }
    })
}

module.exports = forecast