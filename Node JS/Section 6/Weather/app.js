const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    return console.log('Please provide an address')
} else {
    geocode(address, (error, { longitude, latitude, location }) => { // destructured using {longitude,latitude,location} instead of 'data.'
        if (error) {
            return console.log('Geo Error:', error)
        } // could do else and not the return above
        forecast(latitude, longitude, (error, data2) => { // was data.latitude and data.longitude
            if (error) {
                return console.log('Weather Error', error)
            }
            console.log(location) // was data.location
            console.log(data2)
        })
    })
}