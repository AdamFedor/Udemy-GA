const request = require('request')
require('dotenv').config()

// process.env.DARKSKY_KEY
const url = "https://api.darksky.net/forecast/" + process.env.DARKSKY_KEY + "/37.8267,-122.4233"

// console.log(url);

request({url:url, json:true}, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.')
})